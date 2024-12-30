// 라이브러리 : 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것
// https://www.npmjs.com/ : Node Package Manager (= 노드라이브러리 백화점)

// dependencies : 의존하는 노드라이브러리
// devDependencies : 개발을 위한 노드라이브러리

// package-lock : 패키지가 사용하고 있는 라이브러리의 버전과 정보를 엄밀히 담음(package.json 보다 정확/자세히)
// dependencies에는 ^기호로 버전범위(version range)(대략적인 버전 범위)로 표기됨 (0 ~ 1버전의 최신버전으로 설치되었다라는 의미),
// package-lock에는 정확한 버전이 기입되어있음

// node-modules 폴더 : 실제로 설치된 라이브러리 저장소

// node-modules 폴더와 package-lock 파일이 지워지면, 라이브러리의 실제 설치된 파일이 사라지므로 정상작동하지 않음
// 단! package.json 파일만 있으면, 다시 설치할 수 있음
// npm install 또는 npm i
// dependencies를 기준으로 라이브러리 설치 됨