# learning-react-cra
- learning react for beginners

## 📁 _CDN 
- [위키 정리](https://github.com/choihayeong/react_movie/wiki)
- challenge #1 : Unit Converter

## 📁 front
- CRA challenge 등 통합

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

### 개발 서버 실행 포트 번호 변경 (`localhost:3000`)
- 기본적으로 cra 포트번호는 `3000`
- 아래와 같이 `set PORT={변경하고 싶은 포트 번호} &&`를 추가
```json
  "scripts": {
    "start": "set PORT=3030 && react-scripts start",
  },
```
- 또는 다음과 같이 root 폴더에 `.env`파일 생성 후 `PORT={변경하고 싶은 포트 번호}` 같이 저장
```
PORT=3030
```

## 📁 whatever
- create-react-app(cra)을 이용한 기본적인 몇 가지 기능 이용 (`useEffect`, `useRef`)
- [위키 정리](https://github.com/choihayeong/react_movie/wiki)

## 📁 simple-todo
- challenge #2 : simple todo

## 📁 coin-tracker
- challenge #3 : coin tracker using api by fetching data
- [Using coinpaprika api](https://api.coinpaprika.com/#tag/Tickers)

## 📁 react-movie
- project : react movie using api by fetching data
- [Using yts.mx api](https://yts.mx/api)
