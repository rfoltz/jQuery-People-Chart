jQuery-People-Chart
===================

This was just a simple jQuery plugin I made at work one day, and is my first one ever. 
So if it's kind of wrong or the wrong way of doing a plugin then let me know and I'll fix it.


#Version 0.1
- Added my existing code
- With a few options

#Documentation

##Default Settings:

color              : null, //colour of the people
hiliteColor        : null, //colour of the high lighted people
hilitePercentage   : null, //e.g 0.40 = high light 40% of the people.
scale              : 1,    //the number the person represents
numberOfPeople     : 10,   //how many people total
chartContainerClass: "peoplechart-container", //can customize the css class
iconScale          : 2 //(2, 3, 4) or icon size. Use the font awesome icon scale as a guide.

###How to use:

First set is to create a div or other element to house the people.

```
<div class='chart-container'></div>
```

Then you will want to select your chart container and call .peopleChart(options);
With whatever options you want. If you provide no options it will create just
10 people on the screen in whatever default font color you use.

But if you check out below there is a way to high light a percentage of the people
like what you would see in an infograhpic. E.g 4 out of 10 people have a pet.

```
$('.chart-container').peopleChart({
	scale: 1, //how many a person represents
	numberOfPeople:25, //total number of people
	color:'#FFFFFF', //colour of the basic people
	hiliteColor:"red", //colour of the high lighted people
	hilitePercentage: 0.40 //a percentage of people to high light
});
```