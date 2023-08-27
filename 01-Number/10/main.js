// จงเขียนฟังก์ชันในการแปลงค่าจากองศาเป็นเรเดียน

// <!-- PI rad = 1 * PI  === 180 -->
// <!-- PI rad = 1 * PI  === 180 -->

// <!-- 180 deg === PI rad -->
// <!-- 1  deg  ===  1*PI / 180 -->
// <!-- n deg  ===  n*PI / 180 -->

function degreesToRadians(degrees) {
    const radians = (degrees * Math.PI) / 180;
    return radians;
  }
  
  const degrees = 90; // องศา
  const radians = degreesToRadians(degrees);
  console.log(radians);
  