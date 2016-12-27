
Template.addtaxi.events({
	"click #btnsave": function(e){
		e.preventDefault();
		var name = $("[name='name']").val();
		var phone = $("[name='phone']").val();
		var direction = $("[name='direction'] option:selected").val();
		var obj = {
			name:name,
			phone:phone,
			direction:direction,
			createdAt: Date.now()
		}
		Meteor.call("InsertTaxi",obj, function(res){
			if(!res){
				Router.go('/cpanel/taxi');
			}
		});
	}
});

Template.taxi.helpers({
	Gettaxi:function(){
		return taxi.find();
	}
});
Template.taxi.events({
	"click .btn-del": function(e){
		e.preventDefault();
		if(confirm("Are you sure want to delete this???")){
			Meteor.call("RemoveTaxi",this._id);
		}
	},
});

Template.taxiedit.events({
	"click #btn-update": function(e){
		e.preventDefault();
		var id = $("[name='id']").val();
		var name = $("[name='name']").val();
		var phone = $("[name='phone']").val();
		var direction = $("[name='direction'] option:selected").val();
		var obj = {
			name:name,
			phone:phone,
			direction:direction,
			updatedAt: Date.now()
		}
		Meteor.call("UpdateTaxi",id,obj, function(res){
			if(!res){
				Router.go('/cpanel/taxi');
			}
		});
	}
});