function solve(arr,k){
    arr.sort((a,b)=>a-b);
    for( let i=0;i<arr.length;i++){
        let left = arr[i] - k;
        let right = arr[i] + k;
        if(left <= arr[0] && right >= arr[arr.length-1]){
            return true;
        }
    }
    return false;
}


console.log(solve([1,2,3,4,5],1))