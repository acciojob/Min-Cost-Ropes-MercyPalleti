function mincost(arr)
{ 
//write your code here
// return the min cost
  Arrays.sort(arr);
	var res=0;
	for(let i=0;i<arr.length;i++){
		sum+=(arr.length-(i+1))*arr[i];
	}
	return sum;
}

module.exports=mincost;
