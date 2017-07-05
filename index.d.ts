declare module 'react-native-flurry-analytics' {
	interface FlurryAnalyticsStatic {

		/**
		 * FlurryAnalytics.startSession('YOUR_API_KEY');
		 */
		startSession(apiKey: string);

		/**
		 * !!! method must be called prior to invoking startSession, e.g. FlurryAnalytics.setAppVersion('1.0.0');
		 */
		setAppVersion(version: string);

		/**
		 * !!! method must be called prior to invoking startSession, e.g. FlurryAnalytics.setDebugLogEnabled(false)
		 */
		setDebugLogEnabled(enabled: boolean);

		/**
		 * !!! method must be called prior to invoking startSession, e.g. FlurryAnalytics.setSessionContinueSeconds(10);
		 */
		setSessionContinueSeconds(seconds: number);

		/**
		 * !!! method must be called prior to invoking startSession, e.g. FlurryAnalytics.setCrashReportingEnabled(true);
		 */
		setCrashReportingEnabled(enabled: boolean);

		/**
		 * e.g. FlurryAnalytics.logEvent('eventName'); FlurryAnalytics.logEvent('eventName', {param: 'true'}, true);
		 */
		logEvent(eventName: string, params?: any, timed?: boolean);

		/**
		 * e.g. FlurryAnalytics.endTimedEvent('eventName'); FlurryAnalytics.endTimedEvent('eventName', {param: 'true'});
		 */
		endTimedEvent(eventName: string, params?: any);

		/**
		 * e.g. FlurryAnalytics.logPageView();
		 */
		logPageView();

		/**
		 * e.g. FlurryAnalytics.setUserId('userId');
		 */
		setUserId(userId: string);

		/**
		 * e.g. FlurryAnalytics.setUserAge(28);
		 */
		setUserAge(age: number);

		/**
		 * e.g. FlurryAnalytics.setUserGender('m');
		 */
		setUserGender(gender: 'm' | 'f');
	}
	const FlurryAnalytics: FlurryAnalyticsStatic;
	export default FlurryAnalytics;
}
