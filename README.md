meteorPageExample
=================

Using meteor-pages package along with iron router to create test example

Two collection set present : HomeCollection, TestCollection.
Each of the collection set is populated with 1000 entries.
Iron router is used to manage routes / and /test

## Issues

1.  When hitting localhost:3000/ in console HomeCollection.find().count() is showing 1000 and data is visible in browser.

	Expected : since we are on page1 HomeCollection.find().count() == 40 ( 10 -> for 1st page and 10*3 for 3 neighboring pages)

2.  When hitting localhost:3000/test no data is visible ie spinner is spinning for ever. But TestCollection.find().count() shows 1000.
	PS : If I hit on any pagination number >= 3 I can see the data on browser. #strange


3.  On any of the route HomeCollection.find().count() and TestCollection.find().count is always 1000.

	Expected : is if / then HomeCollection.find().count() should be as per the page and TestCollection.find().count() should be undefined / 0 
	and similarly for /test page

