# user

아주 간단한 리액트 user 앱 (테스트를 위한 프로젝트)

## 수행

### 클론
```sh
git clone https://github.com/KIMSEUNGGYU/user.git
```

### 패키지 다운

```sh
npm i
```

### 개발 환경 수행

```sh
npm run dev
```

### product 환경 수행
```sh
npm run build && npm start
```

---

### users 서비스 제공
- path 방식 제공 (users/1)
- query 방식 제공 (users?id=3)  
  단, id 로만 접근해야함.!  
user 는 1 ~ 10까지만 있음 (id)

- http://localhost:3000/users/1
- http://localhost:3000/users?id=3