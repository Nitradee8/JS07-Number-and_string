// จงเขียนฟังก์ชันในการสุ่ม ตัวเลขลูกเต๋า โดยผลลัพธ์ต้องเป็นตัวเลขจำนวนเต็มตั้งแต่ 1 ถึง 6

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  const result = rollDice();
  console.log(result);