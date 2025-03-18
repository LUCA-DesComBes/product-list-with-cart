const btnAdd = document.querySelectorAll(".btn-add");
const jsChangeBtn = document.querySelectorAll(".js-change-btn");
const nbProduct = document.querySelectorAll(".nb-product");
const plusBtn = document.querySelectorAll(".plus");
const minusBtn = document.querySelectorAll(".minus");
const cartNb = document.getElementById("cart-nb");

let counter = 0;
let index = 0;

for (const element of btnAdd) {
	const el = jsChangeBtn[index];
	const btnPlus = plusBtn[index];
	const btnMinus = minusBtn[index];
	const number = nbProduct[index];

	let nbProductCounter = 1;

	btnPlus.addEventListener("click", () => {
		nbProductCounter++;
		counter++;
		cartNb.textContent = counter;
		number.textContent = nbProductCounter;
	});

	btnMinus.addEventListener("click", () => {
		if (nbProductCounter === 1) {
			element.style.display = "flex";
			el.style.display = "none";
			counter--;
		} else {
			nbProductCounter--;
			counter--;
			number.textContent = nbProductCounter;
		}
		cartNb.textContent = counter;
	});

	element.addEventListener("click", () => {
		element.style.display = "none";
		el.style.display = "flex";
		counter++;
		cartNb.textContent = counter;
	});

	index++;
}

function createContainer(el, classList){
    const element = document.createElement(el)
    const classEl = c
}
function createText(el, classList, text){

}


/* <div class="products">
						<div class="gyzer">
							<p class="sec-para">Classic Tiramisu</p>
							<div class="f-r">
								<p class="price"><span class="nb-product">1</span>x</p>
								<p class="name">$5.50</p>
								<p class="total-dollar">$5.50</p>
							</div>
						</div>
						<button class="delete">
							<img src="./asset/remove.svg" alt="remove" />
						</button>
					</div>
					<hr> */