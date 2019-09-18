import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public mainArray = [ { symbol: '\\',
  snippet: ' indicates that the next character is special',
  paragraph:
   '\n    Matches according to the following rules:\n     \n     A backslash that precedes a non-special character indicates that the next character is special and is not to be interpreted literally. For example, a \'b\' without a preceding \'\\\' generally matches lowercase \'b\'s wherever they occur — the character will be interpreted literally. But a sequence of \'\\b\' doesn\'t match any character; it denotes a word boundary.\n     \n     A backslash that precedes a special character indicates that the next character is not special and should be interpreted literally. See "Escaping" below for details.\n\n    If you\'re using the RegExp constructor with a string, don\'t forget that backslash is an escape character in string literals, and so to put a backslash in the pattern, you need to escape it in the string literal. /[a-z]\\s/i and new RegExp("[a-z]\\\\s", "i") create the same regular expression: an expression that searches for any letter in the range A-Z followed by a whitespace character (\\s, see below). To include a literal backslash in an expression created via new RegExp with a string literal, you need to escape it at both the string literal level and the regular expression level: /[a-z]:\\\\/i and new RegExp("[a-z]:\\\\\\\\","i") create the same expression, which would match a string like "C:\\".\n   ' },
  { symbol: '^',
  snippet: 'Matches beginning of input.',
  paragraph:
    'Matches beginning of input. If the multiline flag is set to true, also matches immediately after a line break character.\n    \n    For example, /^A/ does not match the \'A\' in "an A", but does match the \'A\' in "An E".\n    \n    The \'^\' has a different meaning when it appears as the first character in a character set pattern. See complemented character sets for details and an example.' },
  { symbol: '$',
  snippet: ' Matches end of input.',

  paragraph:
   '\n    Matches end of input. If the multiline flag is set to true, also matches immediately before a line break character.\n\n    For example, /t$/ does not match the \'t\' in "eater", but does match it in "eat".\n   ' },
  { symbol: '*',
  snippet: 'preceding expression 0 or more times.',

  paragraph:
   '\n    Matches the preceding expression 0 or more times. Equivalent to {0,}.\n\n    For example, /bo*/ matches \'boooo\' in "A ghost booooed" and \'b\' in "A bird warbled" but nothing in "A goat grunted".\n   ' },
  { symbol: '+',
  snippet: 'preceding expression 1 or more times.',

  paragraph:
   '\n    Matches the preceding expression 1 or more times. Equivalent to {1,}.\n\n    For example, /a+/ matches the \'a\' in "candy" and all the a\'s in "caaaaaaandy", but nothing in "cndy".\n   ' },
  { symbol: '?',
  snippet: 'preceding expression 0 or 1 time.',

  paragraph:
   'Matches the preceding expression 0 or 1 time. Equivalent to {0,1}.\n    \n    For example, /e?le?/ matches the \'el\' in "angel" and the \'le\' in "angle" and also the \'l\' in "oslo".\n    \n    If used immediately after any of the quantifiers *, +, ?, or {}, makes the quantifier non-greedy (matching the fewest possible characters), as opposed to the default, which is greedy (matching as many characters as possible). For example, applying /\\d+/ to "123abc" matches "123". But applying /\\d+?/ to that same string matches only the "1".\n    \n    Also used in lookahead assertions, as described in the x(?=y) and x(?!y) entries of this table.' },
  { symbol: '.',
  snippet: 'matches any single character.',

  paragraph:
   '\n    (The decimal point) matches any single character except the newline character, by default.\n\n    For example, /.n/ matches \'an\' and \'on\' in "nay, an apple is on the tree", but not \'nay\'.\n\n    If the s ("dotAll") flag is set to true, it also matches newline characters.\n   ' },
  { symbol: '(x)',
  snippet: 'Matches \'x\' and remembers the match.',

  paragraph:
   '\n    Matches \'x\' and remembers the match, as the following example shows. The parentheses are called capturing parentheses.\n     \n     The \'(foo)\' and \'(bar)\' in the pattern /(foo) (bar) \\1 \\2/ match and remember the first two words in the string "foo bar foo bar". The \\1 and \\2 denote the first and second parenthesized substring matches - foo and bar, matching the string\'s last two words. Note that \\1, \\2, ..., \\n are used in the matching part of the regex, for more information, see \\n below. In the replacement part of a regex the syntax $1, $2, ..., $n must be used, e.g.: \'bar foo\'.replace(/(...) (...)/, \'$2 $1\'). $& means the whole matched string.\n   ' },
  { symbol: '(?:x)',
  snippet: 'Matches \'x\' but does not remember the match.',

  paragraph:
   'Matches \'x\' but does not remember the match. The parentheses are called non-capturing parentheses, and let you define subexpressions for regular expression operators to work with. Consider the sample expression /(?:foo){1,2}/. If the expression was /foo{1,2}/, the {1,2} characters would apply only to the last \'o\' in \'foo\'. With the non-capturing parentheses, the {1,2} applies to the entire word \'foo\'. For more information, see Using parentheses below.' },
  { symbol: 'x(?=y)',
  snippet: 'Matches \'x\' only if \'x\' is followed by \'y\'.',

  paragraph:
   '\n    Matches \'x\' only if \'x\' is followed by \'y\'. This is called a lookahead.\n\n    For example, /Jack(?=Sprat)/ matches \'Jack\' only if it is followed by \'Sprat\'. /Jack(?=Sprat|Frost)/ matches \'Jack\' only if it is followed by \'Sprat\' or \'Frost\'. However, neither \'Sprat\' nor \'Frost\' is part of the match results.\n   ' },
  { symbol: 'x(?!y)',
  snippet: 'Matches \'x\' only if \'x\' is not followed by \'y\'.',

  paragraph:
   '\n    Matches \'x\' only if \'x\' is not followed by \'y\'. This is called a negated lookahead.\n\n    For example, /\\d+(?!\\.)/ matches a number only if it is not followed by a decimal point. The regular expression /\\d+(?!\\.)/.exec("3.141") matches \'141\' but not \'3.141\'.\n   ' },
  { symbol: '(?<=y)x',
  snippet: 'Matches x only if x is preceded by y.',

  paragraph:
   '\n    Matches x only if x is preceded by y. This is called a lookbehind.\n\n    For example, /(?<=Jack)Sprat/ matches "Sprat" only if it is preceded by "Jack".\n     /(?<=Jack|Tom)Sprat/ matches "Sprat" only if it is preceded by "Jack" or "Tom".\n     However, neither "Jack" nor "Tom" is part of the match results.\n\n    (Added in ES2018, not yet supported in Firefox)\n   ' },
  { symbol: '(?<!y)x',
  snippet: 'Matches x only if x is not preceded by y.',

  paragraph:
   '\n    Matches x only if x is not preceded by y. This is called a negated lookbehind.\n\n    For example, /(?<!-)\\d+/ matches a number only if it is not preceded by a minus sign.\n     /(?<!-)\\d+/.exec(\'3\') matches "3".\n     /(?<!-)\\d+/.exec(\'-3\') match is not found because the number is preceded by the minus sign.\n\n    (Added in ES2018, not yet supported in Firefox)\n   ' },
  { symbol: 'x|y',
  snippet: 'Matches \'x\', or \'y\' (if there is no match for \'x\').',

  paragraph:
   '\n    Matches \'x\', or \'y\' (if there is no match for \'x\').\n\n    For example, /green|red/ matches \'green\' in "green apple" and \'red\' in "red apple." The order of \'x\' and \'y\' matters. For example a*|b matches the empty string in "b", but b|a* matches "b" in the same string.\n   ' },
  { symbol: '{n}',
  snippet: 'Matches exactly n occurrences of the preceding expression.',

  paragraph:
   'Matches exactly n occurrences of the preceding expression. N must be a positive integer.\n    \n    For example, /a{2}/ doesn\'t match the \'a\' in "candy," but it does match all of the a\'s in "caandy," and the first two a\'s in "caaandy."' },
  { symbol: '{n,}',
  snippet: 'Matches at least n occurrences of the preceding expression.',

  paragraph:
   '\n    Matches at least n occurrences of the preceding expression. N must be a positive integer.\n\n    For example, /a{2,}/ will match "aa", "aaaa" and "aaaaa" but not "a"\n   ' },
  { symbol: '{n,m}',
  snippet: 'Where n and m are positive integers and n <= m.',

  paragraph:
   '\n    Where n and m are positive integers and n <= m. Matches at least n and at most m occurrences of the preceding expression. When m is omitted, it\'s treated as ∞.\n\n    For example, /a{1,3}/ matches nothing in "cndy", the \'a\' in "candy," the first two a\'s in "caandy," and the first three a\'s in "caaaaaaandy". Notice that when matching "caaaaaaandy", the match is "aaa", even though the original string had more a\'s in it.\n   ' },
  { symbol: '[xyz]',
  snippet: 'Character set.',

  paragraph:
   'Character set. This pattern type matches any one of the characters in the brackets, including escape sequences. Special characters like the dot(.) and asterisk (*) are not special inside a character set, so they don\'t need to be escaped. You can specify a range of characters by using a hyphen, as the following examples illustrate.\n    \n    The pattern [a-d], which performs the same match as [abcd], matches the \'b\' in "brisket" and the \'c\' in "city". The patterns /[a-z.]+/ and /[\\w.]+/ match the entire string "test.i.ng".' },
  { symbol: '[^xyz]',
  snippet: 'A negated or complemented character set.',

  paragraph:
   '\n    A negated or complemented character set. That is, it matches anything that is not enclosed in the brackets. You can specify a range of characters by using a hyphen. Everything that works in the normal character set also works here.\n\n    For example, [^abc] is the same as [^a-c]. They initially match \'r\' in "brisket" and \'h\' in "chop."\n   ' },
  { symbol: '[\\b]',
  snippet: 'Matches a backspace (U+0008).',

  paragraph:
   'Matches a backspace (U+0008). You need to use square brackets if you want to match a literal backspace character. (Not to be confused with \\b.)' },
  { symbol: '\\b',
  snippet: ' Matches a word boundary.',

  paragraph:
   '\n    Matches a word boundary. A word boundary matches the position between a word character followed by a non-word character, or between a non-word character followed by a word character, or the beginning of the string, or the end of the string. A word boundary is not a "character" to be matched; like an anchor, a word boundary is not included in the match. In other words, the length of a matched word boundary is zero. (Not to be confused with [\\b].)\n\n    Examples using the input string "moon":\n     /\\bm/ matches, because the `\\b` is at the beginning of the string;\n     the \'\\b\' in /oo\\b/ does not match, because the \'\\b\' is both preceded and followed by word characters;\n     the \'\\b\' in /oon\\b/ matches, because it appears at the end of the string;\n     the \'\\b\\\' in /\\w\\b\\w/ will never match anything, because it is both preceded and followed by a word character..\n\n    \n    Note: JavaScript\'s regular expression engine defines a specific set of characters to be "word" characters. Any character not in that set is considered a non-word character. This set of characters is fairly limited: it consists solely of the Roman alphabet in both upper- and lower-case, decimal digits, and the underscore character. Accented characters, such as "é" or "ü" are, unfortunately, treated as non-word characters for the purposes of word boundaries, as are ideographic characters in general.\n    \n   ' },
  { symbol: '\\B',
  snippet: 'Matches a non-word boundary.',

  paragraph:
   '\n    Matches a non-word boundary. This matches the following cases:\n\n    \n     Before the first character of the string\n     After the last character of the string\n     Between two word characters\n     Between two non-word characters\n     The empty string\n    \n\n    For example, /\\B../ matches \'oo\' in "noonday", and /y\\B./ matches \'ye\' in "possibly yesterday."\n   ' },
  { symbol: '\\cX',
  snippet: 'Where X is a character ranging from A to Z.',

  paragraph:
   '\n    Where X is a character ranging from A to Z. Matches a control character in a string.\n\n    For example, /\\cM/ matches control-M (U+000D) in a string.\n   ' },
  { symbol: '\\d',
  snippet: 'Matches a digit character.',

  paragraph:
   '\n    Matches a digit character. Equivalent to [0-9].\n\n    For example, /\\d/ or /[0-9]/ matches \'2\' in "B2 is the suite number."\n   ' },
  { symbol: '\\D',
  snippet: 'Matches a non-digit character.',

  paragraph:
   '\n    Matches a non-digit character. Equivalent to [^0-9].\n\n    For example, /\\D/ or /[^0-9]/ matches \'B\' in "B2 is the suite number."\n   ' },
  { symbol: '\\f',
  snippet: 'Matches a form feed (U+000C).',
   paragraph: 'Matches a form feed (U+000C).' },
  { symbol: '\\n',
  snippet: 'Matches a line feed (U+000A).',
   paragraph: 'Matches a line feed (U+000A).' },
  { symbol: '\\r',
  snippet: 'Matches a carriage return (U+000D).',

  paragraph: 'Matches a carriage return (U+000D).' },
  { symbol: '\\s',
  snippet: 'Matches a white space character',

  paragraph:
   '\n    Matches a white space character, including space, tab, form feed, line feed. Equivalent to [ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff].\n\n    For example, /\\s\\w*/ matches \' bar\' in "foo bar."\n   ' },
  { symbol: '\\S',
  snippet: 'Matches a character other than white space.',

  paragraph:
   '\n    Matches a character other than white space. Equivalent to [^ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff].\n\n    For example, /\\S*/ matches \'foo\' in "foo bar."\n   ' },
  { symbol: '\\t',
  snippet: 'Matches a tab (U+0009).',
   paragraph: 'Matches a tab (U+0009).' },
  { symbol: '\\v',
  snippet: 'Matches a vertical tab (U+000B).',
   paragraph: 'Matches a vertical tab (U+000B).' },
  { symbol: '\\w',
  snippet: ' Matches any alphanumeric character including the underscore.',

  paragraph:
   '\n    Matches any alphanumeric character including the underscore. Equivalent to [A-Za-z0-9_].\n\n    For example, /\\w/ matches \'a\' in "apple," \'5\' in "$5.28," and \'3\' in "3D."\n   ' },
  { symbol: '\\W',
  snippet: 'Matches any non-word character.',

  paragraph:
   '\n    Matches any non-word character. Equivalent to [^A-Za-z0-9_].\n\n    For example, /\\W/ or /[^A-Za-z0-9_]/ matches \'%\' in "50%."\n   ' },
  { symbol: '\\n',
  snippet: 'a back reference to the last substring',

  paragraph:
   '\n    Where n is a positive integer, a back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses).\n\n    For example, /apple(,)\\sorange\\1/ matches \'apple, orange,\' in "apple, orange, cherry, peach."\n   ' },
  { symbol: '\\0',
  snippet: 'Matches a NULL (U+0000) character.',

  paragraph:
   'Matches a NULL (U+0000) character. Do not follow this with another digit, because \\0<digits> is an octal escape sequence. Instead use \\x00.' },
  { symbol: '\\xhh',
  snippet: 'Matches the character with the code hh',

  paragraph:
   'Matches the character with the code hh (two hexadecimal digits)' },
  { symbol: '\\uhhhh',
  snippet: 'Matches the character with the code hhhh',

  paragraph:
   'Matches the character with the code hhhh (four hexadecimal digits).' },
  { symbol: '\\u{hhhh}',
  snippet: 'Matches the character with the Unicode value hhhh',

  paragraph:
   '(only when u flag is set) Matches the character with the Unicode value hhhh (hexadecimal digits).' },
  
  ]
  
  
  //Methods that use regular expressions
  public regMethods = [
      { symbol: 'exec',
  paragraph:
   'A RegExp method that executes a search for a match in a string. It returns an array of information or null on a mismatch.' },
  { symbol: 'test',
  paragraph:
   'A RegExp method that tests for a match in a string. It returns true or false.' },
  { symbol: 'match',
  paragraph:
   'A String method that returns an array containing all of the matches, including capturing groups, or null if no match is found.' },
  { symbol: 'matchAll',
  paragraph:
   'A String method that returns an iterator containing all of the matches, including capturing groups.' },
  { symbol: 'search',
  paragraph:
   'A String method that tests for a match in a string. It returns the index of the match, or -1 if the search fails.' },
  { symbol: 'replace',
  paragraph:
   'A String method that executes a search for a match in a string, and replaces the matched substring with a replacement substring.' },
  { symbol: 'split',
  paragraph:
   'A String method that uses a regular expression or a fixed string to break a string into an array of substrings.' }
  ];
  
  //Regular expression flags
  
  public flags = [
      { symbol: 'g',
  paragraph:
   'Global search.' },
  { symbol: 'i',
  paragraph:
   'Case-insensitive search.' },
  { symbol: 'm',
  paragraph:
   'Multi-line search.' },
  { symbol: 's',
  paragraph:
   'Allows . to match newline characters. (Added in ES2018, not yet supported in Firefox)' },
  { symbol: 'u',
  paragraph:
   '"unicode"; treat a pattern as a sequence of unicode code points' },
  { symbol: 'y',
  paragraph:
   'Perform a "sticky" search that matches starting at the current position in the target string.' },
  ]
  constructor() {}
  getFullInfo(jeff) {
    console.log(jeff)
  }
}
