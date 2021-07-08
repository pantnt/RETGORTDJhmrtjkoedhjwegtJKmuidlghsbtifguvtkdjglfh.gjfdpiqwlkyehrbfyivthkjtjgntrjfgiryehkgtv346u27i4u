class Card{
	constructor(icon_img, card_func,price,spot_y){
		this.icon_img=icon_img
		this.price = price;
		this.card_func=card_func
		this.spot_y=spot_y
	}
	drawSelf(army, buff, spot_x){
		coDrawImage(this.icon_img, -1, spot_x, this.spot_y, 1, 0, (army<this.price || buff>0)*70, 3);
		printNumber('$'+this.price, spot_x, 62, 0.7, (army<this.price || buff>0)*70, 10, "center");
	}
	clickEvent(army){
		return this.card_func(army)
	}
}
class SpawningCard extends Card{
	constructor(icon_img, price, max_buff, sum_func){
		super(icon_img,
			function (army){
				if(parseInt(army) >= this.price){
					sum_func();
					return this.price;
				}
				return 0;
			}
			,price,5)
		this.max_buff = max_buff;
	}
	
	
}
class UpgradingCard extends Card{
	constructor(icon_img, prices, upgrade_func){
		super(icon_img,
			function(army){
				if(parseInt(army) >= this.price){
					upgrade_func()
					this.tier+=1;
					this.price=this.prices[this.tier];
					return this.prices[this.tier-1];
				}
				return 0;
			}
			,prices[0],90);
		this.prices=prices
		this.totaltier=prices.length;
		this.tier = 0;
		this.max_buff = 0;
	}
	drawSelf(army, buff, spot_x){
		//console.log(this.tier)
		coDrawImage(this.icon_img, -1, spot_x, this.spot_y, 1, 0, (army<this.price || buff>0 || this.tier==this.totaltier)*70, 3);
		if(this.tier<this.totaltier){
			printNumber('$'+this.price, spot_x, this.spot_y+57, 0.7, (army<this.price || buff>0 )*70, 10, "center");
		}
		
	}
}