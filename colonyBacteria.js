let m = 3;
let arr = [4,2,8,1,3,5,6,7,9,10,11];
let leaders = arr.slice(0,m);
let bacters = arr.slice(m);
bacters.sort((a,b)=>a-b);
leaders.sort((a,b)=>a-b);

let colony = {};
for (let i = 0; i<leaders.length; i++) {
    colony[leaders[i]] = 1;
}

let INT_MAX = 10**10;
leaders.push(INT_MAX);
let j = 0;
for (let i = 0; i < bacters.length; i++) {
    while (bacters[i]>leaders[j]){
        j++;
    }

    if(j==0){
        colony[leaders[j]]++;
    }
    else if(Math.abs(leaders[j-1]-bacters[i]) < Math.abs(leaders[j]-bacters[i])){
        colony[leaders[j-1]]++;
    }
    else{
        colony[leaders[j]]++;
    }
    
}

console.log(colony)
for(let i=0;i<m;i++){
    console.log(arr[i]);
}


