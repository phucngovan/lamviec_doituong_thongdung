let myDOB = new Date(1993, 10, 29);

let a = Date.now();
let b = a - myDOB;

console.log("Tôi đã sống " + Math.floor(b/1000/60/60/24/365) + " năm");
console.log("Tôi đã sống " + Math.floor(b/1000/60/60/24/365*12) + " tháng");
console.log("Tôi đã sống " + Math.floor(b/1000/60/60/24) + " ngày");
console.log("Tôi đã sống " + Math.floor(b/1000/60/60) + " giờ");
console.log("Tôi đã sống " + Math.floor(b/1000/60) + " phút");

let r10 = Math.floor(Math.random() * 10);
let r400 = Math.floor(Math.random() * 400);
let r150 = Math.floor(Math.random() * 50 + 50);

let min = [5,7,2,9];
let draft = min[0];
for (let i = 1; i <= min.length; i++){
    if (draft > min[i]) draft = min[i];
}

for (let i = 0; i <= 64; i++) {
    for (let j = 0; j <= 53; j++) if (Math.pow(i, j) === 64) console.log(i);
}

let sCircle = Math.PI * Math.pow(5,2);

let str = "Tôi yêu ngôn ngữ lập trình Javascript";
let count = 0;
for (let i = 0; i < str.length; i++){
    if (str.slice(i, i + 1) === "a") {
        count++;
    }
}

let start = 0, dem = 0;
let arr = [];
for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 1) === " ") {
        arr[dem] = str.slice(start, i);
        start = i + 1;
        dem++;
        for (let j = start; j < str.length; j++) {
            if (str.slice(j, j + 1) !== " ") arr.push(str.slice(start, str.length));
            break;
        }
    }
}
console.log(++dem);
console.log(str.replace("Javascript", "Typescript"));