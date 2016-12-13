Meteor.publish("section", function () {
    return section.find();
});
Meteor.publish("users", function () {
    return users.find();
});

Meteor.publish('images', function (){ 
  return images.find({});
});