var express = require('express')
var pg = require('pg')
var dbgeo = require('dbgeo')
var credentials = require('./credentials')
var app = express()

// Helper for querying Postgres
function queryPg(sql, params, callback) {
  pg.connect(`postgres://${credentials.pg_user}@${credentials.pg_host}/cles`, function(err, client, done) {
    if (err) return callback(err)
    client.query(sql, params, function(err, result) {
      done()
      if (err) return callback(err)
      callback(null, result)
    })
  })
}

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS')
  next()
})

// When you go to http://localhost:7777 in your browser, just send the HTML file with the map code
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html')
})

// If you make a request to http://localhost:7777/nearby_cities run this function
app.get('/nearby_cities', function(req, res, next) {
  // TODO: validate query
  // Expects a latitude and longitude in the query string
  // Convert everything to the geography datatype so that spherical coordinates are used
  queryPg(`
    SELECT name
    FROM places
    ORDER BY geom <-> $1
    LIMIT 5
  `, [ `SRID=4326;POINT(${parseFloat(req.query.lng)} ${parseFloat(req.query.lat)})`], function(error, result) {
    // TODO: Handle error
    res.json(result.rows)
  })
})

app.get('/nearby_cities/lines', function(req, res, next) {
  // TODO: validate query
  // Convert everything to the geography datatype so that spherical coordinates are used
  queryPg(`
    SELECT name,
    ST_MakeLine(geom, $1) AS geom
    FROM places
    ORDER BY geom <-> $1
    LIMIT 5
  `, [ `SRID=4326;POINT(${parseFloat(req.query.lng)} ${parseFloat(req.query.lat)})`], function(error, result) {
    console.log(error)
    // TODO: Handle error
    dbgeo.parse(result.rows, {
      outputFormat: 'geojson'
    }, function(error, geojson) {
      res.json(geojson)
    })
  })
})
//
app.get('/populated_places', function(req, res, next) {

  queryPg(`
    SELECT name, geom
    FROM places
    WHERE adm0name = $1
  `, [req.query.country], function(error, result) {
    dbgeo.parse(result.rows, {
      outputFormat: 'geojson'
    }, function(error, geojson) {
      res.json(geojson)
    })
  })
})

app.listen('7777', function() {
  console.log('Listening on port 7777')
})
