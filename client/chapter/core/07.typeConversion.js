/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2025;

console.log(typeof YEAR);
console.log(String(YEAR)); //명시적으로 문자형 변환
console.log((YEAR + '')); //암시적으로 문자형 변환



// undefined, null

let days = null;
console.log(days + '');

let nudef;
console.log(nudef + '');


// boolean
let isClicked = false;
console.log(String(isClicked));



/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
//계산되지 않음
let friend;

console.log(Number(friend));


// null
//계산 됨
let money = null;
console.log(money * 1);
console.log(money / 1);
console.log(+money);


// boolean
//let isActive = true;
let isActive = false;
console.log(isActive * 1)


// string
let num = '100';

 console.log(num * 1)


// numeric string
const width = '120.5px';

console.log(Number(width));
console.log(width * 1)
console.log(width / 1)
console.log(+width)

console.log(parseInt(width,10));
console.log(parseFloat(width,10) + 10 + 'px');



/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 



console.clear();

console.log(Boolean(friend)); //false
console.log(Boolean(money));  //false
console.log(Boolean(0));  //false
console.log(Boolean('')); //false
console.log(Boolean(NaN)); //false
console.log(Boolean('0')); //true
console.log(Boolean(' ')); //true
console.log(Boolean(-1)); //true
console.log(!!{}); //true
console.log(!![]); //true
console.log(!![false]); //true
console.log(Boolean(()=>{})); //true
console.log(!!(()=>{})); //true
