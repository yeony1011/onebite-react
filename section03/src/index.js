// ESM
import mul from "./math.js";
import { add, sub } from "./math.js"; // (⭐️)확장자까지 명시!!
// import mul, { add, sub } from "./math.js"; // 같은 경로에서 불러올때는 같이 불어오기 가능!

// CJS
// const moduleData = require("./math"); // 내장함수 require 사용 (모듈의 경로를 인수로 전달)

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// console.log(moduleData);

// const {add, sub} = require("./math"); // 동일코드
console.log(add(1, 2));
console.log(sub(1, 2));

