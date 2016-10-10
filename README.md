# README

#Intro
I have created this README taking people who have never worked with Rails into consideration. If you are already familiar with and have installed it on your system. Feel free to jump to the Launching the app section. If you desire to directly access the code base. Please jump to #mycode at the bottom of this page.

This is a Ruby on Rails application that used JSON.MLB Data file to append objects to the DOM. The purpose of this application is to use the  JSON data to retrieve  the MLB scores of the day. The code base uses Javascript, HTML, CSS, and a little bit of ruby to navigate the application.

#Rails Set up

In order to get the application up and running. You will need Ruby on Rails installed on your computer. Please follow the steps below:

Step 1: Check Ruby Version

First, check if you already have Ruby installed. Open the command prompt and type ruby -v. If Ruby responds, and if it shows a version number at or above 2.2.2, then type gem --version. If you don't get an error, skip Install Ruby step. Otherwise, we'll install a fresh Ruby.


Step 2: Install Ruby

If Ruby is not installed, then download an installation package from rubyinstaller.org. Follow the download link, and run the resulting installer. This is an exe file rubyinstaller-2.2.2.x.exe and will be installed in a single click. It's a very small package, and you'll get RubyGems as well along with this package.


Step 3: Install Rails

Install Rails − With Rubygems loaded, you can install all of Rails and its dependencies using the following command through the command line − gem install rails
The above command may take some time to install all dependencies. Make sure you stay connected to the internet while installing gems dependencies.

Step 4: Check Rails Version

To ensure that Rails is installed on your computer use the following command rails -v. This should show the latest Rails 5.0.0.1 and allow you to use all the ruby options.

If you wish to install Rails on Linux. Please follow the steps at http://blog.teamtreehouse.com/installing-rails-5-linux. Blog written by Ruby enthusiast Jay McGaven.


#Accessing the app

Now that we have Ruby and Ruby on Rails installed on your system. We can proceed to utilize the application.

First you need to choose or create the folder that you wish to clone the project in. You can also fork the project onto your own repositories if you desire greater accessibility to the code. However for the purpose of this exercise we will focusing on cloning and/or downloading it.


Once you have chosen what folder you want to copy the repository in you will need to copy the repository from this github link https://github.com/Brahimndaw/scores. You have the choice to either download the application or clone it. This can be done by clicking on the green button "clone or download" located to the left side of the page.

Now that the folder has been created and that you have cloned or downloaded the project  repository. You need to access the folder that is is through your terminal. You will need to cd in to your folder via command line to launch the Rails application.

#Launching the app

Once you have accessed the app through your terminal. You can launch the application by typing "rails s" on your command line. You can display the Rails app by opening your browser and heading to the local host port at http://localhost:3000/. Once there you can use the site and use the features as desired. You can directly access the MLB scores at http://localhost:3000/scoreboard. Those are two routes that the application contain.

#test
This application uses Jasmine unit testing and can be accessed by running the rake Jasmine command. Please check the Jasmine documentation for more information on how to utilize the testing framework to write better code at http://jasmine.github.io/.

This application should include more tests over time.

#Errors

In case the application takes time to load when switching routes. Reloading the pages usually fixes the speed. You can also change browsers. I've found that Firefox fares better with this application

I hope to have it up and running with real time data and information pretty soon.

#mycode

Please follow the links to these folders for more information on the code base:

HomePage:  scores/app/views/home/home.html.erb
Scoreboard:  scores/app/views/home/scoreboard.html.erb
JavaScript:  scores/app/views/home/javascript.html.erb
Nav-Bar:  scores/app/views/layouts/application.html.erb
CSS: scores/app/assets/stylesheets/application.scss
Test: https://github.com/Brahimndaw/scores/blob/master/spec/javascripts/test.spec.js
MLB JSON:  scores/public/mlb.json


Thanks,

Made in collaboration with data obtained from ESPN.
