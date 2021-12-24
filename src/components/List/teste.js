function changePosition(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
};

let arr = [1,2,4,5,6,7,8,9,10,3];

for(let i =0 ;i< arr.length;i++){
    console.log("Posição " +i + " do arrayarray :" +arr[i]); // [1,2,3,4,5,6,7,8,9,10]
}
arr = changePosition(arr, 9, 2);
console.log("=============================================================")
for(let i =0 ;i< arr.length;i++){
    console.log("Posição " +i + " do arrayarray :" +arr[i]); // [1,2,3,4,5,6,7,8,9,10]
}