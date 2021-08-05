function getFactorial(a) {
	if( a == 0 || a == 1){
		return 1;
	}
	return a*getFactorial(a-1);
}

console.log(getFactorial(120));	
