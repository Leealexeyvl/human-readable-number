// module.exports = function toReadable (number) {
//   let numbers = ['zero', 'one', 'two', 'three', 'four',
//    'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
//     'twelve', 'thirteen', 'twenty',  'thirty','fifteen', 'hundred', 'thousand', 'million',];
//     let result = '';
//     let numberString = String(number);
//     if (number == 0) {
//         return 'zero';
//     }
//     while (numberString.length >= 1)  {
//         if (numberString.length == 1) {
//             if (+numberString != 0) {
//             result += numbers[+numberString];
//             } else {
                
//             }
//         } else if (numberString.length == 2) {
//             if (numberString[0] == 1) {
//                 if (numberString[1] == 8) {
//                     return result += 'eighteen'
//                 }
//                 else if (numberString[1] == 5) {
//                         return result += 'fifteen'
//                 } else if (numberString[1] == 3) {
//                         return result += 'thirteen'
//                 } else if (numberString[1] == 2) {
//                     return result += 'twelve'
//                 } else if (numberString[1] == 1) {
//                     return result += 'eleven'
//                 } else if (numberString[1] == 0) {
//                     return result += 'ten'
//                 } else {
//                  return result += numbers[numberString[1]] + 'teen';
//                 }
//             } else if (numberString[0] == 2) {
//                  result += 'twenty ';
//             } else if (numberString[0] == 4) {
//                 result += 'forty ';
//            } else if (numberString[0] == 5) {
//                 result += 'fifty ';
//            } else if (numberString[0] == 3) {
//                  result += 'thirty ';
//             } else if (numberString[0] == 8) {
//                 result += 'eighty ';
//            } else if (numberString[0] == 0) {

//        } else {
//                 result += numbers[numberString[0]] + 'ty ';
                
//             }
//         } else {
//             result = numbers[numberString[0]] + ' hundred ';
//         }

//         numberString = numberString.slice(1);
//     };
//     return result.trim();
// }

module.exports = function toReadable (number) {
  let units = {
      0: 0,
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'
  };
  let tens = {
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety'
  }

  if (number < 1) return 'zero';
  if (number < 20) return units[number];
  if (number < 100) return (tens[Math.trunc(number / 10)] + ' ' + (units[number % 10] || '')).trim();
  if (number < 1000) {
      if (number % 100 < 10) {
        return (units[Math.trunc(number / 100)] + ' hundred ' + (units[number % 100] || '')).trim();
      } else if (number % 100 < 20) {
        return units[Math.trunc(number / 100)] + ' hundred ' + (units[number % 100]);
      } else {
        return (units[Math.trunc(number / 100)] + ' hundred ' + tens[Math.trunc(number % 100 / 10)] + ' ' + (units[number % 10] || '')).trim();
      }
}
}