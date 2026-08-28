/* DK FitTrack v1.5 — Movement Studio
   Adds Healthify-style breadth: strength, home/gym, yoga, mobility, Pilates, cardio,
   breathing/recovery, favorites, routines, timer, logging and estimated activity calories.
*/
(function(){
  if(window.__DK_MOVEMENT_HUB__) return;
  window.__DK_MOVEMENT_HUB__=true;

  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const extras=()=>window.DK_MOVEMENTS||[];
  state.favoriteMovements=state.favoriteMovements||[];
  state.movementSessions=state.movementSessions||[];
  state.studioPlan=state.studioPlan||[];

  const baseAll=window.allExercises;
  const mergedAll=function(){
    const base=typeof baseAll==="function"?baseAll():[];
    const seen=new Set(), out=[];
    [...base,...extras()].forEach(x=>{const k=(x.n||"").toLowerCase();if(k&&!seen.has(k)){seen.add(k);out.push(x)}});
    return out;
  };
  window.allExercises=mergedAll;
  try{allExercises=mergedAll}catch(e){}

  const ROUTINES=[
    {id:"restart",name:"Beginner Restart",icon:"🌱",type:"Strength",goal:"Restart",mins:25,equip:"home",desc:"Low-complexity full-body return to exercise."},
    {id:"home-strength",name:"Home Full Body",icon:"🏠",type:"Strength",goal:"Muscle",mins:30,equip:"home",desc:"Bodyweight strength with core and mobility."},
    {id:"db-strength",name:"Dumbbell Full Body",icon:"🏋️",type:"Strength",goal:"Muscle",mins:35,equip:"basic",desc:"Efficient dumbbell muscle-building session."},
    {id:"gym-strength",name:"Gym Full Body",icon:"💪",type:"Strength",goal:"Muscle",mins:40,equip:"full",desc:"Machine/free-weight full-body workout."},
    {id:"upper",name:"Upper Body Strength",icon:"🦾",type:"Strength",goal:"Upper",mins:30,equip:"basic",desc:"Push, pull, shoulders and arms."},
    {id:"lower",name:"Lower Body Strength",icon:"🦵",type:"Strength",goal:"Lower",mins:30,equip:"basic",desc:"Squat, hinge, single-leg and calves."},
    {id:"core",name:"Core & Posture",icon:"🎯",type:"Core",goal:"Core",mins:15,equip:"home",desc:"Controlled trunk work with low equipment."},
    {id:"morning-yoga",name:"Morning Yoga",icon:"🧘",type:"Yoga",goal:"Yoga",mins:15,equip:"home",desc:"Gentle mobility, balance and breathing to start the day.",
      seq:["Tadasana / Mountain Pose","Urdhva Hastasana / Upward Salute","Marjaryasana-Bitilasana / Cat-Cow","Adho Mukha Svanasana / Downward Dog","Anjaneyasana / Low Lunge","Trikonasana / Triangle Pose","Balasana / Child's Pose","Savasana / Corpse Pose"]},
    {id:"surya",name:"Surya Namaskar Practice",icon:"☀️",type:"Yoga",goal:"Yoga",mins:15,equip:"home",desc:"A simplified sun-salutation style flow at a comfortable pace.",
      seq:["Tadasana / Mountain Pose","Urdhva Hastasana / Upward Salute","Prasarita Padottanasana / Wide-Leg Forward Fold","Phalakasana / Plank Pose","Bhujangasana / Cobra Pose","Adho Mukha Svanasana / Downward Dog","Anjaneyasana / Low Lunge","Tadasana / Mountain Pose"]},
    {id:"beginner-yoga",name:"Beginner Full-Body Yoga",icon:"🪷",type:"Yoga",goal:"Yoga",mins:25,equip:"home",desc:"Accessible standing, floor and recovery poses.",
      seq:["Tadasana / Mountain Pose","Vrikshasana / Tree Pose","Virabhadrasana II / Warrior II","Trikonasana / Triangle Pose","Baddha Konasana / Bound Angle","Setu Bandhasana / Bridge Pose","Supine Spinal Twist","Balasana / Child's Pose","Savasana / Corpse Pose"]},
    {id:"evening-yoga",name:"Evening Wind Down",icon:"🌙",type:"Yoga",goal:"Recovery",mins:12,equip:"home",desc:"Low-intensity floor poses and relaxed breathing.",
      seq:["Balasana / Child's Pose","Figure-4 Reclined Stretch","Supine Spinal Twist","Supta Baddha Konasana / Reclined Bound Angle","Viparita Karani / Legs Up the Wall","Savasana / Corpse Pose","Slow 4-in / 6-out Breathing"]},
    {id:"hips",name:"Hip Mobility",icon:"🔄",type:"Mobility",goal:"Mobility",mins:15,equip:"home",desc:"Hips, adductors, flexors and ankles."},
    {id:"desk",name:"Desk Relief Mobility",icon:"🪑",type:"Mobility",goal:"Mobility",mins:10,equip:"home",desc:"Neck, upper back, shoulders and hips after sitting."},
    {id:"shoulders",name:"Shoulder Mobility",icon:"🙆",type:"Mobility",goal:"Mobility",mins:12,equip:"home",desc:"Shoulder blade motion, chest opening and upper-back rotation."},
    {id:"recovery",name:"Recovery Day Flow",icon:"🌿",type:"Recovery",goal:"Recovery",mins:20,equip:"home",desc:"Walking, mobility and easy relaxation."},
    {id:"pilates-core",name:"Pilates Core",icon:"⭕",type:"Pilates",goal:"Core",mins:20,equip:"home",desc:"Controlled trunk and hip stability."},
    {id:"pilates-body",name:"Pilates Full Body",icon:"🤸",type:"Pilates",goal:"Pilates",mins:25,equip:"home",desc:"Core, hips and posture-focused mat session."},
    {id:"low-cardio",name:"Low-Impact Cardio",icon:"🚶",type:"Cardio",goal:"Fat loss",mins:20,equip:"home",desc:"Walking/marching style aerobic session."},
    {id:"walk-interval",name:"Walk Intervals",icon:"👟",type:"Cardio",goal:"Cardio",mins:30,equip:"home",desc:"Easy/brisk alternating walking blocks."},
    {id:"gym-cardio",name:"Gym Cardio Mix",icon:"❤️",type:"Cardio",goal:"Cardio",mins:25,equip:"full",desc:"Treadmill, bike, elliptical or rower options."},
    {id:"breath",name:"Breathing & Relaxation",icon:"🌬️",type:"Breathing",goal:"Recovery",mins:10,equip:"home",desc:"Gentle breathing awareness and relaxation; not medical treatment."}
  ];

  function iconFor(x){
    const t=x.type||x.m;
    return t==="Yoga"?"🧘":t==="Pilates"?"⭕":t==="Mobility"?"🔄":t==="Cardio"?"❤️":t==="Breathing"?"🌬️":t==="Recovery"?"🌿":t==="Warm-up"?"🔥":"🏋️";
  }
  function isFav(name){return state.favoriteMovements.includes(name)}
  window.dkToggleFavorite=function(encoded){
    const name=decodeURIComponent(encoded), i=state.favoriteMovements.indexOf(name);
    if(i>=0) state.favoriteMovements.splice(i,1); else state.favoriteMovements.push(name);
    saveState(); renderStudio(); renderExtendedLibrary();
  };
  window.dkMovementHelp=function(encoded){
    const name=decodeURIComponent(encoded),x=mergedAll().find(e=>e.n===name);if(!x)return;
    openModal(x.n, `<div class="movement-help">
      <div class="movement-help-meta">${iconFor(x)} ${esc(x.type||x.m)} • ${esc(x.level||"Beginner")} • ${equipmentText(x.e)}</div>
      <p><b>How to do it</b><br>${esc(x.cue||"Move slowly with controlled, pain-free form.")}</p>
      <p><b>Why include it</b><br>${esc(x.why||"Useful general fitness movement.")}</p>
      <p><b>Suggested dose</b><br>${esc(x.dose||doseFor(x))}</p>
      <div class="tip-box">Technique should stay comfortable. Stop for sharp pain, dizziness, or unusual symptoms. Yoga/stretching positions should never be forced.</div>
      <div class="button-row">
        <button class="btn" onclick="addExerciseToSmartPlan('${encodeURIComponent(x.n)}');closeModal()">＋ Add to current plan</button>
        <button class="btn secondary" onclick="dkToggleFavorite('${encodeURIComponent(x.n)}');closeModal()">${isFav(x.n)?"★ Remove favorite":"☆ Favorite"}</button>
      </div>
    </div>`);
  };

  function equipmentText(e){return e==="full"?"Gym":e==="basic"?"Dumbbell / basic gym":"Home / no equipment"}
  function doseFor(x){
    const t=x.type||x.m;
    if(t==="Yoga") return "30–45 sec / 4–6 comfortable breaths";
    if(t==="Mobility"||t==="Recovery"||t==="Warm-up") return "6–10 slow reps or 20–40 sec";
    if(t==="Pilates") return "2 sets × 8–12 controlled reps";
    if(t==="Cardio") return "5–20 min at a sustainable pace";
    if(t==="Breathing") return "2–5 min, easy breathing only";
    if(x.m==="Core") return "2–3 sets × 8–15 reps or 20–45 sec";
    return "2–3 sets × 8–12 reps";
  }
  function latestWeight(){
    const arr=[...(state.progress||[])].sort((a,b)=>a.date.localeCompare(b.date));
    return Number(arr.at(-1)?.weight||state.profile?.startWeight||75);
  }
  function estimateKcal(plan,mins){
    if(!plan.length||!mins)return 0;
    const avg=plan.reduce((a,x)=>a+Number(x.met||3.5),0)/plan.length;
    return Math.round(avg*3.5*latestWeight()/200*mins);
  }
  function compatible(x,e){
    if(e==="full")return true;
    if(e==="basic")return x.e!=="full";
    return x.e==="home";
  }
  function choose(pool,count,seed=0){
    const out=[];for(let i=0;i<pool.length&&out.length<count;i++){const x=pool[(i+seed)%pool.length];if(x&&!out.some(y=>y.n===x.n))out.push(x)}
    return out;
  }
  function buildFromRoutine(r){
    const all=mergedAll(), mins=r.mins;
    if(r.seq){
      return r.seq.map(n=>all.find(x=>x.n===n)).filter(Boolean);
    }
    let pool=all.filter(x=>compatible(x,r.equip));
    if(r.type==="Strength"){
      pool=pool.filter(x=>(x.type||"Strength")==="Strength");
      if(r.goal==="Upper")pool=pool.filter(x=>["Chest","Back","Shoulders","Arms"].includes(x.m));
      else if(r.goal==="Lower")pool=pool.filter(x=>x.m==="Legs"||x.m==="Core");
      else pool=pool.filter(x=>["Legs","Chest","Back","Shoulders","Core","Arms"].includes(x.m));
    }else if(r.type==="Core")pool=pool.filter(x=>x.m==="Core"||x.type==="Pilates");
    else if(r.type==="Recovery")pool=pool.filter(x=>["Recovery","Mobility","Breathing"].includes(x.type||x.m));
    else pool=pool.filter(x=>(x.type||x.m)===r.type);
    const count=mins<=10?4:mins<=15?5:mins<=20?6:mins<=30?7:8;
    return choose(pool,count,(state.currentWeek||1)%Math.max(1,pool.length));
  }
  function planItem(x){
    return {name:x.n,m:x.m,type:x.type||"Strength",sets:(x.type==="Cardio"||x.type==="Breathing")?1:(x.type==="Yoga"||x.type==="Mobility"||x.type==="Recovery"||x.type==="Warm-up")?1:2,
      reps:x.dose||doseFor(x),rest:["Yoga","Mobility","Recovery","Breathing"].includes(x.type)?"as needed":"45–90 sec",cue:x.cue,why:x.why,rpe:x.type==="Cardio"?6:x.type==="Strength"?7:5,met:x.met||3.5};
  }
  function setPlan(name,arr,mins){
    state.studioPlan=arr.map(planItem);state.studioPlanName=name;state.studioPlanMinutes=mins;saveState();renderStudioPlan();toast(name+" ready");
  }
  window.dkStartRoutine=function(id){
    const r=ROUTINES.find(x=>x.id===id);if(!r)return;setPlan(r.name,buildFromRoutine(r),r.mins);
  };

  function smartStudioPlan(){
    const goal=$("#studioGoal")?.value||"Muscle",mins=Number($("#studioMinutes")?.value||25),equip=$("#studioEquipment")?.value||"home";
    const all=mergedAll().filter(x=>compatible(x,equip));let pool;
    if(goal==="Muscle") pool=all.filter(x=>(x.type||"Strength")==="Strength");
    else if(goal==="Fat loss") pool=all.filter(x=>["Strength","Cardio"].includes(x.type||"Strength"));
    else if(goal==="Yoga") pool=all.filter(x=>x.type==="Yoga");
    else if(goal==="Mobility") pool=all.filter(x=>x.type==="Mobility");
    else if(goal==="Pilates") pool=all.filter(x=>x.type==="Pilates");
    else if(goal==="Recovery") pool=all.filter(x=>["Recovery","Mobility","Breathing"].includes(x.type||x.m));
    else if(goal==="Core") pool=all.filter(x=>x.m==="Core"||x.type==="Pilates");
    else pool=all.filter(x=>["Strength","Mobility","Warm-up"].includes(x.type||"Strength"));
    const count=mins<=10?4:mins<=15?5:mins<=20?6:mins<=30?7:9;
    setPlan("Smart "+goal+" • "+mins+" min",choose(pool,count,state.currentWeek||1),mins);
  }

  function renderStudioPlan(){
    const box=$("#studioPlan");if(!box)return;
    const list=state.studioPlan||[],mins=Number(state.studioPlanMinutes||0),kcal=estimateKcal(list,mins);
    if(!list.length){box.innerHTML='<div class="studio-empty">Choose a routine or generate a session. Your plan will appear here.</div>';return}
    box.innerHTML=`<div class="studio-plan-head">
      <div><span class="eyebrow">YOUR SESSION</span><h3>${esc(state.studioPlanName||"Movement Session")}</h3><small>${mins} min • approx. ${kcal} kcal activity estimate</small></div>
      <div class="button-row"><button id="studioStartTimer" class="btn secondary">⏱ Start timer</button><button id="studioLogSession" class="btn">✓ Log session</button></div>
    </div>
    <div class="studio-plan-list">${list.map((x,i)=>`<div class="studio-move">
      <div class="studio-move-num">${i+1}</div><div><b>${iconFor(x)} ${esc(x.name)}</b><small>${esc(x.type||x.m)} • ${esc(x.reps||"")}</small><p>${esc(x.cue||"Controlled, comfortable movement.")}</p></div>
      <button class="icon-btn" onclick="dkMovementHelp('${encodeURIComponent(x.name)}')" aria-label="Help">?</button>
    </div>`).join("")}</div>
    <div class="activity-estimate">Calorie burn is a rough estimate from activity intensity, body weight and duration; actual burn varies substantially by pace, fitness and technique.</div>`;
    $("#studioStartTimer").onclick=()=>startStudioTimer(mins);
    $("#studioLogSession").onclick=()=>logStudioSession();
  }

  let timerId=null,timerLeft=0,timerTotal=0;
  function timerText(sec){const m=Math.floor(sec/60),s=sec%60;return String(m).padStart(2,"0")+":"+String(s).padStart(2,"0")}
  function updateTimer(){const el=$("#movementTimerValue");if(el)el.textContent=timerText(timerLeft)}
  function startStudioTimer(mins){
    timerTotal=Math.max(1,mins||state.studioPlanMinutes||10)*60;timerLeft=timerTotal;updateTimer();
    $("#movementTimerPanel")?.classList.add("active"); if(timerId)clearInterval(timerId);
    timerId=setInterval(()=>{timerLeft=Math.max(0,timerLeft-1);updateTimer();if(timerLeft===0){clearInterval(timerId);timerId=null;toast("Session timer complete")}},1000);
  }
  function pauseTimer(){if(timerId){clearInterval(timerId);timerId=null}else if(timerLeft>0){timerId=setInterval(()=>{timerLeft=Math.max(0,timerLeft-1);updateTimer();if(timerLeft===0){clearInterval(timerId);timerId=null;toast("Session timer complete")}},1000)}}
  function resetTimer(){if(timerId)clearInterval(timerId);timerId=null;timerLeft=timerTotal;updateTimer()}
  function logStudioSession(){
    const list=state.studioPlan||[];if(!list.length)return toast("Create a session first");
    const mins=Number(state.studioPlanMinutes||20),kcal=estimateKcal(list,mins);
    const rec={date:activeDate,name:state.studioPlanName||"Movement Session",duration:mins,calories:kcal,items:list.map(x=>x.name),createdAt:new Date().toISOString()};
    state.movementSessions.push(rec);
    daily().workouts.push({type:rec.name,duration:mins,rpe:6,calories:kcal,notes:list.map(x=>x.name).join(", "),time:new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})});
    saveState();renderAll();renderStudio();toast("Session logged");
  }

  function injectStudio(){
    if($("#movementStudio"))return;
    const lib=$("#exerciseLibrary")?.closest(".card");if(!lib)return;
    const section=document.createElement("div");section.id="movementStudio";
    section.innerHTML=`
      <div class="card movement-studio-card">
        <div class="section-title"><div><span class="eyebrow">MOVEMENT STUDIO</span><h3>Exercise • Yoga • Mobility • Pilates • Cardio</h3></div><span id="movementCount"></span></div>
        <div class="studio-chips">
          <button data-studio-type="all" class="active">All</button><button data-studio-type="Strength">Strength</button><button data-studio-type="Yoga">Yoga</button>
          <button data-studio-type="Mobility">Mobility</button><button data-studio-type="Pilates">Pilates</button><button data-studio-type="Cardio">Cardio</button>
          <button data-studio-type="Breathing">Breathing</button><button data-studio-type="favorites">★ Favorites</button>
        </div>
        <div class="studio-builder">
          <label>Goal<select id="studioGoal"><option>Muscle</option><option>Fat loss</option><option>Yoga</option><option>Mobility</option><option>Pilates</option><option>Core</option><option>Recovery</option><option>Beginner restart</option></select></label>
          <label>Time<select id="studioMinutes"><option>10</option><option>15</option><option>20</option><option selected>25</option><option>30</option><option>40</option><option>45</option></select></label>
          <label>Equipment<select id="studioEquipment"><option value="home">Home / none</option><option value="basic">Dumbbells / bench</option><option value="full">Full gym</option></select></label>
          <button id="studioGenerate" class="btn">✨ Generate plan</button>
        </div>
        <div id="movementTimerPanel" class="movement-timer"><span>Session timer</span><strong id="movementTimerValue">00:00</strong><button id="timerPause" class="mini-btn">Pause / resume</button><button id="timerReset" class="mini-btn">Reset</button></div>
        <div class="section-title studio-routine-title"><h3>Ready-made routines</h3><span>Choose and start</span></div>
        <div id="routineGrid" class="routine-grid"></div>
        <div id="studioPlan"></div>
      </div>`;
    lib.parentNode.insertBefore(section,lib);

    const style=document.createElement("style");style.textContent=`
      .movement-studio-card{background:linear-gradient(145deg,#fff,#f6fbf8)}
      .studio-chips{display:flex;gap:8px;overflow:auto;padding:2px 0 12px;scrollbar-width:none}.studio-chips::-webkit-scrollbar{display:none}
      .studio-chips button{white-space:nowrap;border:1px solid var(--line);background:#fff;border-radius:999px;padding:9px 13px;font-weight:700;color:#475467}
      .studio-chips button.active{background:var(--dark);color:#fff;border-color:var(--dark)}
      .studio-builder{display:grid;grid-template-columns:1.25fr .8fr 1fr auto;gap:10px;align-items:end;padding:14px;background:#f8fafb;border:1px solid var(--line);border-radius:16px}
      .studio-builder label{font-size:12px;color:var(--muted);display:flex;flex-direction:column;gap:5px}
      .routine-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:18px}
      .routine-card{border:1px solid var(--line);background:#fff;border-radius:16px;padding:13px;cursor:pointer;text-align:left;transition:.18s}
      .routine-card:hover{transform:translateY(-2px);box-shadow:var(--shadow);border-color:#b9ddcf}.routine-card .ri{font-size:25px}.routine-card b{display:block;margin:7px 0 3px}.routine-card small{color:var(--muted)}.routine-card p{font-size:12px;color:var(--muted);line-height:1.4;margin:7px 0 0}
      .studio-plan-head{display:flex;justify-content:space-between;gap:12px;align-items:center;border-top:1px solid var(--line);padding-top:17px}.studio-plan-head h3{margin:3px 0}
      .studio-plan-list{display:grid;gap:8px;margin-top:12px}.studio-move{display:grid;grid-template-columns:36px 1fr 34px;gap:10px;align-items:start;background:#fff;border:1px solid var(--line);border-radius:14px;padding:11px}
      .studio-move-num{width:30px;height:30px;border-radius:10px;background:#eaf7f1;color:#166347;display:grid;place-items:center;font-weight:900}.studio-move small{display:block;color:var(--muted);margin-top:2px}.studio-move p{margin:6px 0 0;font-size:12px;color:#667085;line-height:1.4}
      .icon-btn{border:0;background:#eef4f1;border-radius:50%;width:30px;height:30px;font-weight:900;color:#155d45}.activity-estimate{font-size:11px;color:var(--muted);margin-top:10px}
      .movement-timer{display:none;margin:12px 0;background:#101828;color:#fff;border-radius:16px;padding:12px 14px;align-items:center;gap:10px}.movement-timer.active{display:flex}.movement-timer strong{font-size:24px;margin-right:auto}
      .studio-routine-title{margin-top:16px}.studio-empty{padding:20px;text-align:center;color:var(--muted);border:1px dashed var(--line);border-radius:14px}
      .extended-lib .library-card{position:relative}.fav-star{position:absolute;right:10px;top:9px;border:0;background:transparent;font-size:22px;cursor:pointer}.lib-type{display:inline-block;background:#eef4f1;color:#155d45;border-radius:999px;padding:3px 7px;font-size:10px;font-weight:800;margin-right:4px}
      .movement-help p{line-height:1.55}.movement-help-meta{color:var(--muted);margin-bottom:12px}
      @media(max-width:900px){.routine-grid{grid-template-columns:repeat(2,1fr)}.studio-builder{grid-template-columns:1fr 1fr}.studio-builder .btn{grid-column:1/-1}}
      @media(max-width:520px){.movement-studio-card{margin-left:0;margin-right:0}.routine-grid{grid-template-columns:1fr 1fr;gap:8px}.routine-card{padding:11px}.studio-plan-head{align-items:flex-start;flex-direction:column}.studio-builder{grid-template-columns:1fr 1fr}.studio-chips{margin-right:-8px}.movement-timer{flex-wrap:wrap}}
    `;document.head.appendChild(style);

    $$("#movementStudio [data-studio-type]").forEach(b=>b.onclick=()=>{$$("#movementStudio [data-studio-type]").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderRoutines(b.dataset.studioType);filterLibraryByStudio(b.dataset.studioType)});
    $("#studioGenerate").onclick=smartStudioPlan;$("#timerPause").onclick=pauseTimer;$("#timerReset").onclick=resetTimer;
  }

  function renderRoutines(type="all"){
    const grid=$("#routineGrid");if(!grid)return;
    let list=ROUTINES;if(type==="favorites")list=[];else if(type!=="all")list=ROUTINES.filter(r=>r.type===type||r.goal===type);
    grid.innerHTML=list.slice(0,12).map(r=>`<button class="routine-card" onclick="dkStartRoutine('${r.id}')"><span class="ri">${r.icon}</span><b>${esc(r.name)}</b><small>${r.mins} min • ${r.equip==="full"?"Gym":r.equip==="basic"?"Dumbbells":"Home"}</small><p>${esc(r.desc)}</p></button>`).join("") || '<div class="studio-empty">Use ★ Favorites in the exercise library below.</div>';
  }

  function filterLibraryByStudio(type){
    const sel=$("#exerciseFilter");if(!sel)return;
    if(type==="all"||type==="favorites"){sel.value="all";extendedLibraryType=type;renderExtendedLibrary();return}
    const has=[...sel.options].some(o=>o.value===type||o.text===type);if(has)sel.value=type;extendedLibraryType=type;renderExtendedLibrary();
  }

  let extendedLibraryType="all";
  function renderExtendedLibrary(){
    const box=$("#exerciseLibrary");if(!box)return;
    const q=($("#exerciseSearch")?.value||"").toLowerCase().trim(),filter=$("#exerciseFilter")?.value||"all";
    let list=mergedAll().filter(x=>{
      const t=x.type||x.m;
      const filterOk=extendedLibraryType==="favorites"?isFav(x.n):(extendedLibraryType!=="all"?t===extendedLibraryType||x.m===extendedLibraryType:(filter==="all"||x.m===filter||t===filter));
      const searchOk=!q||`${x.n} ${x.m} ${t} ${x.e} ${x.cue||""} ${x.tags||""}`.toLowerCase().includes(q);
      return filterOk&&searchOk;
    }).slice(0,80);
    box.classList.add("extended-lib");
    box.innerHTML=list.length?list.map(x=>`<div class="library-card">
      <button class="fav-star" onclick="dkToggleFavorite('${encodeURIComponent(x.n)}')" aria-label="Favorite">${isFav(x.n)?"★":"☆"}</button>
      <div class="library-meta"><span class="lib-type">${iconFor(x)} ${esc(x.type||x.m)}</span> ${equipmentText(x.e)} • ${esc(x.level||"Custom")}</div>
      <h4>${esc(x.n)}</h4><p><b>How:</b> ${esc(x.cue||"Move with controlled, comfortable technique.")}</p><p><b>Dose:</b> ${esc(x.dose||doseFor(x))}</p>
      <div class="library-actions"><button class="mini-btn" onclick="dkMovementHelp('${encodeURIComponent(x.n)}')">How to</button><button class="mini-btn" onclick="addExerciseToSmartPlan('${encodeURIComponent(x.n)}')">＋ Add</button></div>
    </div>`).join(""):`<div class="empty-search">No movements match this filter. Try another category or search.</div>`;
  }
  window.renderExerciseLibrary=renderExtendedLibrary;
  try{renderExerciseLibrary=renderExtendedLibrary}catch(e){}

  function extendFilters(){
    const sel=$("#exerciseFilter");if(sel){
      ["Yoga","Mobility","Pilates","Breathing","Recovery","Warm-up"].forEach(v=>{if(![...sel.options].some(o=>o.value===v||o.text===v)){const o=document.createElement("option");o.value=v;o.textContent=v;sel.appendChild(o)}});
      sel.onchange=()=>{extendedLibraryType="all";renderExtendedLibrary()};
    }
    if($("#exerciseSearch"))$("#exerciseSearch").oninput=renderExtendedLibrary;
    const wt=$("#workoutType");if(wt)["Yoga","Mobility","Pilates","Cardio Session","Recovery"].forEach(v=>{if(![...wt.options].some(o=>o.value===v||o.text===v)){const o=document.createElement("option");o.textContent=v;wt.appendChild(o)}});
  }

  function renderStudio(){
    injectStudio();extendFilters();$("#movementCount")&&($("#movementCount").textContent=mergedAll().length+" movements");
    renderRoutines($(".studio-chips .active")?.dataset.studioType||"all");renderStudioPlan();renderExtendedLibrary();
  }

  // Improve old Add-to-plan behavior for non-strength movements.
  const oldAdd=window.addExerciseToSmartPlan;
  window.addExerciseToSmartPlan=function(encoded){
    const name=decodeURIComponent(encoded),x=mergedAll().find(e=>e.n===name);
    if(!x)return oldAdd?.(encoded);
    state.generatedWorkout=state.generatedWorkout||[];
    state.generatedWorkout.push({name:x.n,m:x.m,type:x.type||"Strength",sets:(x.type&&x.type!=="Strength"&&x.type!=="Pilates")?1:2,reps:x.dose||doseFor(x),rest:["Yoga","Mobility","Recovery","Breathing"].includes(x.type)?"as needed":"60 sec",cue:x.cue,why:x.why,rpe:x.type==="Strength"?7:5,met:x.met||3.5});
    saveState();renderGeneratedWorkout();toast("Added to workout");
  };

  // Keep Movement Studio refreshed when Workout opens.
  const oldSetView=window.setView;
  if(typeof oldSetView==="function"){
    window.setView=function(id){oldSetView(id);if(id==="workout")setTimeout(renderStudio,0)};
    try{setView=window.setView}catch(e){}
  }

  setTimeout(()=>{renderStudio();const title=document.querySelector("title");if(title)title.textContent="DK FitTrack v1.5";},0);
})();