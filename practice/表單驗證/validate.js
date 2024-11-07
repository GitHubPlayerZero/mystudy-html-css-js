function showError(errors)
{
	console.log(errors);
	console.log(``);
	
	if (!errors) {
		return;
	}
	
	Object.entries(errors).forEach((item) => {
		console.log(`## ${item[0]}`);
		item[1].forEach((msg) => {
			console.log(msg);
		});
	});
}


/* 官網基本 JS 範例測試 */
function testBase()
{
	console.clear();
	
	const constraints = {
		// 屬性名稱為檢核名稱，自訂
		username: {
			// 必填
			presence: true,
			// 排除的值
			exclusion: {
				within: ["nicklas"],
				message: "'%{value}' is not allowed"
			}
		},
		password: {
			presence: true,
			// 長度
			length: {
				minimum: 6,
				message: "must be at least 6 characters"
			}
		}
	};
	
	// 測試 1：只給入不正確的 password
	const test1 = validate({ password: "bad" }, constraints);
	console.log(`test1 ==>`, test1);
	
	console.log(``);
	
	// 測試 2：增加給入不被允許的使用者名稱
	const test2 = validate(
		{
			password: "bad",
			username: "nicklas"
		}, 
		constraints
	);
	console.log(`test2 ==>`, test2);
	
	console.log(``);
	
	// 測試 3：給入正確的 password（6 個字）
	const test3 = validate(
		{
			password: "123456",
			username: "nicklas"
		}, 
		constraints
	);
	console.log(`test3 ==>`, test3);
}


/* 直接使用表單資料 */
function testForm1()
{
	console.clear();
	
	const form1 = document.querySelector("#form1");
	
	/**
	 * 驗證條件
	 * 屬性名稱需與表單元素的 name 一致
	 */
	const constraints = {
		userName: {
			presence: true,
		},
		password: {
			presence: true,
		},
	};
	
	/**
	 * 驗證整份表單
	 * 給入表單 DOM 元素
	 */
	const errors = validate(form1, constraints);
	showError(errors);
}


/* 客製化訊息 */
function testCustom1()
{
	console.clear();
	
	const constraints = {
		"客製名稱": {
			presence: {
				message: "客製訊息",
			},
		},
		"My Test": {
			presence: true,
		},
		"[My Test]": {
			presence: true,
		}
	};
	
	const errors = validate({}, constraints);
	showError(errors);
}

function testCustom2()
{
	console.clear();
	
	const form2 = document.querySelector("#form2");
	
	const constraints = {
		userName: {
			presence: true,
		},
		密碼: {
			// 客製化訊息
			presence: {
				message: "是必填欄位"
			},
		},
	};
	
	const errors = validate(form2, constraints);
	showError(errors);
}


/* 檢核數字 */
function testNumber()
{
	console.clear();
	
	const datas = [
		{ num: 3 },
		{ num: "3" },
		{ num: "+3" },
		{ num: ".3" },
		{ num: "03" },
		{ num: "a" },
		{ num: "e" },
		{ num: "e77" },	// 科學記數法：錯誤的值
		{ num: "7.823E5" },	// 科學記數法：782300
		{ num: "1.2e-4" },	// 科學記數法：0.00012
	];
	
	// 基本檢查
	const constraint1 = {
		num: {
			numericality: true,
		}
	};
	
	// 嚴格檢查
	const constraint2 = {
		num: {
			numericality: {
				strict: true,
			},
		}
	};
	
	datas.forEach((data) => {
		console.log(`## ${JSON.stringify(data)}`);
		console.log(`[基本檢查] ==>`, validate(data, constraint1));
		console.log(`[嚴格檢查] ==>`, validate(data, constraint2));
	})
}

function testFormNumber()
{
	console.clear();
	
	const elemForm = document.querySelector("#formNumber");
	const elemText = elemForm.querySelector("[type=text]");
	const elemNumber = elemForm.querySelector("[type=number]");
	// console.log(elemForm, elemText, elemNumber);
	console.log(`number ==> ${elemNumber.value}`);
	console.log(``);
	
	const check1 = {
		numericality: true,
	};
	const check2 = {
		numericality: {
			strict: true,
		},
	};
	
	const constraint1 = {
		text: check1,
		number: check1
	};
	const constraint2 = {
		text: check2,
		number: check2
	};
	
	console.log(`===== 非嚴格模式 =====`);
	let errors = validate(elemForm, constraint1);
	showError(errors);
	
	console.log(``);
	
	console.log(`===== 嚴格模式 =====`);
	errors = validate(elemForm, constraint2);
	showError(errors);
}


