Clickcount
==========

What is Clickcount?
-------------------

Clickcount is a mobile application based on the jQTouch and PhoneGap projects. It uses identical frontend code to create an application for both Android and iPhone - all the rest of the packages were built using the PhoneGap project.

This is meant to be a demo of the capabilities of PhoneGap alongside web standard technologies like Javascript, HTML and CSS. Isn't it great that you can make one page of code and it will run on all the biggest platforms?

What does it do?
----------------

Well, not much. But then again, it isn't really meant to. There is a counter at the top of the screen, and a button which, when clicked, increments the counter by 1. Hence the name Clickcount ;) You can also reset the counter with a button on the toolbar (which will also bring up a platform native alert provided by the PhoneGap JS API) and view a little about screen using the buttons on the toolbar.

How should I use this?
----------------------

However you want. This project is just for people to see how easy it is to make mobile applications. Feel free to even release this application onto the relevant app stores if you like, although I have already uploaded it to the Android market.

Just read the code, and see how well it works.

I'm only interested in jQTouch, not this PhoneGap malarky?!?!
---------------------------------------------------------------

This project is designed to serve as a demonstration of the power of both jQTouch and PhoneGap. If you just want to see the plain HTML code, just go into the [/www directory](http://github.com/timrogers/clickcount-app/tree/master/www/) and you can see all the files and edit them as you would any other HTML file. They will even run in your normal desktop browser, although for best results you should use a WebKit based browser like Safari or Chrome.

In case anyone gets confused, __the alert found in the reset button click handler will not work outside of the PhoneGap projects__ because it relies on the phonegap.js file which provides device functions to the HTML documents via Javascript. If you like, you can replace it with a normal Javascript alert() function.

How do I build these applications so I can try them out myself?
----------------------------------------------------------------

__iOS__ - In order to try out the iPhone version, you will need to install the iPhone SDK from the Apple Developer Center. Once you've done that, you should open the clickcount-iphone.xcodeproj file in order to get the project running in Xcode. Then, you can just click "Build and Run" in the toolbar. If that doesn't work, you might need to go into Project...Edit Project Settings to select the correct SDK target. Doing this should open the application in the simulator, ready to be tested. If you'd like to try this out on your actual Apple device, you will need a paid Apple developer account or you will need to jailbreak your device. Both options are beyond the scope of this short guide. Or at least, it was short when I started. Once I get my iPhone developer account sorted out, I will probably upload this to the store for demo purposes.

__Android__ - You can download this app from the Android Market for free __right now__. Just search Clickcount and it should come up, or click [here](market://details?id=com.timrogers.clickcount) from your Android device, providing it has Android Market installed! For your convenience, I have also signed and built a copy of the application using DroidGap and Eclipse in the build/ directory. You will be able to install the .apk file onto your device, if you are lucky. If not, your best bet is to install the Eclipse development studio and the Android Developer Tools so you can build it yourself, edit it and run it in the simulator. There is a really greay [guide](http://phonegap.pbworks.com/Getting-started-with-Android-PhoneGap-in-Eclipse) on the PhoneGap wiki which explains how to setup Eclipse and how to build the application.

This project wouldn't be possible without...
---------------------------------------------

[jQTouch](http://github.com/senchalabs/jQTouch) - this makes it incredibly easy to create beautiful looking interfaces for use in the WebKit based browsers found on the iOS and Android platforms. You can see in the code how simple it is to create an application in minutes, especially since it integrates with the amazing Javascript library jQuery. If you want to learn about jQTouch, I'd recommend [PeepCode's screencast](http://peepcode.com/products/jqtouch) which will teach you all about it, which you can [buy at their website](http://peepcode.com/products/jqtouch) for just $9 - it's well worth the money! (I have not affiliated with PeepCode, I just think it's a great screencast!)

[PhoneGap](http://github.com/phonegap/phonegap) - this allows you to deploy the HTML, CSS and JavaScript onto iOS and Android, as well as a few other platforms like Blackberry with ease. It can be quite complicated to get into, but there are lots of bits of documentation on the [PhoneGap wiki](http://phonegap.pbworks.com). PhoneGap provides the tools to compile your web apps into native apps, and an amazing Javascript API for accessing native features, such as Geolocation and the native alert box seen in this application.

Known issues
------------

- The "Back" button from the "About" screen won't work on Android 1.6. It works fine on iOS and Android 2.2, but as soon as I run it on the 1.6 emulator, it breaks. I've spent quite a while trying to fix it, but to no avail. Any ideas anyone?

Some legal stuff
----------------

__(C) 2010 Tim Rogers__
Use this as you see fit, please tell me if you do anything cool :) This doesn't have a specific open source license, just do whatever you like! Even sell it ;)