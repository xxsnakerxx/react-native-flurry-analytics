package com.xxsnakerxx.flurryanalytics;

import android.content.Context;
import android.content.Intent;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.flurry.android.marketing.FlurryMarketingOptions;

public class FlurryAnalyticsPackage implements ReactPackage {
    private FlurryMarketingOptions flurryMessagingOptions = null;

    public FlurryAnalyticsPackage(FlurryMarketingOptions option){
        flurryMessagingOptions = option;
    }

    @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new FlurryAnalyticsModule(reactContext, flurryMessagingOptions));

        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
