// 基本共用設定
const baseSettings = {
  // 可以循環
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};


/* 基本測試 */
// 只有一個
// 會發生警告：Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters
const paginationBase1 = new Swiper(".demo-pagination-base1", {
  ...baseSettings,
  pagination: {
    el: ".swiper-pagination",
  },
});

// 有兩個
const paginationBase2 = new Swiper(".demo-pagination-base2", {
  ...baseSettings,
  pagination: {
    el: ".swiper-pagination",
  },
});


/* 分頁樣式 */
// 分頁 - 動態
const paginationDynamic = new Swiper(".demo-pagination-dynamic", {
  ...baseSettings,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // 動態效果
    dynamicBullets: true,
  },
});

// 分頁 - progress bar
const paginationProgress = new Swiper(".demo-pagination-progress", {
  ...baseSettings,
  pagination: {
    el: ".swiper-pagination",
    // progress bar
    type: "progressbar",
  },
});

// 調整 progress bar 樣式
function usePaginationProgressBar () {
  // 元素 - progress bar
  const elemPagination = document.querySelector("#paginationProgress");
  // 元素 - progress bar 進度的部份
  const elemProgressFill = elemPagination.querySelector(".swiper-pagination-progressbar-fill");
  const origHeight = elemPagination.offsetHeight;
  const origBackgroundColor = getComputedStyle(elemProgressFill).backgroundColor;

  // Progress bar 顯示在下面
  function placeProgressBelow (elem) {
    let top, bottom;

    if (elem.checked) {
      top = "auto", bottom = "0";
    } else {
      top = "0", bottom = "auto";
    }

    elemPagination.style.top = top;
    elemPagination.style.bottom = bottom;
  }

  // 加大 Progress bar
  function increaseProgressSize (elem) {
    let height;

    if (elem.checked) {
      height = "15px";
    } else {
      height = `${origHeight}px`;
    }

    elemPagination.style.height = height;
  }

  // 改變 Progress bar 顏色
  function changeProgressColor (elem) {
    let backgroundColor;

    if (elem.checked) {
      backgroundColor = "red";
    } else {
      backgroundColor = origBackgroundColor;
    }

    elemProgressFill.style.backgroundColor = backgroundColor;
  }

  return { placeProgressBelow, increaseProgressSize, changeProgressColor };
}
const paginationProgressBar = usePaginationProgressBar();

// 分頁 - 分頁數
const paginationFraction = new Swiper(".demo-pagination-fraction", {
  ...baseSettings,
  pagination: {
    el: ".swiper-pagination",
    // 分頁數
    type: "fraction",
  },
});

// 自訂
const paginationBullet = new Swiper(".demo-pagination-custom", {
  ...baseSettings,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="swiper-pagination-custom ' + className + '">' + (index + 1) + "</span>";
    },
  },
});


/* 垂直 */
const paginationVertical = new Swiper(".demo-pagination-vertical", {
  ...baseSettings,
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


/* 自動播放 */
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const paginationAuto = new Swiper(".demo-pagination-auto", {
  ...baseSettings,
  // 垂直
  // direction: "vertical",
  // 輪播之間的留白
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 自動播放
  autoplay: {
    delay: 2000,
    // 當對輪播進行操作時，會中斷自動播放
    disableOnInteraction: true,
  },
  // 倒計時
  on: {
    autoplayTimeLeft (s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});


/* 一頁多個 view */
const paginationPerview = new Swiper(".demo-pagination-perview", {
  ...baseSettings,
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


/* 可鍵盤控制 */
const paginationKeyboard = new Swiper(".demo-pagination-keyboard", {
  ...baseSettings,
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: {
    enabled: true,
  },
});
