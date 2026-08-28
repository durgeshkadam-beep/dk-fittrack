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


## v1.3.0 — Expanded Indian food tracking
- 250+ common Indian foods with serving calories and protein/carbs/fat.
- Maharashtra, South Indian, North Indian-style curries, street foods, non-veg, fruits, drinks and sweets.
- Search aliases such as roti/chapati/phulka, dahi/curd, bhakri, usal, dosa and biryani.
- Horizontal food-category filters for faster mobile logging.
- Manual food entry remains available for recipes and packaged foods not in the library.
- Nutrition values are typical estimates; recipe size and oil can change them.


## v1.2 Indian Food Edition
- 235+ Indian foods including Maharashtrian, South Indian, North Indian, Gujarati and Bengali foods
- Category filters and alternate-name search
- Smart Quick Add: e.g. `2 roti + 1 dal + 100g chicken`
- Manual entry remains available for recipe/package-specific nutrition
- Nutrition values are practical estimates; measured portions and package labels take priority
