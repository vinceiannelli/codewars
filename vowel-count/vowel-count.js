function getCount(str) {
  const vowel = /[aeiou]/gi;
  let vowels = str.match(vowel);
  return vowels.length;

}
