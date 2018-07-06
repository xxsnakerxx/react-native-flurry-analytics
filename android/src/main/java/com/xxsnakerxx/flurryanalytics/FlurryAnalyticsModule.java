package com.xxsnakerxx.flurryanalytics;

import android.support.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;

import java.util.HashMap;
import java.util.Map;

import com.flurry.android.Constants;
import com.flurry.android.FlurryAgent;
import com.flurry.android.FlurryAgent.Builder;
import com.flurry.android.FlurryAgentListener;

public class FlurryAnalyticsModule extends ReactContextBaseJavaModule {

  public static final String REACT_CLASS = "RNFlurryAnalytics";

  private Builder mFlurryAgentBuilder = null;

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  public FlurryAnalyticsModule(ReactApplicationContext reactContext) {
    super(reactContext);

    mFlurryAgentBuilder = new FlurryAgent.Builder();
  }

  @ReactMethod
  public void startSession(String apiKey) {
    mFlurryAgentBuilder
            .withListener(new FlurryAgentListener() {
              @Override
              public void onSessionStarted() {}
            })
            .build(getReactApplicationContext(), apiKey);
  }

  @ReactMethod
  public void setAppVersion(String version) {
    FlurryAgent.setVersionName(version);
  }

  @ReactMethod
  public void setDebugLogEnabled(boolean enabled) {
    mFlurryAgentBuilder.withLogEnabled(enabled);
  }

  @ReactMethod
  public void setSessionContinueSeconds(int seconds) {
    mFlurryAgentBuilder.withContinueSessionMillis((long)seconds * 1000);
  }

  @ReactMethod
  public void setCrashReportingEnabled(boolean enabled) {
    mFlurryAgentBuilder.withCaptureUncaughtExceptions(enabled);
  }

  @ReactMethod
  public void logEvent(String eventName, boolean timed) {
    FlurryAgent.logEvent(eventName, timed);
  }

  @ReactMethod
  public void logEventWithParameters(String eventName, ReadableMap parameters, boolean timed) {
    FlurryAgent.logEvent(eventName, toMap(parameters), timed);
  }

  @ReactMethod
  public void endTimedEvent(String eventName, ReadableMap parameters) {
    if (parameters == null) {
      FlurryAgent.endTimedEvent(eventName);
    } else {
      FlurryAgent.endTimedEvent(eventName, toMap(parameters));
    }
  }

  @ReactMethod
  public void logPageView() {
    FlurryAgent.onPageView();
  }

  @ReactMethod
  public void setUserID(String userID) {
    FlurryAgent.setUserId(userID);
  }

  @ReactMethod
  public void setUserAge(int age) {
    FlurryAgent.setAge(age);
  }

  @ReactMethod
  public void setUserGender(String gender) {
    byte _gender = Constants.UNKNOWN;
    if (gender.equalsIgnoreCase("m")) {
      _gender = Constants.MALE;
    } else if (gender.equalsIgnoreCase("f")) {
      _gender = Constants.FEMALE;
    }
    FlurryAgent.setGender(_gender);
  }

  private static Map<String, String> toMap(@Nullable ReadableMap readableMap) {
    if (readableMap == null) {
      return null;
    }

    ReadableMapKeySetIterator iterator = readableMap.keySetIterator();
    if (!iterator.hasNextKey()) {
      return null;
    }

    Map<String, String> result = new HashMap<>();
    while (iterator.hasNextKey()) {
      String key = iterator.nextKey();
      result.put(key, readableMap.getString(key));
    }

    return result;
  }
}
