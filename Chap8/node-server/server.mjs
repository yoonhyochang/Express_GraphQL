import http from "http"; // HTTP 모듈을 가져옵니다.

// 서버를 생성합니다. 요청에 대한 응답을 처리하는 콜백 함수를 전달합니다.
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello world"); // 루트 URL에 대한 응답입니다.
  } else if (req.url === "/a") {
    res.end("welcome to route a"); // "/a" 경로에 대한 응답입니다.
  } else if (req.url === "/b") {
    res.end("welcome to route b"); // "/b" 경로에 대한 응답입니다.
  } else if (req.url === "/c" && req.method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk); // POST 요청의 본문을 읽습니다.
    });
    req.on("end", () => {
      const params = Buffer.concat(body); // 본문을 결합합니다.
      console.log("body", params.toString());
      res.end(`You submitted these parameters:\n${params.toString()}`); // 본문을 응답으로 반환합니다.
    });
  } else {
    res.end("good bye"); // 기타 요청에 대한 응답입니다.
  }
});

const port = 8000; // 서버가 리스닝할 포트 번호를 정의합니다.
server.listen(port, () => {
  console.log(`The server started on port ${port}`); // 서버가 시작될 때 메시지를 출력합니다.
});


//