Meteor.publish("section", function () {
    return section.find();
});
Meteor.publish("users", function () {
    return users.find();
});

Meteor.publish('images', function (){ 
  return images.find({});
});

Meteor.publish('orders', function (){ 
  return orders.find({});
});

Meteor.publish('taxi', function (){ 
  return taxi.find({});
});
Meteor.publish('pshop', function (){ 
  return pshop.find({});
});