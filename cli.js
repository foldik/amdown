#!/usr/bin/env node

'use strict';

const init = require( './commands/init' );
const build = require( './commands/build' );
const commander = require( 'commander' );

commander
  .version( '0.0.1' );

commander
  .command( 'init <name>' )
  .description( 'Initialize a project in the <name> folder' )
  .action( init.execute );

commander
  .command( 'build' )
  .description( 'Builds the project' )
  .action( build.execute );

commander.parse( process.argv );
