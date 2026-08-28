/* DK FitTrack v1.5 — Extended movement library
   General fitness guidance only. Keep movements pain-free and use appropriate support/load.
*/
(function(){
  const out=[];
  const add=(n,m,type,e,level,cue,why,met=3.5,tags="",dose="")=>out.push({n,m,type,e,level,cue,why,met,tags,dose});

  const strength = {
    Chest:[
      ["Barbell Bench Press","full","Intermediate"],["Incline Barbell Bench Press","full","Intermediate"],["Decline Chest Press","full","Intermediate"],
      ["Dumbbell Floor Press","basic","Beginner"],["Dumbbell Squeeze Press","basic","Intermediate"],["Dumbbell Pullover","basic","Intermediate"],
      ["Cable Chest Fly","full","Beginner"],["Low-to-High Cable Fly","full","Intermediate"],["Pec Deck","full","Beginner"],
      ["Incline Push-up","home","Beginner"],["Knee Push-up","home","Beginner"],["Close-Grip Push-up","home","Intermediate"],["Wide Push-up","home","Intermediate"]
    ],
    Back:[
      ["Assisted Pull-up","full","Beginner"],["Pull-up","home","Intermediate"],["Chin-up","home","Intermediate"],["Chest-Supported Dumbbell Row","basic","Beginner"],
      ["Barbell Bent-Over Row","full","Intermediate"],["T-Bar Row","full","Intermediate"],["Machine Row","full","Beginner"],["Straight-Arm Pulldown","full","Beginner"],
      ["Face Pull","full","Beginner"],["Reverse Pec Deck","full","Beginner"],["Dumbbell Reverse Fly","basic","Beginner"],["Band Row","home","Beginner"],
      ["Band Pulldown","home","Beginner"]
    ],
    Legs:[
      ["Barbell Back Squat","full","Intermediate"],["Front Squat","full","Intermediate"],["Hack Squat","full","Beginner"],["Smith Machine Squat","full","Beginner"],
      ["Dumbbell Squat","basic","Beginner"],["Sumo Goblet Squat","basic","Beginner"],["Box Squat","basic","Beginner"],["Reverse Lunge","basic","Beginner"],
      ["Walking Lunge","basic","Intermediate"],["Step-up","basic","Beginner"],["Bulgarian Split Squat","basic","Intermediate"],["Hip Thrust","full","Beginner"],
      ["Dumbbell Hip Thrust","basic","Beginner"],["Glute Bridge","home","Beginner"],["Single-Leg Glute Bridge","home","Intermediate"],
      ["Barbell Romanian Deadlift","full","Intermediate"],["Dumbbell Romanian Deadlift","basic","Beginner"],["Cable Pull-Through","full","Beginner"],
      ["Leg Extension","full","Beginner"],["Seated Leg Curl","full","Beginner"],["Lying Leg Curl","full","Beginner"],["Standing Calf Raise","home","Beginner"],
      ["Seated Calf Raise","full","Beginner"],["Wall Sit","home","Beginner"],["Bodyweight Reverse Lunge","home","Beginner"]
    ],
    Shoulders:[
      ["Dumbbell Shoulder Press","basic","Beginner"],["Machine Shoulder Press","full","Beginner"],["Arnold Press","basic","Intermediate"],
      ["Cable Lateral Raise","full","Beginner"],["Dumbbell Lateral Raise","basic","Beginner"],["Front Raise","basic","Beginner"],["Rear Delt Fly","basic","Beginner"],
      ["Upright Cable Row","full","Intermediate"],["Band Pull-Apart","home","Beginner"],["Wall Slide","home","Beginner"]
    ],
    Arms:[
      ["Dumbbell Biceps Curl","basic","Beginner"],["Hammer Curl","basic","Beginner"],["Incline Dumbbell Curl","basic","Intermediate"],["Cable Curl","full","Beginner"],
      ["Preacher Curl","full","Beginner"],["Band Curl","home","Beginner"],["Rope Triceps Pressdown","full","Beginner"],["Overhead Cable Triceps Extension","full","Beginner"],
      ["Dumbbell Overhead Triceps Extension","basic","Beginner"],["Bench Dip","home","Intermediate"],["Close-Grip Dumbbell Press","basic","Intermediate"]
    ],
    Core:[
      ["Dead Bug","home","Beginner"],["Bird Dog","home","Beginner"],["Side Plank","home","Beginner"],["Knee Side Plank","home","Beginner"],
      ["Reverse Crunch","home","Beginner"],["Bicycle Crunch","home","Intermediate"],["Heel Tap","home","Beginner"],["Hollow Hold Prep","home","Intermediate"],
      ["Pallof Press","full","Beginner"],["Cable Wood Chop","full","Intermediate"],["Hanging Knee Raise","full","Intermediate"],["Farmer Carry","basic","Beginner"]
    ]
  };
  const muscleCue={
    Chest:"Set the shoulders, keep a stable torso, and move through a comfortable range without bouncing.",
    Back:"Keep the chest controlled, initiate with the back/elbows, and avoid using momentum.",
    Legs:"Brace the trunk, keep the whole foot stable, and let knees track naturally with the toes.",
    Shoulders:"Keep ribs controlled and shoulders away from the ears; use a load you can move smoothly.",
    Arms:"Keep the upper arm controlled and avoid swinging; use full comfortable range.",
    Core:"Brace gently, breathe, and keep the spine controlled instead of chasing speed."
  };
  const muscleWhy={
    Chest:"Builds pressing strength and chest/triceps capacity.",
    Back:"Builds upper-back and pulling strength for balanced training.",
    Legs:"Builds lower-body strength, muscle and everyday movement capacity.",
    Shoulders:"Builds shoulder strength and upper-body balance.",
    Arms:"Adds direct arm strength and muscle work.",
    Core:"Builds trunk control and stability for lifting and daily movement."
  };
  Object.entries(strength).forEach(([m,arr])=>arr.forEach(([n,e,level])=>add(n,m,"Strength",e,level,muscleCue[m],muscleWhy[m],5.0,m.toLowerCase()+" strength","2–3 sets × 8–12 reps")));

  const yoga=[
    ["Tadasana / Mountain Pose","Standing","Beginner","Stand tall with feet grounded, ribs stacked over pelvis, shoulders relaxed."],
    ["Urdhva Hastasana / Upward Salute","Standing","Beginner","Reach arms overhead without forcing the low back; keep breathing easy."],
    ["Vrikshasana / Tree Pose","Balance","Beginner","Place the foot below or above the knee, use a wall if needed, and fix the gaze."],
    ["Utkatasana / Chair Pose","Standing","Beginner","Sit hips back as if to a chair, keep chest long and knees tracking with toes."],
    ["Trikonasana / Triangle Pose","Standing","Beginner","Lengthen both sides of the waist; use a block and avoid collapsing into the lower hand."],
    ["Virabhadrasana I / Warrior I","Standing","Beginner","Keep front knee aligned, back heel grounded if comfortable, and torso tall."],
    ["Virabhadrasana II / Warrior II","Standing","Beginner","Front knee tracks over toes; reach through both arms while shoulders stay relaxed."],
    ["Virabhadrasana III / Warrior III","Balance","Intermediate","Hinge from the hip with a long spine; use a wall or blocks for balance."],
    ["Utthita Parsvakonasana / Extended Side Angle","Standing","Intermediate","Keep front knee stable and lengthen the top side of the body."],
    ["Ardha Chandrasana / Half Moon","Balance","Intermediate","Use a block under the lower hand and open the chest gradually."],
    ["Prasarita Padottanasana / Wide-Leg Forward Fold","Forward Fold","Beginner","Hinge from hips, keep knees soft, and stop before hamstrings feel strained."],
    ["Parsvottanasana / Pyramid Pose","Standing","Intermediate","Square hips gently and fold only as far as the back stays long."],
    ["Malasana / Garland Squat","Hip Mobility","Beginner","Use a block under hips or hold support; keep heels comfortable and chest lifted."],
    ["Anjaneyasana / Low Lunge","Hip Mobility","Beginner","Keep front knee over ankle and gently tuck pelvis to feel the rear hip."],
    ["Ardha Hanumanasana / Half Split","Hamstrings","Beginner","Shift hips back, flex front foot, and keep the spine long."],
    ["Adho Mukha Svanasana / Downward Dog","Full Body","Beginner","Press floor away, bend knees if needed, and lengthen the spine rather than forcing heels down."],
    ["Phalakasana / Plank Pose","Core","Beginner","Keep body in one line, push floor away, and stop before the low back sags."],
    ["Chaturanga Prep","Upper Body","Intermediate","Lower from knees or toes with elbows close and shoulders controlled."],
    ["Bhujangasana / Cobra Pose","Backbend","Beginner","Use back muscles more than arm force; keep elbows soft and lift only comfortably."],
    ["Sphinx Pose","Backbend","Beginner","Forearms under shoulders, chest long, and keep the low back comfortable."],
    ["Salabhasana / Locust Pose","Back Body","Intermediate","Lift chest/legs gently from back-body effort without throwing the neck back."],
    ["Dhanurasana / Bow Pose","Backbend","Intermediate","Hold ankles only if shoulders/knees are comfortable; lift gradually without forcing."],
    ["Balasana / Child's Pose","Recovery","Beginner","Let hips move toward heels and support head if needed; breathe slowly."],
    ["Marjaryasana-Bitilasana / Cat-Cow","Spine Mobility","Beginner","Move the spine slowly with the breath; avoid pushing into end range."],
    ["Thread the Needle","Shoulder Mobility","Beginner","Slide one arm under the other and rotate gently through the upper back."],
    ["Puppy Pose / Uttana Shishosana","Shoulder Mobility","Beginner","Keep hips roughly above knees and lower chest only as shoulders allow."],
    ["Dandasana / Staff Pose","Seated","Beginner","Sit tall on sit bones with knees soft if hamstrings pull the pelvis backward."],
    ["Paschimottanasana / Seated Forward Fold","Forward Fold","Beginner","Hinge from hips and keep the spine long; use a strap if needed."],
    ["Janu Sirsasana / Head-to-Knee Pose","Forward Fold","Beginner","Turn toward the straight leg and fold gently without pulling on the foot."],
    ["Baddha Konasana / Bound Angle","Hip Mobility","Beginner","Sit tall, support knees if needed, and avoid pressing them down forcefully."],
    ["Upavistha Konasana / Wide-Angle Seated Fold","Hip Mobility","Intermediate","Keep knees pointing up and hinge forward only while the spine stays long."],
    ["Ardha Matsyendrasana / Half Lord of the Fishes","Twist","Beginner","Grow tall before rotating; twist through upper trunk without forcing the neck."],
    ["Supine Spinal Twist","Recovery","Beginner","Keep shoulders relaxed and let knees move only as far as comfortable."],
    ["Setu Bandhasana / Bridge Pose","Back Body","Beginner","Press through feet, lift hips comfortably, and keep knees parallel."],
    ["Pavanamuktasana / Knees-to-Chest","Recovery","Beginner","Draw knees in gently while keeping head relaxed."],
    ["Supta Baddha Konasana / Reclined Bound Angle","Recovery","Beginner","Support thighs with cushions if hips feel strained and breathe naturally."],
    ["Ananda Balasana / Happy Baby","Hip Mobility","Beginner","Hold thighs or feet and keep the low back comfortable on the floor."],
    ["Viparita Karani / Legs Up the Wall","Recovery","Beginner","Set hips a comfortable distance from the wall and relax without forcing hamstrings."],
    ["Savasana / Corpse Pose","Recovery","Beginner","Lie comfortably, support knees/head if useful, and let breathing settle."],
    ["Navasana Prep / Boat Pose","Core","Intermediate","Keep chest lifted and knees bent as needed; avoid rounding and straining the neck."],
    ["Garudasana / Eagle Pose","Balance","Intermediate","Use a kickstand foot if balance is difficult and keep the standing knee soft."],
    ["Gomukhasana Arms / Cow-Face Arms","Shoulder Mobility","Beginner","Use a strap between hands and avoid forcing shoulder rotation."],
    ["Camel Pose Prep / Ustrasana Prep","Backbend","Intermediate","Hands on hips, lift chest and gently extend without dropping into the low back."],
    ["Lizard Pose Prep","Hip Mobility","Intermediate","Keep front foot grounded and use blocks; do not force the hip toward the floor."],
    ["Figure-4 Reclined Stretch","Hip Mobility","Beginner","Cross ankle over thigh and draw legs in only until a comfortable hip stretch appears."],
    ["Half Kneeling Side Bend","Side Body","Beginner","Stabilize hips and reach up/over without twisting."],
    ["Seated Side Bend","Side Body","Beginner","Keep both sit bones grounded and lengthen before bending sideways."],
    ["Chair Yoga Twist","Twist","Beginner","Sit tall and rotate gently from the torso while keeping hips forward."],
    ["Chair Yoga Forward Fold","Recovery","Beginner","Hinge forward with feet stable and let neck relax only if comfortable."],
    ["Chair Yoga Leg Extension","Legs","Beginner","Sit tall, extend one knee slowly, pause, and lower with control."]
  ];
  yoga.forEach(([n,focus,level,cue])=>add(n,"Yoga","Yoga","home",level,cue,"Improves body awareness, mobility, balance or relaxation depending on the pose.",2.5,focus.toLowerCase()+" yoga",level==="Beginner"?"30–45 sec / 4–6 breaths":"20–40 sec / 3–5 breaths"));

  const mobility=[
    ["90/90 Hip Switch","Hips","Sit tall and rotate knees side to side under control; use hands for support."],
    ["90/90 Hip Hold","Hips","Stay tall over the front shin and use support so the position is comfortable."],
    ["World's Greatest Stretch","Full Body","Step into a lunge, support the hand, and rotate gently through the upper back."],
    ["Half-Kneeling Hip Flexor Stretch","Hips","Tuck pelvis gently and shift forward slightly without arching the back."],
    ["Standing Quad Stretch","Quads","Hold support, keep knees close, and avoid pulling the heel aggressively."],
    ["Hamstring Doorway Stretch","Hamstrings","Keep one leg supported and the opposite leg relaxed; stop before tingling or strain."],
    ["Calf Wall Stretch","Calves","Keep heel down and toes forward while leaning toward the wall."],
    ["Ankle Knee-to-Wall","Ankles","Drive knee toward wall while heel stays down; keep foot pointing forward."],
    ["Deep Squat Supported Hold","Hips","Hold a stable support and sit only as deep as hips/knees remain comfortable."],
    ["Adductor Rock-Back","Hips","One leg out to side; rock hips back with a neutral spine and gentle inner-thigh stretch."],
    ["Open Book Rotation","Upper Back","Lie on the side and rotate the top arm/chest back without forcing the low back."],
    ["Quadruped Thoracic Rotation","Upper Back","From hands/knees, rotate elbow toward ceiling while hips stay quiet."],
    ["Wall Angel","Shoulders","Keep ribs controlled and slide arms on the wall only through pain-free range."],
    ["Shoulder CARs","Shoulders","Circle one arm slowly through the largest comfortable range without twisting."],
    ["Doorway Pec Stretch","Chest","Forearm on doorway, turn away gently, and keep shoulder down."],
    ["Cross-Body Shoulder Stretch","Shoulders","Bring arm across chest without pulling on the elbow joint."],
    ["Neck Rotation Gentle","Neck","Turn head slowly side to side within an easy range; do not force."],
    ["Neck Side Bend Gentle","Neck","Bring ear slightly toward shoulder while keeping shoulders relaxed."],
    ["Wrist Flexor Stretch","Wrists","Straighten elbow gently and extend wrist only to a mild stretch."],
    ["Wrist Circles","Wrists","Circle wrists slowly in both directions without forcing end range."],
    ["Hip Airplane Supported","Hips","Hold support, hinge slightly and rotate pelvis slowly while standing leg stays stable."],
    ["Cossack Squat Mobility","Hips","Shift side to side with support; keep the working foot grounded and depth comfortable."],
    ["Figure-4 Hip Stretch","Hips","Cross ankle over opposite thigh and hinge gently with a long spine."],
    ["Lat Wall Stretch","Back","Hands on wall, sit hips back and lengthen through sides without forcing shoulders."],
    ["Child's Pose Side Reach","Back","From child's pose walk hands to one side and breathe into the opposite side body."]
  ];
  mobility.forEach(([n,focus,cue])=>add(n,"Mobility","Mobility","home","Beginner",cue,"Maintains or improves comfortable movement range and helps recovery from sitting/training.",2.3,focus.toLowerCase()+" stretch mobility","6–10 slow reps or 20–40 sec"));

  const pilates=[
    ["Pilates Hundred Prep","Core","Lie on back with knees bent/tabletop, brace gently and pulse arms while breathing steadily."],
    ["Pilates Toe Taps","Core","Keep pelvis steady while one foot taps down at a time."],
    ["Single Leg Stretch","Core","Alternate legs while keeping trunk stable and neck relaxed."],
    ["Double Leg Stretch Prep","Core","Move arms/legs away only as far as the low back remains controlled."],
    ["Pilates Roll-Up Prep","Core","Curl up gradually using abdominal control; shorten the range if hip flexors dominate."],
    ["Pilates Bridge","Glutes","Peel spine up gradually, squeeze glutes gently, and lower with control."],
    ["Pilates Clamshell","Hips","Keep hips stacked and rotate the top knee without rolling backward."],
    ["Side-Lying Leg Lift","Hips","Keep pelvis stacked and lift the top leg without hiking the hip."],
    ["Pilates Swimming Prep","Back Body","Lift opposite arm/leg lightly while keeping trunk long and stable."],
    ["Pilates Bird Dog","Core","Reach opposite arm/leg while keeping hips square and ribs controlled."],
    ["Pilates Spine Twist","Core","Sit tall and rotate gently without shifting the pelvis."],
    ["Pilates Saw Prep","Core","Rotate and reach with control while staying tall through the trunk."],
    ["Pilates Leg Circle","Hips","Circle one leg from the hip while pelvis stays quiet; make circles small if needed."],
    ["Pilates Knee Fold","Core","Lift one foot to tabletop without letting pelvis rock."],
    ["Pilates Side Kick","Hips","Keep torso stable while leg swings in a controlled small range."],
    ["Pilates Swan Prep","Back Body","Lengthen chest forward and gently lift without compressing the low back."]
  ];
  pilates.forEach(([n,focus,cue])=>add(n,"Pilates","Pilates","home","Beginner",cue,"Builds controlled core, hip and postural strength with low equipment demand.",3.0,focus.toLowerCase()+" pilates","2 sets × 8–12 controlled reps"));

  const cardio=[
    ["Easy Walk","home","Beginner",2.5],["Brisk Outdoor Walk","home","Beginner",4.3],["Walk Intervals","home","Beginner",5.0],
    ["Treadmill Walk","full","Beginner",3.8],["Incline Treadmill Walk","full","Beginner",5.0],["Easy Jog","home","Intermediate",7.0],
    ["Stationary Bike Easy","full","Beginner",4.0],["Stationary Bike Moderate","full","Beginner",6.0],["Elliptical Moderate","full","Beginner",5.5],
    ["Rowing Machine Moderate","full","Intermediate",6.0],["Stair Climber Easy","full","Beginner",5.0],["Low-Impact March","home","Beginner",3.5],
    ["Step Touch Cardio","home","Beginner",3.5],["Shadow Boxing Easy","home","Beginner",4.5],["Dance Cardio Easy","home","Beginner",4.5],
    ["Jump Rope Easy Intervals","home","Intermediate",8.0],["Mountain Climber Slow","home","Intermediate",6.0],["Low-Impact Step-Ups","home","Beginner",4.5]
  ];
  cardio.forEach(([n,e,level,met])=>add(n,"Cardio","Cardio",e,level,"Choose a pace that raises breathing but remains controlled; reduce impact or speed as needed.","Improves aerobic fitness and adds activity expenditure without needing complicated equipment.",met,"cardio conditioning", "5–20 min"));

  const recovery=[
    ["Diaphragmatic Breathing","Breathing","Breathe quietly through the nose if comfortable, letting lower ribs/abdomen expand without forcing."],
    ["Slow 4-in / 6-out Breathing","Breathing","Inhale gently for about 4 counts and exhale for about 6; stop if light-headed."],
    ["Box Breathing Gentle","Breathing","Use equal comfortable counts for inhale, pause, exhale and pause; shorten counts if needed."],
    ["Alternate Nostril Breathing Gentle","Breathing","Use a very light pace without breath-holding or strain; return to normal breathing anytime."],
    ["Body Scan Relaxation","Recovery","Move attention slowly through the body while letting muscles soften and breathing remain natural."],
    ["Supine Relaxation","Recovery","Lie comfortably with knees supported if useful and allow breathing to settle."],
    ["Easy Full-Body Stretch","Recovery","Use relaxed, pain-free stretches for major muscle groups without bouncing."],
    ["Post-Workout Walk","Recovery","Walk easily for a few minutes until breathing settles."],
    ["Morning Joint Circles","Warm-up","Circle ankles, hips, shoulders and wrists slowly through comfortable range."],
    ["March + Arm Swing Warm-up","Warm-up","March gently while swinging arms and gradually increasing range."],
    ["Bodyweight Good Morning Warm-up","Warm-up","Push hips back with soft knees and a long spine; keep range small."],
    ["Squat-to-Reach Warm-up","Warm-up","Use a comfortable squat depth and reach overhead without arching aggressively."],
    ["Lunge + Reach Warm-up","Warm-up","Step into a short lunge and reach overhead only as balance allows."],
    ["Scapular Push-up","Warm-up","Keep elbows straight and let shoulder blades glide together/apart without sagging."],
    ["Glute Bridge Warm-up","Warm-up","Press through feet and lift hips with gentle glute tension."]
  ];
  recovery.forEach(([n,m,cue])=>add(n,m,m==="Breathing"?"Breathing":m,"home","Beginner",cue,m==="Breathing"?"Supports relaxation and breathing awareness; it is not a medical breathing treatment.":"Useful as a low-intensity warm-up or recovery activity.",m==="Breathing"?1.5:2.2,(m+" recovery").toLowerCase(),m==="Breathing"?"2–5 min":"5–10 slow reps / 20–30 sec"));

  window.DK_MOVEMENTS = out;
})();