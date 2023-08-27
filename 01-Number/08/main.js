//จงเขียนฟังก์ชันในการหาความยาวเส้นรอบวงของวงกลม

function calculateCircumference(radius) {
    const pi = Math.PI;
    const circumference = 2 * pi * radius;
    return circumference;
  }
  
  const radius = 5; // รัศมีของวงกลม
  const circumference = calculateCircumference(radius);
  console.log(circumference);