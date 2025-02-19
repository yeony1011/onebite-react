import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  }


  const onClickDelete = () => {
    onDelete(id);
  }
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} readOnly onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, Props가 바뀌었는지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 x
//   // F -> Props 바뀜 -> 리렌더링 o

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });
// memo는 얕은비교, 객체는 모두 다르다라고 판단함

export default memo(TodoItem);