// Write a method to decide if two string are anagrams or not.


function is_a_string(input) {
  var _is_a_string = (typeof input === "string");
  return _is_a_string;
}

function are_anagrams(str1, str2) {
  if (!is_a_string(str1) || !is_a_string(str2)) {
    throw 'invalid input';
  }

  if (str1.length !== str2.length) {
    return false;
  }

  var anagram_table = {
    [str1]: {},
    [str2]: {}
  };

  for (var string of [str1, str2]) {
    var string_array = string.split('');
    for (var letter of string_array) {
      var letter_count = anagram_table[string][letter];
      letter_count = (letter_count) ? letter_count + 1 : 1;
      anagram_table[string][letter] = letter_count;
    }
  }

  for (var letter in anagram_table[str1]) {
    var str1_letter_count = anagram_table[str1][letter];
    var str2_letter_count = anagram_table[str2][letter];

    if (str1_letter_count !== str2_letter_count) {
      return false;
    }
  }

  return true;
}

function run() {
  var str1 = process.argv[2];
  var str2 = process.argv[3];
  var _are_anagrams = are_anagrams(str1, str2);
  var are_anagrams_str = (_are_anagrams) ? '' : 'not ';

  var output = str1 + ' and ' + str2 + ' are ' + are_anagrams_str  + 'anagrams.';

  console.log(output);
  process.exit(0);
}

run();

