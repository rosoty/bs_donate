
Meteor.publish("users", function () {
    return users.find();
});

Meteor.publish('images', function (){ 
  return images.find({});
});

/*Meteor.publish('orders', function (){ 
  return orders.find({});

});*/

Meteor.publish("myOrder",function(page,limit){
    //var limit = 4;
    var limit=parseInt(limit);
    page = (page)? page:1;
    var skip = (page<=1)? 0 : (page - 1) * limit;
    //limit = limit * page;
    return orders.find({},{limit:limit, skip:skip})
});

Meteor.publish('taxi', function (){ 
  return taxi.find({});
});
Meteor.publish('pshop', function (){ 
  return pshop.find({});
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
Meteor.publish("orderstatus",function(){
	return orderstatus.find({});
});
Meteor.publish("info",function(){
	return info.find({});
});