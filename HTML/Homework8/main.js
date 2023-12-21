/**
 Homework 8
เขียนฟังก์ชัน mergeObjects โดย
1. พารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด
2. ให้ return ค่าเป็น Object ใหม่ที่รวมทุก key ของทุก Object
3. ในกรณีที่ Object ในพารามิเตอร์มี key ซ้ำกันให้ยึด value ของตัวที่มาก่อนเป็นหลัก
 */

const mergeObjects = (...objects) => {
  return objects.reduce((acc, obj) => {
    Object.keys(obj).forEach(key => {
      acc[key] = obj[key]
    })
    return acc
  })
}

// ให้เขียน function cloneObject บรรทัดเดียว..

const cloneObject = (...obj) => {
  return Object.assign({}, obj)
}

let obj1 = {
  name: 'John',
  age: 30,
  city: 'New York'
}

let obj2 = {
  name: 'Jane',
  age: 25,
  city: 'London'
}

let obj3 = {
  name: 'Bob',
  age: 40,
  city: 'Paris'
}

console.log(mergeObjects(obj1, obj2, obj3))
console.log(mergeObjects(obj1, obj3, obj2))
console.log(mergeObjects(obj3, obj2, obj1))
// console.log(cloneObject(obj1, obj2, obj3))