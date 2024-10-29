// 元素 - 表單
const form1 = document.querySelector("#form1");

// 設定表單 submit 動作
form1.addEventListener("submit", (event) => {
	event.preventDefault();
	console.log(`submit!`);
});

// 設定每個表單控件
form1.querySelectorAll("input, select, textarea").forEach((elem) => {
	// invalid 事件，只有檢核不通過時才會觸發
	elem.addEventListener("invalid", (event) => {
		console.log(`Invalid ==>`, event.target);
	});
});


// 清空 Console
function clearConsole() {
	console.clear();
}

// 設定／取消 元素的 disabled
function setElementDisabled(selector) {
	document.querySelectorAll(selector).forEach((elem) => {
		elem.disabled = !elem.disabled;
	});
}
// 設定／取消 元素的 readonly
function setElementReadonly(selector) {
	document.querySelectorAll(selector).forEach((elem) => {
		if (elem.getAttribute("readOnly") === null) {
			elem.setAttribute("readOnly", "");
		} else {
			elem.removeAttribute("readOnly");
		}
	});
}


/* willValidate */
function showElementWillValidaty(selector) {
	document.querySelectorAll(selector).forEach((elem) => {
		console.log(`[willValidate] ${selector} #${elem.id} ==>`, elem.willValidate);
	});
}


/* checkValidity() */
function checkForm1Validaty() {
	console.log(`checkValidity() form1 ==>`, form1.checkValidity());
}
function checkElementValidaty(selector) {
	document.querySelectorAll(selector).forEach((elem) => {
		console.log(`checkValidity() ${selector} #${elem.id} ==>`, elem.checkValidity());
	});
}


/* reportValidity() */
function reportForm1Validaty() {
	console.log(`reportValidity() form1 ==>`, form1.reportValidity());
}
function reportElementValidaty(selector) {
	document.querySelectorAll(selector).forEach((elem) => {
		console.log(`reportValidity() ${selector} #${elem.id} ==>`, elem.reportValidity());
	});
}


/* validity */
function showElementValidatyAndMessage(selector)
{
	document.querySelectorAll(selector).forEach((elem) =>
	{
		const validityState = elem.validity;
		console.log(`[validity] ${selector} #${elem.id} ==>`, validityState);
		
		// 找出驗證失敗的項目
		if (!validityState.valid)
		{
			/**
			 * badInput 也會造成 valueMissing 的錯誤。
			 * 為了取得較精準的錯誤原因，先將 valueMissing 暫存起來，之後若有找到其它的原因則會將其覆蓋。
			 */
			let failedConstraint = validityState.valueMissing ? 'valueMissing' : '';
			console.log(`@ failedConstraint initial ==> ${failedConstraint}`);
			
			for (let key in validityState) {
				// console.log(`${key} ==>`, validityState[key]);
				if (key === 'valid' || key === 'valueMissing') {
					;
				}
				else if (validityState[key]) {
					failedConstraint = key;
					break;
				}
			}
			
			console.log(`驗證失敗的項目 ==> ${failedConstraint}`);
		}
		
		console.log(`[validationMessage] ==>`, elem.validationMessage);
		
		// 觸發驗證效果以便觀察
		elem.reportValidity();
	});
}


/* setCustomValidity() */
function setValidityMsg(selector) {
	const elem = document.querySelector(selector);
	elem.setCustomValidity("這是自訂驗證訊息！");
	console.log(`${selector} #${elem.id} [validationMessage] ==>`, elem.validationMessage);
	console.log(`[validity] ==>`, elem.validity);
	console.log(``);
}
function clearValidityMsg(selector) {
	const elem = document.querySelector(selector);
	elem.setCustomValidity("");
	console.log(`${selector} #${elem.id} [validationMessage] ==>`, elem.validationMessage);
	console.log(`[validity] ==>`, elem.validity);
	console.log(``);
}

// text2 手動驗證
function useText2Checking()
{
	const elemText2 = document.querySelector("#form1Text2");
	let text2CheckingController;
	
	// 加入手動驗證
	function addChecking()
	{
		text2CheckingController = new AbortController();
		
		elemText2.addEventListener("input", (event) =>
		{
			// 先清除自訂訊息以進行驗證
			elemText2.setCustomValidity("");
			
			console.log(`原本的驗證狀態...`);
			console.log(`#form1Text2 [validationMessage] ==>`, elemText2.validationMessage);
			console.log(`[validity] ==>`, elemText2.validity);
			console.log(``);
			
			if (elemText2.checkValidity()) {
				console.log(`通過!`);
			}
			else {
				console.log(`失敗!`);
				console.log(``);
				
				elemText2.setCustomValidity("這是自訂驗證訊息！");
				console.log(`自訂的驗證狀態...`);
				console.log(`#${elemText2.id} [validationMessage] ==>`, elemText2.validationMessage);
				console.log(`[validity] ==>`, elemText2.validity);
				
				elemText2.reportValidity();
			}
			
			console.log(``);
		}, 
		{ signal: text2CheckingController.signal });
		
		// 直接自動觸發
		elemText2.dispatchEvent(new Event("input"));
	}
	
	// 取消手動驗證
	function removeChecking() {
		elemText2.setCustomValidity("");
		text2CheckingController.abort();
	}
	
	
	return {
		addChecking,
		removeChecking,
	};
}
// const { addChecking: addText2Checking, removeChecking: removeText2Checking } = useText2Checking();
const text2Checking = useText2Checking();