/* 各種檢核測試 */
function testAll()
{
	console.clear();
	
	const form3 = document.querySelector("#form3");
	
	const constraints = {
		userName: {
			presence: true,
		},
		password: {
			presence: {
				message: "是必填欄位"
			},
			length: {
				minimum: 5,
				tooShort: "必須至少 %{count} 個字",	// 客製太短時的訊息
				maximum: 10,
				tooLong: "不可超過 %{count} 個字",	// 客製太長時的訊息
			},
		},
		email: {
			email: true,
		},
		blog: {
			url: true,	// 必須為 http 或 https 類型的網站，FTP 會被擋
		},
		ftp: {
			url: {
				schemes: ["ftp"],	// 限制必須為 FTP
			}
		},
		website: {
			url: {
				schemes: ["http", "https", "ftp"],
				message: "請輸入正確的 http、https 或 FTP 網址",
			}
		},
		quantity: {
			numericality: {
				greaterThan: 0,	// > 0
				onlyInteger: true,
			},
		},
		amount: {
			numericality: {
				greaterThanOrEqualTo: 50,	// >= 50
				onlyInteger: true,
			},
		},
	};
	
	const errors = validate(form3, constraints);
	showError(errors);
}


/* 搭配訊息顯示 */
function testMessage()
{
	console.clear();
	
	/**
	 * 驗證訊息分隔符號：
	 * 用來分隔驗證結果的欄位名稱與訊息內容。
	 * Validate.js 會在訊息內容之前自動加上欄位名稱，因為不想使用欄位名稱，因此加上分隔符號，以便之後依據此符號截取所需內容。
	 */
	const validateSeparator = "｜";
	
	/**
	 * 訊息串接符號：
	 * 用來連接多個錯誤訊息。
	 * Validate.js 的錯誤訊息使用陣列存放，因此可能同時會有多個訊息。
	 * 希望所有訊息均能串成一列顯示，因此之間需要加上符號以供區別。
	 */
	const msgLinkSymbol = "；";
	
	const form4 = document.querySelector("#form4");
	
	// 驗證條件
	const constraints = {
		userName: {
			presence: {
				message: validateSeparator + "請輸入資料"
			},
		},
		password: {
			presence: {
				message: validateSeparator + "請輸入資料"
			},
			length: {
				minimum: 5,
				tooShort: validateSeparator + "必須至少 %{count} 個字",	// 客製太短時的訊息
				maximum: 10,
				tooLong: validateSeparator + "不可超過 %{count} 個字",	// 客製太長時的訊息
			},
		},
		email: {
			email: {
				message: validateSeparator + "格式不正確",
			},
		},
		blog: {
			// 必須為 http 或 https 類型的網站，FTP 會被擋
			url: {
				message: validateSeparator + "請輸入正確的 http 或 https 網址",
			},
		},
		ftp: {
			url: {
				schemes: ["ftp"],	// 限制必須為 FTP
				message: validateSeparator + "請輸入正確的 FTP 網址",
			}
		},
		website: {
			url: {
				schemes: ["http", "https", "ftp"],
				message: "請輸入正確的 http、https 或 FTP 網址",
			}
		},
		quantity: {
			numericality: {
				greaterThan: 0,	// > 0
				notGreaterThan: validateSeparator + "必須大於 0",
				onlyInteger: true,
				notInteger: validateSeparator + "請輸入整數",
			},
		},
		amount: {
			numericality: {
				greaterThanOrEqualTo: 50,	// >= 50
				notGreaterThanOrEqualTo: validateSeparator + "必須大於或等於 50",
				onlyInteger: true,
				notInteger: validateSeparator + "請輸入整數",
			},
		},
	};
	
	// 執行驗證
	const errors = validate(form4, constraints);
	console.log(errors);
	console.log(``);
	
	
	// 先清除畫面上所有錯誤訊息
	form4.querySelectorAll(".error-message").forEach((elem) => {
		elem.textContent = "";
	});
	
	// 處理錯誤訊息
	for (let key in errors)
	{
		console.log(`${key} ==> ${errors[key]}`);
		
		/**
		 * 格式化訊息：
		 * 截取訊息內容 並 將多個訊息串接
		 */
		let msg = "";
		errors[key].forEach((str) => {
			const index = str.indexOf(validateSeparator);
			if (index > -1) {
				str = str.substring(index + validateSeparator.length);
			}
			msg += msgLinkSymbol + str;
		});
		
		// 移除多餘的串接符號
		if (msg.startsWith(msgLinkSymbol)) {
			msg = msg.substring(msgLinkSymbol.length);
		}
		
		// 顯示訊息
		form4.querySelector(`.error-message[data-check=${key}]`).textContent = msg;
	}
	
	if (!errors) {
		alert("Save！");
	}
}
