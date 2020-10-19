module.exports = function toReadable (number) {
  let numbers = ['zero', 'one', 'two', 'three', 'four',
   'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
    'twelve', 'thirteen', 'twenty',  'thirty','fifteen', 'hundred', 'thousand', 'million',];
    let result = '';
    let numberString = String(number);
    if (number == 0) {
        return 'zero';
    }
    while (numberString.length >= 1)  {
        if (numberString.length == 1) {
            if (+numberString != 0) {
            result += numbers[+numberString];
            } else {
                
            }
        } else if (numberString.length == 2) {
            if (numberString[0] == 1) {
                if (numberString[1] == 8) {
                    return result += 'eighteen'
                }
                else if (numberString[1] == 5) {
                        return result += 'fifteen'
                } else if (numberString[1] == 3) {
                        return result += 'thirteen'
                } else if (numberString[1] == 2) {
                    return result += 'twelve'
                } else if (numberString[1] == 1) {
                    return result += 'eleven'
                } else if (numberString[1] == 0) {
                    return result += 'ten'
                } else {
                 return result += numbers[numberString[1]] + 'teen';
                }
            } else if (numberString[0] == 2) {
                 result += 'twenty ';
            } else if (numberString[0] == 4) {
                result += 'forty ';
           } else if (numberString[0] == 5) {
                result += 'fifty ';
           } else if (numberString[0] == 3) {
                 result += 'thirty ';
            } else if (numberString[0] == 8) {
                result += 'eighty ';
           } else if (numberString[0] == 0) {

       } else {
                result += numbers[numberString[0]] + 'ty ';
                
            }
        } else {
            result = numbers[numberString[0]] + ' hundred ';
        }

        numberString = numberString.slice(1);
    };
    return result.trim();
}
