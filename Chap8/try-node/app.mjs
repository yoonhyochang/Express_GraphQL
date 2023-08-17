import fs from "fs"; // 파일 시스템 모듈을 가져옵니다.

// "test.txt" 파일에 "Hello World" 문자열을 작성합니다.
fs.writeFile("test.txt", "Hello World", () => {
  // 파일 작성이 완료되면 "test.txt" 파일을 읽어서 내용을 콘솔에 출력합니다.
  fs.readFile("test.txt", "utf8", (err, msg) => {
    // err에는 오류 객체가 있을 수 있고, msg에는 읽은 파일의 내용이 포함됩니다.
    console.log(msg); // 파일에서 읽은 문자열을 콘솔에 출력합니다.
  });
});
