// - จงเขียนฟังก์ชัน extractCurrencyValue(string, rate) ในการแปลงค่า string ที่อยู่ในรูปแบบสกุลเงินดอลลาร์ ให้อยู่ในรูปแบบสกุลเงินบาท
// - rate คือ อัตราในการแปลงดอลลาร์ให้เป็นบาท
// - ตัวอย่าง ผลลัพธ์ของฟังก์ชัน
// ```js
// extractCurrencyValue('$120', 30); // THB3600
// ```

function extractCurrencyValue(string, rate) {
    
    const numericValue = parseFloat(string.replace(/\$|,/g, '')); 
    if (isNaN(numericValue)) {
      throw new Error('Invalid currency format');
    }
  
    const thaiBahtValue = numericValue * rate;
    return 'THB' + thaiBahtValue.toFixed(2); 
}
  
  const dollarAmount = '$120';
  const exchangeRate = 30;
  const thaiBahtValue = extractCurrencyValue(dollarAmount, exchangeRate);
  console.log(thaiBahtValue);  // 'THB3600.00'
  