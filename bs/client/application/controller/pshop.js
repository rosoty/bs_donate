Template.addpshop.events({
	"click #btn-save": function(e){
		e.preventDefault();
		var name = $("[name='name']").val();
		var fbname = $("[name='fb-name']").val();
		var phone = $("[name='phone']").val();
		var address = $("[name='address']").val();
		var obj = {
			name:name,
			fbname:fbname,
			phone:phone,
			address:address,
			createdAt: Date.now()
		}
		Meteor.call("InsertPshop",obj, function(res){
			if(!res){
				Router.go('/cpanel/pshop');
			}
		});
	}
});

Template.pshop.helpers({
	GetPshop:function(){
		return pshop.find();
	}
});
Template.pshop.events({
	"click .btn-del": function(e){
		e.preventDefault();
		if(confirm("Are you sure want to delete this???")){
			Meteor.call("RemovePshop",this._id);
		}
	},
});

Template.editpshop.events({
	"click #btn-update": function(e){
		e.preventDefault();
		var id = $("[name='id']").val();
		var name = $("[name='name']").val();
		var fbname = $("[name='fb-name']").val();
		var phone = $("[name='phone']").val();
		var address = $("[name='address']").val();
		var obj = {
			name:name,
			fbname:fbname,
			phone:phone,
			address:address,
			updatedAt: Date.now()
		}
		Meteor.call("UpdatePshop",id,obj, function(res){
			if(!res){
				Router.go('/cpanel/pshop');
			}
		});
	}
});