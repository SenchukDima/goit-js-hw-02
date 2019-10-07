'use strict'

function checkForSpam(str) {
  let lowerCaseStr = str.toLowerCase();
  return lowerCaseStr.includes('spam') || lowerCaseStr.includes('sale');
  
}


console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
