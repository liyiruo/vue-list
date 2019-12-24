new Vue({
	el:"#vue-app",
	data:{
		age:"",
		name:"",
		sex:""
	},

	methods:{

		logName:function () {

			// body...
			console.log(this.$refs.name.value);
			this.name=this.$refs.name.value;
		},

		logAge:function(){
			console.log(this.$refs.age.value);
			this.age=this.$refs.age.value;

		}
	
}
})


