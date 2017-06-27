function askPolitely(sentence){
	if(sentence.slice(-1) === "?"){
		if(sentence.slice(-7) === "please?"){
			return sentence;
			} else {
				return sentence.slice(0,-1) + " please?";	
			}
	} else {
		return sentence;
	}
}

my solution

function askPolitely(cadena){
if(/please/.test(cadena)){
return cadena;
} else if(cadena.slice(-1) === "?"){
  return cadena.replace("?"," please?");
} else{
return cadena;
  }

}

askPolitely("My name is Grace Hopper.");
