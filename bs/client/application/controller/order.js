Template.orders.rendered = function(){	
 	$('#mytable tr th').each(function(i) {
        //select all tds in this column
        var tds = $(this).parents('table')
            .find('tr td:nth-child(' + (i + 1) + ')');
        if(tds.is(':empty')) {
            //hide header
            $(this).hide();
            //hide cells
            tds.hide();
        } 
    });  
}

Template.orders.helpers({
	GetOrders:function(){
		var result = orders.find({}).map(function(document, index){
			document.index = index+1;
			return document;
		});
		return result;
	},
	getKeys: function(obj){
		return Session.get('keys');
	},
	getValue: function(namefield,obj){
		return obj[namefield];
	},getFirstObject(){
		var keys=Object.keys(orders.findOne({}));
		delete keys[keys.indexOf("_id")];
		delete keys[keys.indexOf("pshop")];
		delete keys[keys.indexOf("taxi")];
		delete keys[keys.indexOf("date")];
		delete keys[keys.indexOf("user")];
		delete keys[keys.indexOf("status")];
		delete keys[keys.indexOf("image")];
		//keys.remove("_id");
		Session.set('keys',keys);
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
	"click #btn-status":function(e){
		e.preventDefault();
		var arr = [], item;
		var data = orderstatus.find().fetch();
		data.forEach(function(row){
			arr.push(row.value);
		});
		console.log(arr);
		if(this.status == undefined){item = arr.slice(-1)[0];}
		else{item = this.status;}
		var next = arr[($.inArray(item, arr) + 1) % arr.length];
		console.log("next== "+next);
		// var prev = arr[($.inArray(item, arr) - 1 + arr.length) % arr.length];
		Meteor.call('UpdateOrderStatus', this._id, next, function(error){
			if(!error){
			   console.log('UpdateOrderStatus problem');  
			}
		});
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