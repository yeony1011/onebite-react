// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // Date()객체 : 생성자
console.log(date1); // 현재시간

let date2 = new Date('1990-01-01/10:10:10'); // '1990/01/01' 형식은 바뀌어도 됨 // 시간은 앞에 슬래쉬 넣고 작성
// let date2 = new Date(1990,01,01,10,10,10); // 콤마로도 구분 가능!
console.log(date2);


// 2. 타임 스탬프
// 특정 시간이 "1990.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// 1990.01.01 00시 00분 00초 UTC( 협정세계시간 )
let ts1 = date1.getTime(); // getTime : 시간에 해당하는 타임스탬프를 계산해줌
console.log(ts1); // date1 현재 시간 기준으로 ts1 만큼 지났다.

let date4 = new Date(ts1);
console.log(date1, date4);


// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 1월 : 0, 2월 : 1, 3월 : 2, ..., 12월 : 11 로 노출되어 +1 꼭 해주기
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);


// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 실제로 3월 노출됨
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);


// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Thu Mar 30 2023
console.log(date1.toLocaleString()); // 2023. 3. 30. 오후 11:59:59