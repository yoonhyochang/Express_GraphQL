import { gql } from "apollo-server-express"; // gql 태그를 사용하기 위해 Apollo Server Express에서 가져옴

const typeDefs = gql`
  type User {                // User 타입 정의
    id: ID!                  // 필수 ID 필드
    username: String!        // 필수 문자열 필드
    email: String            // 옵션 문자열 필드
  }

  type Todo {                // Todo 타입 정의
    id: ID!                  // 필수 ID 필드
    title: String!           // 필수 타이틀 필드
    description: String      // 옵션 설명 필드
  }

  type Query {               // 쿼리 타입 정의
    getUser(id: ID): User    // ID를 사용해 User 객체를 가져오는 쿼리
    getTodos: [Todo!]        // Todo 객체 목록을 가져오는 쿼리
  }

  type Mutation {            // 변이 타입 정의
    addTodo(title: String!, description: String): Todo // 새로운 Todo 객체를 추가하는 변이
  }

  type Subscription {        // 구독 타입 정의
    newTodo: Todo!           // 새로운 Todo 객체가 생성될 때마다 트리거되는 구독
  }
`;

export default typeDefs;    // typeDefs를 내보냄
