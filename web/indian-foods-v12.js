/* DK FitTrack v1.2 Indian Food Edition */
(function(){
  const ROWS = `Whey protein|1 scoop|120|25|3|2|Protein|whey protein powder supplement
Boiled eggs|2 eggs|144|12.6|0.8|9.6|Protein|boiled anda
Omelette, 2 eggs|1 omelette|190|13|4|13|Protein|omelet omelette anda
Milk, skim|250 ml|90|8.5|12|0.5|Dairy|skim milk low fat doodh
Buttermilk / chaas|250 ml|70|4|9|2|Beverage|chaas tak mattha buttermilk
Lassi, unsweetened|250 ml|150|7|14|6|Beverage|lassi plain
Lassi, sweet|250 ml|230|7|34|7|Beverage|sweet lassi
Chicken curry|1 cup|280|27|10|15|Non-Veg|chicken curry gravy
Chicken tikka|150 g|260|35|8|9|Non-Veg|tikka chicken
Tandoori chicken|1 leg quarter|280|38|5|11|Non-Veg|tandoori murgh
Butter chicken|1 cup|430|28|16|28|Non-Veg|murgh makhani butter chicken
Chicken biryani|1 plate|520|28|66|17|Rice|chicken biryani
Chicken pulao|1 plate|430|25|58|12|Rice|chicken pulao
Mutton curry|1 cup|360|27|8|24|Non-Veg|mutton goat curry
Mutton biryani|1 plate|600|28|72|22|Rice|mutton biryani
Fish curry|1 cup|250|24|9|13|Non-Veg|fish curry machhi
Surmai / kingfish fry|100 g|220|24|7|11|Non-Veg|surmai kingfish fry
Pomfret fry|100 g|230|22|8|12|Non-Veg|pomfret fried fish
Bangda / mackerel curry|1 cup|290|25|8|18|Non-Veg|bangda mackerel curry
Prawns curry|1 cup|240|28|10|10|Non-Veg|prawn shrimp curry kolambi
Prawns fry|100 g|210|24|9|9|Non-Veg|prawn fry kolambi
Boiled fish|100 g|135|26|0|3|Non-Veg|boiled steamed fish
Roti / chapati / phulka|1 medium|110|3.5|22|1.5|Bread|roti chapati phulka poli
Jowar bhakri|1 medium|150|4.5|32|1.5|Bread|jowar bhakri sorghum
Bajra bhakri|1 medium|170|5|32|3|Bread|bajra bhakri pearl millet
Nachni / ragi bhakri|1 medium|160|4|34|1.5|Bread|ragi nachni bhakri finger millet
Rice bhakri|1 medium|165|3|36|1|Bread|tandul bhakri rice roti
Makki roti|1 medium|180|4|36|3|Bread|makki corn roti
Plain paratha|1 medium|210|5|32|7|Bread|paratha
Aloo paratha|1 medium|290|7|44|10|Bread|aloo paratha potato
Paneer paratha|1 medium|320|12|38|13|Bread|paneer paratha
Methi paratha|1 medium|220|6|31|8|Bread|methi paratha fenugreek
Thepla|2 medium|240|6|38|8|Bread|gujarati thepla methi
Naan, plain|1 medium|260|8|45|6|Bread|naan
Butter naan|1 medium|330|8|46|13|Bread|butter naan
Tandoori roti|1 medium|140|4|29|1.5|Bread|tandoori roti
Kulcha, plain|1 medium|260|7|44|7|Bread|kulcha
Pav|1 pav|90|3|17|1.5|Bread|pav bread bun
Bread, whole wheat|2 slices|150|6|26|2.5|Bread|brown bread whole wheat
Bread, white|2 slices|160|5|30|2|Bread|white bread
Rice, white cooked|1 cup|205|4|45|0.5|Rice|rice chawal bhat white
Brown rice, cooked|1 cup|215|5|45|1.8|Rice|brown rice
Jeera rice|1 cup|260|5|48|7|Rice|jeera rice cumin rice
Lemon rice|1 cup|310|6|50|10|Rice|lemon rice nimbu rice
Curd rice|1 cup|280|8|43|9|Rice|curd rice dahi chawal
Tomato rice|1 cup|290|6|50|8|Rice|tomato rice
Vegetable pulao|1 cup|280|6|48|8|Rice|veg pulao pulav
Peas pulao|1 cup|300|8|52|7|Rice|matar pulao
Veg biryani|1 plate|420|10|68|12|Rice|vegetable biryani
Khichdi, moong dal|1.5 cups|330|13|58|6|Rice|khichdi moong dal
Masala khichdi|1.5 cups|380|14|60|10|Rice|masala khichdi
Dalia / broken wheat upma|1 bowl|250|8|43|6|Breakfast|dalia lapsi broken wheat
Kanda poha|1 bowl|270|6|48|7|Breakfast|kanda poha onion
Batata poha|1 bowl|300|6|52|8|Breakfast|batata poha potato
Vegetable upma|1 bowl|280|8|45|8|Breakfast|vegetable upma
Oats, dry|50 g|190|6.5|33|3.5|Breakfast|oats oatmeal
Masala oats|1 bowl|260|9|42|7|Breakfast|masala oats
Rava idli|2 medium|180|6|31|4|South Indian|rava idli sooji
Masala dosa|1 medium|360|8|56|12|South Indian|masala dosa potato
Rava dosa|1 medium|300|6|48|10|South Indian|rava dosa
Mysore masala dosa|1 medium|420|10|60|16|South Indian|mysore masala dosa
Uttapam, plain|1 medium|220|6|38|5|South Indian|uttapam
Vegetable uttapam|1 medium|280|8|44|8|South Indian|veg uttapam onion tomato
Medu vada|2 pieces|280|10|36|11|South Indian|medu vada urad vada
Sambar|1 cup|150|7|24|3|South Indian|sambar sambhar
Coconut chutney|2 tbsp|90|2|4|8|South Indian|coconut chutney nariyal
Pongal|1 bowl|320|10|52|8|South Indian|ven pongal
Appam|2 medium|220|4|44|3|South Indian|appam
Puttu|1 cup|280|5|60|2|South Indian|puttu
Idiyappam|2 nests|210|4|46|1|South Indian|idiyappam string hoppers
Sabudana khichdi|1 bowl|420|6|68|14|Maharashtrian|sabudana khichdi sago
Sabudana vada|2 pieces|360|6|52|16|Maharashtrian|sabudana vada
Thalipeeth|1 medium|220|8|35|6|Maharashtrian|thalipeeth multigrain
Misal pav|1 plate|480|16|62|18|Maharashtrian|misal pav usal
Usal pav|1 plate|390|15|58|11|Maharashtrian|usal pav sprouts
Vada pav|1 piece|300|7|45|11|Maharashtrian|vada pav batata vada
Pav bhaji|1 plate|520|12|76|19|Maharashtrian|pav bhaji
Zunka / jhunka|1 cup|230|10|24|10|Maharashtrian|zunka jhunka besan
Pithla|1 cup|220|9|26|9|Maharashtrian|pithla besan
Bharli vangi|1 cup|260|7|22|16|Maharashtrian|bharli vangi stuffed brinjal
Matki usal|1 cup|210|13|32|4|Maharashtrian|matki usal moth beans
Moong usal|1 cup|200|13|31|3|Maharashtrian|moong usal sprouts
Kothimbir vadi|4 pieces|240|8|28|11|Maharashtrian|kothimbir vadi coriander
Alu vadi / patra|4 pieces|220|6|30|9|Maharashtrian|alu vadi patra colocasia
Puran poli|1 medium|280|7|52|6|Maharashtrian|puran poli sweet
Modak, steamed|1 piece|110|2|22|2|Maharashtrian|ukadiche modak steamed
Modak, fried|1 piece|160|2|23|7|Maharashtrian|fried modak
Shrikhand|100 g|250|7|38|8|Sweet|shrikhand
Amrakhand|100 g|270|7|43|8|Sweet|amrakhand mango shrikhand
Dal, cooked generic|1 cup|190|12|30|3|Dal|dal lentil
Toor dal / arhar dal|1 cup|200|12|32|3|Dal|toor dal arhar tuvar
Moong dal|1 cup|180|12|30|2|Dal|moong dal mung
Masoor dal|1 cup|190|13|31|2|Dal|masoor dal red lentil
Chana dal|1 cup|220|13|35|4|Dal|chana dal bengal gram
Urad dal|1 cup|230|13|35|5|Dal|urad dal black gram
Dal tadka|1 cup|260|13|34|9|Dal|dal tadka fry
Dal fry|1 cup|280|13|35|11|Dal|dal fry
Dal makhani|1 cup|350|14|38|16|Dal|dal makhani black dal
Rajma masala|1 cup|260|15|42|5|Dal|rajma kidney beans
Chole / chana masala|1 cup|290|15|44|7|Dal|chole chana chickpeas
Kala chana curry|1 cup|270|15|42|6|Dal|kala chana black chickpea
Lobia curry|1 cup|250|14|40|5|Dal|lobia black eyed peas
Sprouts salad|1 bowl|160|12|25|2|Salad|sprouts moong salad
Mixed vegetable sabzi|1 cup|160|5|20|7|Vegetable|mixed veg sabzi bhaji
Aloo gobi|1 cup|220|5|32|9|Vegetable|aloo gobi potato cauliflower
Aloo matar|1 cup|230|6|35|8|Vegetable|aloo matar peas potato
Bhindi masala|1 cup|180|5|20|9|Vegetable|bhindi okra lady finger
Baingan bharta|1 cup|190|5|22|10|Vegetable|baingan bharta brinjal
Palak paneer|1 cup|330|18|14|23|Paneer|palak paneer spinach
Matar paneer|1 cup|360|18|22|24|Paneer|matar paneer peas
Paneer bhurji|1 cup|320|20|12|22|Paneer|paneer bhurji
Paneer tikka|150 g|300|24|12|18|Paneer|paneer tikka
Kadai paneer|1 cup|390|19|20|28|Paneer|kadai paneer
Shahi paneer|1 cup|430|18|18|32|Paneer|shahi paneer
Paneer butter masala|1 cup|450|18|20|34|Paneer|paneer butter masala
Malai kofta|1 cup|420|12|28|30|Vegetable|malai kofta
Veg kofta curry|1 cup|340|10|32|19|Vegetable|veg kofta
Mushroom masala|1 cup|220|8|18|13|Vegetable|mushroom masala
Palak sabzi|1 cup|140|6|14|7|Vegetable|palak spinach sabzi
Methi sabzi|1 cup|150|6|17|7|Vegetable|methi fenugreek
Cabbage sabzi|1 cup|130|4|16|6|Vegetable|cabbage patta gobi
Cauliflower sabzi|1 cup|150|5|18|7|Vegetable|gobi cauliflower
Beans sabzi|1 cup|150|5|20|6|Vegetable|green beans sabzi
Lauki sabzi|1 cup|120|4|14|5|Vegetable|lauki doodhi bottle gourd
Tinda sabzi|1 cup|130|4|15|6|Vegetable|tinda apple gourd
Turai sabzi|1 cup|120|4|15|5|Vegetable|turai ridge gourd
Karela sabzi|1 cup|140|4|18|6|Vegetable|karela bitter gourd
Pumpkin sabzi|1 cup|150|4|24|5|Vegetable|pumpkin kaddu bhopla
Beetroot sabzi|1 cup|150|4|25|5|Vegetable|beet beetroot
Green peas masala|1 cup|220|10|32|6|Vegetable|matar peas masala
Corn palak|1 cup|250|8|30|11|Vegetable|corn palak
Dhokla|4 pieces|220|8|36|5|Gujarati|dhokla khaman
Khaman|4 pieces|230|9|36|6|Gujarati|khaman dhokla
Handvo|1 medium slice|240|9|35|7|Gujarati|handvo
Khakhra|2 pieces|180|5|28|6|Gujarati|khakhra
Fafda|50 g|260|8|30|12|Gujarati|fafda
Undhiyu|1 cup|260|8|28|14|Gujarati|undhiyu
Gujarati dal|1 cup|220|9|34|6|Gujarati|gujarati dal sweet
Kadhi, Gujarati|1 cup|180|6|22|8|Gujarati|gujarati kadhi
Chole bhature|1 plate|650|18|88|25|North Indian|chole bhature bhatura
Puri bhaji|1 plate|520|11|70|22|North Indian|puri bhaji poori
Rajma rice|1 plate|480|17|78|10|North Indian|rajma chawal rice
Chole rice|1 plate|500|16|82|11|North Indian|chole chawal
Kadhi chawal|1 plate|430|12|72|10|North Indian|kadhi rice chawal
Sarson ka saag|1 cup|180|7|16|10|North Indian|sarson saag mustard greens
Samosa|1 medium|260|5|32|13|Snack|samosa
Kachori|1 medium|300|6|34|16|Snack|kachori
Aloo tikki|2 pieces|280|6|38|12|Snack|aloo tikki
Bhel puri|1 plate|280|7|48|7|Snack|bhel bhelpuri
Sev puri|1 plate|360|8|52|13|Snack|sev puri
Pani puri / golgappa|6 pieces|220|5|42|4|Snack|pani puri golgappa puchka
Dahi puri|6 pieces|320|8|46|12|Snack|dahi puri
Ragda pattice|1 plate|420|13|60|14|Snack|ragda pattice patties
Dabeli|1 piece|310|7|48|10|Snack|dabeli kutchi
Bread pakora|1 piece|300|7|38|13|Snack|bread pakoda
Onion pakoda|6 pieces|300|7|34|15|Snack|onion pakora bhajiya kanda bhaji
Batata vada|2 pieces|320|6|42|15|Snack|batata vada aloo bonda
Kanda bhaji|1 plate|350|8|38|19|Snack|kanda bhaji onion pakoda
Poha chivda|40 g|190|4|28|7|Snack|chivda poha
Makhana roasted|30 g|110|3.5|22|1|Snack|makhana fox nuts
Walnuts|15 g|98|2.3|2|9.7|Snack|walnut akhrot
Cashews|15 g|83|2.7|5|6.6|Snack|cashew kaju
Gulab jamun|1 piece|150|2|24|5|Sweet|gulab jamun
Rasgulla|1 piece|120|3|24|1.5|Sweet|rasgulla roshogolla
Rasmalai|1 piece|180|6|25|6|Sweet|rasmalai
Jalebi|2 pieces|300|3|60|7|Sweet|jalebi
Kheer|1 cup|300|8|45|10|Sweet|kheer payasam
Payasam|1 cup|320|8|48|11|Sweet|payasam
Gajar halwa|100 g|280|5|40|11|Sweet|gajar halwa carrot halwa
Sooji halwa|100 g|300|5|42|13|Sweet|suji halwa sheera
Sheera|1 small bowl|280|5|40|12|Sweet|sheera semolina
Besan ladoo|1 piece|180|4|22|9|Sweet|besan laddu ladoo
Motichoor ladoo|1 piece|190|3|30|7|Sweet|motichoor laddu
Boondi ladoo|1 piece|190|3|30|7|Sweet|boondi laddu
Kaju katli|2 pieces|180|4|22|9|Sweet|kaju katli barfi
Milk peda|2 small|180|5|25|7|Sweet|peda pedha
Barfi|2 small|200|5|28|8|Sweet|burfi barfi
Mango|1 cup pieces|100|1.4|25|0.6|Fruit|mango aam
Papaya|1 cup|60|0.9|15|0.2|Fruit|papaya papita
Guava|1 medium|68|2.6|14|1|Fruit|guava peru amrud
Pomegranate|1 cup arils|145|3|33|2|Fruit|pomegranate anar dalimb
Watermelon|2 cups|90|1.8|23|0.4|Fruit|watermelon tarbooj
Muskmelon|2 cups|105|2.5|25|0.6|Fruit|muskmelon kharbooja
Grapes|1 cup|104|1.1|27|0.2|Fruit|grapes angur
Chikoo / sapota|1 medium|140|1.5|36|1.5|Fruit|chikoo sapota
Pineapple|1 cup|82|0.9|22|0.2|Fruit|pineapple ananas
Salad, cucumber tomato onion|1 large bowl|70|3|14|1|Salad|salad cucumber kakdi tomato onion
Kachumber salad|1 bowl|80|3|16|1|Salad|kachumber
Raita, cucumber|1 cup|130|7|12|6|Dairy|raita cucumber
Boondi raita|1 cup|190|7|20|9|Dairy|boondi raita
Tomato soup|1 bowl|120|3|20|4|Soup|tomato soup
Vegetable soup|1 bowl|100|4|17|2|Soup|veg soup
Chicken soup|1 bowl|130|15|8|4|Soup|chicken soup
Tea without sugar|1 cup|45|2|5|2|Beverage|chai no sugar
Black tea|1 cup|2|0|0|0|Beverage|black tea
Coffee with milk & sugar|1 cup|110|3|16|4|Beverage|coffee milk sugar
Filter coffee|1 cup|120|3|17|4|Beverage|south indian filter coffee
Nimbu pani, unsweetened|250 ml|15|0.2|4|0|Beverage|lemon water nimbu pani
Nimbu pani, sweet|250 ml|90|0.2|23|0|Beverage|sweet lemon water
Coconut water|250 ml|50|0.5|11|0|Beverage|coconut water nariyal pani
Sugarcane juice|250 ml|180|0|45|0|Beverage|sugarcane juice ganne ka ras usacha ras
Fish curry, Bengali style|1 cup|260|24|10|14|Bengali|macher jhol fish curry bengali
Luchi|2 pieces|300|6|42|12|Bengali|luchi puri
Aloo posto|1 cup|260|5|28|15|Bengali|aloo posto
Khichuri|1.5 cups|380|12|62|9|Bengali|khichuri khichdi
Mishti doi|100 g|180|5|28|6|Bengali|mishti doi sweet curd
Peanut chutney|2 tbsp|100|4|4|8|Chutney|peanut chutney shengdana
Mint chutney|2 tbsp|25|1|5|0.5|Chutney|mint pudina chutney
Tamarind chutney|2 tbsp|60|0.5|15|0.2|Chutney|imli tamarind chutney
Pickle|1 tbsp|35|0.5|3|2.5|Condiment|achar pickle lonche
Ghee|1 tsp|45|0|0|5|Fat|ghee tup
Oil|1 tsp|45|0|0|5|Fat|oil tel`;
  const more = ROWS.trim().split(/\n/).map(line=>{
    const a=line.split("|");
    return {n:a[0],q:a[1],cal:+a[2],p:+a[3],c:+a[4],f:+a[5],cat:a[6],tags:a[7]};
  });
  const existing=new Set(foods.map(x=>String(x.n||"").toLowerCase()));
  more.forEach(x=>{if(!existing.has(x.n.toLowerCase())) foods.push(x)});
  foods.forEach(x=>{if(!x.cat)x.cat="Other";if(!x.tags)x.tags=""});

  function injectUI(){
    const search=document.querySelector("#foodSearch");
    if(!search||document.querySelector("#foodCategory")) return;
    search.placeholder="Search 235+ Indian foods: roti, bhakri, misal, dosa, dal, biryani...";
    const row=search.closest(".search-row");
    if(row){
      const sel=document.createElement("select");
      sel.id="foodCategory";
      sel.innerHTML='<option value="all">All foods</option><option>Protein</option><option>Dairy</option><option>Non-Veg</option><option>Bread</option><option>Rice</option><option>Breakfast</option><option>Dal</option><option>Paneer</option><option>Vegetable</option><option>Maharashtrian</option><option>South Indian</option><option>North Indian</option><option>Gujarati</option><option>Bengali</option><option>Snack</option><option>Sweet</option><option>Fruit</option><option>Beverage</option>';
      row.insertBefore(sel,row.children[1]||null); sel.addEventListener("change",renderFoodResults);
    }
    const helper=document.querySelector("#smartMealIdea")?.closest(".helper-row");
    if(helper&&!document.querySelector("#quickMealText")){
      const box=document.createElement("div"); box.className="smart-food-box";
      box.innerHTML='<div class="smart-food-head"><div><b>✨ Smart quick add</b><small>Type a normal meal like “2 roti + 1 dal + 100g chicken”</small></div></div><div class="smart-food-row"><input id="quickMealText" placeholder="e.g. 2 roti + 1 cup dal + curd"><select id="quickMealType"><option>Breakfast</option><option>Lunch</option><option>Snack</option><option>Dinner</option></select><button id="quickMealAdd" class="btn secondary">Add meal</button></div><div class="food-count-row"><b>235+</b> Indian foods built in • common alternate names supported</div>';
      helper.parentNode.insertBefore(box,helper);
      document.querySelector("#quickMealAdd").addEventListener("click",quickAddIndianMeal);
      document.querySelector("#quickMealText").addEventListener("keydown",e=>{if(e.key==="Enter")quickAddIndianMeal()});
    }
    if(!document.querySelector("#dkFoodV12Style")){
      const st=document.createElement("style"); st.id="dkFoodV12Style";
      st.textContent='.smart-food-box{margin-top:12px;border:1px solid #dceee6;background:linear-gradient(135deg,#f4fff9,#fbfffd);border-radius:16px;padding:13px}.smart-food-head small{display:block;color:var(--muted);font-size:11px;margin-top:3px}.smart-food-row{display:grid;grid-template-columns:1fr 120px auto;gap:8px;margin-top:10px}.food-count-row{font-size:11px;color:var(--muted);padding-top:8px}.food-cat{display:inline-block;margin-left:5px;color:#1f7a5a;font-size:9px;font-weight:800;text-transform:uppercase}@media(max-width:800px){.smart-food-row{grid-template-columns:1fr 105px}.smart-food-row button{grid-column:1/-1}}@media(max-width:520px){.smart-food-row{grid-template-columns:1fr}.smart-food-row button{grid-column:auto}}';
      document.head.appendChild(st);
    }
  }

  window.renderFoodResults=function(){
    const q=(document.querySelector("#foodSearch")?.value||"").toLowerCase().trim();
    const cat=document.querySelector("#foodCategory")?.value||"all", catalog=foodCatalog();
    const list=catalog.filter(x=>{const hay=(x.n+" "+(x.tags||"")+" "+(x.cat||"")+" "+(x.q||"")).toLowerCase();return (cat==="all"||x.cat===cat||x.custom)&&(!q||hay.includes(q))}).slice(0,50);
    const target=document.querySelector("#foodResults"); if(!target)return;
    if(!list.length){target.innerHTML='<div class="empty-search"><b>No matching food.</b><br>Try another spelling or use <b>Manual food entry</b>.</div>';return}
    target.innerHTML=list.map(x=>{const idx=catalog.indexOf(x),tag=x.custom?'<span class="badge">MY FOOD</span>':(x.cat?'<span class="food-cat">'+x.cat+'</span>':"");return '<div class="food-item"><div><h4>'+x.n+' '+tag+'</h4><p>'+x.q+' • '+x.cal+' kcal • P '+x.p+'g • C '+x.c+'g • F '+x.f+'g</p></div><button class="btn" onclick="openCatalogFoodModal('+idx+')">Add</button></div>'}).join("");
  };

  window.quickAddIndianMeal=function(){
    const input=document.querySelector("#quickMealText"),text=(input?.value||"").trim(),meal=document.querySelector("#quickMealType")?.value||"Meal";
    if(!text){toast("Type your meal first");return}
    const catalog=foodCatalog(),chunks=text.split(/\s*(?:\+|,|;|\band\b)\s*/i).filter(Boolean),added=[],missed=[],norm=s=>String(s||"").toLowerCase().replace(/[()]/g," ").replace(/\s+/g," ").trim();
    for(let raw of chunks){
      let token=norm(raw),mult=1,grams=null; const gm=token.match(/^(\d+(?:\.\d+)?)\s*g(?:ram|rams)?\s+(.+)$/i);
      if(gm){grams=+gm[1];token=gm[2].trim()}else{const lead=token.match(/^(\d+(?:\.\d+)?)\s*(?:x\s*)?/);if(lead){mult=+lead[1]||1;token=token.slice(lead[0].length).trim()}}
      token=token.replace(/\b(?:cup|cups|bowl|bowls|piece|pieces|pcs|medium|small|large|plate|plates|serving|servings)\b/g," ").replace(/\s+/g," ").trim();
      let best=null,bestScore=-1;
      for(const f of catalog){const names=[f.n,f.tags].filter(Boolean).join(" ").toLowerCase();let score=names.includes(token)?100+token.length:0;token.split(/\s+/).forEach(w=>{if(w.length>2&&names.includes(w))score+=w.length});if(score>bestScore){best=f;bestScore=score}}
      if(best&&bestScore>=5){let sm=mult;if(grams&&/\b100 g\b/i.test(best.q||""))sm=grams/100;else if(grams&&/\b50 g\b/i.test(best.q||""))sm=grams/50;else if(grams&&/\b30 g\b/i.test(best.q||""))sm=grams/30;daily().foods.push({name:best.n,qty:sm.toFixed(sm%1?2:0)+" × "+best.q,meal,cal:best.cal*sm,p:best.p*sm,c:best.c*sm,f:best.f*sm});added.push(best.n)}else missed.push(raw.trim())
    }
    if(added.length){saveState();if(input)input.value="";renderAll();toast("Added "+added.length+" food"+(added.length>1?"s":""))}
    if(missed.length)openModal("Some foods need manual entry",'<div class="tip-box">Added: <b>'+(added.join(", ")||"none")+'</b>.<br><br>Could not confidently match: <b>'+missed.join(", ")+'</b>.<br><br>Please use Manual entry for these foods so DK FitTrack does not invent nutrition values.</div>');
  };
  injectUI(); renderFoodResults();
})();