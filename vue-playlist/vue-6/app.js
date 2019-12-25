new Vue({
	el:"#vue-app",
	data:{
		a:0,
		b:0,
		age:20
	},

	methods:{
	/*
	addToA:function(){
	return this.a+this.age;
	},

	addToB:function(){
	return this.b+this.age;
	}
	*/

	},
	computed:{

	addToA:function(){
		console.info("addToA")
	return this.a+this.age;
	},

	addToB:function(){
		console.info("addToB")
	return this.b+this.age;
	}
	
	}
})


