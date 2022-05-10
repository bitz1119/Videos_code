let binaryString = "101111";
let k = 5;
let n = 6;

// prefix sum
let prefixSum = new Array(n);

for (let i = 0;i<n;i++) {
    if(binaryString[i] == (i%2)){
        prefixSum[i] = 0;
    }
    else{
        prefixSum[i] = 1;
    }
}


for(let i = 1;i<prefixSum.length;i++) {
    prefixSum[i] = prefixSum[i-1] + prefixSum[i];
}

console.log(prefixSum);

// check window and find minimum flip required 
let minFlip = k;

for(let i = 0;i+k<n;i++){
    let flips = k;
    if(i != 0){
        flips = prefixSum[i+k-1] - prefixSum[i-1];
        
    }
    else{
        flips = prefixSum[i+k-1] ;

    }
    minFlip = Math.min(minFlip,flips,k-flips);
}


console.log(minFlip);





// to get the min








