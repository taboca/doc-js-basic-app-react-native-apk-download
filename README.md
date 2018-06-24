# This is part of the "Struggling with JavaScript" aka doc-js book

* https://leanpub.com/doc-js
* If you want to contribute to the book or join me as a coauthor pool, please get in contact mgalli at mgalli dot com subject "doc-js book"

# Chapter 100 - A React Native example, building for Android and installing manually with adb in the device

What you will have here:

* You will fetch an application based in the create-react-native project;

* You will be familiar to using Expo to test in the device;

* You will use Expo project to generate an Android build in a remote server;

* You will download the APK from the Expo server and install in the device;

## Get the React Native Redux sample app "Fake store items load"

This sample is based in the SDK-based boilerplate app created with the command (project) create-react-native app. The sample here also have modifcations and it's based in the sample entitled [Example of React Native Redux app bringing a collection of products to the screen](https://github.com/taboca/doc-js-example-react-native-redux-join-fake-store).

### Testing the sample to see if works

Git clone [this repository](https://github.com/taboca/doc-js-example-react-native-redux-join-jogic-store), then:

```
cd mySimpleClientJoinStore
npm install
npm start
```

## Publish the Android build using expo

```
exp build:android
```

## Check the status

```
exp build:status
```

## Get the URL

Eventually "exp build:status" will generate an URL for you.

## Setup the Android SDK classpath

The following is my example in my Mac computer. Make sure you have the sdk installed on your computer and set the following directories accordingly.

* export ANDROID_HOME=${HOME}/Library/Android/sdk
* export PATH=${PATH}:${ANDROID_HOME}/tools
* export PATH=${PATH}:${ANDROID_HOME}/platform-tools
* export ANDROID_HOME

Check if adb is working:

```
adb
```

Check if your device is connected to the USB:

```
adb devices
```

## Deploy in the devices

Download the URL that was generated in the "Get the URL" step and:

```
adb install filename.APK

```
