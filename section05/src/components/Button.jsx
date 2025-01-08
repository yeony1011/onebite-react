const Button = ({text, color, children}) => { // 객체로 전달되므로, 점표기법으로 접근해야함. 구조분해할당으로 사용시 프로퍼티 바로 사용가능!
  
  // console.log(props); // 전달받은 props는 객체로 묶여서 자식컴포넌트의 매개변수로 됨, 해당 객체 내에 props의 값들이 프로퍼티로 하나씩 들어가있음
  
  // 이벤트 핸들링의 내용이 많은 경우, 밖으로 빼서 사용 가능
  // 이벤트 객체 : 모든 이벤트들은 핸들러 함수를 호출하면서 이벤트 핸들러 함수에 매개변수로 이벤트 객체를 제공
  // 합성이벤트 (Synthetic Base Event) : 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태
  // -> 브라우저의 크로스브라우징 이슈를 하나의 통일된 규칙으로 객체를 포캣팅 해줌
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    // props.color
    // onClick : 이벤트 핸들러
    // <button onMouseEnter={onClickButton} onClick={() => console.log(text)} style={{color: color}}></button>
    <button onClick={onClickButton} style={{color: color}}>
      {text} - {color.toUpperCase()}
      {/* props가 반드시 전달될 것을 예상하고 불러오는건 매우 위험! */}
      {/* 기본값을 설정해 주는게 좋음! */}
      {children}
    </button>
  );
};

// 기본값을 설정 방법
Button.defaultProps = {
  color: 'black'
}

export default Button;