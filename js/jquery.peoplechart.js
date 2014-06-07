/*!
The MIT License (MIT)

Copyright (c) 2014 Robert Foltz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Dependency: Font-Awesome 3.2.1 (http://fortawesome.github.io/Font-Awesome/3.2.1/)
*/
;(function($) {

    $.fn.peopleChart = function(options ) {

        // Establish our default settings
        var settings = $.extend({
            color              : null,
			hiliteColor        : null,
			hilitePercentage   : null, //0.42 = 42%
			scale              : 1,
			numberOfPeople     : 10,
			chartContainerClass: "peoplechart-container",
			iconScale          : 2 //(2, 3, 4)
        }, options);
		
		var totalPeople = Math.round((settings.numberOfPeople/settings.scale));

        return this.each( function() {
			//create people and append them to $(this)
			$(this).append("<div class='"+settings.chartContainerClass+"'></div>");
			for(var i = 0; i < totalPeople; i++) {
				$("."+settings.chartContainerClass).append("<i class='icon-male icon-"+settings.iconScale+"x'></i>");
			}
			$("."+settings.chartContainerClass).append("<div style='clear:both;'></div>");
			
			//set the color of the icons if a color is present.
			if(settings.color){
				$("."+settings.chartContainerClass+" .icon-male").each(function(){
					$(this).css('color', settings.color);
				});
			}
			
			//if a hiliteColor and hilitePercentage are supplied then style accordingly.
			if(settings.hilitePercentage && settings.hiliteColor){
				var totalPercentageOfPeople = Math.round(totalPeople * settings.hilitePercentage) - 1; //do the minus one to get the true value in the array.
				$("."+settings.chartContainerClass+" .icon-male").each(function(index){
					if(index <= totalPercentageOfPeople){
						$(this).css('color', settings.hiliteColor);
					} else {
						return false;
					}
				});
			}
			
        });

    }

}(jQuery));