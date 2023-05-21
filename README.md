# react_movie
- learning react for beginners

## 📁 learn_react_CDN
### 01/ useState & useEffect
### 02/ react.memo() 를 활용하여 쓸데없는 렌더링 중복 방지
### 03/ propTypes

## 📁 my-app
- create-react-app을 이용

### CRA 설치
```
npx create-react-app my-app
```
```
cd my-app
npm start
```

### package.json 파일 중 
```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.11.2",
    "react-scripts": "5.0.1",
    "sass": "^1.62.1",
    "web-vitals": "^2.1.4"
  },
```

- 기존 CRA로 설치된 package.json 파일에서 추가로 prop-types와 react-dom을 설치해줌
```
npm i prop-types
npm i react-router-dom
```

### react-router-dom 활용
- index.js에 다음과 같이 import
```javascript
import { createBrowserRouter, RouterProvide } from 'react-router-dom';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
```

- 아래 처럼도 쓸 수 있음
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import './assets/sass/App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
