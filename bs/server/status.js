Meteor.methods({
	InsertStatus:function(obj){
		orderstatus.insert(obj);
	},
	RemoveStatus:function(id){
		orderstatus.remove({'_id':id});
	}
});