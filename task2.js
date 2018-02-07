function fibo(fibonacci,i){
sum = 0;
while (fibonacci[i-1] + fibonacci[i-2] <= 4000000){
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
  i += 1;
}

for (var j in fibonacci){
	if (fibonacci [j] % 2 === 0) 
	{
  sum += fibonacci[j];
   }
  }
  return sum;
}
var fb  = [1,2,3];
var i   = 3;
console.log(fibo(fb,i));