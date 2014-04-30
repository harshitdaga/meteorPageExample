var i, _i, _results;
/*
if (TestCollection.find().count() !== 1000) {
	TestCollection.remove({});
	for (i = _i = 1; _i <= 1000; i = ++_i) {
		TestCollection.insert(_.pick(Faker.Helpers.createCard(), 'name', 'username', 'email', 'phone', 'website'));
	}
}
*/

if (HomeCollection.find().count() !== 1000) {
	HomeCollection.remove({});
	for (i = _i = 1; _i <= 1000; i = ++_i) {
		HomeCollection.insert(_.pick(Faker.Helpers.createCard(), 'name', 'username', 'email', 'phone', 'website'));
	}
}