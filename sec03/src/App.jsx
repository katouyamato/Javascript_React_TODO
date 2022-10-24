import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CororfulMessage } from "./components/CororfulMessage";

const App = () => {
  // useStateは分割代入で取り出す。配列の0番目の変数を1番目の関数で管理
  const [num, setNum] = useState(0);
  const [FaceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!FaceShowFlag);
  };

  // 下記ではnumのステートが変わる時のみ第一引数を実行する
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        FaceShowFlag || setFaceShowFlag(true);
      } else {
        FaceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <CororfulMessage color="blue">お元気ですか</CororfulMessage>
      <CororfulMessage color="pink">元気です！</CororfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {FaceShowFlag && <p>😅</p>}
      {/* 左辺がtrueであれば右辺を返す */}
    </>
  );
};

export default App;
