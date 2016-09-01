// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  createExtension: require("../assets/create_extension.png"),
  dataType: require("../assets/data_type.png"),
  functions: require("../assets/functions.png"),
  install: require("../assets/install.png"),
  carto: require("../assets/carto.png"),
  naturalearth: require("../assets/naturalearth.png"),
  qgis1: require("../assets/qgis1.png"),
  qgis2: require("../assets/qgis2.png"),
  psql: require("../assets/psql.png"),
  postico1: require("../assets/postico1.png"),
  postico2: require("../assets/postico2.png"),
  nsf: require("../assets/nsf.png"),
  geobucky: require("../assets/geobucky.png")
};

preloader(images);

const theme = createTheme({
  primary: "#046380",
  positive: "#1F8A70",
  negative: "#E74C3C",
  neutral: "#ECF0F1"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="bar">
          <Slide transition={["zoom"]} bgColor="primary"
            notes={`
              Introduce yourself, what you do, your experience with PostGIS<br>
                - Use it for storage of hundreds of gigabytes of vector data and a few hundred gigabytes of raster data <br>
                - Also heavily use it for spatial analyses<br>

              How many of you have heard of PostGIS?<br>
              How many have used it?
            `}>
            <Heading size={1} fit caps>
              Party with PostGIS
            </Heading>
            <Heading textSize="30px" lineHeight={2}>
              John J Czaplewski
            </Heading>
            <Link href="https://twitter.com/johnjcz">
              <Text bold>@johnjcz</Text>
            </Link>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes={`
              First let's define what it is...
            `}>
            <Heading size={1} fit caps>
              What is it?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black"
            notes={`
              + The spatial extension to the popular open source relational database Postgres (Uber, Apple, Skype, etc..)<br>
                - If you are not familiar with relational databases, think of them as excel spreadsheets that can contain relations to other spreadsheets and that you can query<br>
              + A special datatype for Postgres (int, float, array, etc)<br>
              + A set of functions
              `}>
            <List>
              <ListItem textColor="white">An extension to PostgreSQL</ListItem>
              <ListItem><Image src={images.createExtension.replace("/", "")} height="100px"/></ListItem>
            </List>

            <List>
              <ListItem textColor="white">A special data type</ListItem>
              <ListItem><Image src={images.dataType.replace("/", "")} lineHeight={1} height="100px"/></ListItem>
            </List>

            <List>
              <ListItem textColor="white">A set of functions</ListItem>
              <ListItem><Image src={images.functions.replace("/", "")} height="100px"/></ListItem>
            </List>

          </Slide>
          <Slide transition={["slide"]} bgColor="primary"
            notes={`
              + Anything you can do in any other GIS, plus a lot more<br>
              + Spatial analysis, routing with pg routing<br>
              + Data cleaning and validation<br>
              + Handles rasters (imagery, DEMs, etc)
              `}>
            <Heading size={1} fit caps>What can I do with it?</Heading>
            <Heading size={1} fill lineHeight={2}>GIS things!</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="positive"
            notes={`
              + Based on a HUGE and popular open source project. Tons of people use it, great docs, easy to google problems, very mature and stable<br>
              + Interoperability (its effectively a low-level datastore, with powerful processing functions sitting on top. Mapnik, Mapbox Studio, QGIS)<br>
              + Easy for technical non-GIS people to work with, especially those with a background in databases<br>
              + Many organizations/companies/etc are probably already using a relational database - allows you to leverage existing collective knowledge<br>
              + Efficient datastore - small on disk, blazing fast<br>
              + Allows for quick prototyping and exploration<br>
              + Great way to manage spatial data in a collaborative environment<br>
              + Free!
              `}>
            <Heading size={1} fit caps>Advantages</Heading>
              <List textColor="white">
                <ListItem>Interoperability</ListItem>
                <ListItem>Existing knowledge</ListItem>
                <ListItem>Efficient</ListItem>
                <ListItem>Prototyping</ListItem>
                <ListItem>Great for collaborative environments</ListItem>
              </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="negative"
            notes={`
              + If you are experienced with desktop GIS, but not databases, there is a learning curve, but QGIS can take some edge off<br>
              + Not for creating maps, but can power applications that do like Mapnik, Mapbox Studio, and QGIS<br>
              + Need to learn SQL (but the learning curve is short)<br>
              + Parallel processing is limited (citusDB, an extension allows this; can also use a scripting language to parallelize)<br>
              + Can be difficult to manage at scale, but all data is (you probably want a db admin)<br>
                - Configuration in complex situations is difficult because proper config is highly application dependent<br>
                - VPS can help with this

              `}>
            <Heading size={1} fit caps>Disadvantages</Heading>
              <List textColor="white">
                <ListItem>Existing knowledge</ListItem>
                <ListItem>Reliance on SQL</ListItem>
                <ListItem>Parallel processing</ListItem>
                <ListItem>Management at scale</ListItem>
              </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="neutral"
            notes={`
              + Reliance on command line and scripting<br>
                - There won't be a GUI for what you want to do<br>
                - This gives you a ton of flexibility though
              `}>
            <Heading size={1} fill caps textColor="black">Neither here nor there</Heading>
            <List>
              <ListItem>Reliance on scripting</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="positive"
            notes={`
              + You need to manage many related (spatial) datasets<br>
              + You need to do a lot of things with one source of data (create maps, spatial analysis, power an api) all at once<br>
              + You aren't sure how your data will be used - PostGIS/Postgres is super flexible<br>
              + SQL makes cleaning and normalizing data very easy and repeatable<br>
              + Good for creating data processing pipelines (data needs to be periodically ingested and processed)<br>
              + You are working in a server/cloud environment where desktop GIS doesn't work or is clumsy<br>
              + You have a limited budget - it's free!
              `}>
            <Heading size={1} fit caps>Use cases</Heading>
              <List textColor="white">
                <ListItem>Management of related datasets</ListItem>
                <ListItem>Diverse needs or unsure</ListItem>
                <ListItem>Cleaning</ListItem>
                <ListItem>"Cloud"</ListItem>
                <ListItem>Limited budget</ListItem>
                <ListItem>Processing pipelines</ListItem>
              </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="negative"
            notes={`
              + You want to make a map of a single dataset<br>
                - But even then, you might want to use it to clean and process data
              `}>
            <Heading size={1} fit caps>When not to use it</Heading>
              <List textColor="white">
                <ListItem>Your data is not already in PostGIS and your task is simple</ListItem>
              </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary"
            notes={`
              + You have a couple of options: <br>
              - set up, configure, and manage yourself
              - Use a VPS like Heroku or AWS RDS
              - Use CARTO
              `}>
            <Heading size={1} fit caps>
              Sold! How do I use it?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.install.replace("/", "")} bgDarken={0.3}
            notes={`
              + This involves setting it up on your local machine for testing and a server for production use
              `}>
            <Heading size={1} caps>
              #1. DIY
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="positive" notes={`
              Costs you nothing to try it out, unlimited flexibility<br>

                `}>
            <Heading size={1} fit caps>Perks</Heading>
              <List textColor="white">
                <ListItem>Free(?)</ListItem>
                <ListItem>Flexible</ListItem>
              </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="negative" notes={`
              + I haven't done it in a while, but installing can be tricky on Windows because of all the dependencies<br>
              + However, these can be minimized by using a VPS like AWS or Heroku<br>
              + If you have terrabytes of data and millions of hits to your database, it can be tricky to manage
                `}>
            <Heading size={1} fit caps>Downsides</Heading>
              <List textColor="white">
                <ListItem>Can be difficult to install (on Windows)</ListItem>
                <ListItem>Management at scale</ListItem>
              </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes={`
            + Things that will make your life easier:<br>
              - QGIS - for viewing and editing data<br>
              - Postico - for viewing your tables and running SQL<br>
              - postgis-preview - can view the output of spatial queries<br>
              - Postgres.app - easy install on Macs
                `}>
            <Heading size={1} fit caps>Tools to help you</Heading>
              <List textColor="white">
                <ListItem>QGIS</ListItem>
                <ListItem>Postico</ListItem>
                <ListItem>postgis-preview</ListItem>
                <ListItem>Postgres.app</ListItem>
                <ListItem>pg-tune</ListItem>
              </List>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.carto.replace("/", "")} bgDarken={0.3} notes={`
              An alternative approach is to use CARTO, formerlly known as CartoDB which is a service that hosts your data in a PostGIS database and provides you with numerous services to make your life easier
                `}>
            <Heading size={1} caps>
              #2. CARTO
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="positive" notes={`
            + You can drag and drop datasets into a PostGIS database<br>
            + Automagically create interactive maps from your data<br>
            + you don't have a lot of data or are willing to pay<br>
            + you use Windows
                `}>
            <Heading fit caps>Perks</Heading>
              <List textColor="white">
                <ListItem>Easy and user-friendly</ListItem>
                <ListItem>Free to start</ListItem>
                <ListItem>Nothing to install or manage</ListItem>
                <ListItem>Built in geocoding</ListItem>
                <ListItem>Easily create interactive maps</ListItem>
              </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="negative">
            <Heading size={1} fit caps>Downsides</Heading>
              <List textColor="white">
                <ListItem>If you have > 250mb, costs $$$$$$</ListItem>
              </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes={`
            + There really aren't any real alternatives <br>
            + Depends on what you want to do or already have <br>
            + MySQL/MariaDB - has some basic spatial functions <br>
            + MongoDB - also has basic spatial functions
            `}>
            <Heading size={1} fit caps>Alternatives</Heading>
            <List textColor="white">
              <ListItem>MySQL/MariaDB</ListItem>
              <ListItem>MongoDB</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes={`
              Let's go through an example of what it looks like to load data into PostGIS and do some simple tasks
                `}>
            <Heading size={1} fit caps>In action</Heading>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.naturalearth.replace("/", "")} bgDarken={0.3}>
            <Heading size={1} fit caps>Natural Earth Data</Heading>
            <Heading size={1}>States & Provinces and Populated Places</Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <CodePane
              lang={'bash'}
              source={`
                > createdb cles
                > psql -U john cles -c "CREATE EXTENSION postgis"
                > shp2pgsql -s 4326 -I ne_50m_admin_1_states_provinces_lakes.shp public.states_provinces | psql -U john cles
                > shp2pgsql -s 4326 -I ne_50m_populated_places_simple.shp public.places | psql -U john cles
                `}
            />
          </Slide>

          <Slide transition={["slide"]} bgImage={images.qgis1.replace("/", "")}/>
          <Slide transition={["slide"]} bgImage={images.qgis2.replace("/", "")}/>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.psql.replace("/", "")} height="75%" width="75%"/>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.postico1.replace("/", "")}/>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.postico2.replace("/", "")} height="100%" width="100%"/>
          </Slide>
          <Slide bgColor="primary" notes={`
              I want to you show you a common way that I use PostGIS - to feed data into an interactive map<br>
              Why? Too much data to send to the client at once
                `}>
            <Heading size={1} fit caps>Ill-advised live demo time!</Heading>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps>Questions?</Heading>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps>Thanks!</Heading>
            <Text textColor="white">@johnjcz</Text>
            <Text textColor="white">https://github.com/jczaplew/party-with-postgis</Text>
            <Image src={images.nsf.replace("/", "")} height="150px"/>
            <Image src={images.geobucky.replace("/", "")} height="150px"/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
