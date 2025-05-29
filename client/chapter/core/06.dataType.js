/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null
console.log(typeof empty)

// 2. 값이 할당되지 않은 상태
let a = undefined
console.log(a)

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let b = "큰"
let c = '작은'
let d = `역`
let e = `역 ${b}`
console.log(b,c,d,e)

// 4. 정수, 부동 소수점 숫자(길이 제약)
let f = 123
console.log(f)

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let g = 123456789n
console.log(g)

// 6. 참(true, yes) 또는 거짓(false, no)
let h = true
let i = false
console.log(h)
console.log(i)

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
let user = {
    name :"세은",
    age : 26,
}
console.log(user.name)

// 8. 고유한 식별자(unique identifier)
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); 



/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
typeof 123
typeof "문자"
// 2) 함수 typeof()
typeof (123)
typeof ("문자")

// 언어 상, 오류
typeof null // "object"



// Object

// Array

// function

// this


