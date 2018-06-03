const fs = require( 'fs' );
const path = require( 'path' );
const fileUtils = require( '../utils/file-utils.js' );
const defaultTemplateDirectory = path.join( __dirname, '..', 'templates' );

exports.execute = function () {
  const config = JSON.parse( fs.readFileSync( './teach.json', 'utf8' ) );
  if ( fs.existsSync( config.indexTemplate ) ) {
    fs.unlinkSync( config.indexTemplate );
  }
  fs.copyFileSync( path.join( defaultTemplateDirectory, 'index.html' ), path.join( config.indexTemplate ) );
  fileUtils.cleanDirSync( 'static' );
  fileUtils.copyAll( defaultTemplateDirectory + '/static', 'static' );
}
