new Vue({
	el:"#vue-app",
	data:{
		name:"liyiruo",
		job:"java develop",
		website:"https://www.baidu.com",
		websiteTag:"<a href='https://www.baidu.com'>next-step</a>"

	},
	methods:{
		greet: function(time){
			return this.name+': good'+" "+time+"!";
		}

	}
})
/**

*/

