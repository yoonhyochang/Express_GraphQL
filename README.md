**설정을 초기화** npm init

**코드 실행** node server.mjs


**curl을 사용해POST 요청하기** curl --header "Content-Type: application/json" --request POST --data '{"userid":"1","hello"}' "http://localhost:8000/c"

**nodemon 설치** npm i nodemon -g


**Express.js 프레임워크를 설치** npm i express


**post 요청 (터미널에서 작성)** curl -X POST -H "Content-Type: application/json" -d "{\"groupid\": 2}" http://localhost:8000/api/v1/groups
Group Admins

-------------------chap9-----------------

**자동 완성, 타입 검사 등의 기능패키지** npm i express apollo-server-express @types/express

**GraphQL 스키마를 작업하는 데 유용한 도구** npm i @graphql-tools/schema

 **GraphQL 스키마와 관련된 여러 유틸리티 함수** npm i @graphql-tools/utils

 **UIUD의존성 설치** npm i uuid @types/uuid

**GraphQL JavaScript 구현 패키지** npm i graphql

 **Apollo Server의 핵심 라이브러리를 설치** npm i apollo-server-core

**타입 스크립트 초기화** tsc --init
