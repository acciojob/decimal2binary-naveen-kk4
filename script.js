function decimalToBinary(N) {
  	let ans = "";
   while(N>0){
        if((N & (1)) > 0){
           ans="1"+ans;
        }
        else ans="0"+ans;
        N>>=1;
    }
   return ans;
	   
  
}

window.decimalToBinary = decimalToBinary;
