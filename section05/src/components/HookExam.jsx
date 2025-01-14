import useInput from "../hooks/useInput";

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부(조건문, 반복문)로 호출될 수는 없다
// 3. 나만의 훅(커스텀 훅) 직접 만들 수 있다.



const HookExam = () => {
  // const state = useState();
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  
  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <input type="text" value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;