Clickcount
==========

What is Clickcount?
-------------------

Clickcount is a mobile application based on the jQTouch and PhoneGap projects. It uses identical frontend code to create an application for both Android and iPhone - all the rest of the packages were built using the PhoneGap project.

This is meant to be a demo of the capabilities of PhoneGap alongside web standard technologies like Javascript, HTML and CSS. Isn't it great that you can make one page of code and it will run on all the biggest platforms?

How should I use this?
----------------------

However you want. This project is just for people to see how easy it is to make mobile applications. Feel free to even release this application on the Android Market and iTunes App Store if you want - I haven't bothered.

Just read the code, and see how well it works.

How do I build these applications so I can try them out myself?
----------------------------------------------------------------

__iOS__ - In order to try out the iPhone version, you will need to install the iPhone SDK from the Apple Developer Center. Once you've done that, you should open the clickcount-iphone.xcodeproj file in order to get the project running in Xcode. Then, you can just click "Build and Run" in the toolbar. If that doesn't work, you might need to go into Project...Edit Project Settings to select the correct SDK target. Doing this should open the application in the simulator, ready to be tested. If you'd like to try this out on your actual Apple device, you will need a paid Apple developer account or you will need to jailbreak your device. Both options are beyond the scope of this short guide. Or at least, it was short when I started.

__Android__ - For your convenience, I have signed and built a copy of the application using DroidGap and Eclipse in the build/ directory. You will be able to install the .apk file onto your device, if you are lucky. If not, your best bet is to install the Eclipse development studio and the Android Developer Tools so you can build it yourself, edit it and run it in the simulator. There is a really greay [guide](http://phonegap.pbworks.com/Getting-started-with-Android-PhoneGap-in-Eclipse) on the PhoneGap wiki which explains how to setup Eclipse and how to build the application.

This project wouldn't be possible without...
---------------------------------------------

[jQTouch](http://github.com/senchalabs/jQTouch) - this makes it incredibly easy to create beautiful looking interfaces for use in the WebKit based browsers found on the iOS and Android platforms. You can see in the code how simple it is to create an application in minutes, especially since it integrates with the amazing Javascript library jQuery. If you want to learn about jQTouch, I'd recommend [PeepCode's screencast](http://peepcode.com/products/jqtouch) which will teach you all about it, which you can [buy at their website](http://peepcode.com/products/jqtouch) for just $9 - it's well worth the money! (I have not affiliated with PeepCode, I just think it's a great screencast!)

[PhoneGap](http://github.com/phonegap/phonegap) - this allows you to deploy the HTML, CSS and JavaScript onto iOS and Android, as well as a few other platforms like Blackberry with ease. It can be quite complicated to get into, but there are lots of bits of documentation on the [PhoneGap wiki](http://phonegap.pbworks.com). PhoneGap provides the tools to compile your web apps into native apps, and an amazing Javascript API for accessing native features, such as Geolocation and the native alert box seen in this application.

Some legal stuff
----------------

__(C) 2010 Tim Rogers__
Use this as you see fit, please tell me if you do anything cool :) This doesn't have a specific open source license, just do whatever you like! Even sell it ;)