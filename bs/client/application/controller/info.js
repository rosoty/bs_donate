Template.addinfo.events({
	"click #btn-save": function(e){
		e.preventDefault();
		var title = $("[name='title']").val();
		var price = $("[name='price']").val();
		var image_url = $("[name='url']").val();
		var obj = {
			title:title,
			price:price,
			image_url:image_url,
			createdAt: Date.now()
		}
		Meteor.call("InsertInfo",obj, function(error){
			if(!error){
				console.log('InsertInfo Success');
				Router.go('/cpanel/info');
			}
		});
	}
});

Template.info.helpers({
	GetInfo:function(){
		return info.find();
	}
});
Template.info.events({
	"click .btn-del": function(e){
		e.preventDefault();
		if(confirm("Are you sure want to delete this???")){
			Meteor.call("RemoveInfo",this._id);
		}
	},
});

Template.editinfo.events({
	"click #btn-update": function(e){
		e.preventDefault();
		var id = $("[name='id']").val();
		var title = $("[name='title']").val();
		var price = $("[name='price']").val();
		var image_url = $("[name='url']").val();
		var obj = {
			title:title,
			price:price,
			image_url:image_url,
			createdAt: Date.now()
		}
		Meteor.call('UpdateInfo',id, obj , function(error){
			if(!error){
				console.log('UpdateInfo Success');
				Router.go('/cpanel/info')
			}
		});
	}
});