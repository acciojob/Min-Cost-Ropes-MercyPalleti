function mincost(arr)
{ 
//write your code here
// return the min cost
  Arrays.sort(arr);
	let res=0;
	for(let i=0;i<arr.length;i++){
		res+=(arr.length-(i+1))*arr[i];
	}
	return res;
}

module.exports=mincost;
