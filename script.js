/* script.js — all the behavior (animations, gallery, videos, letter, cake, music). You normally do NOT need to edit this file; edit config.js instead. */
const $=s=>document.querySelector(s), esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const isPlaceholder=s=>!s||/^YOUR_/i.test(s);
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;

/* names */
const C=CONFIG;
$('#heroName').textContent='كل سنة وإنتي طيبة يا '+C.herName;
$('#heroDate').textContent=C.birthdayDate;
$('#sig').textContent=C.signOff+' '+C.yourName;
$('#finalSig').textContent='— '+C.yourName;
$('#secretMsg').textContent=C.secretMessage;

/* background particles */
(function(){const c=$('#bg'),x=c.getContext('2d');let w,h,P=[];
 const rs=()=>{w=c.width=innerWidth;h=c.height=innerHeight};rs();addEventListener('resize',rs);
 const n=innerWidth<600?26:50;
 for(let i=0;i<n;i++)P.push({x:Math.random()*w,y:Math.random()*h,s:6+Math.random()*16,v:.2+Math.random()*.6,t:Math.random()<.35?'♥':'✦',a:.15+Math.random()*.45,p:Math.random()*6});
 function f(t){x.clearRect(0,0,w,h);for(const p of P){p.y-=p.v;if(p.y<-20){p.y=h+20;p.x=Math.random()*w}
  x.globalAlpha=p.a*(.6+.4*Math.sin(t/700+p.p));x.fillStyle=p.t=='♥'?'#f4a1b6':'#ffe2a0';x.font=p.s+'px serif';x.fillText(p.t,p.x+Math.sin(t/1500+p.p)*14,p.y)}
  if(!reduce)requestAnimationFrame(f)}requestAnimationFrame(f)})();

/* confetti */
const confetti=(function(){const c=$('#confetti'),x=c.getContext('2d');let P=[],run=false;
 const rs=()=>{c.width=innerWidth;c.height=innerHeight};rs();addEventListener('resize',rs);
 function loop(){x.clearRect(0,0,c.width,c.height);P.forEach(p=>{p.vy+=.12;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.l--;
  x.save();x.translate(p.x,p.y);x.rotate(p.r);x.globalAlpha=Math.min(1,p.l/40);x.fillStyle=p.c;
  if(p.h){x.font=p.s*2+'px serif';x.fillText('♥',0,0)}else x.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);x.restore()});
  P=P.filter(p=>p.l>0&&p.y<c.height+30);if(P.length)requestAnimationFrame(loop);else{run=false;x.clearRect(0,0,c.width,c.height)}}
 return (n=160)=>{const col=['#f4b8c6','#e8607f','#e0b25c','#fff4e6','#b3204f'];
  for(let i=0;i<n;i++)P.push({x:c.width/2,y:c.height*.6,vx:(Math.random()-.5)*16,vy:-8-Math.random()*12,r:0,vr:(Math.random()-.5)*.4,s:6+Math.random()*8,c:col[i%5],h:Math.random()<.2,l:140+Math.random()*80});
  if(!run){run=true;loop()}}})();

/* media / music */
const audio=$('#audio');
audio.src=C.song;
function setMusic(on){$('#music').classList.toggle('playing',on);$('#musicBtn').textContent=on?'❚❚':'▶';$('#musicBtn').setAttribute('aria-label',on?'إيقاف الموسيقى':'تشغيل الموسيقى')}
$('#musicBtn').onclick=()=>{
 if(audio.paused)audio.play().then(()=>setMusic(true)).catch(()=>alert('ضع أغنيتك في مجلد music أولًا (راجع ملف config.js).'));else{audio.pause();setMusic(false)}};
audio.onended=()=>setMusic(false);

/* open */
$('#openBtn').onclick=()=>{$('#welcome').classList.add('gone');$('#main').classList.add('on');confetti(70);
 setTimeout(()=>{$('#welcome').style.display='none';scrollTo(0,0)},1500)};

/* missing media -> labeled placeholder (so the page never shows broken icons) */
const phHTML=(t,s)=>`<div class="ph">${t}<br><span dir="ltr">${esc(s)}</span></div>`;
document.addEventListener('error',e=>{const t=e.target;
 if(t.tagName=='IMG'&&t.dataset.l)t.outerHTML=phHTML('ضعي صورتك هنا 📷',t.dataset.l);
 else if(t.tagName=='VIDEO'&&t.dataset.l){const w=t.closest('.vwrap'),bar=w.parentNode.querySelector('.vbar');
  w.innerHTML='<div class="vph"><div>ضع الفيديو هنا 🎬<br><span dir="ltr">'+esc(t.dataset.l)+'</span></div></div>';if(bar)bar.style.display='none'}},true);

