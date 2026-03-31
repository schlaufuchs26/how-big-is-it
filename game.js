const OBJ=[
{n:"DNA Double Helix (width)",e:"🧬",s:2e-9,h:"The blueprint of life",c:"About 10 atoms wide"},
{n:"Virus (COVID-19)",e:"🦠",s:1.2e-7,h:"A tiny infectious agent",c:"About 1000× smaller than a hair"},
{n:"Red Blood Cell",e:"🔴",s:8e-6,h:"Carries oxygen in your blood",c:"About 100 fit across a grain of sand"},
{n:"Human Hair (width)",e:"💇",s:7e-5,h:"A single strand's thickness",c:"About as wide as a thin needle"},
{n:"Grain of Sand",e:"🏖️",s:5e-4,h:"One tiny grain from the beach",c:"About the size of a printed period"},
{n:"Ant",e:"🐜",s:2e-3,h:"A hardworking tiny insect",c:"About the width of a pencil"},
{n:"Ladybug",e:"🐞",s:8e-3,h:"A spotted little beetle",c:"About the size of a pea"},
{n:"Grape",e:"🍇",s:.02,h:"A single juicy fruit",c:"About the size of a marble"},
{n:"Tennis Ball",e:"🎾",s:.067,h:"Fuzzy yellow sphere",c:"A bit bigger than a chicken egg"},
{n:"Banana",e:"🍌",s:.2,h:"A popular yellow fruit",c:"About the length of a dollar bill"},
{n:"House Cat (body)",e:"🐱",s:.46,h:"A typical domestic feline",c:"About the width of a small desk"},
{n:"Guitar",e:"🎸",s:1,h:"A stringed instrument",c:"About as tall as a 3-year-old"},
{n:"Grand Piano",e:"🎹",s:1.5,h:"A concert instrument",c:"About the height of an adult"},
{n:"Car",e:"🚗",s:4.5,h:"A typical sedan",c:"About as long as a small sailboat"},
{n:"T. Rex (length)",e:"🦖",s:12,h:"The king of dinosaurs",c:"About the length of a school bus"},
{n:"Blue Whale",e:"🐋",s:30,h:"The largest animal ever",c:"As long as 3 school buses"},
{n:"Boeing 747",e:"✈️",s:70,h:"The iconic jumbo jet",c:"About as long as 2 blue whales"},
{n:"Eiffel Tower",e:"🗼",s:330,h:"Paris's iron lattice tower",c:"About 80 stories tall"},
{n:"Burj Khalifa",e:"🏙️",s:828,h:"The world's tallest building",c:"Over 2× the Eiffel Tower"},
{n:"Golden Gate Bridge",e:"🌉",s:2737,h:"San Francisco's famous bridge",c:"About 27 football fields long"},
{n:"Mount Everest",e:"🏔️",s:8849,h:"Earth's highest peak",c:"Taller than 20 Eiffel Towers stacked"},
{n:"Mariana Trench",e:"🌊",s:10994,h:"The deepest ocean point",c:"Deeper than Everest is tall"},
{n:"Moon (diameter)",e:"🌙",s:3.474e6,h:"Earth's natural satellite",c:"About the width of Australia"},
{n:"Earth (diameter)",e:"🌍",s:1.2742e7,h:"Our home planet",c:"About 4× the Moon's diameter"},
{n:"Jupiter (diameter)",e:"🪐",s:1.3982e8,h:"The solar system's gas giant",c:"About 11 Earths across"},
{n:"Sun (diameter)",e:"☀️",s:1.3927e9,h:"Our star",c:"~1 million Earths could fit inside"},
{n:"Earth to Moon",e:"🌍🌙",s:3.844e8,h:"Average distance",c:"About 30 Earths lined up"},
{n:"Earth to Sun",e:"🌍☀️",s:1.496e11,h:"About 8 light-minutes",c:"Light takes 8m 20s to cross"},
{n:"Solar System",e:"💫",s:5.9e12,h:"Radius out to Pluto",c:"Light takes ~5.5 hours to cross"},
{n:"Milky Way (diameter)",e:"🌌",s:9.461e20,h:"Our home galaxy",c:"About 100,000 light-years across"},
{n:"Red Fox (body length)",e:"🦊",s:.65,h:"A clever woodland creature",c:"About the length of a skateboard"},
{n:"Squirrel (body)",e:"🐿️",s:.25,h:"A nimble nut-loving acrobat",c:"About the length of a banana"},
{n:"Snowflake",e:"❄️",s:3e-3,h:"A single ice crystal",c:"About the size of a pencil eraser"},
{n:"Hummingbird",e:"🐦",s:.08,h:"The tiniest bird",c:"About the length of your thumb"},
{n:"Giraffe (height)",e:"🦒",s:5.5,h:"The tallest living animal",c:"About as tall as a 2-story house"},
{n:"Great Pyramid of Giza",e:"🔺",s:146,h:"Built ~2560 BC",c:"About half the Eiffel Tower"},
{n:"Soccer Ball",e:"⚽",s:.22,h:"The world's most popular ball",c:"About the size of a human head"},
{n:"Tardigrade (water bear)",e:"🧸",s:3e-4,h:"Nearly indestructible micro-animal",c:"Smaller than a grain of sand"},
{n:"Sequoia Tree (height)",e:"🌲",s:84,h:"The tallest trees on Earth",c:"About as tall as the Statue of Liberty"},
{n:"Tylenol Pill",e:"💊",s:.015,h:"A standard capsule",c:"About the size of a raisin"},
{n:"International Space Station",e:"🛸",s:109,h:"Orbiting lab in space",c:"About the size of a football field"},
{n:"Mars (diameter)",e:"🔴",s:6.779e6,h:"The Red Planet",c:"About half the size of Earth"},
{n:"Amazon River (length)",e:"🏞️",s:6.4e6,h:"South America's mighty river",c:"Stretches almost the width of Australia"},
{n:"Neutron Star (diameter)",e:"💫",s:2e4,h:"A collapsed stellar core",c:"Fits inside a city but weighs more than the Sun"},
{n:"Wombat (body length)",e:"🐻",s:.95,h:"A chunky Australian marsupial",c:"About the size of a medium dog"},
{n:"Platypus (body length)",e:"🦆",s:.4,h:"Australia's egg-laying oddity",c:"About the length of a loaf of bread"},
{n:"Great Barrier Reef (length)",e:"🪸",s:2.3e6,h:"Largest living structure on Earth",c:"Stretches longer than Italy"},
{n:"Kangaroo (standing height)",e:"🦘",s:1.8,h:"Australia's iconic hopper",c:"About the height of an adult human"},
{n:"Uluru (height)",e:"🪨",s:348,h:"Australia's sacred sandstone monolith",c:"About as tall as the Eiffel Tower"},
{n:"Huntsman Spider (leg span)",e:"🕷️",s:.15,h:"Australia's friendly house spider",c:"About the size of a dinner plate 😰"}
];

