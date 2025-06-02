/* --------------- */
/* While Loop      */
/* --------------- */



// let i = 10;
// while(i > 0){
//     // statement
//     console.log(--i);
// }






const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'Zustand', // 츄스탄트 (독일발음으로 발음해야함)
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
// 특정 숫자값을 넣기 보다는 배열의 총 갯수(length)를 넣는게 좋음
let i = 0;
while(i < frontEndDev.length){
    // console.log(frontEndDev[i]);
    i++;
}


// while 문 (역순환 : 역방향)
// 먼저 감소 될 기준 변수를 생성해줘야 함
let l = frontEndDev.length - 1;

while(l >= 0){
    console.log(frontEndDev[l]);
    l--
}

// 성능 진단 : 순환 vs. 역순환