/* gallery */
const rots=[-3,2,-1.5,3,-2.5,1.5];
$('#grid').innerHTML=C.photos.map((p,i)=>`<button class="pol" style="--r:${rots[i%6]}deg;--a:${i%3==1?'1/1':'4/5'}" data-i="${i}" aria-label="${esc(p.caption)}">
 <img src="${esc(p.src)}" data-l="${esc(p.src)}" alt="${esc(p.caption)}" loading="lazy" decoding="async"><b>${esc(p.caption)}</b><small>${esc(p.date)}</small></button>`).join('');
let cur=0;
function showLb(i){cur=(i+C.photos.length)%C.photos.length;const p=C.photos[cur];
 $('#lbimg').innerHTML=`<img src="${esc(p.src)}" data-l="${esc(p.src)}" alt="${esc(p.caption)}">`;
 $('#lbcap').textContent=p.caption+(p.date?'  ·  '+p.date:'');$('#lb').classList.add('open');$('#lbx').focus()}
$('#grid').onclick=e=>{const b=e.target.closest('.pol');if(b)showLb(+b.dataset.i)};
$('#lbx').onclick=()=>$('#lb').classList.remove('open');
$('#lbp').onclick=()=>showLb(cur-1);$('#lbn').onclick=()=>showLb(cur+1);
$('#lb').onclick=e=>{if(e.target.id=='lb')$('#lb').classList.remove('open')};
addEventListener('keydown',e=>{if(!$('#lb').classList.contains('open'))return;
 if(e.key=='Escape')$('#lbx').click();if(e.key=='ArrowRight')showLb(cur-1);if(e.key=='ArrowLeft')showLb(cur+1)});

/* videos */
$('#vids').innerHTML=C.videos.map(v=>`<article class="glass vcard"><div class="vwrap">
 <video src="${esc(v.src)}#t=0.1" data-l="${esc(v.src)}"${v.poster?` poster="${esc(v.poster)}"`:''} playsinline preload="metadata" aria-label="${esc(v.title)}"></video><button class="vplay" aria-label="تشغيل: ${esc(v.title)}">▶</button></div>
 <div class="vbar"><button class="pp" aria-label="تشغيل / إيقاف">▶</button><input type="range" min="0" max="100" value="0" aria-label="التقدم"><button class="fs" aria-label="ملء الشاشة">⛶</button></div>
 <h3>${esc(v.title)}</h3><p>${esc(v.caption)}</p></article>`).join('');
document.querySelectorAll('.vcard').forEach(card=>{const vid=card.querySelector('video');
 const w=card.querySelector('.vwrap'),pp=card.querySelector('.pp'),rg=card.querySelector('input');
 const tog=()=>vid.paused?vid.play():vid.pause();
 vid.onplay=()=>{document.querySelectorAll('video').forEach(o=>o!==vid&&o.pause());w.classList.add('playing');pp.textContent='❚❚';if(!audio.paused){audio.pause();setMusic(false)}};
 vid.onpause=()=>{w.classList.remove('playing');pp.textContent='▶'};
 vid.ontimeupdate=()=>rg.value=vid.duration?vid.currentTime/vid.duration*100:0;
 rg.oninput=()=>{if(vid.duration)vid.currentTime=rg.value/100*vid.duration};
 card.querySelector('.vplay').onclick=tog;vid.onclick=tog;pp.onclick=tog;
 card.querySelector('.fs').onclick=()=>{(vid.requestFullscreen||vid.webkitEnterFullscreen||vid.webkitRequestFullscreen||(()=>{})).call(vid)}});

/* letter */
let typed=false;
$('#env').onclick=()=>{if(typed)return;typed=true;$('#env').classList.add('open');confetti(40);
 setTimeout(()=>{$('#env').style.display='none';const p=$('#paper');p.classList.add('show');
  const t=C.letter,el=$('#letterText');let i=0;el.style.whiteSpace='pre-wrap';
  if(reduce){el.textContent=t;el.classList.remove('caret');return}
  (function s(){el.textContent=t.slice(0,++i);if(i<t.length)setTimeout(s,28);else el.classList.remove('caret')})()},700)};

/* cake */
$('#candles').innerHTML='<div class="candle"><i class="flame"></i><i class="smoke"></i></div>'.repeat(5);
let wished=false;
$('#wishBtn').onclick=()=>{if(wished){$('#cake').classList.remove('out');wished=false;$('#wishBtn').textContent='اتمني أمنية 🎂';$('#wishMsg').textContent='';return}
 wished=true;$('#cake').classList.add('out');$('#wishBtn').textContent='ولّعي الشموع تاني 🕯️';
 setTimeout(()=>{confetti(220);$('#wishMsg').textContent=C.wishMessage},600)};
$('#secretHeart').onclick=e=>{const m=$('#secretMsg'),on=m.classList.toggle('show');e.currentTarget.setAttribute('aria-expanded',on);if(on)confetti(60)};

/* timeline */
$('#tl').innerHTML=C.timeline.map(t=>`<div class="ev glass"><time>${esc(t.date)}</time><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div>`).join('');

/* scroll reveal (photos + timeline only) */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.pol,.ev').forEach((el,i)=>{el.style.transitionDelay=(i%3)*.12+'s';io.observe(el)});