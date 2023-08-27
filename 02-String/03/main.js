// จงเขียนฟังก์ชัน ucFirst(str) เพื่อแปลงตัวอักษรตัวแรกของ str ให้เป็นตัวพิมพ์ใหญ่ ส่วนตัวอักษรที่เหลือให้มีขนาดเหมือนเดิม

function ucFirst(str) {
    if (!str) return ''; // หากสตริงเป็นค่าว่าง ไม่ต้องทำอะไร และส่งคืนค่าเป็นสตริงว่าง
  
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  const inputStr = 'hello world';
  const transformedStr = ucFirst(inputStr);
  console.log(transformedStr);  // 'Hello world'
  