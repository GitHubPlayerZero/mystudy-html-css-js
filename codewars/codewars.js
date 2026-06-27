function test (testFun, testCase) {
  testCase.forEach((item, index) => {
    const result = testFun(item.case);
    const isCorrect = result === item.answer;

    console.log(`# Test case ${index}`);
    console.log(`${JSON.stringify(item.case)} ==> ${result}`);

    // 若答錯則顯示提示
    if (!isCorrect) {
      console.log(`答錯了！正確答案是：${item.answer}`);
    }

    console.log(``);
  });
}
