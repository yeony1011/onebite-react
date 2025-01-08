const Button = ({text, color, children}) => { // 객체로 전달되므로, 점표기법으로 접근해야함. 구조분해할당으로 사용시 프로퍼티 바로 사용가능!
  
  // console.log(props); // 전달받은 props는 객체로 묶여서 자식컴포넌트의 매개변수로 됨, 해당 객체 내에 props의 값들이 프로퍼티로 하나씩 들어가있음
  
  return (
    // {props.color}
    <button style={{color: color}}>
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