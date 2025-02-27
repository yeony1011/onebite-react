import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(()=>{
    const $title = document.getElementsByTagName('title')[0]; // dom이 저장되어있을때 변수앞에 $ 붙임
    $title.innerText = title;
  }, [title]);
}

export default usePageTitle