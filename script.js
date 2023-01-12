// complete the given function

function palindrome(str){
  let rev_str = "";
      for( let i = str.length-1 ;i >= 0 ;i--)
      {
        rev_str+= str[i];
      }
      // return reverse string
      if (str.toLowerCase()===rev_str.toLowerCase()) {
          return true
      } else {
          return false
      }
}
module.exports = palindrome
