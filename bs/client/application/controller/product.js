Template.product.helpers({
	getallproduct:function(){
		return products.find({});
	},
	getShopname:function(id){
		if(id){
			return shops.findOne({_id:id}).name;
		}
	},
	getCatname:function(id){
		if(id){
			return categories.findOne({_id:id}).name;
		}
	},
});
Template.product.events({
	"click .btndel":function(e){
		e.preventDefault();
		if(confirm("Are you sure want to delete this???")){
			products.remove(this._id);
		}
	}
});


Template.productadd.events({
	"click #btnaddproduct": function(e){
		e.preventDefault();
		var title=$("#title").val();
		var price=$("#price").val();
		var categoryid=$("#catid").val();
		var shopid=$("#shopid").val();
		var imageurl=$("#imageurl").val();
		var obj={
			title:title,
			price:price,
			categoryid:categoryid,
			shopid:shopid,
			imageurl:imageurl
		}
		Meteor.call("insertProduct",obj,function(err){
			if(!err){
				Router.go("/cpanel/product")
			}
		});
	}
});
Template.productadd.helpers({
	allcategory:function(){
		return categories.find({});
	},
	allshop:function(){
		return shops.find({});
	}
});


Template.productedit.events({
	"click #btnupdateproduct":function(e){
		e.preventDefault()
		var id=$("#pro_id").val();
		var title=$("#title").val();
		var price=$("#price").val();
		var categoryid=$("#catid").val();
		var shopid=$("#shopid").val();
		var imageurl=$("#imageurl").val();
		var obj={
			title:title,
			price:price,
			categoryid:categoryid,
			shopid:shopid,
			imageurl:imageurl
		}
		alert(title,price,categoryid,shopid,imageurl);
		Meteor.call("updateProduct",id,obj,function(err){
			if(!err){
				Router.go("/cpanel/product")
			}
		});
	}
});
Template.productedit.helpers({
	getShopname:function(id){
		if(id){
			return shops.findOne({_id:id}).name;
		}
	},
	getTitleCat:function(id){
		if(id){
			return categories.findOne({_id:id}).name;
		}
	},
	allcategory:function(){
		return categories.find({});
	},
	allshop:function(){
		return shops.find({});
	}
});
