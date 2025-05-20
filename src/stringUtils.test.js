const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters,
} = require('./stringUtils');

describe('reverseString', () => {
  test('inverte una stringa normale', () => {
    expect(reverseString('abc')).toBe('cba');
  });

  test('inverte una stringa vuota', () => {
    expect(reverseString('')).toBe('');
  });

  test('inverte una stringa con spazi e simboli', () => {
    expect(reverseString('a b!')).toBe('!b a');
  });
});

describe('isPalindrome', () => {
  test('riconosce un palindromo semplice', () => {
    expect(isPalindrome('radar')).toBe(true);
  });

  test('riconosce un palindromo con maiuscole e spazi', () => {
    expect(isPalindrome('A Santa at Nasa')).toBe(true);
  });

  test('rileva correttamente una stringa non palindroma', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('gestisce stringa vuota', () => {
    expect(isPalindrome('')).toBe(true);
  });
});

describe('truncateString', () => {
  test('tronca stringa più lunga del massimo', () => {
    expect(truncateString('abcdef', 4)).toBe('abcd...');
  });

  test('ritorna stringa intera se corta', () => {
    expect(truncateString('abc', 10)).toBe('abc');
  });

  test('ritorna stringa intera se uguale alla lunghezza', () => {
    expect(truncateString('hello', 5)).toBe('hello');
  });
});

describe('countCharacters', () => {
  test('conta caratteri ripetuti', () => {
    expect(countCharacters('aabb')).toEqual({ a: 2, b: 2 });
  });

  test('conta caratteri unici', () => {
    expect(countCharacters('abc')).toEqual({ a: 1, b: 1, c: 1 });
  });

  test('gestisce stringa vuota', () => {
    expect(countCharacters('')).toEqual({});
  });

  test('distingue maiuscole e minuscole', () => {
    expect(countCharacters('Aa')).toEqual({ A: 1, a: 1 });
  });
});
