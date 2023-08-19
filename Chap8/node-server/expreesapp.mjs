import express from "express";          // Express 프레임워크를 가져옴
import bodyParser from "body-parser";   // 요청 본문을 분석하기 위한 미들웨어

const router = express.Router();        // Express 라우터 인스턴스를 생성
const app = express();                  // Express 앱 인스턴스를 생성

app.use(bodyParser.json());             // JSON 요청 본문을 파싱하는 미들웨어 사용

app.use((req, res, next) => {           // 첫 번째 미들웨어 정의 (로깅용)
  console.log("First middleware.");
  next();
});

app.use(router);                        // 라우터를 앱에 사용하도록 설정

router.get("/api/v1/users", (req, res, next) => {  // GET /api/v1/users 경로의 핸들러
  const users = [
    {
      id: 1,
      username: "tom",
    },
    {
      id: 2,
      username: "jon",
    },
    {
      id: 3,
      username: "linda",
    },
  ];
  console.log(req.query.userid);
  const user = users.find((usr) => usr.id == req.query.userid);
  res.send(`User ${user?.username}`);  // 찾은 사용자의 이름 응답
});

router.post("/api/v1/groups", (req, res, next) => { // POST /api/v1/groups 경로의 핸들러
  const groups = [
    {
      id: 1,
      groupname: "Admins",
    },
    {
      id: 2,
      groupname: "Users",
    },
    {
      id: 3,
      groupname: "Employees",
    },
  ];
  const group = groups.find((grp) => grp.id == req.body.groupid);
  res.send(`Group ${group.groupname}`); // 찾은 그룹의 이름 응답
});

app.use((err, req, res, next) => {      // 오류 처리 미들웨어
  res.status(500).send(err.message);    // 오류 메시지를 응답으로 보냄
});

app.listen({ port: 8000 }, () => {       // 서버를 8000 포트에서 시작
  console.log("Express Node server has loaded!");
});
