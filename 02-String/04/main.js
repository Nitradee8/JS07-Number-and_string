// - จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ หากในข้อความนั้นมีคำว่า xxx, sex, porn ให้ return ค่าเป็น true แต่ถ้าไม่มีให้ return ค่าเป็น false
// - ให้ตรวจสอบแบบ case-insensitive เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ  
// xxx, porn, sex ตามลำดับ

function containsRestrictedWords(text) {
    const restrictedWords = ['xxx', 'sex', 'porn'];
  
    // แปลงข้อความทั้งหมดให้เป็นตัวพิมพ์เล็กเพื่อทำการเปรียบเทียบ case-insensitive
    const lowerText = text.toLowerCase();
  
    for (const word of restrictedWords) {
      if (lowerText.includes(word)) {
        return true;
      }
    }
  
    return false;
  }
  
  const message1 = 'This is a normal message.';
  const message2 = 'I love watching XXX videos!';
  const message3 = 'Have you ever seen seXy content?';
  const message4 = 'No restricted words here.';
  
  console.log(containsRestrictedWords(message1));   // => false
  console.log(containsRestrictedWords(message2));   // => true
  console.log(containsRestrictedWords(message3));   // => true
  console.log(containsRestrictedWords(message4));   // => false
  