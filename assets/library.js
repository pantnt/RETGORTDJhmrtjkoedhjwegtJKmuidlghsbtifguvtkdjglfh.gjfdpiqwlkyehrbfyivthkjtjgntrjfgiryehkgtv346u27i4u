class LibraryCls{
	constructor(cardLib){
		this.cardLib = cardLib;
	}
}
/*FOR TEST*/

var chop_damage=10

/*FOR TEST*/


var Library2=new LibraryCls({
	"chopper":new UpgradingCard("icon_of_chop",[1,2,3,4,5,6,7,8,9],function(){
		chop_damage*=2
	})
})


var Library = new LibraryCls({
	"chopper": new SpawningCard("icon_of_chop", 1, 1, function(){
		new_skull(x=0, y=400, func_=skeleton_walking_func(3,3,8,4,35,chop_damage), 1, 80, 40);
	}),

	"archer": new SpawningCard("icon_of_bow", 120, 30, function(){
		new_skull(x=0, y=400, func_=skeleton_bow_walking_func(20,
			function(lead_l, lead_r){
				let dist=Math.abs(this.x-(this.team==1?lead_r:lead_l)); //get distance
		
				if(dist>270){
					//long shoot
					new_arrow(this.x+16*this.dir, this.y-22, this.team, 11*this.dir, -3, 0.2*this.dir, 0.2, 40);
				}else{
					//short shoot
					new_arrow(this.x+16*this.dir, this.y-22, this.team, 10*this.dir, -1.8, 0.2*this.dir, 0.2, 25);
				}
			}
		), 1, 80, 120);
	}),
	"archer#cBow": new SpawningCard("icon_of_bow", 1, 1, function(){
		new_skull(x=0, y=400, func_=skeleton_bow_walking_func(0,
			function(lead_l, lead_r){
				let damage=8;
				
				new_arrow(this.x+16*this.dir, this.y-22, this.team, 10*this.dir, -2, 0.2*this.dir, 0.2, damage);
				new_arrow(this.x+16*this.dir, this.y-22, this.team, 11*this.dir, -2.2, 0.22*this.dir, 0.22, damage);
				new_arrow(this.x+16*this.dir, this.y-22, this.team, 12*this.dir, -2.4, 0.24*this.dir, 0.24, damage);
				new_arrow(this.x+16*this.dir, this.y-22, this.team, 13*this.dir, -2.6, 0.26*this.dir, 0.26, damage);
				new_arrow(this.x+16*this.dir, this.y-22, this.team, 14*this.dir, -2.8, 0.28*this.dir, 0.28, damage);
				new_arrow(this.x+16*this.dir, this.y-22, this.team, 15*this.dir, -3, 0.3*this.dir, 0.3, damage);
				new_arrow(this.x+16*this.dir, this.y-22, this.team, 16*this.dir, -3.2, 0.32*this.dir, 0.32, damage);
				new_arrow(this.x+16*this.dir, this.y-22, this.team, 17*this.dir, -3.4, 0.34*this.dir, 0.34, damage);
				new_arrow(this.x+16*this.dir, this.y-22, this.team, 18*this.dir, -3.6, 0.36*this.dir, 0.36, damage);
				new_arrow(this.x+16*this.dir, this.y-22, this.team, 19*this.dir, -3.8, 0.38*this.dir, 0.38, damage);
				new_arrow(this.x+16*this.dir, this.y-22, this.team, 20*this.dir, -4, 0.4*this.dir, 0.4, damage);
				new_arrow(this.x+16*this.dir, this.y-22, this.team, 21*this.dir, -4.2, 0.42*this.dir, 0.42, damage);
			}
		), 1, 700, 800);
	}),
	"defender": new SpawningCard("icon_of_shield", 200, 200, function(){
		new_skull(x=0, y=400, func_=skeleton_shield_walking, 1, 1200, 200);
	}),

	"police": new SpawningCard("icon_of_police", 350, 380, function(){
		new_skull(x=0, y=400, func_=skeleton_police_walking_func(200,
			function(lead_l, lead_r){ //a shooting function parameter so you can make costumize shoots
				new_bullet(this.x+25*this.dir, this.y-23, this.team, this.dir*25, 0, this.dir*0.2, 0.05, 250);
				new_bullet(this.x+25*this.dir, this.y-22, this.team, this.dir*25, 0.3, this.dir*0.2, 0.05, 250);
				new_bullet(this.x+25*this.dir, this.y-24, this.team, this.dir*25, -0.3, this.dir*0.2, 0.05, 250);
			}
		), 1, 200, 350);
	}),
});