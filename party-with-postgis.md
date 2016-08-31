# Party with PostGIS
An introduction to PostgreSQL's spatial extension

## What is it
+ The spatial extension to the popular open source relational database Postgres
+ A special datatype for Postgres
+ A set of functions

## What can you do with it
+ Anything you can do in any other GIS, plus a lot more
+ Spatial analysis, routing with pg routing
+ Handles rasters (imagery, DEMs, etc)

## Advantages over other GIS
+ Interoperability (its effectively a low-level datastore, with powerful processing functions sitting on top)
+ Easy for technical non-GIS people to work with, especially those with a background in databases
+ Many organizations/companies/etc are probably already using a relational database - allows you to leverage existing collective knowledge
+ Efficient datastore - small on disk, supports indexes
+ Allows for quick prototyping and exploration
+ Great way to manage spatial data in a collaborative environment
+ Free!

## Disadvantages
+ Not for creating maps, but can power applications that do like Mapnik, Mapbox Studio, and QGIS
+ If you are experienced with desktop GIS, but not databases, there is a learning curve, but QGIS can take some edge off
+ Need to learn SQL (but the learning curve is short)
+ Parallel processing is limited (citusDB, an extension allows this; can also use a scripting language to parallelize)
+ Can be difficult to manage at scale, but all data is (you probably want a db admin)
  - Configuration in complex situations is difficult

## Things you should know that are neither advantages or disadvantages
+ Reliance on command line and scripting
  - There won't be a GUI for what you want to do
  - This gives you a ton of flexibility though

## When you might want to use it
+ You need to manage many related (spatial) datasets
+ You need to do a lot of things with one source of data (create maps, spatial analysis, power an api) all at once
+ You aren't sure how your data will be used - PostGIS/Postgres is super flexible
+ SQL makes cleaning and normalizing data very easy and repeatable
+ Good for creating data processing pipelines (data needs to be periodically ingested and processed)
+ You are working in a server/cloud environment where desktop GIS doesn't work or is clumsy
+ You have a limited budget - it's free!

## When you shouldn't use it
+ You want to make a map of a single dataset
  - But even then, you might want to use it to clean and process data

## Sold - how do I use it?
1. Download it and use it
  + you are comfortable installing software
  + you want flexibility and to integrate with other software
  + you don't have money to spend
  + Things that will make your life easier:
    - QGIS - for viewing and editing data
    - Postico - for viewing your tables and running SQL
    - postgis-preview - can view the output of spatial queries
    - Postgres.app - easy install on Macs

2. Use CARTO (formerly CartoDB)
  + you want to see what PostGIS is all about
  + you want a friendly graphical user interface
  + you want to easily create interactive maps
  + you don't have a lot of data or are willing to pay
  + you use Windows

## Alternatives
+ Depends on what you want to do or already have
+ MySQL/MariaDB - has some basic spatial functions
+ MongoDB - also has basic spatial functions

## Example
+ Download NaturalEarth states and provinces and populated places
+ Import them into PostGIS
+ Visualize them in QGIS
+ Query via psql
+ Query and "visualize" in Postico
  - Just look at tables
  - Get the area in square km of each state
+ A super simple API to get the state and 5 nearest cities to a point
