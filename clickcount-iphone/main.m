//
//  main.m
//  clickcount-iphone
//
//  Created by Tim Rogers on 13/08/2010.
//  Copyright Tim Rogers 2010. All rights reserved.
//

#import <UIKit/UIKit.h>

int main(int argc, char *argv[]) {
    
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
    int retVal = UIApplicationMain(argc, argv, nil, @"clickcount_iphoneAppDelegate");
    [pool release];
    return retVal;
}
