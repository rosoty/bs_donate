Meteor.methods({
	insertProduct:function(obj){
		return products.insert(obj);
	},
	updateProduct:function(id,obj){
		return products.update({_id:id},{$set:obj});
	}
});
