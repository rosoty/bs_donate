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
Router.route('/cpanel/shop',{
	layoutTemplate: 'mainLayout',
	name:'shop',
	waitOn:function(){
		return [Meteor.subscribe("allshop")]
	}
});
Router.route('/cpanel/shop/add',{
	layoutTemplate: 'mainLayout',
	name:'shopadd'
});
Router.route('/cpanel/shop/edit/:id',{
	layoutTemplate: 'mainLayout',
	name:'shopedit',
	data:function(){
		var id = this.params.id;
		var result = shops.findOne({'_id':id});
		return {getOneShop:result};
	},
	waitOn:function(){
		var id = this.params.id;
		return [Meteor.subscribe("oneshop",id)]
	}
});
Router.route('/cpanel/product',{
	layoutTemplate: 'mainLayout',
	name:'product',
	waitOn:function(){
		return [Meteor.subscribe("allcategory"),Meteor.subscribe("allproducts"),Meteor.subscribe("allshop")]
	}
});
Router.route('/cpanel/product/add',{
	layoutTemplate: 'mainLayout',
	name:'productadd',
	waitOn:function(){
		return [Meteor.subscribe("allcategory"),Meteor.subscribe("allshop")]
	}
});
Router.route('/cpanel/product/edit/:id',{
	layoutTemplate: 'mainLayout',
	name:'productedit',
	data:function(){
		var id = this.params.id;
		var result = products.findOne({'_id':id});
		return {getOneProduct:result};
	},
	waitOn:function(){
		var id = this.params.id;
		return [Meteor.subscribe("allcategory"),Meteor.subscribe("allshop"),Meteor.subscribe("oneproduct",id)]
	}
});
Router.route('/cpanel/category',{
	layoutTemplate: 'mainLayout',
	name:'category',
	waitOn:function(){
		return [Meteor.subscribe("allcategory")]
	}
});
Router.route('/cpanel/category/edit/:id',{
	layoutTemplate: 'mainLayout',
	name:'categoryedit',
	data:function(){
		var id = this.params.id;
		var result = categories.findOne({'_id':id});
		return {GetOneCategory:result};
	},
	waitOn:function(){
		var id = this.params.id;
		return [Meteor.subscribe("oneCategory",id)]
	}
});
Router.route('/cpanel/category/add',{
	layoutTemplate: 'mainLayout',
	name:'categoryadd'
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

Router.route('/cpanel/orders',{
	layoutTemplate: 'mainLayout',
	name:'orders'
});
Router.route('/cpanel/orders/edit/:id',{
	layoutTemplate: 'mainLayout',
	name:'editorders',
	data:function(){
		var id = this.params.id;
		var result = orders.findOne({'_id':id});
		return {GetOne:result};
	}
});
Router.route('/cpanel/taxi',{
	layoutTemplate: 'mainLayout',
	name:'taxi'
});
Router.route('/cpanel/taxi/add',{
	layoutTemplate: 'mainLayout',
	name:'addtaxi'
});
Router.route('/cpanel/taxi/edit/:id',{
	layoutTemplate: 'mainLayout',
	name:'taxiedit',
	data:function(){
		var id = this.params.id;
		var result = taxi.findOne({'_id':id});
		return {GetOne:result};
	}
});

Router.route('/cpanel/pshop',{
	layoutTemplate: 'mainLayout',
	name:'pshop'
});
Router.route('/cpanel/pshop/add',{
	layoutTemplate: 'mainLayout',
	name:'addpshop'
});
Router.route('/cpanel/pshop/edit/:id',{
	layoutTemplate: 'mainLayout',
	name:'editpshop',
	data:function(){
		var id = this.params.id;
		var result = pshop.findOne({'_id':id});
		return {GetOne:result};
	}
});