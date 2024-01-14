const getRnd =(min, max)=> {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const n = 10
const arr = new Array(n).fill(0).map((el) => getRnd(0, 99));
console.log(arr);

// โจทย์
// arr เป็น array ของ number 0-99(random) จำนวน 10 ตัว
// ให้สร้าง function mySort เพื่อเรียงลำดับตัวเลขจากน้อยไปมาก
// โดยที่ Big O ที่ได้ต้องได้น้อยกว่า O(n*log n)

const mySort = (arr) => {
    
    return arr.sort((a, b) => a - b)
}

console.log(mySort(arr))