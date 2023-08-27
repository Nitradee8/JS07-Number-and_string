// จงเขียนฟังก์ชันในการสุ่มตัวเลข random(min, max) โดยให้ผลลัพธ์มีค่าเป็นจำนวนจริงตั้งแต่ min ถึง max (ไม่รวม max)

// 1-6
// min + Range
// min + 0 = 1 + 0 = 1
// min + 1 = 1 + 1 = 2
// min + 1 = 2..
// min + 5 = 1 + 5 = 6


let min = 1;
let max = 6;
// max-min = 5
// rendom(5) => 0 - 4.xxxx (ไม่มีทางได้ 5)
// rendom(6) => 0 - 5.xxxx

for(let i = 0; i < 20; i++) {
    let r = min + Math.floor(Math.random()*(max-min+1))

    console.log(r)
}
