new Vue({
	el:"#vue-app",
	data:{
		age:30
	},
	methods:{
		add:function(inc){
		this.age+=inc;
		},
		sub:function(des){
		this.age-=des;
		}
		
	}
})
/**

*/

