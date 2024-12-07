/* 解構陣列基本測試 */
function testAryBase () {
  console.clear();
  console.log(`====== 解構陣列基本測試 ======`);

  const ary = [10, 20, 30, 40, 50];
  let a, b, rest;

  console.log(`ary ==>`, ary);
  console.log(``);

  // 會依序解構
  console.log(`會依序解構`);
  [a, b] = ary;
  console.log(a); // 10
  console.log(b); // 20

  console.log(``);

  // 可跳過中間的元素 (跳過 2 個)
  console.log(`可跳過中間的元素 (跳過 2 個)`);
  [a, , , b] = ary;
  console.log(a); // 10
  console.log(b); // 40

  console.log(``);

  // 剩餘元素，可將剩下的元素值存放為陣列
  console.log(`剩餘元素，可將剩下的元素值存放為陣列`);
  [...rest] = ary;
  console.log(rest); // [10, 20, 30, 40, 50]

  [a, b, ...rest] = ary;
  console.log(rest); // [30, 40, 50]

  console.log(``);

  // 賦值的變數若超過陣列元素數量，會給 undefined
  console.log(`賦值的變數若超過陣列元素數量，會給 undefined`);
  let [a2, b2, c2, d2, e2, f2, g2] = ary;
  console.log(a2, b2, c2, d2, e2, f2, g2);  // 10 20 30 40 50 undefined undefined

  console.log(``);

  // 給定預設值，若解構的值為 undefined 則會使用預設值
  console.log(`給定預設值，若解構的值為 undefined 則會使用預設值`);
  let [a3 = 88, b3, c3, d3, e3, f3, g3 = 99] = ary;
  console.log(a3, b3, c3, d3, e3, f3, g3);  // 10 20 30 40 50 undefined 99
}


/* 應用：交換值 */
function exchangeValue () {
  console.clear();
  console.log(`====== 應用：交換值 ======`);

  // 交換純值變數的值
  console.log(`交換純值變數的值`);
  let a = 1;
  let b = 3;

  // 先解析右邊：以 b、a 的值組成一個陣列，也就是 [3, 1]
  // 再解析左邊：以解構的方式取出陣列的值，並賦值給 a、b。
  // 所以 a 變成 3；b 變成 1。
  [a, b] = [b, a];
  console.log(a); // 3
  console.log(b); // 1

  console.log(``);

  // 交換陣列元素的值
  console.log(`交換陣列元素的值`);
  const arr = [1, 2, 3];

  // 先解析右邊：以 arr[1]、arr[2] 的值組成陣列，也就是 [2, 3]
  // 再解析左邊：以解構的方式取出陣列的值，並賦值給 arr[2]、arr[1]。
  // 所以 arr[2] 變成 2；arr[1] 變成 3。
  [arr[2], arr[1]] = [arr[1], arr[2]];
  console.log(arr); // [1, 3, 2]
}


/* 解構物件基本測試 */
function testObjBase()
{
  console.clear();
  console.log(`====== 解構物件基本測試 ======`);
  
  const obj = { a: 1, b: 2 };
  console.log(obj);
  console.log(``);
  
  // 將 a、b 解構出來
  // 認屬性名稱，不需要按照順序
  console.log(`將 a、b 解構出來`);
  const { b, a } = obj;
  console.log(a, b);  // 1 2
  
  console.log(``);
  
  // 解構不存在的屬性會得到 undefined
  console.log(`解構不存在的屬性會得到 undefined`);
  const { c } = obj;
  console.log(c);  // undefined
  
  console.log(``);
  
  // 可以設定預設值取代 undefined
  console.log(`可以設定預設值取代 undefined`);
  const { d = 99 } = obj;
  console.log(d); // 99
  
  console.log(``);
  
  // 若已事先宣告了同名的變數，則必須將整個語法用小括弧包起來，否則會拋錯
  console.log(`若已事先宣告了同名的變數，則必須將整個語法用小括弧包起來，否則會拋錯`);
  const obj2 = { a2: 3, b2: 4 };
  console.log(obj2);
  
  let a2, b2;
  // { a2, b2 } = obj;  // SyntaxError: Unexpected token '='
  ({ a2, b2 } = obj2);
  console.log(a2, b2);  // 3 4
  
  console.log(``);
  
  // 剩餘屬性
  console.log(`剩餘屬性`);
  const obj3 = { a3: 'a', b3: 'b', c3: 'c', d3: 'd' };
  console.log(obj3);
  
  const { a3, b3, ...others } = obj3;
  console.log(a3);  // a
  console.log(b3);  // b
  console.log(others);  // {c3: 'c', d3: 'd'}
  
  console.log(``);
  
  // 重新命名
  console.log(`重新命名`);
  const obj4 = { a4: 'a', b4: 'b', c4: 'c', d4: 'd', e4: undefined, f4: '陪我看流星雨' };
  console.log(obj4);
  
  const { a4: myA, b4, d4: myD, e4 } = obj4;
  
  // 若有重新命名，變數名稱會是新名稱而不是原名稱
  // console.log(a4);  // ReferenceError: a4 is not defined
  console.log(myA, b4, myD, e4);  // a b d undefined
  
  console.log('');
  
  // 重新命名給已存在的變數
  console.log(`重新命名給已存在的變數`);
  const dataAry = [];
  let myB;
  
  ({ b4: myB, a4: dataAry[0], c4: dataAry[1] } = obj4);
  console.log(dataAry); // ['a', 'c']
  console.log(myB); // b
  
  console.log(``);
  
  // 重新命名 + 預設值
  // e4 之前已取出來過了，使用重新命名宣告成新的變數，並給予預設值
  console.log(`重新命名 + 預設值`);
  const { e4: myE = 'EEE' } = obj4;
  console.log(e4, myE); // undefined 'EEE'
  
  console.log(``);
  
  // 屬性名稱使用變數
  // 需使用中括弧將屬性名稱包起來，並且需要重新命名
  console.log(`屬性名稱使用變數`);
  const key = 'f4';
  const { [key]: f4 } = obj4;
  console.log(f4);  // 陪我看流星雨
}
