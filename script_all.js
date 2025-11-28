/* script — humanized (intermediate dev style) */

// Download ZIP - link to bundled zip (will be filled when packaging)
document.getElementById('dlZip').addEventListener('click',function(e){e.preventDefault();window.location.href='pankaj_portfolio_final_all.zip';});



// Simple radar population (static values)
(function(){const svgObj = document.getElementById('radarObj'); if(!svgObj) return; svgObj.addEventListener('load', function(){const doc = svgObj.contentDocument; if(!doc) return; const labels = ['Python','JS','AI','Cloud','Flask']; const vals=[0.9,0.8,0.75,0.6,0.7]; const cx=150,cy=150,r=90; const pts=[]; labels.forEach(function(lbl,i){const ang = -Math.PI/2 + i*(2*Math.PI/labels.length); const x = cx + Math.cos(ang)*r*vals[i]; const y = cy + Math.sin(ang)*r*vals[i]; pts.push(x+','+y); const t = doc.createElementNS('http://www.w3.org/2000/svg','text'); t.setAttribute('x',cx+Math.cos(ang)*(r+22)); t.setAttribute('y',cy+Math.sin(ang)*(r+22)); t.setAttribute('fill','#9fb0c8'); t.setAttribute('font-size','12'); t.textContent=lbl; doc.getElementById('labels').appendChild(t); });

 const poly = doc.getElementById('shape'); if(poly) poly.setAttribute('points', pts.join(' ')); });

 })();

// Chatbot simple responses
const sendButton = document.getElementById('sendButton');
const chatInput = document.getElementById('chatInput');
const chatBodyEl = document.getElementById('chatBodyEl');
function botReply(text){ const el = document.createElement('div'); el.className='msg bot'; el.textContent = text; chatBodyEl.appendChild(el); chatBodyEl.scrollTop = chatBodyEl.scrollHeight; }
if(sendButton){
  sendButton.addEventListener('click', ()=>{
    const v = chatInput.value.trim(); if(!v) return;
    const u = document.createElement('div'); u.className='msg user'; u.textContent = v; chatBodyEl.appendChild(u); chatInput.value='';
    // simple rule-based replies
    if(/project|projects/i.test(v)) botReply('Projects: Unique Paths, Coin Change, AdaptivePuzzleMind, AI Flask App. Click Projects to view details.');
    else if(/skills|skill/i.test(v)) botReply('Skills include Python, JavaScript, TensorFlow, Flask, Azure IoT, Tableau.');
    else if(/resume|cv|download/i.test(v)) botReply('You can download my CV from the top-right Download CV button.');
    else botReply('I am a lightweight chatbot here to guide you. Try: "show projects" or "skills".');
  });


}

// small typing for hero
(function(){const target = document.querySelector('.typed'); if(!target) return; const phrases=['AI/ML Engineer','Full Stack Developer','Data Enthusiast','Cloud & IoT']; let i=0,j=0,dir=1; (function doTypingTick(){const p=phrases[i]; if(dir>0){j++; if(j>p.length){dir=-1; setTimeout(tick,900); return}} else {j--; if(j<0){i=(i+1)%phrases.length; dir=1; setTimeout(tick,200); return}} target.textContent = p.slice(0,j); setTimeout(tick,120); })(); })();
