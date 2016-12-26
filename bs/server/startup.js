Meteor.startup(function() {
    if(Meteor.users.find().count() == 0) {
        var users = [
            {name:"admin",email:"admin@admin.com",roles:['admin']}
        ];
        _.each(users, function (user) {
            var id;
            id = Accounts.createUser({
                email: user.email,
                password: "123",
                profile: { username: user.name }
            });
            Roles.addUsersToRoles(id, user.roles);
        });
    }
});