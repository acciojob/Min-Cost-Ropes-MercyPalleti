function mincost(arr)
{ 
//write your code here
// return the min cost
  arr.sort((a,b)=>a-b);
	let res=0;
	for(let i=0;i<arr.length;i++){
		res+=(arr.length-(i+1))*arr[i];
	}
	return res;
}
console.log(mincost(arr));
module.exports=mincost;
