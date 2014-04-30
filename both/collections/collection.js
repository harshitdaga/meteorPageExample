HomeCollection = new Meteor.Collection("c_home");
HomeCollectionPages = new Meteor.Pagination(HomeCollection,{
	templateName : "Home"
});


TestCollection = new Meteor.Collection("c_test");
TestCollectionPages = new Meteor.Pagination(TestCollection,{
	templateName : "Test"
});
