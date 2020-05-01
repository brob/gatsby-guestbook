# Gatsby Guestbook

This is a guestbook app built using FaunaDB and Gatsby. It utilizes a basic Bulma starter kit

This is the first demo in an upcoming Smashing Magazine article

## Requirements

* FaunaDB
* Node/NPM

## Installation

* `npm install`
* Create `.env` file with YOUR_FAUNADB_SECRET, GATSBY_FAUNA_CLIENT_SECRET and GATSBY_BUILD_HOOK.
  * YOUR_FAUNADB_SECRET should be set to your Server Key, 
  * Client secret should be set to a key with very limited permissions
  * Build hook should be set to your Netlify (or other) build hook URL
* Set Fauna Server key in `gatsby-config.js` plugin
* Create a Fauna Collection called "signatures" and an Index called "allSignatures"
* Run `gatsby develop`