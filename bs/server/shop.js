Meteor.methods({
	insertShop:function(obj){
		return shops.insert(obj);
	},
	updateShop:function(id,obj){
		return shops.update({_id:id},{$set:obj})
	}
});