Meteor.publish("section", function () {
    return section.find();
});
Meteor.publish("users", function () {
    return users.find();
});

Meteor.publish('images', function (){ 
  return images.find({});
});


Meteor.publish('allcategory', function (){ 
  return categories.find({});
});
Meteor.publish("oneCategory",function(id){
	return categories.find({_id:id});
});
Meteor.publish("oneproduct",function(id){
	return products.find({_id:id});
});
Meteor.publish('allproducts', function (){ 
  return products.find({});
});
Meteor.publish('allshop', function (){ 
  return shops.find({});
});
Meteor.publish("oneshop",function(id){
	return shops.find({_id:id});
});