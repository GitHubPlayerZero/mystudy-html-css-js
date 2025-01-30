const elemBlueSquare = document.querySelector(".square.blue");
const elemTitle = document.querySelector(".title");
// console.log(elemBlueSquare, elemTitle);

gsap.registerPlugin(ScrollTrigger);

gsap.to(elemBlueSquare, {
  duration: 3,
  x: 500,
  // scrollTrigger: elemBlueSquare,  // 觸發點：藍色方塊，當捲動到藍色方塊時即觸發此動態效果。
  scrollTrigger: elemTitle,  // 觸發點：標題，當捲動到標題時即觸發此動態效果。
});

gsap.from(elemTitle, {
  duration: 5,
  y: 100,
  opacity: 0,
  scrollTrigger: elemTitle, // 觸發點：標題，當捲動到標題時即觸發此動態效果。
});