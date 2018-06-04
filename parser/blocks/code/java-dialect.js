const keywords = new Set( [
          'abstract', 'continue', 'for', 'new',
          'switch', 'assert', 'default', 'goto',
          'package', 'synchronized', 'boolean',
          'do', 'if', 'private', 'this', 'break',
          'double', 'implements', 'protected',
          'throw', 'byte', 'else', 'import',
          'public', 'throws', 'case', 'enum',
          'instanceof', 'return', 'transient',
          'catch', 'extends', 'int', 'short',
          'try', 'char', 'final', 'interface',
          'static', 'void', 'class', 'finally',
          'long', 'strictfp', 'volatile', 'const',
          'float', 'native', 'super', 'while'
      ] );

const separators = new Map();
separators.set( '\n', 'indent' );
separators.set( '\t', 'indent' );
separators.set( ' ', 'indent' );
separators.set( ';', 'semicolon' );
separators.set( ',', 'colon' );
separators.set( '(', 'openingBracket' );
separators.set( ')', 'closingBracket' );
separators.set( '[', 'openingSquareBracket' );
separators.set( ']', 'closingSquareBracket' );
separators.set( '{', 'openingCurlyBracket' );
separators.set( '}', 'closingCurlyBracket' );
separators.set( '.', 'dot' );
separators.set( '=', 'equalSign' );

exports.dialect = {
  keywords: keywords,
  separators: separators,
  isCaseSensitive: true
}
