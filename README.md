# React Native Flurry Analytics

### React Native wrapper for flurry analytics.
![logo](https://dev.flurry.com/images/uiRefresh/ui/login/flurry-from-yahoo.png)

## Table of contents
- [Installation](#installation)
  - [Common](#common)
  - [iOS](#ios)
  - [Android](#android)
- [Usage](#usage)
- [Contributing](#contributing)
- [Copyright and license](#copyright-and-license)

## Installation

### Common
1. Install package via npm:

```javascript
npm install react-native-flurry-analytics --save
```

2. Link native part

```javascript
react-native link react-native-flurry-analytics
```

3. Inside your code include JS part by adding

```javascript
import FlurryAnalytics from 'react-native-flurry-analytics';
```

### iOS

```bash
sudo gem install cocoapods
cd ios
pod init
open Podfile
```

Add this line

```
pod 'Flurry-iOS-SDK/FlurrySDK'
```

Then run

```bash
pod install
```

### Android

Add these lines in `AndroidManifest.xml`

```xml
<!-- Required permissions - Internet access -->
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
<!-- Recommended permission - External memory pre-caching -->
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

###### Configure Proguard (optional)

Add following to `android/app/proguard-rules.pro`

```
-keep class com.flurry.** { *; }
-dontwarn com.flurry.**
-keepattributes *Annotation*,EnclosingMethod,Signature
-keepclasseswithmembers class * {
    public (android.content.Context, android.util.AttributeSet, int);
}
```

## Usage

#### startSession(string apiKey)
```javascript
FlurryAnalytics.startSession('YOUR_API_KEY');
```

#### setAppVersion(string version)

__!!!__ method must be called prior to invoking __startSession__

```javascript
FlurryAnalytics.setAppVersion('1.0.0');
```

#### setDebugLogEnabled(bool enabled)

__!!!__ method must be called prior to invoking __startSession__

```javascript
FlurryAnalytics.setDebugLogEnabled(false)
```

#### setSessionContinueSeconds(int seconds)

__!!!__ method must be called prior to invoking __startSession__

```javascript
FlurryAnalytics.setSessionContinueSeconds(10);
```

#### setCrashReportingEnabled(bool enabled)

__!!!__ method must be called prior to invoking __startSession__

```javascript
FlurryAnalytics.setCrashReportingEnabled(true);
```

#### logEvent(string eventName, object params, bool timed)

```javascript
FlurryAnalytics.logEvent('eventName');
FlurryAnalytics.logEvent('eventName', true);
FlurryAnalytics.logEvent('eventName', {param: 'true'});
FlurryAnalytics.logEvent('eventName', {param: 'true'}, true);
```

#### endTimedEvent(string eventName, object params)

```javascript
FlurryAnalytics.endTimedEvent('eventName');
FlurryAnalytics.endTimedEvent('eventName', {param: 'true'});
```

### setUserId(string userId)

```javascript
FlurryAnalytics.setUserId('userId');
```

#### setUserAge(int age)

```javascript
FlurryAnalytics.setUserAge(28);
```

#### setUserGender(string gender)

```javascript
FlurryAnalytics.setUserGender('m');
// or
FlurryAnalytics.setUserGender('f');
```

#### setEventLoggingEnabled(bool enabled)

__!!!__ method must be called prior to invoking __startSession

```javascript
FlurryAnalytics.setEventLoggingEnabled(true);
```

### For more information read official docs [iOS](http://flurry.github.io/flurry-ios-sdk/) [Android](http://flurry.github.io/flurry-android-sdk/)

## Contributing

Just submit a pull request!

## Copyright and license

Code and documentation copyright 2016 Dmitriy Kolesnikov. Code released under the [MIT license](LICENSE).
