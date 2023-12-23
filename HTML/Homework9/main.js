

/*Homework 9 +
  สร้าง function show1 เพื่อแสดงเลขทุก 1 วินาที โดยที่เลขตัวต่อไป
จะเป็น 2 เท่าของตัวที่ผ่านมา จนกว่าเลขจะมากกว่า 1000 ให้แสดงคำว่า 'end'
*/
function show1(n) {
  let current = n;
  const interval = setInterval(() => {
    console.log(current);
    current *= 2;
    if (current > 1000) {
      console.log('end');
      clearInterval(interval);
    }
  }, 1000);
}

// ตัวอย่างการเรียกใช้งานฟังก์ชัน
show1(1); // result : 1 2 4 8 16 32 64 128 256 512 1024 end
show1(8); // result : 8 16 32 64 128 256 512 1024 end
show1(30); // result : 30 60 120 240 480 960 1920 end


