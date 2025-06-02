/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

// condition ? value1 : value2

receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 'user@company.io' : emailAddress



// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io';



/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '100px'
const isActive = false;


console.log( 0 || WIDTH ); //100px
console.log( 0 ?? WIDTH ); //0

console.log( undefined || WIDTH ); //100px
console.log( undefined ?? WIDTH ); //100px

console.log( isActive || WIDTH ); //100px
console.log( isActive ?? WIDTH ); //fa;se

console.log( '' || WIDTH); //100px
console.log( '' ?? WIDTH); // (빈문자)

//a ||= b : a가 false일 때 b의 값을 a에 할당
//a = a || b

//a &&= b : a가 true일 때 b의 값을 a에 할당
//a = a && b

//a ??= b : a가 undefined, null일 때 b의 값을 a에 할당
//a = a ?? b



