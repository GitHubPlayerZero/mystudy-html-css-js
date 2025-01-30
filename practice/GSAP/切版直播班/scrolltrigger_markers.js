const elemBlueSquare = document.querySelector(".square.blue");
const elemTitle = document.querySelector(".title");
// console.log(elemBlueSquare, elemTitle);

gsap.registerPlugin(ScrollTrigger);

// 藍色方塊動效
gsap.to(elemBlueSquare, {
  duration: 3,
  x: 600,
  repeat: -1,
  scrollTrigger: {
    // 觸發點：藍色方塊，當捲動到藍色方塊時即觸發此動態效果。
    trigger: elemBlueSquare,

    // 開啟標示，使用預設屬性值
    // markers: true,

    // 開啟標示，自訂屬性值
    markers: {
      startColor: "red", // 改為紅色（預設為綠色）
      endColor: "green",  // 改為綠色（預設為紅色）
      fontSize: "24px",
      fontWeight: "bold",
      // indent: 20,  // 縮排（標示為靠右，因此這邊的縮排為右邊）
    },

    // 分別為「觸發元素本身」開始被觸發的位置（start），以及「畫面」開始被觸發的位置（scroller-start）
    // 當觸發元素的 start 與畫面的 scroller-start 重疊後才會發生觸發的效果
    start: "50% 85%",

    // 分別為「觸發元素本身」結束被觸發的位置（end），以及「畫面」結束被觸發的位置（scroller-end）
    end: "80% 20%",
  },
});

// 標題動效
gsap.from(elemTitle, {
  duration: 5,
  y: 100,
  opacity: 0,

  scrollTrigger: {
    // 觸發點：標題，當捲動到標題時即觸發此動態效果。
    trigger: elemTitle,

    // 開啟標示，使用預設屬性值
    markers: true,

    start: "top 65%",
    end: "bottom 40%",
  },
});
