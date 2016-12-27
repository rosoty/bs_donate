Meteor.methods({
	RemoveOrder:function(id){
		orders.remove({'_id':id});
	},
	UpdateOrders:function(id,obj){
		if(id){
			 orders.update({'_id':id},{$set:obj});
		}
	},
	UpdateOrderStatus:function(id,status){
		var result = "";var one = 1; var zero = 0;
		if(status == 0){
			result = orders.update({'_id':id},{$set:{'status':one}});
		}else{
			result = orders.update({'_id':id},{$set:{'status':zero}});
		}
		return result;
	},
});