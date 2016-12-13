Meteor.methods({
	InsertSection:function(obj){
		section.insert(obj);
	},
	RemoveSection:function(id){
		section.remove({'_id':id});
	},
	UpdateStatus:function(id,status){
		var result = "";
		if(status == "0"){
			result = section.update({'_id':id},{$set:{'status':'1'}});
		}else{
			result = section.update({'_id':id},{$set:{'status':'0'}});
		}
		return result;
	},
	UpdateSection:function(id,obj){
		if(id){
			 section.update({'_id':id},{$set:obj});
		}
	}
});