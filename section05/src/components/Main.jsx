import './Main.css'; // 파일의 경로 넣어도 자동으로 불러옴

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다 (자바스크립트 표현식 == 특정한 값으로 구성된 식)
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. (다른 요소들 오류, 특히 객체를 넣으면 오류로 빈값이 출력됨)
// 3. 모든 태그는 닫혀있어야 한다 (img도 셀프클로징이나 다른태그처럼 닫아줘야 한다)
// 4. 최상위 태그는 반드시 하나여야 한다 (상황에 따라, <></>빈태그로 묶을 수 있다. 렌더링에 포함되지 않음)

const Main = () => {
  // const number = 10;
  // return (
  //   <main>
  //     <h1>main</h1>
  //     <p>{number + 10}</p>
  //     <p>{number % 2 === 0 ? '짝수' : '홀수'}</p>
  //   </main>
  // )

  const user = {
    name: 'kim',
    isLogin: true
  }

  if(user.isLogin){
    return <div className="logout">로그아웃</div>;
  }else{
    return <div style={{
      backgroundColor: 'red',
      borderBottom: '5px solid blue'
    }}>로그인</div>;
  }

  // return (
  //   <>
  //     {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
  //   </>
  // )
}

export default Main;