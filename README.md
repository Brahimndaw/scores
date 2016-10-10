# README

Unlike other READMEs that focuses on the developer side of an application. This README will cover how one can launch and utilize this website on their local system.

This is a Ruby on Rails application that uses JSON Data to append information to the DOM. The purpose of this application is to use the given JSON data to retrieve information that will help us display the MLB scores of the day. The code base uses Javascript, HTML, CSS, and a little bit of ruby to navigate the application.

#Rails Set up

In order to get the application up running you will need Ruby and Ruby on Rails installed on your computer. Please follow the steps below:

Step 1: Check Ruby Version

First, check if you already have Ruby installed. Open the command prompt and type ruby -v. If Ruby responds, and if it shows a version number at or above 2.2.2, then type gem --version. If you don't get an error, skip Install Ruby step. Otherwise, we'll install a fresh Ruby.


Step 2: Install Ruby

If Ruby is not installed, then download an installation package from rubyinstaller.org. Follow the download link, and run the resulting installer. This is an exe file rubyinstaller-2.2.2.x.exe and will be installed in a single click. It's a very small package, and you'll get RubyGems as well along with this package.


Step 3: Install Rails

Install Rails − With Rubygems loaded, you can install all of Rails and its dependencies using the following command through the command line − gem install rails
The above command may take some time to install all dependencies. Make sure you stay connected to the internet while installing gems dependencies.

Step 4: Check Rails Version

We now want to ensure that rails is installed on your computer. Use the following command to check the rails version. rails -v. if rails 5.0.0.1 appears this means that you have the latest version and should be ready to operate.

If you wish to install Rails on Linux. Please follow the steps at http://blog.teamtreehouse.com/installing-rails-5-linux. Blog written by Ruby enthusiast Jay McGaven.


#Accessing the app

Now that we have Ruby and Ruby on Rails installed on your system. We can proceed to utilize the application.

First you need to choose or create the folder that you wish to clone the project in. You can also fork the project onto your own repositories if you desire greater accessibility to the code. However for the purpose of this exercise we will use cloning as the example


Once you have chosen what folder you want to copy the repository in will need to make a copy of the repository which can be accessed at my github link https://github.com/Brahimndaw/scores. You have the choice to either download the application or clone it. This can be done by clicking on the green button "clone or download" located to the left side of the page.

Now that the folder has been created and that you have cloned or download it the repository. You need to access the folder that is is through your terminal. you can use the command line cd downloads/website if website is the folder you saved the repository in.

#Launching the app

Once you have accessed the app through your terminal. You can launch the application by typing "rails s" on your command line. You can access the Rails app through the local host port at http://localhost:3000/. Once there you can use the site and see the workings of it. One can access the MLB scores which is the point of this application at http://localhost:3000/.


#test
This application uses Jasmine unit testing and can be accessed by running the rake Jasmine command. Please check the Jasmine documentation for more information on how to utilize the testing framework to write better code at http://jasmine.github.io/.

This application has been built quickly and therefore will gradually include more tests over time.

#Errors

In case the application takes time to load when switching routes. Reloading usually improves the speed. I would also check browsers. Firefox, Safari and chrome all have different perfomance metric depending on the code at hand. This application has usually fared better with safari.

I hope to have it up and running with real time data and information pretty soon.

Thank you ESPN and all who find this beta application valuable.

Thanks,

Made in collaboration with data obtained from ESPN.
