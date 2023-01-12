// complete the given function

function palindrome(str){
let r = str.length;
	let l = 0;
	while(l<r){
		if(str[r] != str[l]){
			return false;
		}
		l++;
		r--;
	}
	return true;
}
module.exports = palindrome
