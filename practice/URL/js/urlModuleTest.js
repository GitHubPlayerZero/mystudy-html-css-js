import { UrlTester } from './urlTester.js';

export function getMoudleUrlTester () {
  console.log(`外部模組取得的 window.location.href ==> ${window.location.href}`);
  console.log(`外部模組的 import.meta.url ==> ${import.meta.url}`);
  console.log(``);
  return new UrlTester(import.meta.url);
}
