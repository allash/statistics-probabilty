function stemplot(data, separator) {

  var list = data.split(separator ? separator : ' ');
  if (list.length <= 1) {
    document.write('list is invalid');
    return;
  }

  var sortedList = list.sort((a, b) => { return a - b; });
  var result = {};

  function buildLeaf(digits) {
    var leaf = '';
    if (digits.length == 1) {
      leaf = digits[0];
    }

    if (digits.length >= 2) {
      for (var j = 1; j < digits.length; j++) {
        leaf += digits[j];
      }
    }
    return leaf;
  }

  for (var index = 0; index < sortedList.length; index++) {
    var digits = sortedList[index].split('');
    if (digits.length) {
      var stem = digits.length >= 2 ? digits[0] : '0';
      if (!result[stem]) {
        result[stem] = '';
      }

      leaf = buildLeaf(digits);

      result[stem] += leaf;
    }
  }

  for (var key in result) {
    document.write(key + ' | ' + result[key] + '<br />');
  }
}

function median(data) {
  var list = data.split(' ')
                    .map(e => { return parseInt(e); })
                    .sort((a, b) => { return a - b; });

  var isEven = list.length % 2 == 0;
  var middle = isEven ? list.length / 2 - 1 : (list.length + 1) / 2 - 1;
  var median;
  if (isEven) {
    var second = list.length / 2;
    median = (list[middle] + list[second]) / 2;
  } else {
    median = list[middle];
  }

  return median;
}


var data = '34 34 27 37 42 41 36 32 41 33 31 74 33 49 38 61 21 41 26 80 42 29 33 36 45 49 39 34 26 25 33 35 35 28 30 29 61 32 33 45 29 62 22 44';
var data2 = '1 6 7 5 8 5 11 12 15';
stemplot(data2);
document.write('median: ' + median(data));

0 | 155678
1 | 125
