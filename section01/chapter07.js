// 연산자 : 프로그래밍에서의 다양한 연산을 위한 기호, 키워드를 말함
// ex) 덧셈(+), 곱셈(*), 뺄셈(-), 나눗셈(/)

// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 사칙연산처럼 우선순위 적용
let num6_1 = (1 + 2) * 10; // 30
let num6_2 = 1 + 2 * 10; // 21 

// 3. 복합 대입 연산자
// +=, -=, *=, /=, %=
let num7 = 10;
num7 = num7 + 20; // 30
num7 += 20; // 30

// 4. 증감 연산자
let num8 = 10;
// num8++; // 11
// num8--; // 10

// 현재라인에서 즉시 증감연산을 하고 싶은 경우, 복합 대입 연산자를 사용하거나 증감을 변수 앞에 작성해야함 ( 전위 연산 )
// ex) num8 = num8 + 1 or ++num8

// 변수 뒤에 증감연산을 하는 경우, 다음라인에서 계산됨 ( 후위 연산 )
// ex) num8++

// 5. 논리 연산자
// 하나만 참이여도 참
let or = true || false; // true
// 두개 값이 모두 참이어야 참
let and = true && false; // false
// 값을 반전
let not = !true; // false

// 6. 비교 연산자
// 동등 연산자
let comp1 = 1 === 2; // false
// 비동등 연산자
let comp2 = 1 !== 2; // true

// 다른언어와 다르게 자료형 비교가 되지 않아 =를 3개 사용해 자료형까지 비교가능하도록 씀
let comp3 = 1 == "1"; // true

let comp4_1 = 2 > 1; // true
let comp4_2 = 2 < 1; // false
let comp4_3 = 2 >= 1; // true
let comp4_4 = 2 <= 1; // false