const RN=10, MN=-9, MX=22, app=document.getElementById("app");
let S={scr:"start",rd:0,sc:0,res:[],objs:[],gd:false,sv:3.5};

function shuf(a){for(let i=a.length-1;i>0;i--){let j=0|Math.random()*(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}

function fmt(m){
  if(m<1e-6) return (m*1e9).toFixed(1)+" nm";
  if(m<1e-3) return (m*1e6).toFixed(1)+" μm";
  if(m<.01) return (m*1e3).toFixed(2)+" mm";
  if(m<1) return (m*100).toFixed(1)+" cm";
  if(m<1e3) return m.toFixed(1)+" m";
  if(m<1e6) return (m/1e3).toFixed(1)+" km";
  if(m<1e9) return (m/1e6).toFixed(0)+",000 km";
  if(m<1e12) return (m/1e9).toFixed(1)+" million km";
  if(m<1e15) return (m/1e12).toFixed(1)+" billion km";
  if(m<9.461e19) return (m/9.461e15).toFixed(2)+" light-years";
  return (m/9.461e15).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,',')+" light-years";
}

function calcPts(gl,al){
  let d=Math.abs(gl-al);
  if(d<.1)return 1000;if(d<.3)return 900;if(d<.5)return 750;
  if(d<1)return 500;if(d<2)return 300;if(d<3)return 150;if(d<5)return 50;return 0;
}

function rEmoji(p){if(p>=900)return"🎯";if(p>=500)return"👍";if(p>=150)return"😅";return"💀"}
function pct(v){return((v-MN)/(MX-MN))*100}

function endRat(t){
  let p=t/(RN*1000);
  if(p>=.9)return{i:"🏆",t:"Size Savant!"};
  if(p>=.7)return{i:"🌟",t:"Scale Master!"};
  if(p>=.5)return{i:"👍",t:"Pretty Close!"};
  if(p>=.3)return{i:"🤔",t:"Getting There"};
  return{i:"🔬",t:"Needs Calibration!"};
}

function render(){
  if(S.scr==="start") renderStart();
  else if(S.scr==="play") renderPlay();
  else if(S.scr==="end") renderEnd();
}

function renderStart(){
  app.innerHTML=`<div class="card ss">
    <div style="font-size:4rem;margin-bottom:1rem">🔬🤔🔭</div>
    <h2>Can you guess how big things really are?</h2>
    <p>From atoms to galaxies — drag the slider to guess the real size of ${RN} objects. The closer you are, the more points you earn!</p>
    <ol class="ht">
      <li>You'll see an object name and emoji</li>
      <li>Drag the slider to guess its real-world size</li>
      <li>Hit "Lock In" to submit your guess</li>
      <li>Score up to 1,000 points per round</li>
    </ol>
    <button class="btn bp" onclick="startGame()">🎮 Start Game</button>
  </div>`;
}

function renderPlay(){
  let o=S.objs[S.rd];
  let m=Math.pow(10,S.sv);
  let html=`<div class="card">
    <div class="sbar"><span>Round ${S.rd+1}/${RN}</span><span class="sc">Score: ${S.sc}</span></div>
    <div class="od"><span class="oe">${o.e}</span><div class="on">${o.n}</div><div class="oh">${o.h}</div></div>`;

  if(!S.gd){
    html+=`<div class="sd">${fmt(m)}</div>
      <div class="ul"><span>1 nm</span><span>1 μm</span><span>1 mm</span><span>1 m</span><span>1 km</span><span>1M km</span><span>1 ly</span><span>1M ly</span></div>
      <input type="range" min="${MN}" max="${MX}" step="0.01" value="${S.sv}" oninput="onSlide(this.value)">
      <div style="margin-top:1rem"><button class="btn bp" onclick="lockIn()">🔒 Lock In My Guess</button></div>`;
  } else {
    let r=S.res[S.res.length-1];
    let pcls=r.p>=750?"g":r.p>=300?"o":"b";
    let gPct=Math.min(100,Math.max(0,pct(r.gl)));
    let aPct=Math.min(100,Math.max(0,pct(r.al)));
    html+=`<div class="res">
      <div style="font-size:3rem;margin:.5rem 0">${rEmoji(r.p)}</div>
      <div style="font-size:1.3rem;margin:.5rem 0">Actual size: <strong style="color:var(--accent2)">${fmt(o.s)}</strong></div>
      <div style="color:var(--dim);font-size:.85rem;margin:.3rem 0">You guessed: ${fmt(Math.pow(10,r.gl))}</div>
      <div style="color:var(--dim);font-size:.9rem;font-style:italic;margin:.5rem 0">${o.c}</div>
      <div class="vb">
        <div class="vbt">
          <div class="vm vg" style="left:${gPct}%"><div class="vl" style="color:var(--accent2)">You</div></div>
          <div class="vm va" style="left:${aPct}%"><div class="vl" style="color:var(--success)">Actual</div></div>
        </div>
      </div>
      <div class="rp ${pcls}">+${r.p} points</div>
      <div style="margin-top:1rem">
        <button class="btn bp" onclick="nextRound()">${S.rd<RN-1?"➡️ Next Object":"🏁 See Results"}</button>
      </div>
    </div>`;
  }
  html+=`</div>`;
  app.innerHTML=html;
}

function renderEnd(){
  let r=endRat(S.sc);
  let rows=S.res.map((x,i)=>{
    let o=S.objs[i];
    let pcls=x.p>=750?"color:var(--success)":x.p>=300?"color:var(--warn)":"color:var(--fail)";
    return `<div class="rli"><div class="rn"><span>${o.e}</span><span>${o.n}</span></div><span class="rpts" style="${pcls}">${x.p}</span></div>`;
  }).join("");
  app.innerHTML=`<div class="card es">
    <div style="font-size:4rem">${r.i}</div>
    <div class="esc">${S.sc} / ${RN*1000}</div>
    <div class="esr">${r.t}</div>
    <div class="rl">${rows}</div>
    <button class="btn bp" onclick="startGame()">🔄 Play Again</button>
  </div>`;
}

function startGame(){
  S={scr:"play",rd:0,sc:0,res:[],objs:shuf([...OBJ]).slice(0,RN),gd:false,sv:3.5};
  render();
}

function onSlide(v){
  S.sv=parseFloat(v);
  let m=Math.pow(10,S.sv);
  document.querySelector(".sd").textContent=fmt(m);
}

function lockIn(){
  let o=S.objs[S.rd];
  let gl=S.sv;
  let al=Math.log10(o.s);
  let p=calcPts(gl,al);
  S.sc+=p;
  S.res.push({gl,al,p});
  S.gd=true;
  render();
}

function nextRound(){
  S.rd++;
  S.gd=false;
  S.sv=3.5;
  if(S.rd>=RN) S.scr="end";
  render();
}

render();
