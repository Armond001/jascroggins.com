//Product data:
			
	const productNames = ['digital camera','headset with microphone','wireless mouse'];
	const productNumbers = ['dc-25W','h-24 WFSD','wm-js-usb'];
	const productManPrices = [14.90,32.87,6.54];

	class products{
		prod_name="";

		prod_number="";

		prod_manufacture_price=0;

		constructor (prod_name,prod_number,prod_manufacture_price){
			this.prod_name=prod_name;
			this.prod_number=prod_number;
			this.prod_manufacture_price=prod_manufacture_price;
		}

		getProductName() {
			return "product:" +this.prod_name;
		}

		getProuctNumber(){
			return "Product Number:" + this.prod_number;
		}

		getManufacturePrice(){
			return "Product Wholesale Price:" + this.prod_manufacture_price.toLocaleString("en-US", {style:"currency", currency:"USD"});
		}
		
		prod_suggestedRetailPrice( ){
			let retailPrice = this.prod_manufacture_price  *  1.67;
			return retailPrice.toLocaleString("en-US", {style:"currency", currency:"USD"});

		}
	}

	let proudct1 = new products(productNames[0],productNumbers[0],productManPrices[0]);

	let proudct2 = new products(productNames[1],productNumbers[1],productManPrices[1]);

	let proudct3 = new products(productNames[2],productNumbers[2],productManPrices[2]);

	
	let productList = [proudct1,proudct2,proudct3];














