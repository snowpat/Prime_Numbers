function Primes(n) {
  for(i=0; i < n-1; i++)
  {
    numberArray[i] = true;
  }
  
  for(j = 2; j < floor(sqrt(n)); j++)
  {
    if(numberArray[j] === true)
    {
      for(k = 0; k < n; k++)
      {
        numberArray[(j*j) + k*j] = false;
      }
    }
  }
  
  for(z=0; z<n; z++)
  {
    if(numberArray[z]===true)
    {
      indexArray[z]=z;
    }
 }

  return indexArray;
}