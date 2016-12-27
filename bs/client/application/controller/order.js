

Template.orders.helpers({
	GetOrders:function(){
		return orders.find();
	},
	getKeys: function(obj){
		return Session.get('keys');
	},
	getValue: function(namefield,obj){
		return obj[namefield];
	},getFirstObject(){
		Session.set('keys',Object.keys(orders.findOne({})));
		return orders.findOne({});
	},Ispandding:function(status){
		if(status == 0){
			return true;
		}else{
			return false;
		}
	},
	Getshopname:function(shop){
		var result = pshop.findOne({'_id':shop}).name;
		return result;
	},
	GetTaxiname:function(taxi){
		var result = taxi.findOne({'_id':taxi}).name;
		return result;
	}
});

Template.orders.events({
	"click .btn-del": function(e){
		e.preventDefault();
		if(confirm("Are you sure want to delete this???")){
			Meteor.call("RemoveOrder",this._id);
		}
	},
	"click .btn-pandding":function(e){
		e.preventDefault();
		Meteor.call("UpdateOrderStatus",this._id,this.status);
	},
	"click .btn-active":function(e){
		e.preventDefault();
		Meteor.call("UpdateOrderStatus",this._id,this.status); 
	}
});
Template.editorders.helpers({
	Getshopname:function(shopId){
		var result = pshop.findOne({'_id':shopId}).name;
		return result;
	},
	GetShop:function(){
		return pshop.find();
	},
	GetTaxiname:function(taxiId){
		var result = taxi.findOne({'_id':taxiId}).name;
		return result;
	},
	GetTaxi:function(){
		return taxi.find();
	}
});
Template.editorders.events({
	'click #btn-update':function(e){
		e.preventDefault();
		var qty = $("[name='qty']").val();
		var product = $("[name='product']").val();
		var pshop = $("[name='pshop']").val();
		var taxi = $("[name='taxi']").val();
		var deleverytype = $("[name='deleverytype']").val();
		var status = $("[name='status']").val();
		var id = $("[name='id']").val();
		var obj = {
			qty:qty,
			product:product,
			pshop:pshop,
			taxi:taxi,
			deleverytype:deleverytype,
			status:status,
			updatedAt:Date.now()
		}
		alert(obj);
		Meteor.call("UpdateOrders",id,obj, function(res){
			if(!res){
				Router.go('/cpanel/orders');
			}
		});
	}
});
// Template.editorders.events({
// 	"click #btn-update": function(e){
// 		e.preventDefault();
// 		var id = $("[name='id']").val();
// 		var name = $("[name='name']").val();
// 		var fbname = $("[name='fb-name']").val();
// 		var phone = $("[name='phone']").val();
// 		var address = $("[name='address']").val();
// 		var obj = {
// 			name:name,
// 			fbname:fbname,
// 			phone:phone,
// 			address:address,
// 			updatedAt: Date.now()
// 		}
// 		Meteor.call("UpdateOrder",id,obj, function(res){
// 			if(!res){
// 				Router.go('/cpanel/order');
// 			}
// 		});
// 	}
// });