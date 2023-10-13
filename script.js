// complete the given function

function palindrome(str){
	let s = str.toLowerCase();
	for(let i = 0; i<s.length/2; i++){
		if(s[i] !== s[s.length-1-i]){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
