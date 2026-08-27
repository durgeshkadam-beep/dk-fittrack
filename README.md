# DK FitTrack

**Personal diet, workout and progress tracker by Durgesh Kadam.**

## v1.1
- Modern mobile-first UI with bottom navigation
- Offline/local-first diet and workout tracking
- Indian food library + manual foods
- Smart workout builder and exercise library
- Detailed sets / reps / weight / RPE training log
- Weight, waist, chest and arm progress
- Weekly reports and progress photos
- Firebase email/password cloud sync for device-to-device data
- Android APK source (`android/`)
- Online/PWA source (`web/`)

Phone navigation: **Home, Diet, Workout, Progress, More**.

Cloud state: `users/{uid}/dkfittrack/state`

Android package: `in.durgeshkadam.fittrack`


## v1.2.0 — Android navigation fix
- Android system navigation bar auto-hides while DK FitTrack is active.
- Swipe from the bottom/system edge to reveal Android navigation temporarily.
- Mobile bottom navigation respects safe-area insets.
- Added viewport-fit=cover for Android WebView and mobile browsers.
