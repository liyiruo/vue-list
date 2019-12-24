new Vue({
	el:"#vue-app",
	data:{
		age:30,
		x:0,
		y:0
	},
	methods:{
		add:function(inc){
		this.age+=inc;
		},
		sub:function(des){
		this.age-=des;
		},
		updateXY:function(event){
		console.info(event);

		this.x=event.offsetX;
		this.y=event.offsetY;
		}
		
	}
})
/**

*/

