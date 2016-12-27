Template.shop.helpers({
	getallshop:function(){
		return shops.find({});
	},
});

Template.shop.events({
	"click .btndel":function(e){
		e.preventDefault();
		if(confirm("Are you sure want to delete this???")){
			shops.remove(this._id);
		}
	}
});
Template.shopadd.events({
	"click #btnaddshop":function(e){
		e.preventDefault();
		var name=$("#name").val();
		var ownername=$("#ownername").val();
		var phone=$("#phone").val();
		var address=$("#address").val();
		var obj={
			name:name,
			ownername:ownername,
			phone:phone,
			address:address
		}
		Meteor.call("insertShop",obj,function(err){
			if(!err){
				Router.go("/cpanel/shop");
			}
		})
	}
});

Template.shopedit.events({
	"click #btnupdateshop":function(e){
		e.preventDefault();
		var id=$("#shopid").val();
		var name=$("#name").val();
		var ownername=$("#ownername").val();
		var phone=$("#phone").val();
		var address=$("#address").val();
		var obj={
			name:name,
			ownername:ownername,
			phone:phone,
			address:address
		}
		Meteor.call("updateShop",id,obj,function(err){
			if(!err){
				Router.go("/cpanel/shop");
			}
		})
	}
});