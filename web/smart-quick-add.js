/* DK FitTrack v1.4 — Smart Indian Meal Quick Add */
(function(){
  function esc(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}

  function injectSmartQuickAdd(){
    if(document.querySelector("#quickMealText")) return;
    const helper=document.querySelector("#smartMealIdea")?.closest(".helper-row");
    if(!helper) return;
    const box=document.createElement("div");
    box.className="smart-quick-add";
    box.innerHTML=`
      <div class="smart-quick-head">
        <div><b>✨ Smart Quick Add</b><small>Type your normal Indian meal in one line</small></div>
        <span>Example: 2 roti + 1 dal + 100g chicken</span>
      </div>
      <div class="smart-quick-row">
        <input id="quickMealText" placeholder="e.g. 2 roti + 1 cup dal + curd">
        <select id="quickMealType" aria-label="Meal">
          <option>Breakfast</option><option>Lunch</option><option>Snack</option><option>Dinner</option>
        </select>
        <button id="quickMealAdd" class="btn secondary">Add meal</button>
      </div>`;
    helper.parentNode.insertBefore(box,helper);
    document.querySelector("#quickMealAdd").addEventListener("click",quickAddIndianMeal);
    document.querySelector("#quickMealText").addEventListener("keydown",e=>{if(e.key==="Enter")quickAddIndianMeal()});
    if(!document.querySelector("#dkSmartQuickStyle")){
      const st=document.createElement("style");st.id="dkSmartQuickStyle";
      st.textContent=`
        .smart-quick-add{margin:12px 0;border:1px solid #d9eee5;background:linear-gradient(135deg,#f4fff9,#fff);border-radius:18px;padding:13px}
        .smart-quick-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;margin-bottom:10px}
        .smart-quick-head b{font-size:14px}.smart-quick-head small,.smart-quick-head span{display:block;color:var(--muted);font-size:10.5px;margin-top:3px}
        .smart-quick-head span{text-align:right;max-width:230px}.smart-quick-row{display:grid;grid-template-columns:1fr 120px auto;gap:8px}
        @media(max-width:800px){.smart-quick-head{display:block}.smart-quick-head span{text-align:left;max-width:none}.smart-quick-row{grid-template-columns:1fr 105px}.smart-quick-row button{grid-column:1/-1}}
        @media(max-width:520px){.smart-quick-row{grid-template-columns:1fr}.smart-quick-row button{grid-column:auto}}
      `;document.head.appendChild(st);
    }
  }

  function baseUnitMultiplier(food,grams,count){
    if(!grams)return count;
    const gm=String(food.q||"").match(/(\d+(?:\.\d+)?)\s*g\b/i);
    return gm?(grams/(+gm[1]||100))*count:count;
  }

  window.quickAddIndianMeal=function(){
    const input=document.querySelector("#quickMealText");
    const text=(input?.value||"").trim();
    const meal=document.querySelector("#quickMealType")?.value||"Meal";
    if(!text){toast("Type your meal first");return}
    const catalog=foodCatalog();
    const parts=text.split(/\s*(?:\+|,|;|\band\b)\s*/i).filter(Boolean);
    const added=[],missed=[];
    const norm=s=>String(s||"").toLowerCase().replace(/[()]/g," ").replace(/\s+/g," ").trim();

    for(let raw of parts){
      let token=norm(raw),count=1,grams=null;
      const gm=token.match(/^(\d+(?:\.\d+)?)\s*g(?:ram|rams)?\s+(.+)$/i);
      if(gm){grams=+gm[1];token=gm[2].trim()}
      else{const lead=token.match(/^(\d+(?:\.\d+)?)\s*(?:x\s*)?/);if(lead){count=+lead[1]||1;token=token.slice(lead[0].length).trim()}}
      token=token.replace(/\b(?:cup|cups|bowl|bowls|piece|pieces|pcs|medium|small|large|plate|plates|serving|servings|katori)\b/g," ").replace(/\s+/g," ").trim();

      let best=null,bestScore=-1;
      for(const f of catalog){
        const names=[f.n,f.a,f.tags,f.cat].filter(Boolean).join(" ").toLowerCase();
        let score=0;
        if(names===token)score=500;else if(names.includes(token))score=120+token.length;
        token.split(/\s+/).forEach(w=>{if(w.length>2&&names.includes(w))score+=w.length});
        if(score>bestScore){best=f;bestScore=score}
      }
      if(best&&bestScore>=6){
        const mult=baseUnitMultiplier(best,grams,count);
        daily().foods.push({name:best.n,qty:mult.toFixed(mult%1?2:0)+" × "+best.q,meal,cal:(+best.cal||0)*mult,p:(+best.p||0)*mult,c:(+best.c||0)*mult,f:(+best.f||0)*mult});
        added.push(best.n);
      }else missed.push(raw.trim());
    }

    if(added.length){saveState();if(input)input.value="";renderAll();toast("Added "+added.length+" food"+(added.length>1?"s":""))}
    if(missed.length)openModal("Check unmatched foods",'<div class="tip-box">'+(added.length?'Added: <b>'+esc(added.join(", "))+'</b><br><br>':'')+'I could not confidently match: <b>'+esc(missed.join(", "))+'</b>.<br><br>Use <b>Manual food entry</b> for those items so DK FitTrack does not invent nutrition values.</div>');
  };

  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",injectSmartQuickAdd);else injectSmartQuickAdd();
})();