const fs = require( 'fs' );
const path = require( 'path' );
const fileUtils = require( '../utils/file-utils.js' );
const defaultTemplateDirectory = path.join( __dirname, '..', 'default-templates' );

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
  fileUtils.copyDirStructureSyc( defaultTemplateDirectory, path.join( project.name, project.docsFolder ) );

  fs.copyFileSync( path.join( defaultTemplateDirectory, 'index.html' ), path.join( project.name, 'index.html' ) );
  fs.copyFileSync( path.join( defaultTemplateDirectory, 'scripts', 'menu.js' ), path.join( project.name, project.docsFolder, 'scripts', 'menu.js' ) );
  fs.copyFileSync( path.join( defaultTemplateDirectory, 'styles', 'app.css' ), path.join( project.name, project.docsFolder, 'styles', 'app.css' ) );
  fs.copyFileSync( path.join( defaultTemplateDirectory, 'styles', 'page.css' ), path.join( project.name, project.docsFolder, 'styles', 'page.css' ) );

  fs.writeFileSync( path.join( project.name, project.docsFolder, 'hello.md' ), '# Hello World!', 'utf-8' );
};
