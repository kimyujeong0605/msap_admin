import Header from './components/common/Header';
import TabList from './components/common/TabList';
import './App.css';
import customAxios from './customAxios';
import React, { useState, useEffect } from 'react';

function App() {
  // IP주소 변수 선언
  const [ip, setIp] = useState('');

  // IP주소 값을 설정합니다.
  function callback(data) {
    setIp(data);
  }

  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(() => {
    // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
    customAxios('/ip', callback);
  }, []);
  console.log({ ip });
  return (
    <div>
      {' '}
      <Header />이 기기의 IP주소는 {ip}입니다.
      <TabList></TabList>
      {''}{' '}
    </div>
  );
}
export default App;
