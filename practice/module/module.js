// 取得模組 URL 資訊
const moduleUrl = new URL(import.meta.url);
console.log(`Module URL ==>`, moduleUrl);

// 取得模組 name 參數
let name = moduleUrl.searchParams.get("name");
name = name ? `[${name}] ` : "";
console.log(`${name}我是模組的 JS`);

let cnt = 0;
console.log(`${name}cnt ==> ${cnt}`);
cnt ++;
console.log(`${name}cnt ==> ${cnt}`);

export function getCnt() {
  return cnt;
}

export function addCnt () {
  cnt ++;
  console.log(`${name}addCnt ==> ${cnt}`);
}