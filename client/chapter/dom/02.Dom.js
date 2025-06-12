/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains




// 1. nav 태그 요소
const nav = document.querySelector('nav');

// 2. nav 태그 안에 있는 about li 태그 요소
const about = nav.querySelector('.about');

// 3. data-name이 contect인 li 태그 요소
const contect = nav.querySelector('li[data-name="contact"]');

// 4. nav 요소 안에 있는 모든 자식 요소소
const children = nav.querySelectorAll('*');
console.log(children);
const _children = nav.children;
console.log(_children);



getNode();














