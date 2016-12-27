section = new Mongo.Collection('section');
users =  Meteor.users;
orders =  new Mongo.Collection('orders');
taxi =  new Mongo.Collection('taxi');
pshop =  new Mongo.Collection('pshop');
fullpath="/public/upload";


if (Meteor.isServer) {
	fullpath=process.env.PWD;
	console.log('linux path:'+fullpath);
	if( typeof fullpath == 'undefined' ){
		base_path = Meteor.npmRequire('fs').realpathSync( process.cwd() + '../../' );
		console.log('window path:'+base_path);
		base_path = base_path.split('\\').join('/');
		base_path = base_path.replace(/\/\.meteor.*$/, '');
	}else{
		base_path=fullpath;
	}
}
else{
	base_path="/";
}
console.log( 'BASE PATH: '+base_path );
images = new FS.Collection("images", {
	//stores: [new FS.Store.FileSystem("images", {path:"/opt/safir/app/uploads"})]
    stores: [new FS.Store.FileSystem("images", {path:base_path+"/uploads"})]
});