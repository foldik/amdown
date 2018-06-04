const keywords = new Set( [
  'arguments', 'await',
  'break', 'case', 'catch',
  'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do',
  'else', 'enum', 'eval',
  'export', 'extends', 'false',
  'finally', 'for', 'function',
  'if', 'implements', 'import',
  'in', 'instanceof', 'interface',
  'let', 'new',
  'null', 'package', 'private', 'protected',
  'public', 'return', 'static',
  'super', 'switch', 'this',
  'throw', 'true',
  'try', 'typeof', 'var', 'void',
  'while', 'with', 'yield'
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
