var IR_BeforeHooks = {
	checkLogin:function(pause){
		//if (!Roles.userIsInRole(Meteor.userId(), ['admin','member'])) {
		if (!(Meteor.loggingIn() || Meteor.user())) {
				Router.go('/signin');
				pause();
		}else{
				this.next();
		}
	},
	checkMember:function(pause){
		if (Roles.userIsInRole(Meteor.userId(), ['member'])) {
				Router.go('/cpanel/orders');
				pause();
		}else{
				this.next();
		}
	}
};
Router.onBeforeAction(IR_BeforeHooks.checkLogin, {
	//except: ['orders'],
	only: ['registeradmin','orders','taxi','addtaxi','pshop','addpshop','status','addstatus','info','addinfo','shop','shopadd','user','adduser','dashboad','shopadd','product','productadd','category','categoryadd']
	//except: ['admin','categories','login','register','projectlist','search','project','tage'] 
});
Router.onBeforeAction(IR_BeforeHooks.checkMember, {
	except: [  
		'dashboad',
		'orders',
		'editorders',
		'info',
		'addinfo',
		'editinfo'
	]
	//except: ['admin','categories','login','register','projectlist','search','project','tage'] 
});