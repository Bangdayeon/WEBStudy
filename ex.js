//문자열
console.log("[문자열]==========");
const name = "Bang \'Dayeon"; // 백슬래시로 문자 표현 가능
const age = 22;
const msg = `My name is ${name}`; // `는 문자열 내에 변수를 넣을 때 사용. 계산값도 넣을 수 있다


console.log(age);
console.log(msg);
console.log(age+msg);   //문자열도 더할 수 있음

//사칙연산
console.log("\n[사칙연산]==========");
const plus = 3+2;
const minus = 3-2;
const multiply = 3*2;
const divide = 3/2;

console.log(plus);
console.log(minus);
console.log(multiply);
console.log(divide);


//boolean
console.log("\n[Boolean]==========");
console.log(true);
console.log(false);
console.log(name == "bang");
console.log(age <23);


//null, undefined
console.log("[null, undefined]==========\n");
let _undefined;
let nullUser = null;

console.log(_undefined);
console.log(nullUser);

//typeof 연산자
console.log("[typeof 연산자]==========\n");
console.log(typeof 3);          //number
console.log(typeof name);       //string
console.log(typeof true);       //boolean
console.log(typeof "xxx");      //string
console.log(typeof null);       //object(근데 사실 null은 객체가 아님)
console.log(typeof undefined);  //undefined

//대화상자(alert, prompt, confirm)
console.log("[대화상자(alert, prompt, confirm)]==========\n");
//alert: 알려줌, prompt: 입력받음, confirm: 확인받음
//const name = prompt("입력을 입력하세요.", "나이 입력하세요"); - 여러개 인수를 받을 수 있다
//alert(`환영합니다 ${name}님.`);
//const isAdult = confirm("성인입니까?"); => 확인 및 위소버튼이 있다
//console.log(isAdult);

//단점
//1. 스크립트 일시 정지
//2. 스타일링 불가

//형변환
console.log("[형병환(String(), Number(), Boolean())]==========\n");
const mathScore = prompt