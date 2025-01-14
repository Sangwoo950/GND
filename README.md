![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/99702761/215339490-0a4b255c-cac3-4384-aa21-f4d842442db1.gif)

# GaeNaDoo | 개나두

<p ><a href='https://gnd-project.vercel.app/'>🔗 웹 사이트 </a> · <a href='https://www.figma.com/file/fC3JHJ1fwaoNHlQmM2VU73/ProjectB4?node-id=0%3A1'>🔗 와이어 프레임 </a> · <a href='https://slash-quiver-80f.notion.site/e47d9765fa854a98add99c778a6f2df1'>🔗 기술문서 </a> </p>
<br/>

## 1. 프로젝트 소개

- 개발자 나두 할 수 있어!
- 유튜브로 공부하기엔 유혹이 너무 많다..! 방해 없는 공부 사이트
- 무료 웹개발 강의 사이트 (로그인만 하면 모든 강의 무료!)
- 웹개발 공부를 하는 학생들이 강의를 듣기 편하도록 카테고리 별로 나누어 유튜브 강의를 제공한다.
- 유튜브 API사용 및 영상 재생을 위한 <YouTube> from ‘react-youtube’ 패키지 사용

<br/>

## 2. 프로젝트 실행

- ```sh
  npm install
  ```
- ```sh
  npm start
  ```

<br/>

## 3. 기술 스택

<img src="https://user-images.githubusercontent.com/88365786/215708897-dff91322-186c-4c7c-9582-080357d1e760.png"  width="800" height="500"/>

<br/>

## 4. 구현 기능

- **공통**
  - 파이어베이스 데이터베이스에 API 데이터 추가
  - 타입스크립트 사용하기
- **헤더**
  - 검색 기능
- **로그인 페이지**
  - 회원가입/로그인 구현 (파이어베이스 인증 사용, 이메일, 구글계정)
  - 회원가입/로그인 유효성 검사
  - 로그아웃 시 lecture페이지 접근 금지
- **메인 페이지**

  - 강의 전체 목록 조회
    (파이어베이스 데이터베이스 사용)
  - 슬라이드 배너
  - 강의 필터링

  - 메인페이지 정렬 기능

- **강의 대시보드 페이지**
  - 강의에 대한 설명과 커리큘럼(강의 리스트) 조회
    (파이어베이스 데이터베이스 사용, 메인 페이지에서 강의 id와 매핑)
  - 강의 후기(댓글) CRUD 구현
    (파이어베이스 데이터베이스 사용)
  - 파이어베이스 데이터베이스를 활용한 pagination 구현
- **강의 페이지**
  - 단일 강의 조회
    (유튜브 API 사용)

<br/>

## 5. 팀 구성

| 역할 | 이름   | 이메일 주소             |
| ---- | ------ | ----------------------- |
| 팀장 | 이정은 | jungwn9494@gmail.com    |
| 팀원 | 박상우 | qtd950@gmail.com        |
| 팀원 | 이태현 | xogus72453659@gmail.com |
| 팀원 | 남동현 | pvc9610@gmail.com       |
| 팀원 | 지회수 | newasborn@gmail.com     |
