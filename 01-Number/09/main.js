//จงเขียนฟังก์ชันในการหาความยาวเส้นทแยงมุมของสี่เหลี่ยมผืนผ้า

function calculateDiagonalLength(a, b) {
    const diagonalLength = Math.sqrt(a * a + b * b);
    return diagonalLength;
  }
  
  const sideA = 3; // ด้าน a
  const sideB = 4; // ด้าน b
  const diagonalLength = calculateDiagonalLength(sideA, sideB);
  console.log(diagonalLength);
  