// 基本共用設定
const baseSetting = {
  x: 600, // X 軸移動距離，單位：px
  // y: 100, // y 軸移動距離，單位：px
  duration: 2,  // 執行時間，單位：秒
  rotation: 180,  // 旋轉，單位：度
  backgroundColor: "#ddaaff", // 背景色
  opacity: 0.3, // 不透明度 (設為 0 即代表完全透明)
};

// ========== 移動模式 ==========
// to：預設狀態 → 指定狀態
gsap.to(".to", { ...baseSetting });

// from：指定狀態 → 預設狀態
gsap.from(".from", { ...baseSetting });

// fromTo：起點 → 終點
gsap.fromTo(".fromto",
  // 起點狀態
  {
    x: 300,
    backgroundColor: "blue",
    opacity: 1,
  },
  // 終點狀態
  {
    ...baseSetting,
    x: 700,
    backgroundColor: "green",
  }
);


// ========== 延遲 ==========
// 延遲
gsap.to(".delay", {
  ...baseSetting,
  delay: 2, // 延遲，單位：秒
});


// ========== 重複 ==========
// 重複 2 次
// 預設會先有 1 次，接著再重複 2 次，所以最後總共跑了 3 次
gsap.to(".repeat2", {
  ...baseSetting,
  repeat: 2,
});

// 無限重複
gsap.to(".repeat-forever", {
  ...baseSetting,
  repeat: -1,
});


// ========== 速率 Easing ==========
// power4
gsap.to(".ease-power4-out", {
  ...baseSetting,
  ease: "power4.out",
});
gsap.to(".ease-power4-in", {
  ...baseSetting,
  ease: "power4.in",
});

// bounce
gsap.to(".ease-bounce-out", {
  ...baseSetting,
  ease: "bounce.out",
});
gsap.to(".ease-bounce-in", {
  ...baseSetting,
  ease: "bounce.in",
});

// back
gsap.to(".ease-back-out", {
  ...baseSetting,
  ease: "back.out",
});
gsap.to(".ease-back-in", {
  ...baseSetting,
  ease: "back.in",
});


// ========== 時間軸 Timeline ==========
// 基本範例 - 一個接一個執行
const t1 = gsap.timeline();
// 會按照宣告的順序跑
t1.to(".timeline-first", { x: 500, duration: 2 });  // 第一個執行
t1.to(".timeline-third", { x: 400, duration: 1, opacity: 0.3 });  // 第二個執行
t1.to(".timeline-second", { x: 300, duration: 0.5, ease: "bounce.out" }); // 第三個執行

// 指定絕對的等待時間
const t2 = gsap.timeline();
t2.to(".timeline2-first", { x: 500, duration: 3 }, "4") // 4 秒後執行
  .to(".timeline2-second", { x: 400, duration: 3, opacity: 0.3 }, "2")  // 2 秒後執行
  .to(".timeline2-third", { x: 300, duration: 0.5, ease: "bounce.out" }); // 等大家執行完再執行

// 指定相對的等待時間
// 注意：是相對於前面所有執行者中最長的時間
const t3 = gsap.timeline();
t3.to(".timeline3-first", { x: 500, duration: 7 })  // 執行時間 7 秒
  // 前面最長執行時間 = 7，等待時間 = 7 - 5 = 2，執行時間 3，總執行時間 = 2 + 3 = 5
  .to(".timeline3-second", { x: 400, duration: 3 }, "-=5")
  // 前面最長執行時間 = 7，等待時間 = 7 - 2 = 5，執行時間 3，總執行時間 = 5 + 3 = 8
  .to(".timeline3-third", { x: 400, duration: 3 }, "-=2")
  // 前面最長執行時間 = 8，等待時間 = 8 - 2 = 6，執行時間 3，總執行時間 = 6 + 3 = 9
  .to(".timeline3-fourth", { x: 400, duration: 3 }, "-=2")
  // 前面最長執行時間 = 9，等待時間 = 9 - 8 = 1，執行時間 3，總執行時間 = 1 + 3 = 4
  .to(".timeline3-fifth", { x: 400, duration: 3 }, "-=8")
  // 前面最長執行時間 = 9，等待時間 = 9 - 7 = 2，執行時間 3，總執行時間 = 2 + 3 = 5
  .to(".timeline3-sixth", { x: 400, duration: 3 }, "-=7");
