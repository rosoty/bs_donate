Router.configure({
    //layoutTemplate: 'mainLayout',
    notFoundTemplate: "notFound"
});
Router.route('/signin',{
	layoutTemplate: 'signin'
});
// admin Products
Router.route('/cpanel/dashboad',{
	layoutTemplate: 'mainLayout',
	name:'dashboad'
});
Router.route('/cpanel/section',{
	layoutTemplate: 'mainLayout',
	name:'section'
});
Router.route('/cpanel/section/add',{
	layoutTemplate: 'mainLayout',
	name:'sectionadd'
});
Router.route('/cpanel/section/edit/:id',{
	layoutTemplate: 'mainLayout',
	name:'sectionedit',
	data:function(){
		var id = this.params.id;
		var result = section.findOne({'_id':id});
		return {GetOne:result};
	}
});

Router.route('/cpanel/user/add',{
	layoutTemplate: 'mainLayout',
	name:'adduser'
});
Router.route('/cpanel/user',{
	layoutTemplate: 'mainLayout',
	name:'user'
});
Router.route('/cpanel/user/edit/:id',{
	layoutTemplate: 'mainLayout',
	name:'useredit',
	data:function(){
		var id = this.params.id;
		var result = users.findOne({'_id':id});
		return {GetOne:result};
	}
});