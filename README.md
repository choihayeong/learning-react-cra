# react_movie
- learning react for beginners

## 📁 learn_react_CDN

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

### react-router-dom 활용
- index.js에 다음과 같이 import

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
