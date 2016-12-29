Template.addstatus.events({
	'click #btn-save':function(e){
		e.preventDefault();
		var value = $('[name="name"]').val();
		var obj = {'value':value,'step':7}
		Meteor.call("InsertStatus",obj,function(error){
			if(!error){
				console.log("InsertStatus Success");
				Router.go('/cpanel/status');
			}
		});
	}
});
Template.status.helpers({
	GetStatus:function(){
		var result = orderstatus.find({}).map(function(document, index){
			document.index = index+1;
			return document;
		});
		return result;
	}
});
Template.status.events({
	"click .btn-del": function(e){
		e.preventDefault();
		if(confirm("Are you sure want to delete this???")){
			Meteor.call("RemoveStatus",this._id);
		}
	},
});