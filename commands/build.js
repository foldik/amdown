const fs = require( 'fs' );
const path = require( 'path' );
const fileUtils = require( '../utils/file-utils.js' );
const mParser = require( '../parser/m-parser' );
const mRenderer = require( '../renderer/html-renderer' );
const menuRenderer = require( '../renderer/menu-renderer' );

function toHtml( inputFile, outputFile ) {
  console.log( `Reading ${inputFile}` );
  fileUtils.readLines( inputFile, {
      encoding: 'utf-8'
    } )
    .then( function ( lines ) {
      console.log( `Parsing ${inputFile}` );
      const parsed = mParser.parse( lines );

      console.log( `Rendering ${inputFile}` );
      const html = mRenderer.render( parsed );

      console.time( `Saving ${outputFile}` );
      fs.writeFile( outputFile, html, 'utf-8', function ( err ) {
        if ( err ) throw err;
      } );
    } )
    .catch( ( err ) => console.error( err.message ) );
}

exports.execute = function () {
  const config = JSON.parse( fs.readFileSync( './teach.json', 'utf8' ) );

  const inDir = config.docsFolder;
  const outDir = config.distFolder;
  const menu = config.menu;
  const indexTemplate = config.indexTemplate;

  fileUtils.cleanDirSync( outDir );

  fileUtils.copyDirStructureSyc( inDir, outDir, ( resultDir ) => console.log( `Created ${resultDir} directory` ) );

  fileUtils.getFilesSync( inDir ).forEach( ( file ) => {
    const sourceFile = inDir + '/' + file;
    if ( file.endsWith( '.md' ) ) {
      const targetFile = outDir + '/' + file.replace( '.md', '.html' );
      toHtml( sourceFile, targetFile );
    } else {
      const targetFile = outDir + '/' + file;
      fs.copyFile( sourceFile, targetFile, function ( err ) {
        if ( err ) throw err;
        console.log( `Copied ${sourceFile} to ${targetFile}` );
      } );
    }
  } );

  fs.readFile( indexTemplate, 'utf8', function ( err, data ) {
    if ( err ) throw err;
    const indexContent = data.replace( 'MENU', menuRenderer.render( menu ) );
    fs.writeFile( outDir + '/index.html', indexContent, 'utf-8', function ( err ) {
      if ( err ) throw err;
      console.log( `Saved ${outDir}/index.html` );
    } );
  } );
}
