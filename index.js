import {
  NativeModules,
 } from 'react-native';

const { RNFlurryAnalytics } = NativeModules;

let startSessionIsCalled = false;

const mustCalledPriorStartSession = (methodName) => {
  console.error(`FlurryAnalytics.${methodName}: method must be called prior to invoking "startSession"`);
}

export default class FlurryAnalytics {
  static startSession(apiKey) {
    if (startSessionIsCalled) {
      console.error('FlurryAnalytics.startSession: already called');
      return;
    }

    if (!apiKey) {
      console.error('FlurryAnalytics.startSession: apiKey(string) is required');
      return;
    }

    RNFlurryAnalytics.startSession(apiKey);

    startSessionIsCalled = true;
  }

  static setAppVersion(version = '1.0') {
    if (startSessionIsCalled) {
      mustCalledPriorStartSession('setAppVersion');
      return;
    }

    RNFlurryAnalytics.setAppVersion(version);
  }

  static setDebugLogEnabled(enabled = false) {
    if (startSessionIsCalled) {
      mustCalledPriorStartSession('setDebugLogEnabled');
      return;
    }

    RNFlurryAnalytics.setDebugLogEnabled(enabled);
  }

  static setSessionContinueSeconds(seconds = 10) {
    if (startSessionIsCalled) {
      mustCalledPriorStartSession('setSessionContinueSeconds');
      return;
    }

    if (seconds < 5) {
      console.error('FlurryAnalytics.setSessionContinueSeconds: the minimum timeout for a session is 5 seconds');
    }

    RNFlurryAnalytics.setSessionContinueSeconds(seconds);
  }

  static setCrashReportingEnabled(enabled = false) {
    if (startSessionIsCalled) {
      mustCalledPriorStartSession('setCrashReportingEnabled');
      return;
    }

    RNFlurryAnalytics.setCrashReportingEnabled(enabled);
  }

  /**
   * There are three overloads
   * - logEvent(eventName)
   * - logEvent(eventName, timed)
   * - logEvent(eventName, params, timed)
   */
  static logEvent(eventName, params, timed) {
    if (!eventName || typeof eventName !== 'string') {
      console.error(`FlurryAnalytics.logEvent: eventName must be a string. Got ${eventName}`);
      return;
    }

    if (arguments.length === 1) {
      RNFlurryAnalytics.logEvent(eventName, false);
    }

    if (arguments.length === 2) {
      if (typeof arguments[1] === 'boolean') {
        RNFlurryAnalytics.logEvent(eventName, arguments[1]);
      }

      if (Object.prototype.toString.call(arguments[1]).includes('Object')) {
        RNFlurryAnalytics.logEventWithParameters(eventName, arguments[1], false);
      }
    }

    if (arguments.length === 3) {
      RNFlurryAnalytics.logEventWithParameters(eventName, params, timed);
    }
  }

  static endTimedEvent(eventName, params = null) {
    if (!eventName || typeof eventName !== 'string') {
      console.error(`FlurryAnalytics.endTimedEvent: eventName must be a string. Got ${eventName}`);
      return;
    }

    RNFlurryAnalytics.endTimedEvent(eventName, params);
  }

  static setUserId(userId) {
    if (!userId || typeof userId !== 'string') {
      console.error(`FlurryAnalytics.setUserId: userId must be a string. Got ${userId}`);
      return;
    }

    RNFlurryAnalytics.setUserID(userId);
  }

  static setUserAge(age) {
    if (!age || typeof age !== 'number' || age <= 0) {
      console.error(`FlurryAnalytics.setUserAge: age must be a valid positive number. Got ${age}`);
      return;
    }

    RNFlurryAnalytics.setUserAge(age);
  }

  static setUserGender(gender) {
    if (!gender || typeof gender !== 'string' || !['m', 'f'].includes(gender)) {
      console.error(`FlurryAnalytics.setUserGender: gender must be on of ['m', 'f']. Got ${gender}`);
      return;
    }

    RNFlurryAnalytics.setUserGender(gender);
  }

  static mock() {
    const methods = Object.getOwnPropertyNames(FlurryAnalytics);

    const mockMethod = (methodName) =>
      (...args) => console.log(`FlurryAnalytics.${methodName}`, ...args);

    methods.forEach((methodName) => {
      if (typeof FlurryAnalytics[methodName] === 'function') {
        FlurryAnalytics[methodName] = mockMethod(methodName);
      }
    })
  }
}
