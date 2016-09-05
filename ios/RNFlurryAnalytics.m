#import "RNFlurryAnalytics.h"
#import <Flurry.h>

@implementation RNFlurryAnalytics

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(startSession:(NSString *)apiKey)
{
  [Flurry startSession:apiKey];
}

RCT_EXPORT_METHOD(setAppVersion:(NSString *)version)
{
	[Flurry setAppVersion:version];
}

RCT_EXPORT_METHOD(setDebugLogEnabled:(BOOL)enabled)
{
	[Flurry setDebugLogEnabled:enabled];
}

RCT_EXPORT_METHOD(setSessionContinueSeconds:(int)seconds)
{
	[Flurry setSessionContinueSeconds:seconds];
}

RCT_EXPORT_METHOD(setCrashReportingEnabled:(BOOL)enabled)
{
	[Flurry setCrashReportingEnabled:enabled];
}

RCT_EXPORT_METHOD(logEvent:(NSString *)eventName timed:(BOOL)timed)
{
	[Flurry logEvent:eventName timed:timed];
}

RCT_EXPORT_METHOD(logEventWithParameters:(NSString *)eventName
													parameters:(NSDictionary *)parameters
																	 timed:(BOOL)timed)
{
	[Flurry logEvent:eventName withParameters:parameters timed:timed];
}

RCT_EXPORT_METHOD(endTimedEvent:(NSString *)eventName
									parameters:(NSDictionary *)parameters)
{
	[Flurry endTimedEvent:eventName withParameters:parameters];
}

RCT_EXPORT_METHOD(setUserID:(NSString *)userID)
{
	[Flurry setUserID:userID];
}

RCT_EXPORT_METHOD(setUserAge:(int)age)
{
	[Flurry setAge:age];
}

RCT_EXPORT_METHOD(setUserGender:(NSString *)gender)
{
	[Flurry setGender:gender];
}

RCT_EXPORT_METHOD(setEventLoggingEnabled:(BOOL)enabled)
{
	[Flurry setEventLoggingEnabled:enabled];
}

@end