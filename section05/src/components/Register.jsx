import {useState, useRef} from 'react';

// 간단한 회원가입 폼
// 수집 목록
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {

  // const [name, setName] = useState('이름');
  // const [birth, setBrith] = useState('');
  // const [country, setCountry] = useState('');
  // const [bio, setBio] = useState('');

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: ""
  });
  // console.log(input);

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = () => {
    if(input.name === ""){
      inputRef.current.focus();
    }
  }

  // const onChangeName = (e) => {
  //   // setName(e.target.value);
  //   setInput({
  //     ...input,
  //     name: e.target.value
  //   });
  // }

  // const onChangeBirth = (e) => {
  //   // setBrith(e.target.value);
  //   setInput({
  //     ...input,
  //     birth: e.target.value
  //   });
  // }

  // const onChangeCountry = (e) => {
  //   // setCountry(e.target.value);
  //   setInput({
  //     ...input,
  //     country: e.target.value
  //   });
  // }

  // const onChangeBio = (e) => {
  //   // setBio(e.target.value);
  //   setInput({
  //     ...input,
  //     bio: e.target.value
  //   });
  // }

  return (
    <div>
      <div><input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"} /></div>
      <div><input name="date" type="date" value={input.birth} onChange={onChange} /></div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <div>
        <button onClick={onSubmit}>제출</button>
      </div>
    </div>
  );
}

export default Register;