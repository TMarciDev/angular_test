Welcome to the Régens frontend developer interview assignment!

Your task is to improve a basic website that is able to display the weather forecast of a city of the user's choice. We have prepared a starter project for you that you need to develop further.

You are expected to implement the basic functionality first and after that as many additional features as you can in the order of your choice. Don't worry if you don't have time for all of them.

When you submit your assignment make sure not to submit the node_modules directory (because of its extensive size).

We encourage you to read through all of the tasks and check the UI design to get a basic idea of the features and requirements. The design can be reached here: https://xd.adobe.com/view/f37073c0-55e1-4be0-8d31-51cad42e4b15-a623/ 

========== Basic functionality ========== 
See: screens 1 and 2 of the design.

Implement the basic feature of the website. Don't worry about styling and appearance, focus on functionality for now. TODO comments in code give you a hint in terms of what to implement.

The sole feature this version needs to support is querying the weather forecast of a city:
1. the user selects a city from the drop-down list
2. the user clicks the submit button
3. the website displays the weather forecast of the city in a table below the form.

========== Feature: prettify ==========
See: screens 1 and 2 of the design.

The website isn't very pretty as it is now. Take a look at the UI design and implement the appropriate css styling and/or html changes. Note that the design is meant as a guideline for the layout and general look, your solution does not need to be pixel-perfect down to every last background color and margin.

========== Feature: pagination ==========
See: screen 3 of the design.

Your weather site is a bit crowded with a lot of data, add some pagination according to the UI design so it looks a bit more concise.

========== Feature: routing ==========
See: screens 1 and 4 of the design.

Separate the search page and the weather list page: the submit button takes the user to the list page and the back button navigates back to the search page. Use Angular routing.

========== Feature: external API ==========

A weather forecast is no use when it can only display past weather, fetch some fresh data from a weather API. Use the free weather API below to get up-to-date weather forecast when the user clicks the submit button.

https://open-meteo.com/en/docs