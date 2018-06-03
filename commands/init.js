const fs = require( 'fs' );
const path = require( 'path' );
const fileUtils = require( '../utils/file-utils.js' );
const defaultTemplateDirectory = path.join( __dirname, '..', 'templates' );

exports.execute = function ( req, options ) {
  const project = {
    name: req,
    docsFolder: './docs',
    distFolder: './dist',
    indexTemplate: './index.html',
    menu: [
      {
        link: '/hello',
        name: 'Hello World'
      }
    ]
  };

  fs.mkdirSync( project.name );
  fs.writeFileSync( path.join( project.name, 'teach.json' ), JSON.stringify( project, null, 2 ), 'utf-8' );
  fs.mkdirSync( path.join( req, project.docsFolder ) );
  fileUtils.copyAll( defaultTemplateDirectory, req );
  fs.writeFileSync( path.join( project.name, project.docsFolder, 'hello.md' ), '# Hello World!', 'utf-8' );
};
