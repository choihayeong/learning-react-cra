# react_movie
- learning react for beginners

## 📁 _CDN 
- [위키 정리](https://github.com/choihayeong/react_movie/wiki)

## 📁 whatever
- create-react-app(cra)을 이용해서 기본적인 몇 가지 기능 (`useEffect`, `useRef`)
- [위키 정리](https://github.com/choihayeong/react_movie/wiki)

### 의존 패키지
```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "gh-pages": "^4.0.0",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.6.1",
    "react-scripts": "5.0.1",
    "sass": "^1.56.1",
    "web-vitals": "^2.1.4"
  },
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
