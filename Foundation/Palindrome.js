
//Reverse of a number
function isReverse(n){

  let rev = 0;
  let nCopy = n;
  while(n>0){
    let lastDigit = n % 10;
    rev = rev * 10 + lastDigit;
    n=Math.floor(n/10)
  }
  return rev
}
console.log(isReverse(123));


// Palindrome number check 
function isPalindrome(n) {
  let rev = 0;
  let nCopy = n;
  while (n > 0) {
    let lastDigit = n % 10;
    rev = rev * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  if (nCopy === rev) {
    return "palindrome no.";
  } else {
    return "not palindrome";
  }
}
console.log(isPalindrome(123));



