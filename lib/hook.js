var IR_BeforeHooks = {
    checkLogin:function(pause){
      //if (!Roles.userIsInRole(Meteor.userId(), ['admin','member'])) {
      if (!(Meteor.loggingIn() || Meteor.user())) {
          Router.go('/signin');
          pause();
      }else{
          this.next();
      }
    }
};
Router.onBeforeAction(IR_BeforeHooks.checkLogin, {
    only: [  
        'section',
        'sectionadd',
        'sectionedit',
        'user',
        'adduser',
        'useredit',
        'dashboad'
    ]
  //except: ['admin','categories','login','register','projectlist','search','project','tage'] 
});