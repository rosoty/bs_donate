Meteor.methods({
	RemoveOrder:function(id){
		orders.remove({'_id':id});
	},
	UpdateOrders:function(id,obj){
		if(id){
			 orders.update({'_id':id},{$set:obj});
		}
	},
	UpdateOrderStatus:function(id,next){
		orders.update({'_id':id},{$set:{'STATUS':next}});
	},
	countOrder:function(){
		var allorder=orders.find({});
		return allorder.count();
	}
});
/*=======
	UpdateOrderStatus:function(id,next){
		orders.update({'_id':id},{$set:{'status':next}});
	}
});
>>>>>>> 8dc505429328342303cd12f719fa0b8d57b82249
*/