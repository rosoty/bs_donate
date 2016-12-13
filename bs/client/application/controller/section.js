Template.section.rendered = function(){
	Meteor.subscribe('section');
};
Template.sectionadd.events({
	"click #btn-save": function(e){
		e.preventDefault();
		var title = $("[name='title']").val();
		var subtitle = $("[name='sub_title']").val();
		var image = Session.get('ADDIMAGEID');
		var status = $("[name='status'] option:selected").val();
		var obj = {
			title:title,
			subtitle:subtitle,
			image:image,
			status:status,
			createdAt: Date.now()
		}
		Meteor.call("InsertSection",obj, function(res){
			if(!res){
				Session.set("ADDIMAGEID", undefined);
				Router.go('/cpanel/section');
			}
		});
	},
	'change #upload': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
          	images.insert(files[i], function (err, fileObj) {
            	Session.set('ADDIMAGEID', fileObj._id);
          	});
        }
    }
});
Template.section.helpers({
	Getsection:function(){
		return section.find();
	},
	Ispandding:function(status){
		if(status == 0){
			return true;
		}else{
			return false;
		}
	}
});
Template.section.events({
	"click .btn-del": function(e){
		e.preventDefault();
		if(confirm("Are you sure want to delete this???")){
			Meteor.call("RemoveSection",this._id);
		}
	},
	"click .btn-pandding":function(e){
		e.preventDefault();
		Meteor.call("UpdateStatus",this._id,this.status);
	},
	"click .btn-active":function(e){
		e.preventDefault();
		Meteor.call("UpdateStatus",this._id,this.status); 
	}
});

Template.sectionedit.events({
	"click #btn-update": function(e){
		e.preventDefault();
		var id = $("[name='section_id']").val();
		var title = $("[name='title']").val();
		var subtitle = $("[name='sub_title']").val();
		var image = Session.get('ADDIMAGEID');
		var current_image = $("[name='current_image']").val();
		var status = $("[name='status'] option:selected").val();
		if(image){
			image = image;
		}else{
			image = current_image;
		}
		var obj = {
			title:title,
			subtitle:subtitle,
			image:image,
			status:status,
			updatedAt: Date.now()
		}
		Meteor.call("UpdateSection",id,obj, function(res){
			if(!res){
				Session.set("ADDIMAGEID", undefined);
				Router.go('/cpanel/section');
			}
		});
	},
	'change #upload': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
          	images.insert(files[i], function (err, fileObj) {
            	Session.set('ADDIMAGEID', fileObj._id);
          	});
        }
    }
});
Template.sectionedit.helpers({
	GetStatus:function(status){
		if(status == "1")
			return "Publish";
		else
			return "Unpublish";
	}
});