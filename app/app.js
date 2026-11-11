const iconPaths={
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18m-13 4h2m4 0h2m-8 3h2"/>',
book:'<path d="M12 5v16M3 4c4-1 6 0 9 2 3-2 5-3 9-2v15c-4-1-6 0-9 2-3-2-5-3-9-2Z"/>',
grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
journal:'<path d="M6 3h13v18H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 0v18M9 8h6m-6 4h6"/>',
arrow:'<path d="M4 12h15m-5-5 5 5-5 5"/>',back:'<path d="M20 12H5m5-5-5 5 5 5"/>',down:'<path d="m6 9 6 6 6-6"/>',
lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
check:'<path d="m5 12 4 4L19 6"/>',moon:'<path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z"/>',
smile:'<circle cx="12" cy="12" r="9"/><path d="M8 14c2 3 6 3 8 0M8 8v1m8-1v1"/>',
leaf:'<path d="M20 3C8 2 2 8 5 15s16 5 15-12ZM4 21 16 8"/>',
heart:'<path d="m12 21-8-8C-2 7 7-1 12 6c5-7 14 1 8 7Z"/>',
spark:'<path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6Z"/>',
phone:'<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M10 18h4m-4-13h4"/>',
activity:'<path d="M2 12h5l3-8 4 16 3-8h5"/>',
wheel:'<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M5.5 5.5l13 13m0-13-13 13"/>',
person:'<circle cx="12" cy="4" r="2"/><path d="m5 9 7 2 7-2m-7 2v5m-4 5 4-5 4 5"/>',
flag:'<path d="M5 22V3m0 0c6-5 8 5 15 0v10c-7 5-9-5-15 0"/>',
search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
upload:'<path d="M12 16V3m-5 5 5-5 5 5M4 16v5h16v-5"/>',
trash:'<path d="M3 6h18M9 6V3h6v3m-10 0 1 15h12l1-15M10 10v7m4-7v7"/>',
settings:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3" fill="currentColor"/><circle cx="15" cy="17" r="3" fill="currentColor"/>',
external:'<path d="M14 3h7v7m0-7L10 14M10 3H3v18h18v-7"/>',
play:'<path d="m8 4 13 8-13 8Z"/>',pause:'<path d="M8 4v16m8-16v16"/>',
reset:'<path d="M3 10a9 9 0 1 1 1 8M3 3v7h7"/>',
chat:'<path d="M21 11a8 8 0 0 1-8 8H6l-4 3V11a9 9 0 0 1 19 0Z"/><path d="M7 10h10m-10 4h6"/>',
food:'<path d="M5 3v7m3-7v7M2 3v7c0 3 6 3 6 0M5 12v9M18 3c-4 5-4 9 0 9h2V3h-2Zm2 9v9"/>',
calc:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8M8 11h1m6 0h1m-8 4h1m6 0h1m-8 4h1m6 0h1"/>'};
const I=(name,cls='')=>`<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name]||iconPaths.leaf}</svg>`;
const brand=`<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true"><path d="M5 7v18c0 11 15 12 15 1 0 11 15 10 15-1V7M20 7v19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`;
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY='wellmind.everyday.v1';
const today=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
const parseDate=s=>new Date(`${s}T12:00:00`);
const shift=(s,n)=>{const d=parseDate(s);d.setDate(d.getDate()+n);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
const monday=s=>shift(s,-((parseDate(s).getDay()+6)%7));
const pretty=(s,opts={day:'numeric',month:'long',year:'numeric'})=>parseDate(s).toLocaleDateString('en-IE',opts);
const dateOk=s=>typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&!Number.isNaN(parseDate(s).getTime())&&shift(s,0)===s;
// Shared additions for the scrolling journal, nutrition tools and weekly plan.
let recordDrafts={},foodDraft={name:'',basis:'100g',portionUnit:'g',quantity:'',calories:'',protein:'',carbs:'',fat:'',meal:'Meal',code:'',source:''},foodResults=[],foodQuery='',foodMessage='',foodBusy=false,foodAbort=null,scanStream=null,scanTimer=null,scanEpoch=0,lastFoodSearch=0;
const nutritionKeys=['calories','protein'];
const nutritionNames={calories:'Calories',protein:'Protein'};
function scopeAttrs(){return currentRecord?`data-record="${esc(currentRecord.id)}"`:'';}
function activateRecord(id){if(id)currentRecord=state.entries[id]||recordDrafts[id]||null;}
function saveRecordObject(rec){rec.updatedAt=new Date().toISOString();state.entries[rec.id]=rec;recordDrafts[rec.id]=rec;return persist();}
function createRecord(kind,date,title){const id=`${kind}:${date}`;return state.entries[id]||{id,kind,date,title,fields:{}};}
function cleanCopy(text){return String(text??'').replace(/,?\s*if useful/gi,'').replace(/Understand it\s*[:/]?/g,'More about this').replace(/Do it\s*\//g,'Practical guide /').replace(/My first GROW/g,'Goal setting with GROW').replace(/Estimate energy needs/g,'Estimate calorie needs');}
function pageTitle(n){return n===13?'A plan for days when energy is low':n===36?'Goal setting with GROW':n===21?'Estimate calorie needs':pages.find(p=>p.number===n)?.title||'Your journal';}
function bodySafety(){return '<div class="notice warning"><strong>Before a body check</strong><br>Use stable equipment and a clear, non-slip space. Follow individual clinical advice and have a helper when required. Stop for pain, dizziness, loss of control or feeling unwell. Chest pain, fainting, severe unusual breathlessness or new weakness need urgent medical help. These checks are observations, not diagnoses.</div>';}
function youtubeId(url){try{const u=new URL(url);let id=u.hostname==='youtu.be'?u.pathname.slice(1):['youtube.com','www.youtube.com'].includes(u.hostname)?u.searchParams.get('v')||u.pathname.split('/').pop():'';return /^[\w-]{11}$/.test(id)?id:null;}catch{return null;}}
const meditationVideo={url:'https://www.youtube.com/watch?v=97b3_tOk8jQ',title:'Guided meditation: the three-step breathing space',credit:'Pennine Care NHS Foundation Trust',source:'https://www.penninecare.nhs.uk/mindfulness'};
function videoCard(url,title,note=''){const id=youtubeId(url);if(!id)return '';return `<div class="video-block"><h3>${esc(title)}</h3><div class="video-frame"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${id}?playsinline=1&rel=0" title="${esc(title)}" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><a class="link-btn youtube-direct" href="${esc(url)}" target="_blank" rel="noopener noreferrer">Watch on YouTube ${I('external')}</a>${note?`<p class="helper-note">${esc(note)}</p>`:''}<p class="helper-note video-fallback">If the player does not load, use the YouTube link.</p></div>`;}
function meditationBlock(){return `<div class="meditation-video">${videoCard(meditationVideo.url,meditationVideo.title,'Led by Suzanne, counsellor and mindfulness teacher, from Pennine Care NHS Foundation Trust.')}<p class="helper-note">Practise somewhere safe and comfortable. You can keep your eyes open, breathe naturally, pause or stop at any time. If focusing inward is uncomfortable, notice sounds or objects around you instead. Do not practise while driving.</p><a class="text-link video-source" href="${meditationVideo.source}" target="_blank" rel="noopener noreferrer">About this practice · Pennine Care NHS</a></div>`;}
function videoBlocks(p){return p.links.filter(l=>youtubeId(l.url)).map(l=>videoCard(l.url,pageTitle(p.number)+' · demonstration','Follow the written setup and stop guidance for this check. Some videos demonstrate the movement rather than the exact workbook test.')).join('');}
function videosView(){currentRecord=null;const groups=[['Fitness checks',37,49],['Mobility & comfort',50,60]];return heading('Watch, then try at your own pace','Videos & guided practice.','Play videos here, or open them directly on YouTube. Read the relevant setup before trying a movement.')+`<div class="video-directory"><section class="card card-pad"><h2>Meditation</h2>${meditationBlock()}<a class="link-btn" href="#pause">Open the pause timer and reflection ${I('arrow')}</a></section>${groups.map(([title,from,to])=>`<section class="video-group"><h2>${title}</h2>${bodySafety()}<div class="video-grid">${pages.filter(p=>p.number>=from&&p.number<=to&&p.links.some(l=>youtubeId(l.url))).map(p=>`<div class="card card-pad">${videoBlocks(p)}<a class="link-btn" href="#read/${p.number}">Setup, instructions & notes ${I('arrow')}</a></div>`).join('')}</div></section>`).join('')}</div>`;}
function practiceLinks(){return '<div class="practice-links"><a class="btn secondary" href="#videos">Watch exercise & meditation videos</a><a class="link-btn" href="#read/38">Body-check setup & stop guidance →</a></div>';}

function exerciseInstructionItems(items){const result=[];for(const item of items){if(item.kind==='field')continue;if(item.kind==='text'&&item.text.startsWith('Optional demonstration /'))continue;if(item.kind==='columns'){const meaningful=item.columns.filter(c=>/[A-Za-z]/.test(c.replace(/_+\s*(seconds|cm)?/g,'')));if(item.columns.some(c=>/__/.test(c))){if(meaningful.length&&meaningful[0]!=='Position')result.push({...item,kind:'text',text:meaningful.join(' · ')});continue;}if(!item.columns.some(c=>/[.!]/.test(c)))continue;}const previous=result.at(-1);if(item.kind==='text'&&previous?.kind==='text'&&!/[.!?:]$/.test(previous.text.trim())&&/^[a-z]/.test(item.text)){previous.text+=' '+item.text;continue;}result.push({...item});}return result;}
function exerciseMethod(items){return exerciseInstructionItems(items).map(i=>{const match=i.kind==='text'&&i.text.match(/^(\d+)\.\s+([\s\S]*)$/);if(match)return `<div class="method-step"><span>${match[1]}</span><p>${linkedText(match[2])}</p></div>`;return renderItems([i]);}).join('');}
function exerciseSection(p,items){const fields=items.filter(i=>i.kind==='field'),links=p.links.filter(l=>youtubeId(l.url));return `<section class="scroll-section exercise-section" id="section-${p.number}"><header class="exercise-heading"><span class="eyebrow">Movement check</span><h2>${esc(pageTitle(p.number))}</h2></header><div class="exercise-overview"><div class="exercise-watch"><h3>Watch the movement</h3>${links.map(l=>`<div class="exercise-video"><div class="video-frame"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${youtubeId(l.url)}?playsinline=1&rel=0" title="${esc(pageTitle(p.number))} demonstration" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><a class="link-btn" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">Watch on YouTube ${I('external')}</a></div>`).join('')}<p class="helper-note">The video shows the movement. Use the written method here for the journal check. If the player does not load, use the YouTube link.</p><a class="text-link" href="#read/38">Setup & stop guidance</a></div><div class="exercise-method reader-content"><h3>How to try it</h3>${exerciseMethod(items)}</div></div><div class="exercise-record"><div class="record-heading"><h3>Record what you notice</h3><p>Keep notes you want to return to. Leave anything you didn’t try blank.</p></div><div class="exercise-fields">${fields.map(i=>{let label=i.label.replace(/_{2,}/g,'…').replace(/ \/ row (\d+)$/,' · record $1');if(i.id==='p41_inline_216')label='Times in seconds: feet together / staggered / heel-to-toe / one foot';return field(i.id,label,{rows:i.table?1:2,className:i.table?'compact-record':'wide-record',placeholder:i.id==='p41_inline_216'?'Name the position and time; leave untried positions blank.':'Your notes…'});}).join('')}</div><span class="section-saved" data-save-status="${esc(currentRecord.id)}">Answers save as you type.</span></div></section>`;}

function pageSection(n,options={}){const p=pages.find(p=>p.number===n);if(!p)return '';record(`page${n}`,pageTitle(n));let intro='';
 if(n===13)intro=`<div class="notice"><strong>Make ordinary tasks easier on a tiring day.</strong><br>This is a practical backup plan for times when you feel tired, overwhelmed, unwell or stretched. Write a manageable version of each task, and decide what can wait or be shared. “Low energy” here means reduced capacity; it does not tell you whether you need more calories.</div><div class="example-grid"><div><strong>Food</strong><p>Usual: cook dinner from scratch.<br>Smaller: use a ready meal, leftovers or ask someone to cook.</p></div><div><strong>Housework</strong><p>Usual: clean every room.<br>Smaller: do one necessary task, leave the ironing or ask for help.</p></div><div><strong>Connection</strong><p>Usual: meet someone.<br>Smaller: send a message or ask them to call you.</p></div></div>`;
 if(n===36)intro=`<div class="notice">GROW is a way to turn something you care about into a realistic next step: <strong>Goal, Reality, Options, Way forward.</strong> Start with what matters to you, look at your real circumstances, consider a few options, then choose an action you can actually try.</div><p class="helper-note">Example: “I want a quieter evening because rest matters to me. I usually keep working until bedtime. I could stop ten minutes earlier, move one task or ask for help. Tonight, after dinner, I will leave my phone on the shelf for ten minutes.”</p>`;
 const items=p.items.filter(i=>!(i.kind==='text'&&i.text.startsWith('Optional demonstration /'))).map(i=>({...i,text:cleanCopy(i.text),label:cleanCopy(i.label),columns:i.columns?.map(cleanCopy)}));if(n===36)items.forEach(i=>{if(i.label)i.label=i.label.replace(/^G \/ /,'Goal / ').replace(/^R \/ /,'Reality / ').replace(/^O \/ /,'Options / ').replace(/^W \/ /,'Way forward / ');});
 if(p.number>=39&&p.number<=59&&p.links.some(l=>youtubeId(l.url)))return exerciseSection(p,items);
 return `<section class="scroll-section ${options.card?'card card-pad':''}" id="section-${n}"><div class="eyebrow">${options.number?`Part ${options.number}`:'From your journal'}</div><h2>${esc(pageTitle(n))}</h2>${intro}${videoBlocks(p)}${n===31?meditationBlock():''}<div class="reader-content">${renderItems(items)}</div>${p.links.filter(l=>!youtubeId(l.url)).length?`<div class="source-links">${p.links.filter(l=>!youtubeId(l.url)).map(l=>`<a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)} ↗</a>`).join('')}</div>`:''}<div class="section-saved" data-save-status="${esc(currentRecord.id)}">Answers save as you type.</div></section>`;
}

function todayView(){record('daily','Daily check-in');const rec=currentRecord;const nutrition=foodItems(currentDate);const legacy=!!state.entries[rec.id]&&!rec.fields.trackingBasis&&['steps','calories','protein','screenHours','screenMinutes','movement'].some(k=>rec.fields[k]!==undefined&&rec.fields[k]!=='');const topic=activePlanTopic();
const checkin=heading(`${I('sun')} ${pretty(currentDate,{weekday:'long',day:'numeric',month:'long'})}`,'A little space for you.','Check in now, and add to your day as it happens. Everything is here to scroll through.',true)+`<div class="today-grid"><section class="card card-pad"><div class="card-heading"><div><h2>Your daily check-in</h2><p>Complete the parts you want to record. Leave the rest blank.</p></div><span class="pill">Your pace</span></div>${legacy?'<div class="notice">This older entry used “yesterday” for movement, food and screen time. Those answers are kept as originally recorded. New entries use the date shown above.</div>':''}<div class="metric-row">${field('sleep','Sleep for today',{type:'number',min:0,max:24,step:.25,unit:'hrs',placeholder:'—',icon:'moon'})}${field('mood','Mood today',{type:'number',min:0,max:10,step:1,unit:'/ 10',placeholder:'—',icon:'smile'})}${field('energy','Energy today',{type:'number',min:0,max:10,step:1,unit:'/ 10',placeholder:'—',icon:'spark'})}</div><p class="helper-note metric-help">Sleep means the sleep leading into this day. Mood: 0 = very low, 10 = very good. Energy: 0 = none, 10 = very high.</p><hr class="divider">${field('mind','One thing on my mind',{placeholder:'What’s taking up space today?'})}${field('action','One thing I want to do for myself today',{placeholder:'Something small is enough.'})}<div class="open-section"><h3>Steps, attention & self-care</h3><p class="helper-note">Record this day’s totals as you go, or return this evening. Blank means “not recorded”, not zero. Food and activity have their own pages.</p><div class="field-grid">${field('steps',legacy?'Steps (original previous-day entry)':'Steps today',{type:'number',min:0,max:200000,step:1,placeholder:'—'})}<div><label class="small" for="f-screenHours">${legacy?'Screen time (original previous-day entry)':'Screen time today'}</label><div class="field-grid" style="margin-top:8px;gap:8px">${field('screenHours','Hours',{type:'number',min:0,max:24,step:1,placeholder:'—'})}${field('screenMinutes','Minutes',{type:'number',min:0,max:59,step:1,placeholder:'—'})}</div></div>${(rec.fields.calories||rec.fields.protein)?field('calories',legacy?'Calories (original previous-day entry)':'Calories today',{type:'number',min:0,max:30000,step:1,unit:'kcal',placeholder:'—'})+field('protein',legacy?'Protein (original previous-day entry)':'Protein today',{type:'number',min:0,max:2000,step:.1,unit:'g',placeholder:'—'}):''}${rec.fields.movement?field('movement',legacy?'Movement (original previous-day entry)':'Movement today',{placeholder:'A walk, stretch, everyday task…'}):''}${field('care','Something I did to care for myself today',{placeholder:'Rest, company, a boundary…'})}</div></div>${saveFooter('Save check-in')}</section><aside class="aside-stack"><div class="pause-card"><span class="orbit"></span><div class="eyebrow">${I('leaf')} A moment of stillness</div><h3>Just one minute.</h3><p>Let your attention rest somewhere simple.</p><a class="link-btn" href="#pause">Take a pause ${I('arrow')}</a><br><a class="link-btn" href="#videos">Watch a guided meditation ${I('play')}</a></div>${miniWeek()}<div class="card week-mini"><h3>${topic?'Your weekly focus':'A gentle weekly structure'}</h3><p>${topic?esc(topic.title):'Nine topics, one at a time. Start whenever you like.'}</p><a class="link-btn" href="#plan">${topic?'See this week':'Explore the weekly plan'} ${I('arrow')}</a></div></aside></div>`;
return checkin+todayFoodSummary()+support();
}

function exploreView(){currentRecord=null;return heading('Choose your own route','Explore at your own pace.','Each chapter brings the explanation, examples and exercises together on one scrolling page.')+`<div class="route-banner card"><div><h3>Prefer a little structure?</h3><p>Follow a flexible nine-week plan, while keeping your everyday habits in your daily check-in.</p></div><a class="btn secondary" href="#plan">See the weekly plan ${I('arrow')}</a></div><div class="button-row" style="margin:22px 0"><a class="btn subtle" href="#energy">Calorie & protein calculator</a><a class="btn secondary" href="#food">Food diary</a><a class="btn secondary" href="#videos">Videos & guided meditation</a><a class="btn secondary" href="#tools">All practical tools</a></div><div class="search">${I('search')}<input id="search-chapters" type="search" placeholder="Find a topic or practical page…" aria-label="Search journal topics" value="${esc(searchTerm)}"></div><div id="explore-results">${exploreResults()}</div><div class="support-strip"><div><h3>The complete journal, in your own time.</h3><p>Scroll through a topic and write straight into the page. Your responses save automatically.</p></div><a class="link-btn" href="#sources">Sources & original ${I('arrow')}</a></div>`;}
function exploreResults(){if(searchTerm.trim()){const list=pages.filter(p=>p.number>=7&&(pageTitle(p.number)+' '+p.items.filter(i=>i.kind!=='field').map(i=>i.text).join(' ')).toLowerCase().includes(searchTerm.trim().toLowerCase()));return list.length?`<div class="search-results">${list.map(p=>`<a href="#read/${p.number}"><span>${esc(pageTitle(p.number))}</span><small>Go to section →</small></a>`).join('')}</div>`:`<div class="card empty">${I('search')}<h3>No matching topic</h3><p>Try sleep, food, attention or movement.</p></div>`;}
return `<div class="chapter-grid">${chapters.map((c,i)=>`<a class="card topic-card" href="#read/${c.from}"><div class="topic-icon">${I(c.icon)}</div><div class="eyebrow">Chapter ${String(i+1).padStart(2,'0')}</div><h3>${i===5?'Your life & goal setting':c.name}</h3><p>${c.desc}</p><span class="link-btn">Explore this chapter ${I('arrow')}</span></a>`).join('')}</div>`;}

function readerView(n){if(n===2)return todayView();if(n===3)return snapshotView();if(n===6)return weekView();if(n===4)return toolsView();if(n===5)return exploreView();const p=pages.find(x=>x.number===n);if(!p||n<7)return exploreView();const c=chapters.find(c=>n>=c.from&&n<=c.to);const siblings=c?pages.filter(x=>x.number>=c.from&&x.number<=c.to):n===7?[p]:pages.filter(x=>x.number>=63);const title=c?.name||(n===7?pageTitle(7):'Sources');
const body=siblings.map((p,i)=>p.number===34?`<section class="scroll-section" id="section-34"><h2>Your life right now</h2>${snapshotPanel()}</section>`:p.number===51?`<section class="scroll-section" id="section-51"><h2>My body map</h2>${bodyPanel()}</section>`:p.number===21?`<section class="scroll-section" id="section-21"><h2>Estimate calorie needs & protein</h2>${nutritionPanel()}${earlierCalorieWorksheet()}</section>`:pageSection(p.number,{number:i+1})).join('');
return `<div class="page-top-link"><a class="link-btn" href="#explore">${I('back')}All chapters</a></div>${heading('Learn, reflect and try something',title,'Everything in this chapter is below. Scroll at your own pace; your answers save as you type.',true)}<nav class="chapter-jumps" aria-label="Jump to a section">${siblings.map(p=>`<a href="#read/${p.number}">${esc(pageTitle(p.number))}</a>`).join('')}</nav>${c&&[37,50].includes(c.from)?bodySafety():''}<article class="card reader scrolling-reader">${body}</article>${support()}`;}

function snapshotPanel(){record('snapshot','Your life right now');return `<div class="snapshot-layout"><div><p class="helper-note">How satisfied do you feel? 0 = not working for me · 10 = working very well.</p>${areaNames.map((name,i)=>`<div class="score-line"><label for="area${i}">${i+1}. ${name}</label><input id="area${i}" ${scopeAttrs()} data-field="area${i}" type="number" min="0" max="10" step="1" inputmode="numeric" placeholder="—" value="${esc(value(`area${i}`))}" aria-label="${name}, score out of ten"><span>/ 10</span></div>`).join('')}</div><div><div id="wheel-visual">${wheel()}</div><p class="wheel-note">A snapshot, not a test. Your lowest score does not have to come first. Blank areas are not scored.</p></div></div><hr class="divider">${field('focus','An area I might give a little attention to — and why')}${field('own','An area I would rename or add',{placeholder:'What would fit your life better?'})}`;}
function snapshotView(){return `<div class="simple-wrap">${heading('Notice, understand, choose','Your life right now.','Start with your scores, then scroll down to explore them and choose a realistic goal.',true)}<section class="card card-pad">${snapshotPanel()}${pageSection(35)}${pageSection(36)}</section></div>`;}

function earlierCalorieWorksheet(){if(!state.entries['page21:'+currentDate])return '';record('page21','My earlier calorie worksheet');return `<div class="open-section"><h3>Your earlier calorie worksheet</h3><p class="helper-note">Your notes from the previous app are kept here. The calculator above saves separately.</p>${renderItems(pages.find(p=>p.number===21).items.filter(i=>i.kind==='field'))}</div>`;}
function bodyPanel(){const html=bodyView(),marker='<section class="card card-pad">';return html.slice(html.indexOf(marker)+marker.length,html.lastIndexOf('</section>'));}

function energyView(){return `<div class="simple-wrap">${heading('Calories, protein & daily targets','Estimate calorie needs.','See maintenance, a 15% deficit and small surplus examples. Work out protein on the same page.',true)}<section class="card card-pad">${nutritionPanel()}</section></div>`;}
function nutritionPanel(){record('energy','Calorie & protein estimates');return `<div class="notice warning">These are educational estimates for adults, not prescriptions. Do not use self-directed targets during pregnancy or breastfeeding, or under 18. Seek individual advice with low weight, unintended weight loss, eating-disorder history, kidney disease, frailty, a prescribed diet or medicines that can cause low blood sugar. You can use this journal without counting food.</div><h3>1. Estimate resting energy</h3><p class="helper-note">Your body uses energy even at rest. The Mifflin–St Jeor equation is: (10 × kg) + (6.25 × cm) − (5 × age), then −161 or +5 for the original equation selected.</p><div class="field-grid">${field('weight','Weight',{type:'number',min:20,max:400,step:.1,unit:'kg'})}${field('height','Height',{type:'number',min:100,max:250,step:.1,unit:'cm'})}${field('age','Age',{type:'number',min:18,max:110,step:1,unit:'years'})}${field('equation','Original equation',{type:'select',options:[['','Choose an equation'],['female','Female equation (−161)'],['male','Male equation (+5)']]})}</div><p class="helper-note">Pounds ÷ 2.2046 = kg; inches × 2.54 = cm. The original study covered ages 19–78. Its sex categories do not describe gender identity; seek tailored advice outside its scope, including hormone treatment.</p><h3>2. Include the whole day</h3><p class="helper-note">Resting energy is not your daily food target. Activity factors include everyday movement and are approximate.</p>${field('factor','Usual activity',{type:'select',options:[['','Choose a rough activity level'],['1.4','1.4 · Mostly sitting, little daily movement'],['1.6','1.6 · Mostly sitting + regular moderate activity'],['1.8','1.8 · More movement throughout the day'],['2','2.0 · Substantial daily movement / training']]})}<div id="energy-result" aria-live="polite">${calcHtml(false)}</div><hr class="divider"><h3>3. Estimate daily protein</h3><p class="helper-note">Protein supports body tissues. These guides describe different groups: they are not added together. Higher is not automatically better, and protein does not replace enough food overall.</p><div class="protein-guides"><p><strong>Basic adult reference:</strong> 0.83 g/kg/day (EFSA).</p><p><strong>Healthy older adults, usually 65+:</strong> 1.0–1.2 g/kg/day (PROT-AGE).</p><p><strong>Healthy adults exercising regularly:</strong> 1.4–2.0 g/kg/day (ISSN).</p></div>${field('proteinRate','Protein amount to explore',{type:'number',min:.5,max:2.2,step:.01,unit:'g/kg',placeholder:'For example, 1.2',help:'Choose an amount appropriate to your circumstances. Ask for help choosing a target with kidney disease, frailty or very high or low body weight.'})}<div id="protein-result" aria-live="polite">${proteinHtml()}</div><hr class="divider"><h3>4. Choose your calorie & protein targets</h3><p class="helper-note">Choose the calorie scenario you want to explore. Your protein amount comes from the calculation above. You can also enter your own agreed targets in the food diary.</p>${field('scenario','Calorie scenario',{type:'select',options:[['','Choose a scenario'],['maintenance','Maintenance'],['deficit','15% deficit example'],['surplus5','5% surplus / bulk example'],['surplus10','10% surplus / bulk example']]})}<div id="macro-result" aria-live="polite">${macroHtml()}</div><button class="btn" data-action="apply-targets" ${scopeAttrs()}>Use these daily targets ${I('arrow')}</button><p class="helper-note" style="margin-top:12px">This saves your chosen targets from ${pretty(currentDate)} onward. It does not change the food you have logged. Review energy, appetite, wellbeing and longer-term changes; weight loss or gain is not needed to use the journal.</p><div class="source-links"><a href="https://pubmed.ncbi.nlm.nih.gov/2305711/" target="_blank" rel="noopener noreferrer">Mifflin et al. · Resting energy equation</a><a href="https://www.niddk.nih.gov/bwp" target="_blank" rel="noopener noreferrer">NIDDK · Alternative calorie planning tool</a><a href="https://www.efsa.europa.eu/en/press/news/120209" target="_blank" rel="noopener noreferrer">EFSA · Adult protein reference</a><a href="https://doi.org/10.1016/j.jamda.2013.05.021" target="_blank" rel="noopener noreferrer">PROT-AGE · Protein for older adults</a><a href="https://doi.org/10.1186/s12970-017-0177-8" target="_blank" rel="noopener noreferrer">ISSN · Protein and exercise</a></div>`;}

function calorieMath(f){if(!(Number(f.weight)>=20&&Number(f.weight)<=400&&Number(f.height)>=100&&Number(f.height)<=250&&Number(f.age)>=18&&Number(f.age)<=110&&['female','male'].includes(f.equation)&&['1.4','1.6','1.8','2'].includes(f.factor)))return null;const rmr=10*Number(f.weight)+6.25*Number(f.height)-5*Number(f.age)+(f.equation==='female'?-161:5);if(rmr<=0)return null;const total=rmr*Number(f.factor),round=n=>Math.round(n/50)*50;return {rmr,total,bmi:Number(f.weight)/(Number(f.height)/100)**2,maintenance:round(total),deficit:round(total*.85),surplus5:round(total*1.05),surplus10:round(total*1.10)};}
function calcHtml(showErrors){const f=currentRecord?.fields||{},m=calorieMath(f);if(!m)return `<p class="notice">${showErrors?'Add a valid weight, height, adult age and both choices.':'Enter your details above to see calorie estimates here.'}</p>`;return `<div class="calculator-result"><div class="eyebrow">Resting energy × activity</div><p>${Math.round(m.rmr).toLocaleString('en-IE')} kcal × ${esc(f.factor)} = approximately ${Math.round(m.total).toLocaleString('en-IE')} kcal/day.</p><div class="calorie-scenarios">${[['maintenance','Maintenance','× 1.00'],['deficit','15% deficit','× 0.85'],['surplus5','5% surplus / bulk','× 1.05'],['surplus10','10% surplus / bulk','× 1.10']].map(([k,l,mult])=>`<div><span>${l}</span><strong>${m[k].toLocaleString('en-IE')}</strong><small>kcal/day · ${mult}</small></div>`).join('')}</div><p>Scenarios use the unrounded daily estimate, then round to the nearest 50 kcal. A deficit is a weight-loss example; a surplus is sometimes used with resistance training for muscle gain. Neither is a recommendation for everyone.</p>${m.bmi<18.5?'<p><strong>These details suggest low weight relative to height. Do not use the deficit example as a target; seek individual advice.</strong></p>':''}${Number(f.age)<19||Number(f.age)>78?'<p>Your age is outside the original study’s 19–78 range. Seek a tailored estimate.</p>':''}</div>`;}
function proteinMath(f){const w=Number(f.weight),r=Number(f.proteinRate);return w>=20&&w<=400&&r>=.5&&r<=2.2?Math.round(w*r):null;}
function proteinHtml(){const f=currentRecord?.fields||{},p=proteinMath(f);return p===null?'<p class="notice">Add your weight and a protein amount to see grams per day.</p>':`<div class="calculator-result"><strong>${p}</strong> <small>g protein/day</small><p>${esc(f.weight)} kg × ${esc(f.proteinRate)} g/kg. Count protein from all food and drinks; supplements are optional.</p></div>`;}
function macroHtml(){const m=targetEstimate(currentRecord?.fields||{});if(!m)return '<p class="notice">Complete the calorie estimate, protein amount and scenario to see your two daily targets.</p>';if(m.error)return `<p class="notice warning">${m.error}</p>`;return `<div class="macro-grid nutrition-pair">${nutritionKeys.map(k=>`<div><span>${nutritionNames[k]}</span><strong>${m[k]}</strong><small>${k==='calories'?'kcal':'g'} / day</small></div>`).join('')}</div>`;}

function foodItems(date){try{const rows=JSON.parse(state.entries[`food:${date}`]?.fields.items||'[]');return Array.isArray(rows)?rows:[];}catch{return [];}}
function itemTotals(item){const factor=Number(item.quantity)/(item.basis==='serving'?1:100);return Object.fromEntries(nutritionKeys.map(k=>[k,item[k]==null?null:Number(item[k])*factor]));}
function foodTotals(date){const items=foodItems(date);return Object.fromEntries(nutritionKeys.map(k=>[k,{value:items.reduce((s,f)=>s+(itemTotals(f)[k]??0),0),missing:items.filter(f=>itemTotals(f)[k]==null).length,count:items.length}]));}
function targetRecord(date){return Object.values(state.entries).filter(e=>e.kind==='targets'&&e.date<=date).sort((a,b)=>b.date.localeCompare(a.date))[0]||null;}
function foodSummary(date){const totals=foodTotals(date),targets=targetRecord(date)?.fields||{};return `<div class="macro-grid nutrition-pair">${nutritionKeys.map(k=>{const t=totals[k],target=targets[k];return `<div><span>${nutritionNames[k]}</span><strong>${t.count?nutritionNumber(t.value):'—'}${t.missing?' + ?':''}</strong><small>${k==='calories'?'kcal':'g'}${target?` / ${esc(target)} target`:''}</small>${target&&t.count?`<progress max="${esc(target)}" value="${Math.min(t.value,Number(target))}" aria-label="${nutritionNames[k]} recorded toward your chosen target"></progress>`:''}${t.missing?`<small>${t.missing} food${t.missing>1?'s':''} missing this value</small>`:''}</div>`;}).join('')}</div>`;}
function portionOptions(){return [['g','Grams'],['ml','Millilitres'],['serving','Servings']];}
function portionUnit(){return foodDraft.basis==='100g'?'g':foodDraft.basis==='100ml'?'ml':foodDraft.basis==='serving'?'serving':'';}
function portionAmount(){return Number(foodDraft.quantity);}
function portionControls(){const unit=portionUnit(),suffix=unit==='serving'?'servings':unit;return `<div class="portion-controls"><div class="portion-topline"><h3>How much did you have?</h3><div class="unit-switch" role="group" aria-label="Measure food or drink">${portionOptions().map(([key,label])=>`<button type="button" data-food-unit="${key}" class="unit-button ${unit===key?'active':''}" aria-pressed="${unit===key}">${label}</button>`).join('')}</div></div><div class="amount-row"><div class="field"><label for="food-quantity">${unit?'Amount eaten or drunk':'Choose grams, millilitres or servings above'}</label><div class="input-unit"><input id="food-quantity" data-food="quantity" type="number" min="0.01" max="10000" step="any" inputmode="decimal" value="${esc(foodDraft.quantity)}" placeholder="${unit==='ml'?'250':unit==='serving'?'1':'25'}"><span>${suffix}</span></div></div><div class="amount-presets" aria-label="Common amounts">${(unit==='g'?[1,25,50,100,150]:unit==='ml'?[1,50,100,200,250,500]:unit==='serving'?[.5,1,2]:[]).map(n=>`<button class="portion-preset" type="button" data-portion="${n}">${n} ${unit==='serving'?(n===1?'serving':'servings'):unit}</button>`).join('')}</div></div><p class="helper-note">${unit==='ml'?'Enter the volume you drank in ml. Use the label’s values per 100 ml.':unit==='serving'?'Use the serving described on the pack. Enter 0.5 for half a serving.':unit==='g'?'Enter the weight you ate in grams. 1 means 1 g; 25 means 25 g.':'For drinks choose millilitres; for weighed food choose grams. Match the units on the pack.'}</p></div>`;}
function updatePortionControls(){const box=document.querySelector('#portion-controls');if(box){box.innerHTML=portionControls();bindFoodInputs(box);}const label=document.querySelector('#nutrition-label');if(label){label.innerHTML=nutritionLabelControls();bindFoodInputs(label);}updatePortionPreview();}
function updatePortionPreview(){const p=document.querySelector('#portion-preview');if(p)p.textContent=portionPreview();}
function bindFoodInputs(root=document){root.querySelectorAll('[data-food]').forEach(el=>{if(el.dataset.foodBound)return;el.dataset.foodBound='true';el.addEventListener('input',()=>{foodDraft[el.dataset.food]=el.value;updatePortionPreview();});});root.querySelectorAll('[data-food-unit]').forEach(el=>el.addEventListener('click',()=>chooseFoodUnit(el.dataset.foodUnit)));root.querySelectorAll('[data-portion]').forEach(el=>el.addEventListener('click',()=>{foodDraft.quantity=el.dataset.portion;fillFoodDraft();}));}
function chooseFoodUnit(unit){if(!portionOptions().some(([k])=>k===unit)||unit===portionUnit())return;const old=portionUnit();const keepLookup=!old&&foodDraft.lookupPer100&&unit!=='serving';foodDraft.basis=unit==='g'?'100g':unit==='ml'?'100ml':'serving';foodDraft.portionUnit=unit;foodDraft.quantity='';if(!keepLookup){nutritionKeys.forEach(k=>foodDraft[k]='');foodDraft.lookupPer100=false;}fillFoodDraft();if(old)toast('Unit changed. Check the matching label values and enter the amount.');}
function nutritionLabelControls(){const unit=portionUnit(),basis=unit==='g'?'100 g':unit==='ml'?'100 ml':unit==='serving'?'one serving':'100 g / 100 ml — check the pack';return `<div class="nutrition-label-heading"><strong>From the label · per ${basis}</strong><span>Filled by product search, or enter manually.</span></div><div class="field-grid">${draftInput('calories',`Calories per ${basis} (kcal)`,'number','max="10000"')}${draftInput('protein',`Protein per ${basis} (g)`,'number','max="1000"')}</div>`;}
function nutritionNumber(value){if(value>0&&value<.01)return '<0.01';return String(Math.round(value*100)/100);}
function targetEstimate(f){const c=calorieMath(f),p=proteinMath(f);if(!c||p===null||!['maintenance','deficit','surplus5','surplus10'].includes(f.scenario))return null;const calories=c[f.scenario];if(calories<1000||f.scenario==='deficit'&&c.bmi<18.5)return {error:'These choices are outside this self-guided tool’s limits. Ask a dietitian or clinician for an individual plan.'};const fp=Number(f.fatPercent)>=20&&Number(f.fatPercent)<=35?Number(f.fatPercent):30,fat=Math.round(calories*fp/100/9),carbs=Math.round((calories-p*4-fat*9)/4);if(carbs<50)return {error:'This protein amount leaves too little room for carbohydrate. Lower the protein amount or ask for individual advice.'};return {calories,protein:p,carbs,fat};}

function draftInput(key,label,type='text',extra=''){return `<div class="field"><label for="food-${key}">${label}</label><input id="food-${key}" data-food="${key}" type="${type}" value="${esc(foodDraft[key])}" ${type==='number'?'min="0" step="any" inputmode="decimal"':''} ${extra}></div>`;}
function foodPanel(){const saved=currentRecord;const items=foodItems(currentDate);const totals=foodSummary(currentDate);const targets=targetRecord(currentDate)?.fields||{};const recent=[];recentLoop:for(const e of Object.values(state.entries).filter(e=>e.kind==='food').sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt)))for(const f of foodItems(e.date)){if(!recent.some(x=>x.name===f.name&&x.basis===f.basis))recent.push(f);if(recent.length>=8)break recentLoop;}let html=`<section class="card card-pad food-panel" id="food-diary"><div class="card-heading"><div><h2>Food, in the amount you ate.</h2><p>Find a food, choose the amount you ate, and add it. Calories and protein are calculated for you.</p></div></div>${totals}<p class="helper-note">Only foods you add are included. Missing nutrition stays unknown, rather than becoming zero. Label values and targets are estimates.</p><div class="food-entries">${items.map(f=>{const t=itemTotals(f);return `<div class="food-row"><div><strong>${esc(f.name)}</strong><small>${esc(f.meal)} · ${f.quantity} ${f.basis==='100g'?'g':f.basis==='100ml'?'ml':'serving(s)'}${f.source==='Open Food Facts'?' · Open Food Facts':''}</small><span>${t.calories===null?'Calories unknown':`${Math.round(t.calories)} kcal`} · ${t.protein===null?'Protein unknown':`${nutritionNumber(t.protein)} g protein`}</span></div><button class="icon-btn" data-food-edit="${esc(f.id)}" aria-label="Edit ${esc(f.name)}">${I('settings')}</button><button class="icon-btn" data-food-remove="${esc(f.id)}" aria-label="Remove ${esc(f.name)}">${I('trash')}</button></div>`;}).join('')||'<p class="helper-note">No foods recorded for this date yet.</p>'}</div><hr class="divider"><h3>Find a packaged product</h3><p class="helper-note">Search by product name or enter the digits below its barcode. Lookup sends that search or code to Open Food Facts, not your journal. Always check the result against the pack.</p><form id="food-search-form" class="food-search-row"><label class="screen-reader-only" for="food-search">Product name or barcode</label><input id="food-search" type="search" maxlength="120" placeholder="Product name or barcode number" value="${esc(foodQuery)}"><button class="btn" type="submit" ${foodBusy?'disabled':''}>${foodBusy?'Searching…':'Search'}</button><button class="btn secondary" type="button" data-action="scan">Scan barcode</button></form><p class="helper-note">Camera scanning needs a supported browser and camera permission. If unavailable, type the barcode or enter the label below.</p><div id="scan-area" hidden><video id="scan-video" autoplay muted playsinline></video><button class="btn secondary" type="button" data-action="stop-scan">Stop camera</button></div><div id="food-results" aria-live="polite">${foodResultHtml()}</div>${recent.length?`<div class="recent-foods"><span class="eyebrow">Use a food you’ve recorded before</span><div class="button-row">${recent.slice(0,8).map((f,i)=>`<button class="filter" data-recent-food="${i}">${esc(f.name)}</button>`).join('')}</div></div>`:''}<div class="food-editor" id="food-editor"><h3>${foodDraft.id?'Edit this food':'Your food or drink'}</h3><p class="helper-note">Choose a unit, enter your amount and check the label values. Then add it to your day.</p><div class="field-grid food-identity">${draftInput('name','Food / product name','text','maxlength="180"')}<div class="field"><label for="food-meal">Meal</label><select id="food-meal" data-food="meal">${['Breakfast','Lunch','Dinner','Snack','Drink','Meal'].map(m=>`<option ${foodDraft.meal===m?'selected':''}>${m}</option>`).join('')}</select></div></div><div id="portion-controls">${portionControls()}</div><div id="nutrition-label">${nutritionLabelControls()}</div><p class="portion-result" id="portion-preview" aria-live="polite">${portionPreview()}</p><div class="button-row"><button class="btn" data-action="add-food">${foodDraft.id?'Save food changes':'Add food to this day'} ${I('arrow')}</button><button class="btn secondary" data-action="clear-food">Clear boxes</button></div></div><hr class="divider"><h3>Your daily targets</h3><p class="helper-note">Leave any target blank. Enter targets agreed for you, or use the <a class="text-link" href="#energy">calorie and protein calculator</a>. Targets saved here apply from ${pretty(currentDate)} onward.</p><div class="field-grid">${nutritionKeys.map(k=>`<div class="field"><label for="target-${k}">${nutritionNames[k]} (${k==='calories'?'kcal':'g'})</label><input type="number" id="target-${k}" data-target="${k}" min="1" max="${k==='calories'?10000:1500}" step="1" inputmode="decimal" value="${esc(targets[k]||'')}" placeholder="No target"></div>`).join('')}</div><button class="btn secondary" data-action="save-targets">Save daily targets</button><p class="helper-note" style="margin-top:18px">Product information: <a class="text-link" href="https://world.openfoodfacts.org" target="_blank" rel="noopener noreferrer">Open Food Facts</a>, made available under the <a class="text-link" href="https://opendatacommons.org/licenses/odbl/1-0/" target="_blank" rel="noopener noreferrer">Open Database License</a>. Community data can be missing or incorrect. No affiliation with MyFitnessPal or Open Food Facts.</p></section>`;currentRecord=saved;foodPanel.recent=recent.slice(0,8);return html;}
function legacyFoodView(){currentRecord=null;return heading('Food & everyday habits','Your food diary.','Products, grams, calories and protein. Your entries stay on this device.',true)+foodPanel();}
function portionPreview(){const unit=portionUnit();if(!unit||!(Number(foodDraft.quantity)>0))return 'Choose an amount to see calories and protein here.';const amount=portionAmount(),factor=amount/(unit==='serving'?1:100);return `${nutritionNumber(amount)} ${unit==='serving'?(amount===1?'serving':'servings'):unit} · `+nutritionKeys.map(k=>`${nutritionNames[k]}: ${foodDraft[k]===''?'unknown':nutritionNumber(Number(foodDraft[k])*factor)}${k==='calories'?' kcal':' g'}`).join(' · ');}
function legacyFoodResultHtml(){return `${foodMessage?`<p class="notice">${esc(foodMessage)}</p>`:''}<div class="product-results">${foodResults.map((p,i)=>`<button class="product-result" data-product="${i}"><strong>${esc(p.name)}</strong><span>${esc(p.brand)}${p.code?` · ${esc(p.code)}`:''}</span><small>${p.calories===null?'Calories not supplied':`${p.calories} kcal per 100 g/ml`} · Check the label and units →</small></button>`).join('')}</div>`;}
function legacyNormaliseProduct(p){const n=p.nutriments||{};const number=k=>n[k]!==undefined&&n[k]!==null&&n[k]!==''&&Number.isFinite(Number(n[k]))&&Number(n[k])>=0?Number(n[k]):null;return {name:String(p.product_name||p.product_name_en||p.generic_name||'Unnamed product').slice(0,180),brand:String(p.brands||'').slice(0,100),code:/^\d{8,14}$/.test(String(p.code))?String(p.code):'',calories:number('energy-kcal_100g')??(number('energy-kj_100g')!==null?number('energy-kj_100g')/4.184:null),protein:number('proteins_100g'),carbs:number('carbohydrates_100g'),fat:number('fat_100g')};}
async function searchFood(query){query=String(query||'').trim();if(!query||query.length<2){foodMessage='Enter a product name or barcode.';updateFoodResults();return;}const now=Date.now();let last=lastFoodSearch;try{last=Math.max(last,Number(sessionStorage.getItem('wellmind.off.last')||0));}catch{}if(now-last<7000){foodMessage='Please wait a few seconds between product searches.';updateFoodResults();return;}lastFoodSearch=now;try{sessionStorage.setItem('wellmind.off.last',String(now));}catch{}foodQuery=query;foodBusy=true;foodMessage='Searching Open Food Facts…';foodResults=[];updateFoodResults();const requestDate=currentDate;foodAbort?.abort();const controller=new AbortController();foodAbort=controller;const timeout=setTimeout(()=>controller.abort(),15000);const barcode=query.replace(/[\s-]/g,'');const fields='code,product_name,product_name_en,brands,nutriments,nutrition_data_per,serving_size,serving_quantity,serving_quantity_unit,quantity,product_quantity_unit';const url=/^\d{8,14}$/.test(barcode)?`https://world.openfoodfacts.org/api/v3/product/${barcode}.json?fields=${encodeURIComponent(fields)}`:`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=8&fields=${encodeURIComponent(fields)}`;try{const response=await fetch(url,{headers:{'X-User-Agent':'EverydayWellbeing/3.0 (https://www.wellmind.ie)'},signal:controller.signal,credentials:'omit'});if(!response.ok)throw Error(response.status===429?'Too many requests. Please wait a minute, or use the label boxes.':'Product lookup is temporarily unavailable. You can still enter the label below.');const data=await response.json();if(foodAbort!==controller||currentDate!==requestDate)return;foodResults=(data.product?[data.product]:data.products||[]).slice(0,8).map(normaliseProduct);foodMessage=foodResults.length?'Choose a product, then check the values and label units below.':'No matching product found. Enter its label below; nothing is added until you choose Add food.';}catch(error){if(foodAbort!==controller)return;foodMessage=error.name==='AbortError'?'The product search timed out. Try again later or enter the label below.':error.name==='TypeError'?'Open Food Facts is busy or can’t be reached just now. Wait a minute and try again, or add the food under “Enter manually”.':error.message;}finally{clearTimeout(timeout);if(foodAbort===controller){foodBusy=false;updateFoodResults();}}}
function updateFoodResults(){const el=document.querySelector('#food-results');if(el){el.innerHTML=foodResultHtml();el.querySelectorAll('[data-product]').forEach(b=>b.addEventListener('click',()=>selectProduct(Number(b.dataset.product))));}const b=document.querySelector('#food-search-form button[type=submit]');if(b){b.disabled=foodBusy;b.textContent=foodBusy?'Searching…':'Search';}}
function legacySelectProduct(index){const p=foodResults[index];if(!p)return;foodDraft={name:p.name,basis:'',lookupPer100:true,quantity:'',meal:foodMealDefault(),source:'Open Food Facts',code:p.code,...Object.fromEntries(nutritionKeys.map(k=>[k,p[k]==null?'':String(Math.round(p[k]*100)/100)]))};fillFoodDraft();document.querySelector('#food-editor')?.scrollIntoView({behavior:'smooth',block:'start'});toast('Choose Grams or Millilitres, check the label values, and enter your amount.');}
function fillFoodDraft(){document.querySelectorAll('[data-food]').forEach(el=>{if(el.dataset.food!=='portionUnit')el.value=foodDraft[el.dataset.food]??'';});updatePortionControls();}
function validFoodItem(f){return f&&typeof f==='object'&&typeof f.id==='string'&&/^[\w-]{1,100}$/.test(f.id)&&typeof f.name==='string'&&f.name.length>0&&f.name.length<=180&&['100g','100ml','serving'].includes(f.basis)&&Number.isFinite(f.quantity)&&f.quantity>0&&f.quantity<=10000&&typeof f.meal==='string'&&f.meal.length<=50&&['manual','Open Food Facts'].includes(f.source)&&typeof f.code==='string'&&(!f.code||/^\d{8,14}$/.test(f.code))&&nutritionKeys.every(k=>f[k]==null||typeof f[k]==='number'&&Number.isFinite(f[k])&&f[k]>=0&&f[k]<=(k==='calories'?10000:1000));}
function addFood(){const f={...(foodDraft.id?foodItems(currentDate).find(x=>x.id===foodDraft.id):{}),id:foodDraft.id||`f-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,name:foodDraft.name.trim(),basis:foodDraft.basis,quantity:portionAmount(),meal:foodDraft.meal,source:foodDraft.source||'manual',code:foodDraft.code||'',...Object.fromEntries(nutritionKeys.map(k=>[k,foodDraft[k]===''||foodDraft[k]==null?null:Number(foodDraft[k])]))};if(!validFoodItem(f)){toast('Add a food name, choose label units, and enter a valid amount eaten. Check the nutrition numbers.');return;}if(!nutritionKeys.some(k=>f[k]!==null)){toast('Add at least one nutrition value from the label. Other values may stay blank.');return;}const items=foodItems(currentDate),idx=items.findIndex(i=>i.id===f.id);if(idx>=0)items[idx]=f;else items.push(f);if(items.length>100){toast('This day already has 100 foods. Edit an existing item instead.');return;}const rec=createRecord('food',currentDate,'Food diary');rec.fields.items=JSON.stringify(items);saveRecordObject(rec);clearFoodDraft();renderPreservingScroll();toast(storageError?'Food is in memory only. Download a backup.':'Food saved for this date.');}
function clearFoodDraft(){foodDraft={name:'',basis:'100g',portionUnit:'g',quantity:'',calories:'',protein:'',carbs:'',fat:'',meal:'Meal',code:'',source:''};}
function removeFood(id){const items=foodItems(currentDate).filter(f=>f.id!==id);if(items.length){const rec=createRecord('food',currentDate,'Food diary');rec.fields.items=JSON.stringify(items);saveRecordObject(rec);}else{delete state.entries[`food:${currentDate}`];persist();}renderPreservingScroll();toast('Food removed. Daily totals updated.');}
function saveTargets(values){if(nutritionKeys.some(k=>values[k]!==''&&(!Number.isFinite(Number(values[k]))||Number(values[k])<1||Number(values[k])>(k==='calories'?10000:1500)))){toast('Check the targets. Leave a target blank to remove it.');return false;}const rec=createRecord('targets',currentDate,'Daily nutrition targets');rec.fields={...rec.fields,...Object.fromEntries(nutritionKeys.map(k=>[k,String(values[k]??'')]))};saveRecordObject(rec);toast(storageError?'Targets are in memory only.':'Daily targets saved from this date onward.');return true;}
function renderPreservingScroll(){const top=window.scrollY;render();window.scrollTo(0,top);}
async function startScanner(){stopScanner();const epoch=scanEpoch;if(!('BarcodeDetector' in window)||!navigator.mediaDevices?.getUserMedia){foodMessage='Camera scanning is not supported in this browser. Type the barcode digits in the search box, or use the label boxes.';updateFoodResults();return;}try{const supported=await BarcodeDetector.getSupportedFormats();const formats=['ean_13','ean_8','upc_a','upc_e'].filter(f=>supported.includes(f));if(!formats.length)throw Error('Barcode formats unavailable');const detector=new BarcodeDetector({formats});const stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false});if(epoch!==scanEpoch){stream.getTracks().forEach(t=>t.stop());return;}scanStream=stream;const video=document.querySelector('#scan-video'),area=document.querySelector('#scan-area');if(!video||!area){stopScanner();return;}area.hidden=false;video.srcObject=stream;await video.play();const scan=async()=>{if(epoch!==scanEpoch||!scanStream)return;try{const found=await detector.detect(video);const code=found.find(x=>/^\d{8,14}$/.test(x.rawValue))?.rawValue;if(code){stopScanner();const input=document.querySelector('#food-search');if(input)input.value=code;await searchFood(code);return;}}catch{}if(epoch===scanEpoch)scanTimer=setTimeout(scan,500);};scan();foodMessage='Hold the product barcode steady in the camera. Camera images stay on this device.';updateFoodResults();}catch{stopScanner();foodMessage='The camera could not open. Check camera permission, or type the barcode digits instead.';updateFoodResults();}}
function stopScanner(){scanEpoch++;clearTimeout(scanTimer);scanStream?.getTracks().forEach(t=>t.stop());scanStream=null;const area=document.querySelector('#scan-area');if(area)area.hidden=true;const video=document.querySelector('#scan-video');if(video)video.srcObject=null;}

const programme=[
{legacy:5,title:'Your life & goal setting',icon:'wheel',pages:[33,35,36],intro:'Look at what matters to you and turn one intention into a realistic next step.',habit:'Choose one small action connected to your goal; adapt it to your day.'},
{legacy:0,title:'Sleep & recovery',icon:'moon',pages:[8,9],intro:'Notice the sleep you’re getting and choose one evening change that is within your control.',habit:'Protect a short wind-down, or ask for help with an evening demand.'},
{legacy:1,title:'Self-care that fits real life',icon:'heart',pages:[10,13],intro:'Look at your needs and your actual capacity. Make an easier version of an ordinary day.',habit:'Choose one small act of care, and one task you can simplify or share.'},
{legacy:2,title:'Food & nourishment',icon:'food',pages:[14,16],intro:'Notice meals, appetite and what makes eating easier. Numbers are one option; words work too.',habit:'Record meals or your chosen food totals. Try one practical meal idea.'},
{legacy:3,title:'Screen time & attention',icon:'phone',pages:[29,30],intro:'Notice how phone use feels and what you would like more time or attention for.',habit:'Try one phone-free activity or turn off a non-essential notification.'},
{legacy:4,title:'Pausing & meditation',icon:'leaf',pages:[31,32],intro:'Explore a brief pause without trying to make yourself feel a certain way.',habit:'Take a short pause on a safe, comfortable occasion. Stop whenever you need.'},
{legacy:6,title:'Movement & everyday capability',icon:'activity',pages:[37,38],intro:'Choose movement that supports ordinary life. Read the safety guidance before deciding whether a body check suits you.',habit:'Notice movement, effort and comfort. There is no requirement to perform a fitness test.'},
{legacy:7,title:'Mobility & comfort',icon:'person',pages:[50],intro:'Notice comfort and movement without trying to diagnose a symptom from a score.',habit:'Record discomfort or an everyday movement. Seek assessment for new, severe or persistent symptoms.'},
{legacy:8,title:'Review & your next direction',icon:'flag',pages:[61,62],intro:'Look back at what has helped, what needs adapting and what you would like to continue.',habit:'Keep one helpful habit. Let go of something that adds pressure without helping.'}
];
function planRecord(){return Object.values(state.entries).filter(e=>e.kind==='plan').sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt))[0]||null;}
function planWeek(start,on=today()){const delta=Math.round((parseDate(monday(on))-parseDate(monday(start)))/86400000);return Math.floor(delta/7);}
function activePlanTopic(){const r=planRecord();if(!r?.fields.startDate)return null;const i=planWeek(r.fields.startDate);return programme[Math.min(8,Math.max(0,i))];}
function calendarHtml(start){return `<div class="weekly-calendar">${Array.from({length:7},(_,i)=>{const date=shift(start,i),d=state.entries[`daily:${date}`],food=foodItems(date),totals=foodTotals(date),macro=k=>food.length?totals[k].missing?'partial':Math.round(totals[k].value):d?.fields[k]??'—';return `<div class="calendar-day ${date===today()?'is-today':''}"><span>${pretty(date,{weekday:'short'})}</span><strong>${parseDate(date).getDate()}</strong><small>Sleep: ${esc(d?.fields.sleep??'—')} h</small><small>Steps: ${esc(d?.fields.steps??'—')}</small><small>Protein: ${esc(macro('protein'))}${macro('protein')==='partial'?'':' g'}</small><small>Calories: ${esc(macro('calories'))}</small><small>${food.length} food${food.length===1?'':'s'} logged</small>${date<=today()?`<a href="#today" data-date="${date}">${d||food.length?'Open day':'Check in'} →</a>`:'<small>Coming up</small>'}</div>`;}).join('')}</div>`;}
function planView(){const existing=planRecord(),start=existing?.fields.startDate||monday(today()),nowWeek=planWeek(start),asked=Number(route().split('/')[1]);const index=Number.isInteger(asked)&&asked>=1&&asked<=9?asked-1:Math.min(8,Math.max(0,nowWeek));const topic=programme[index],weekStart=shift(start,index*7);const rec=existing||createRecord('plan',today(),'My weekly programme');currentRecord=rec;recordDrafts[rec.id]=rec;
let html=heading('Structure when you want it','Your weekly wellbeing plan.','Nine flexible weeks. Keep your daily habits, explore one topic, and reflect at the end of the week.')+`<div class="route-banner card"><div><h3>Two ways to use your journal</h3><p>Follow these weeks, repeat a topic or browse freely. Nothing is locked, and there is no catching-up score.</p></div><a class="btn secondary" href="#explore">Explore freely ${I('arrow')}</a></div><section class="card card-pad" style="margin-top:22px"><div class="plan-setup"><div><h3>${existing?'Your programme':'Choose your starting week'}</h3><p class="helper-note">Pick a date; the programme uses that week’s Monday. Weeks change with the calendar, but you can open any topic.</p></div><label class="date-label" for="plan-start">Start week<input type="date" id="plan-start" value="${start}"></label><button class="btn" data-action="save-plan">${existing?'Update start week':'Start my programme'}</button></div>${field('dailyFocus','The everyday habit I want to give a little attention to',{placeholder:'For example: leave space for lunch, take a short walk, or protect bedtime.'})}<p class="helper-note">Daily: sleep, mood, energy, movement, steps, screen time and your chosen food tracking. Weekly: one topic and a short review.</p></section><div class="programme-weeks">${programme.map((t,i)=>`<a href="#plan/${i+1}" class="programme-week ${i===index?'active':''}"><span>Week ${i+1}${existing?.fields['done'+t.legacy]==='true'?' · reviewed':''}</span><strong>${t.title}</strong><small>${pretty(shift(start,i*7),{day:'numeric',month:'short'})}</small></a>`).join('')}</div><section class="card card-pad"><div class="card-heading"><div><div class="eyebrow">Week ${index+1} · ${pretty(weekStart,{day:'numeric',month:'short'})}–${pretty(shift(weekStart,6),{day:'numeric',month:'short'})}</div><h2>${topic.title}</h2><p>${topic.intro}</p></div></div>${nowWeek<0?'<p class="notice">Your programme starts in a future week. You can explore the topic now and begin recording daily habits when that date arrives.</p>':nowWeek>8?'<p class="notice">Your nine-week calendar is complete. Keep exploring, repeat any topic or update the start week for another cycle.</p>':''}<p class="notice"><strong>One thing to try:</strong> ${topic.habit}</p>${calendarHtml(weekStart)}<div class="button-row" style="margin-top:20px"><a class="btn secondary" href="#today">Daily check-in</a><a class="btn secondary" href="#week" data-date="${weekStart<=today()?weekStart:monday(today())}">Weekly review</a></div></section><div class="section-title"><h2>This week’s topic & practice</h2></div><article class="card reader scrolling-reader">${topic.pages.map(n=>pageSection(n)+(topic.legacy===5&&n===33?`<section class="scroll-section"><h2>Your life-area snapshot</h2>${snapshotPanel()}</section>`:'')).join('')}${topic.legacy===2?`<section class="scroll-section"><h2>Calories, protein & daily targets</h2>${nutritionPanel()}</section>`:''}${topic.legacy===4?`<section class="scroll-section"><h2>A minute to try</h2>${pauseView(false).match(/<section class="card pause-view">([\s\S]*)<\/section>/)?.[1]||''}</section>`:''}${topic.legacy===6?`<section class="scroll-section"><h2>Watch the movement</h2>${bodySafety()}${videoBlocks(pages.find(p=>p.number===39))}${practiceLinks()}</section>`:''}${topic.legacy===7?`<section class="scroll-section"><h2>Mark what you notice</h2>${bodyPanel()}${videoBlocks(pages.find(p=>p.number===52))}</section>`:''}</article>`;
currentRecord=rec;html+=`<section class="card card-pad" style="margin-top:23px"><h3>At the end of this week</h3>${field('reflection'+topic.legacy,'What would I like to carry forward?',{placeholder:'A habit, something I noticed, or a kind adjustment.'})}<label class="checkbox-row"><input type="checkbox" ${scopeAttrs()} data-field="done${topic.legacy}" ${rec.fields['done'+topic.legacy]==='true'?'checked':''}>I’ve reviewed this week’s topic.</label><p class="helper-note">This is a bookmark for you, not a pass or fail.</p></section>`;return html;
}

function bindRevision(){document.querySelector('#food-search-form')?.addEventListener('submit',e=>{e.preventDefault();searchFood(document.querySelector('#food-search').value);});bindFoodInputs();document.querySelectorAll('[data-product]').forEach(b=>b.addEventListener('click',()=>selectProduct(Number(b.dataset.product))));document.querySelectorAll('[data-food-remove]').forEach(b=>b.addEventListener('click',()=>removeFood(b.dataset.foodRemove)));document.querySelectorAll('[data-food-edit]').forEach(b=>b.addEventListener('click',()=>{const f=foodItems(currentDate).find(x=>x.id===b.dataset.foodEdit);if(!f)return;foodDraft={...f,...Object.fromEntries(nutritionKeys.map(k=>[k,f[k]==null?'':String(f[k])])),portionUnit:f.basis==='100g'?'g':f.basis==='100ml'?'ml':'serving',quantity:String(f.quantity)};renderPreservingScroll();document.querySelector('#food-editor')?.scrollIntoView({behavior:'smooth'});}));document.querySelectorAll('[data-recent-food]').forEach(b=>b.addEventListener('click',()=>{const f=foodPanel.recent[Number(b.dataset.recentFood)];foodDraft={...f,id:undefined,portionUnit:f.basis==='100g'?'g':f.basis==='100ml'?'ml':'serving',quantity:String(f.quantity),...Object.fromEntries(nutritionKeys.map(k=>[k,f[k]==null?'':String(f[k])]))};renderPreservingScroll();document.querySelector('#food-editor')?.scrollIntoView({behavior:'smooth'});}));}
function revisionAction(name){if(name==='apply-targets'){const m=targetEstimate(currentRecord?.fields||{});if(!m||m.error){toast(m?.error||'Complete the calculator first.');return true;}saveTargets(m);return true;}if(name==='add-food'){addFood();return true;}if(name==='clear-food'){clearFoodDraft();renderPreservingScroll();return true;}if(name==='save-targets'){const values=Object.fromEntries([...document.querySelectorAll('[data-target]')].map(e=>[e.dataset.target,e.value]));if(saveTargets(values))renderPreservingScroll();return true;}if(name==='scan'){startScanner();return true;}if(name==='stop-scan'){stopScanner();return true;}if(name==='save-plan'){const el=document.querySelector('#plan-start');if(!dateOk(el.value)){toast('Choose a valid starting date.');return true;}const rec=planRecord()||createRecord('plan',today(),'My weekly programme');rec.fields.startDate=monday(el.value);saveRecordObject(rec);renderPreservingScroll();toast('Your weekly calendar is ready. Every topic remains available.');return true;}return false;}

// ===== Version 5 upgrade =====
// Profile & one-time onboarding, automatic targets, weekly check-in, home dashboard.
// Combined into dist/app.js by scripts/build-revision.py. Everything is stored as ordinary
// dated journal records ({id, kind, date, title, updatedAt, fields}) so backup/restore,
// export and the existing validation keep working.

nutritionKeys.push('carbs', 'fat');
iconPaths.home = '<path d="M3 11 12 3l9 8M5 9.5V21h5v-6h4v6h5V9.5"/>';
iconPaths.chart = '<path d="M4 20V10m6 10V4m6 16v-7m5 7H3"/>';
Object.assign(nutritionNames, { carbs: 'Carbs', fat: 'Fat' });

const GOALS = {
  loss: ['Fat loss', 'A gradual calorie deficit with higher protein.'],
  maintain: ['Maintenance', 'Keep your weight steady while building habits.'],
  gain: ['Muscle gain', 'A small surplus alongside strength training.'],
  wellbeing: ['General wellbeing', 'Feel better day to day; numbers are optional.'],
};
const ACTIVITY_LEVELS = [
  ['', 'Choose your usual activity'],
  ['1.4', 'Mostly sitting, little daily movement'],
  ['1.6', 'Mostly sitting + regular moderate activity'],
  ['1.8', 'On your feet a lot, or active most days'],
  ['2', 'Physical job or substantial daily training'],
];
const MACRO_UNITS = { calories: 'kcal', protein: 'g', carbs: 'g', fat: 'g' };
const upNum = (v) => (v === undefined || v === null || v === '' || !Number.isFinite(Number(v)) ? null : Number(v));
const upFmt = (n, d = 0) => (n === null || n === undefined ? '—' : Number(n).toLocaleString('en-IE', { maximumFractionDigits: d }));
const nowGreeting = () => {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
};

// ---------- Profile ----------
function profileRecord() {
  return Object.values(state.entries).filter((e) => e.kind === 'profile').sort((a, b) => b.date.localeCompare(a.date))[0] || null;
}
function profile() {
  return profileRecord()?.fields || {};
}
function onboarded() {
  return !!profile().onboardedAt;
}
function useProfileRecord() {
  let rec = profileRecord();
  if (!rec) {
    const id = `profile:${today()}`;
    rec = recordDrafts[id];
    if (!rec) {
      // Reuse details already recorded in the calorie calculator, so nothing is asked twice.
      const energy = Object.values(state.entries).filter((e) => e.kind === 'energy').sort((a, b) => b.date.localeCompare(a.date))[0]?.fields || {};
      const fields = {};
      for (const k of ['weight', 'height', 'age', 'equation', 'factor']) if (energy[k]) fields[k] = energy[k];
      rec = { id, kind: 'profile', date: today(), title: 'My profile & goals', fields };
    }
  }
  currentRecord = rec;
  recordDrafts[rec.id] = rec;
  return rec;
}
function needsOnboarding() {
  return !onboarded();
}
function gateRoute() {
  const name = route().split('/')[0];
  const go = (h) => {
    try {
      if (typeof history !== 'undefined' && history.replaceState) return history.replaceState(null, '', h);
    } catch {}
    // Some embedded frames block replaceState: fall back to an ordinary hash change, rendered once.
    goFallback = h;
  };
  if (needsOnboarding() && !['onboarding', 'settings', 'sources'].includes(name)) go('#onboarding');
  else if (!needsOnboarding() && name === 'onboarding') go('#home');
}

// ---------- Automatic targets ----------
function autoTargets(p = profile()) {
  const age = upNum(p.age), weight = upNum(p.weight), height = upNum(p.height);
  if (p.special === 'true')
    return { blocked: 'You told us you are pregnant or breastfeeding, or follow individual nutrition advice. Automatic targets are switched off; enter targets agreed with your clinician or dietitian, or track without targets.' };
  if (age !== null && age < 18) return { blocked: 'Automatic adult targets are not used under 18. Food can still be recorded without targets.' };
  if (!['female', 'male'].includes(p.equation))
    return { blocked: 'Automatic calorie targets need the energy-equation choice in your profile. You can enter your own targets instead.', missing: true };
  const c = calorieMath({ weight: p.weight, height: p.height, age: p.age, equation: p.equation, factor: p.factor });
  if (!c) return { blocked: 'Add your age, height, weight and usual activity to calculate targets.', missing: true };
  const goal = GOALS[p.goal] ? p.goal : 'wellbeing';
  const scenario = goal === 'loss' ? 'deficit' : goal === 'gain' ? 'surplus5' : 'maintenance';
  if (goal === 'loss' && c.bmi < 18.5)
    return { blocked: 'Your weight is low for your height, so a calorie deficit is not suggested. Please seek individual advice; maintenance is shown in the calculator for information.' };
  const calories = c[scenario];
  if (calories < 1000) return { blocked: 'The estimate falls outside this self-guided tool’s limits. Ask a dietitian or clinician for an individual plan.' };
  const rate = age >= 65 ? 1.2 : goal === 'loss' || goal === 'gain' ? 1.6 : 1.2;
  const proteinWeight = c.bmi >= 30 ? Math.round(25 * (height / 100) ** 2) : weight;
  const protein = Math.round(rate * proteinWeight);
  const fat = Math.round((calories * 0.3) / 9);
  const carbs = Math.round((calories - protein * 4 - fat * 9) / 4);
  if (carbs < 50) return { blocked: 'These details give an unusual split. Enter your own targets or ask for individual advice.' };
  return { calories, protein, carbs, fat, rmr: c.rmr, total: c.total, bmi: c.bmi, factor: p.factor, scenario, goal, rate, proteinWeight, weight };
}
function targetsExplain(t) {
  if (!t || t.blocked) return `<p class="notice">${esc(t?.blocked || 'Complete your profile to see automatic targets.')}</p>`;
  const pct = (g, k) => Math.round((g * k * 100) / t.calories);
  const goalLine =
    t.scenario === 'deficit' ? 'Fat loss: maintenance × 0.85 (a 15% deficit)' : t.scenario === 'surplus5' ? 'Muscle gain: maintenance × 1.05 (a 5% surplus)' : 'Maintenance / wellbeing: no deficit or surplus';
  return `<details class="explain"><summary>How these were calculated ${I('down')}</summary><ol class="explain-steps"><li><strong>Resting energy</strong> (Mifflin–St Jeor): about ${upFmt(t.rmr)} kcal/day.</li><li><strong>Maintenance</strong>: resting energy × ${esc(t.factor)} activity ≈ ${upFmt(t.total)} kcal.</li><li><strong>${goalLine}</strong> → ${upFmt(t.calories)} kcal, rounded to the nearest 50.</li><li><strong>Protein</strong>: ${t.rate} g per kg × ${upFmt(t.proteinWeight)} kg${t.proteinWeight !== t.weight ? ' (a reference weight for your height is used above BMI 30)' : ''} = ${t.protein} g (${pct(t.protein, 4)}% of calories).</li><li><strong>Fat</strong>: 30% of calories ÷ 9 = ${t.fat} g. EFSA’s adult reference range is 20–35%.</li><li><strong>Carbohydrate</strong>: the remaining calories ÷ 4 = ${t.carbs} g (${pct(t.carbs, 4)}%). EFSA’s reference range is 45–60%.</li></ol><p class="helper-note">These are estimates, not measurements. Bodies vary; review after two to three weeks using your weight trend, energy and appetite. Adjust any number manually.</p></details>`;
}
function currentTargets(date = today()) {
  return targetRecord(date)?.fields || {};
}
function targetsDiffer(a, b) {
  return ['calories', 'protein', 'carbs', 'fat'].some((k) => String(a[k] ?? '') !== String(b[k] ?? ''));
}
function saveTargetSet(values, source, note = '') {
  const rec = createRecord('targets', today(), 'Daily nutrition targets');
  rec.title = 'Daily nutrition targets';
  rec.fields = {
    ...rec.fields,
    ...Object.fromEntries(['calories', 'protein', 'carbs', 'fat'].map((k) => [k, values[k] === undefined || values[k] === null ? '' : String(values[k])])),
    source,
    note: note.slice(0, 500),
  };
  saveRecordObject(rec);
}
function targetProposal() {
  // Only propose when automatic targets are in use and the profile now gives different numbers.
  const t = autoTargets(), cur = targetRecord(today());
  if (t.blocked || !cur || cur.fields.source !== 'auto') return null;
  return targetsDiffer(cur.fields, t) ? t : null;
}
function macroBars(date = today(), compact = false) {
  const totals = foodTotals(date), targets = currentTargets(date);
  return `<div class="macro-bars ${compact ? 'compact' : ''}">${['protein', 'carbs', 'fat']
    .map((k) => {
      const v = totals[k], t = upNum(targets[k]);
      const val = v.count ? Math.round(v.value) : 0;
      const pct = t ? Math.min(100, Math.round((val / t) * 100)) : 0;
      return `<div class="macro-bar"><div class="macro-bar-top"><span>${nutritionNames[k]}</span><strong>${v.count ? val : 0}${t ? ` / ${t}` : ''} g</strong></div><div class="bar"><i style="width:${pct}%"></i></div>${v.missing ? `<small>${v.missing} item${v.missing > 1 ? 's' : ''} without ${k} data</small>` : ''}</div>`;
    })
    .join('')}</div>`;
}
function calorieRing(date = today()) {
  const totals = foodTotals(date), target = upNum(currentTargets(date).calories);
  const eaten = Math.round(totals.calories.value), burned = activityCalories(date);
  const remaining = target === null ? null : target - eaten + burned;
  const pct = target ? Math.min(1, eaten / (target + burned)) : 0;
  const r = 52, circ = 2 * Math.PI * r;
  return `<div class="calorie-summary"><svg class="ring" viewBox="0 0 130 130" aria-hidden="true"><circle cx="65" cy="65" r="${r}" class="ring-bg"/>${pct > 0 ? `<circle cx="65" cy="65" r="${r}" class="ring-fg ${remaining !== null && remaining < 0 ? 'over' : ''}" stroke-dasharray="${(circ * pct).toFixed(1)} ${circ.toFixed(1)}"/>` : ''}</svg><div class="ring-label"><strong>${remaining === null ? upFmt(eaten) : upFmt(Math.abs(remaining))}</strong><span>${remaining === null ? 'kcal eaten' : remaining < 0 ? 'kcal over' : 'kcal remaining'}</span></div><dl class="calorie-equation"><div><dt>Target</dt><dd>${target === null ? '—' : upFmt(target)}</dd></div><div><dt>Food</dt><dd>${upFmt(eaten)}${totals.calories.missing ? ' + ?' : ''}</dd></div><div><dt>Exercise</dt><dd>${burned ? '+' + upFmt(burned) : '0'}</dd></div></dl></div>`;
}
// Exercise calories are only counted when the user enters an estimate themselves.
function activityCalories(date) {
  return activityItems(date).reduce((s, a) => s + (upNum(a.kcal) || 0), 0);
}
function activityItems(date) {
  try {
    const rows = JSON.parse(state.entries[`activity:${date}`]?.fields.log || '[]');
    return Array.isArray(rows) ? rows : [];
  } catch {
    return [];
  }
}

// ---------- Onboarding ----------
const OB_STEPS = ['About you', 'Your goal', 'What matters', 'Your targets'];
function obStep() {
  const s = Number(profile().onboardingStep || recordDrafts[profileRecord()?.id]?.fields.onboardingStep || 1);
  return s >= 1 && s <= 4 ? s : 1;
}
function profileFields(part) {
  if (part === 1)
    return `<div class="field-grid">${field('name', 'Your first name', { type: 'text', placeholder: 'What should we call you?' })}${field('age', 'Age', { type: 'number', min: 10, max: 120, step: 1, unit: 'years' })}${field('height', 'Height', { type: 'number', min: 100, max: 250, step: 0.1, unit: 'cm' })}${field('weight', 'Current weight', { type: 'number', min: 20, max: 400, step: 0.1, unit: 'kg' })}</div><p class="helper-note">Pounds ÷ 2.2046 = kg · stones × 6.35 = kg · inches × 2.54 = cm.</p>${field('equation', 'Sex used in the calorie equation', { type: 'select', options: [['', 'Choose'], ['female', 'Female equation'], ['male', 'Male equation'], ['none', 'Prefer not to say — I’ll set my own targets']], help: 'The standard equation has two versions. This choice only affects the energy estimate and does not describe gender identity.' })}`;
  if (part === 2)
    return `<fieldset class="goal-options"><legend>Main goal</legend>${Object.entries(GOALS)
      .map(([k, [label, desc]]) => `<label class="goal-option"><input type="radio" name="goal" value="${k}" ${scopeAttrs()} data-field="goal" ${value('goal') === k ? 'checked' : ''}><span><strong>${label}</strong><small>${desc}</small></span></label>`)
      .join('')}</fieldset>${field('factor', 'Usual daily activity', { type: 'select', options: ACTIVITY_LEVELS })}<label class="checkbox-row"><input type="checkbox" ${scopeAttrs()} data-field="special" ${value('special') === 'true' ? 'checked' : ''}>I am pregnant or breastfeeding, or I follow a prescribed diet or individual nutrition advice.</label><p class="helper-note">If this applies, the journal will not suggest automatic calorie targets.</p>`;
  if (part === 3)
    return `${field('obstacle', 'Your biggest current problem or obstacle', { placeholder: 'For example: evenings, time, energy, pain, motivation…' })}<h3 class="sub-h">Your responsibilities</h3><p class="helper-note">The commitments that shape your week. A few words for each is plenty; leave any blank.</p><div class="field-grid">${field('respSelf', 'To yourself', { placeholder: 'Health, rest, study…' })}${field('respFamily', 'Family', { placeholder: 'Children, parents, home…' })}${field('respRelationships', 'Relationships', { placeholder: 'Partner, friends…' })}${field('respWork', 'Work', { placeholder: 'Hours, role, travel…' })}</div>`;
  return '';
}
function onboardingView() {
  const rec = useProfileRecord(), step = obStep(), p = rec.fields;
  const progress = `<ol class="ob-progress">${OB_STEPS.map((s, i) => `<li class="${i + 1 === step ? 'current' : i + 1 < step ? 'done' : ''}"><span>${i + 1 < step ? '✓' : i + 1}</span>${s}</li>`).join('')}</ol>`;
  let body;
  if (step === 1)
    body = `<h1>Welcome${p.name ? ', ' + esc(p.name) : ''}.</h1><p class="subtitle">A few questions to set up your journal. You’ll only be asked once; you can change anything later in your profile.</p>${profileFields(1)}`;
  else if (step === 2) body = `<h1>What would you like to work towards?</h1><p class="subtitle">This sets your daily targets and what your dashboard shows first.</p>${profileFields(2)}`;
  else if (step === 3) body = `<h1>What’s in the way, and what do you carry?</h1><p class="subtitle">This helps your weekly check-in and goals fit real life.</p>${profileFields(3)}`;
  else {
    const t = autoTargets(p);
    body = `<h1>Your daily targets.</h1><p class="subtitle">${t.blocked ? 'You can set your own targets now or later.' : 'Calculated from your answers. Use them as a starting point.'}</p>${t.blocked ? `<p class="notice">${esc(t.blocked)}</p>` : `<div class="target-tiles">${['calories', 'protein', 'carbs', 'fat'].map((k) => `<div><span>${nutritionNames[k]}</span><strong>${upFmt(t[k])}</strong><small>${MACRO_UNITS[k]} / day</small></div>`).join('')}</div>${targetsExplain(t)}`}<label class="checkbox-row"><input type="checkbox" id="ob-manual" ${t.blocked ? 'checked' : ''}>I’d rather enter my own targets</label><div id="ob-manual-box" ${t.blocked ? '' : 'hidden'}>${manualTargetInputs(t.blocked ? currentTargets() : t)}</div><div class="notice warning small-print">Estimates for adults, not prescriptions. Seek individual advice with low weight, unintended weight loss, an eating-disorder history, kidney disease, diabetes medicines or a prescribed diet.</div>`;
  }
  const nav = `<div class="ob-nav">${step > 1 ? `<button class="btn secondary" data-up="ob-back">${I('back')}Back</button>` : `<a class="link-btn" href="#settings">Moving from another device? Restore a backup</a>`}<button class="btn" data-up="${step < 4 ? 'ob-next' : 'ob-finish'}">${step < 4 ? 'Continue' : 'Go to my dashboard'}${I('arrow')}</button></div><p class="helper-note ob-saved">Your answers save as you type, so you can leave and return here.</p>`;
  return `<div class="onboarding">${progress}<section class="card card-pad ob-card">${body}${nav}</section></div>`;
}
function manualTargetInputs(values = {}) {
  return `<div class="field-grid four">${['calories', 'protein', 'carbs', 'fat'].map((k) => `<div class="field"><label for="mt-${k}">${nutritionNames[k]} (${MACRO_UNITS[k]})</label><input type="number" id="mt-${k}" data-manual-target="${k}" min="1" max="${k === 'calories' ? 10000 : 1500}" step="1" inputmode="numeric" value="${esc(values[k] ?? '')}" placeholder="No target"></div>`).join('')}</div>`;
}
function readManualTargets() {
  const v = Object.fromEntries([...document.querySelectorAll('[data-manual-target]')].map((e) => [e.dataset.manualTarget, e.value.trim()]));
  for (const k of Object.keys(v)) if (v[k] !== '' && !(Number(v[k]) >= 1 && Number(v[k]) <= (k === 'calories' ? 10000 : 1500))) return null;
  return v;
}
function onboardingAction(name) {
  const rec = useProfileRecord();
  const setStep = (n) => {
    currentRecord = rec;
    writeField('onboardingStep', String(n));
    render();
    window.scrollTo(0, 0);
  };
  if (name === 'ob-back') return setStep(Math.max(1, obStep() - 1));
  if (name === 'ob-next') {
    const invalid = [...document.querySelectorAll('[data-field]')].find((el) => !el.checkValidity());
    if (invalid) {
      invalid.reportValidity();
      return;
    }
    if (obStep() === 1 && !String(rec.fields.name || '').trim()) {
      toast('Add your first name so the journal can greet you.');
      document.querySelector('#f-name')?.focus();
      return;
    }
    return setStep(obStep() + 1);
  }
  if (name === 'ob-finish') {
    const manual = document.querySelector('#ob-manual')?.checked;
    const t = autoTargets(rec.fields);
    if (manual) {
      const v = readManualTargets();
      if (!v) {
        toast('Check the targets: whole numbers, or leave a box blank.');
        return;
      }
      if (Object.values(v).some((x) => x !== '')) saveTargetSet(v, 'manual', 'Entered during onboarding');
    } else if (!t.blocked) saveTargetSet(t, 'auto', `Calculated at onboarding for ${GOALS[t.goal][0].toLowerCase()}`);
    currentRecord = rec;
    rec.fields.onboardingStep = 'done';
    if (upNum(rec.fields.weight) !== null) {
      rec.fields.startWeight = rec.fields.weight;
      rec.fields.weightDate = today();
    }
    writeField('onboardedAt', today());
    location.hash = '#home';
    toast(`Welcome${rec.fields.name ? ', ' + rec.fields.name : ''}. Your journal is ready.`);
  }
}

// ---------- Profile page ----------
function profileView() {
  const rec = useProfileRecord(), p = rec.fields, t = autoTargets(p), cur = targetRecord(today());
  const proposal = targetProposal();
  return `${heading('Profile & goals', p.name ? `${esc(p.name)}’s profile.` : 'Your profile.', 'Change anything here. Targets are never changed without your say-so.')}<div class="profile-layout"><section class="card card-pad"><h2>About you</h2>${profileFields(1)}<hr class="divider"><h2>Your goal</h2>${profileFields(2)}<hr class="divider"><h2>What matters</h2>${profileFields(3)}<hr class="divider"><h2>Weekly activity targets</h2><p class="helper-note">Used on your dashboard and weekly check-in. Leave blank for no target.</p><div class="field-grid">${field('stepsTarget', 'Daily steps', { type: 'number', min: 0, max: 100000, step: 500, placeholder: 'e.g. 7000' })}${field('activeDaysTarget', 'Active days per week', { type: 'number', min: 0, max: 7, step: 1, placeholder: 'e.g. 4' })}${field('strengthTarget', 'Strength sessions per week', { type: 'number', min: 0, max: 14, step: 1, placeholder: 'e.g. 2' })}${field('minutesTarget', 'Active minutes per week', { type: 'number', min: 0, max: 3000, step: 10, placeholder: 'e.g. 150' })}</div>${p.guideHidden === 'true' ? `<hr class="divider"><h2>Next to do list</h2><p class="helper-note">The step-by-step list is hidden from your Home page.</p><button class="btn secondary" data-up="guide-show">Show it again</button>` : ''}<span class="section-saved" data-save-status="${esc(rec.id)}">Changes save as you type.</span></section><aside class="aside-stack profile-aside"><section class="card card-pad" id="targets-card">${targetsCardHtml(t, cur, proposal)}</section></aside></div>`;
}
function targetsCardHtml(t, cur, proposal) {
  const f = cur?.fields || {};
  return `<h2>Daily nutrition targets</h2>${cur ? `<p class="helper-note">In use since ${pretty(cur.date)} · ${f.source === 'auto' ? 'calculated automatically' : 'set by you'}.</p><div class="target-tiles small">${['calories', 'protein', 'carbs', 'fat'].map((k) => `<div><span>${nutritionNames[k]}</span><strong>${f[k] ? upFmt(f[k]) : '—'}</strong><small>${MACRO_UNITS[k]}</small></div>`).join('')}</div>` : '<p class="helper-note">No targets set yet.</p>'}${
    proposal
      ? `<div class="notice proposal"><strong>Suggested update</strong><br>Your profile has changed, so the estimate is now ${upFmt(proposal.calories)} kcal · ${proposal.protein} g protein · ${proposal.carbs} g carbs · ${proposal.fat} g fat.${targetsExplain(proposal)}<button class="btn" data-up="apply-proposal">Use the updated targets</button><p class="helper-note">Your earlier targets stay attached to earlier days.</p></div>`
      : !t.blocked && (!cur || targetsDiffer(f, t))
        ? `<div class="notice"><strong>Automatic estimate:</strong> ${upFmt(t.calories)} kcal · ${t.protein} g protein · ${t.carbs} g carbs · ${t.fat} g fat.${targetsExplain(t)}<button class="btn secondary" data-up="apply-proposal">Use this estimate</button></div>`
        : t.blocked
          ? `<p class="notice">${esc(t.blocked)}</p>`
          : targetsExplain(t)
  }<details class="explain"><summary>Set my own targets ${I('down')}</summary>${manualTargetInputs(f)}<button class="btn secondary" data-up="save-manual-targets">Save my targets</button><p class="helper-note">Applies from today onward. Leave a box blank for no target.</p></details>`;
}

// ---------- Weekly check-in ----------
function reviews(status) {
  return Object.values(state.entries)
    .filter((e) => e.kind === 'review' && (!status || (status === 'complete' ? e.fields.status === 'complete' : e.fields.status !== 'complete')))
    .sort((a, b) => (b.fields.completedOn || b.date).localeCompare(a.fields.completedOn || a.date));
}
function checkinAnchor() {
  return reviews('complete')[0]?.fields.completedOn || profile().onboardedAt || today();
}
function checkinDue() {
  return shift(checkinAnchor(), 7);
}
function checkinIsDue() {
  return today() >= checkinDue();
}
function lastWeight() {
  for (const r of reviews('complete')) if (upNum(r.fields.weight) !== null) return { value: Number(r.fields.weight), date: r.fields.completedOn };
  const p = profile();
  return upNum(p.weight) !== null ? { value: Number(p.weight), date: p.weightDate || p.onboardedAt || profileRecord()?.date } : null;
}
function periodSummary(end, days = 7) {
  const dates = Array.from({ length: days }, (_, i) => shift(end, i - days + 1));
  const avg = (vals) => (vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null);
  const dailies = dates.map((d) => state.entries[`daily:${d}`]?.fields || {});
  const pick = (k) => dailies.map((f) => upNum(f[k])).filter((v) => v !== null);
  const steps = pick('steps'), sleep = pick('sleep'), mood = pick('mood'), energy = pick('energy');
  const foodDays = dates.filter((d) => foodItems(d).length);
  const cal = foodDays.map((d) => foodTotals(d).calories.value), prot = foodDays.map((d) => foodTotals(d).protein.value);
  let onTarget = 0, targetDays = 0;
  for (const d of foodDays) {
    const t = upNum(currentTargets(d).calories);
    if (t) {
      targetDays++;
      if (Math.abs(foodTotals(d).calories.value - t) <= t * 0.1) onTarget++;
    }
  }
  const acts = dates.flatMap((d) => activityItems(d).map((a) => ({ ...a, date: d })));
  const activeDays = new Set(acts.map((a) => a.date));
  dates.forEach((d, i) => {
    const s = upNum(dailies[i].steps), tgt = upNum(profile().stepsTarget);
    if (s !== null && tgt && s >= tgt) activeDays.add(d);
  });
  return {
    from: dates[0], to: end,
    steps: avg(steps), stepsDays: steps.length,
    sleep: avg(sleep), sleepDays: sleep.length,
    mood: avg(mood), energy: avg(energy), moodDays: mood.length,
    foodDays: foodDays.length, calories: avg(cal), protein: avg(prot), onTarget, targetDays,
    minutes: acts.reduce((s, a) => s + (upNum(a.minutes) || 0), 0),
    strength: acts.filter((a) => a.type === 'strength' || a.type === 'programme').length,
    sessions: acts.length, activeDays: activeDays.size,
    programme: acts.filter((a) => a.type === 'programme').length,
  };
}
function summaryTiles(s) {
  const tile = (label, val, note) => `<div class="card stat"><span>${label}</span><strong>${val}</strong><small>${note}</small></div>`;
  return `<div class="stats-grid summary-grid">${tile('Average steps', s.steps === null ? '—' : upFmt(s.steps), s.stepsDays ? `${s.stepsDays} day${s.stepsDays > 1 ? 's' : ''} recorded` : 'Not recorded')}${tile('Activity', `${s.sessions} <small>${s.sessions === 1 ? 'session' : 'sessions'}</small>`, `${upFmt(s.minutes)} min · ${s.activeDays} active day${s.activeDays === 1 ? '' : 's'}${s.programme ? ` · ${s.programme} Pain Solution` : ''}`)}${tile('Calories', s.calories === null ? '—' : upFmt(s.calories), s.foodDays ? `avg on ${s.foodDays} logged day${s.foodDays > 1 ? 's' : ''}${s.targetDays ? ` · ${s.onTarget}/${s.targetDays} within 10% of target` : ''}` : 'No food logged')}${tile('Sleep', s.sleep === null ? '—' : upFmt(s.sleep, 1) + ' <small>h</small>', s.sleepDays ? `avg of ${s.sleepDays} night${s.sleepDays > 1 ? 's' : ''}` : 'Not recorded')}${tile('Mood · energy', s.mood === null ? '—' : `${upFmt(s.mood, 1)} · ${upFmt(s.energy, 1)}`, s.moodDays ? 'out of 10, from daily check-ins' : 'Not recorded')}</div>`;
}
function reviewRecordFor(id) {
  if (id && state.entries[id]?.kind === 'review') return state.entries[id];
  return reviews('draft')[0] || null;
}
function checkinView() {
  const [, param] = route().split('/');
  const p = profile();
  const openId = param ? `review:${param}` : null;
  let rec = reviewRecordFor(openId);
  const viewingPast = rec && rec.fields.status === 'complete';
  const due = checkinIsDue(), dueDate = checkinDue();
  if (!rec && !due && !param && !checkinView.early) {
    const last = reviews('complete')[0];
    currentRecord = null;
    return `${heading('Weekly check-in', 'You’re up to date.', `Your next check-in opens on ${pretty(dueDate, { weekday: 'long', day: 'numeric', month: 'long' })}.`)}<section class="card card-pad">${last ? `<p>Last completed on <strong>${pretty(last.fields.completedOn)}</strong>${last.fields.priority ? ` · Priority: “${esc(last.fields.priority)}”` : ''}.</p>` : `<p>Your first check-in is seven days after you started (${pretty(p.onboardedAt || today())}).</p>`}<div class="button-row"><a class="btn secondary" href="#progress">See past check-ins</a>${!last || last.fields.completedOn !== today() ? '<button class="btn subtle" data-up="checkin-early">Do a check-in early</button>' : ''}</div></section>${summaryBlock(today(), 'So far this week')}`;
  }
  if (!rec) {
    const id = `review:${today()}`;
    rec = recordDrafts[id] || { id, kind: 'review', date: today(), title: 'Weekly check-in', fields: { status: 'draft' } };
  }
  currentRecord = rec;
  recordDrafts[rec.id] = rec;
  const end = rec.fields.completedOn || today();
  const s = periodSummary(end), lw = lastWeight();
  const goal = GOALS[p.goal]?.[0] || 'your goal';
  const html = `${heading('Weekly check-in', viewingPast ? `Check-in · ${pretty(end)}` : 'How did this week go?', viewingPast ? 'A saved check-in. You can still correct it.' : 'About two minutes. Skip anything that doesn’t apply — your logged days fill in the numbers.')}<div class="checkin-layout"><section class="card card-pad">${summaryHeading(s)}${summaryTiles(s)}<hr class="divider"><div class="field-grid">${field('weight', 'Current weight', { type: 'number', min: 20, max: 400, step: 0.1, unit: 'kg', placeholder: lw ? `Last: ${lw.value}` : '—', help: lw ? `Last recorded ${upFmt(lw.value, 1)} kg on ${pretty(lw.date, { day: 'numeric', month: 'short' })}. Leave blank to skip.` : 'Optional.' })}${field('goalProgress', `Progress towards ${goal.toLowerCase()}`, { type: 'select', options: [['', 'Choose (optional)'], ['forward', 'Moving forward'], ['steady', 'About the same'], ['harder', 'A harder week'], ['unsure', 'Not sure yet']] })}</div>${s.stepsDays ? '' : field('stepsAvg', 'Average daily steps (if you know it)', { type: 'number', min: 0, max: 100000, step: 1, placeholder: 'Not tracked' })}${field('exercise', 'Exercise & movement this week', { placeholder: s.sessions ? `${s.sessions} logged — anything to add?` : 'Walks, sessions, active jobs…', rows: 2 })}<div class="field-grid">${field('nutrition', 'Nutrition & calorie target', { type: 'select', options: [['', 'Choose (optional)'], ['mostly', 'Mostly on target'], ['some', 'Some days on target'], ['hard', 'Hard to manage this week'], ['none', 'Not tracking food this week']] })}${s.sleepDays ? '' : field('sleepAvg', 'Typical sleep per night', { type: 'number', min: 0, max: 24, step: 0.25, unit: 'h', placeholder: 'Not tracked' })}</div><div class="metric-row">${field('wellbeing', 'Wellbeing', { type: 'number', min: 0, max: 10, step: 1, unit: '/ 10', placeholder: '—', icon: 'heart' })}${field('mood', 'Mood', { type: 'number', min: 0, max: 10, step: 1, unit: '/ 10', placeholder: s.mood === null ? '—' : upFmt(s.mood, 1), icon: 'smile' })}${field('energy', 'Energy', { type: 'number', min: 0, max: 10, step: 1, unit: '/ 10', placeholder: s.energy === null ? '—' : upFmt(s.energy, 1), icon: 'spark' })}</div><p class="helper-note">0 = very low, 10 = very good. Placeholders show your daily average.</p><hr class="divider">${field('obstacle', 'Main obstacle this week', { placeholder: p.obstacle ? `Last noted: ${String(p.obstacle).slice(0, 60)}` : 'What got in the way?' })}${field('well', 'What went well')}${field('priority', 'One priority for the coming week', { placeholder: 'Small and specific is best.' })}<div class="form-footer"><span class="save-state" role="status">${I('check')}<span class="save-label" data-save-status="${esc(rec.id)}">${state.entries[rec.id] ? 'Draft saved' : 'Your answers save as you go'}</span></span><button class="btn" data-up="checkin-complete">${viewingPast ? 'Save changes' : 'Complete check-in'}${I('arrow')}</button></div></section><aside class="aside-stack"><div class="card card-pad"><h3>Your goal</h3><p><strong>${esc(goal)}</strong></p>${p.obstacle ? `<p class="helper-note">Obstacle you named: ${esc(p.obstacle)}</p>` : ''}<a class="link-btn" href="#profile">Edit profile & goals ${I('arrow')}</a></div>${previousPriority(rec)}</aside></div>`;
  return html;
}
checkinView.early = false;
function summaryHeading(s) {
  return `<div class="card-heading"><div><h2>From your week</h2><p>${pretty(s.from, { day: 'numeric', month: 'short' })} – ${pretty(s.to, { day: 'numeric', month: 'short' })} · calculated from what you recorded. Blank days are not counted as zero.</p></div></div>`;
}
function summaryBlock(end, title) {
  const s = periodSummary(end);
  return `<div class="section-title"><h2>${title}</h2></div>${summaryTiles(s)}`;
}
function previousPriority(rec) {
  const prev = reviews('complete').find((r) => r.id !== rec.id && (r.fields.completedOn || r.date) <= (rec.fields.completedOn || today()));
  return prev?.fields.priority ? `<div class="card card-pad"><h3>Last week’s priority</h3><p>“${esc(prev.fields.priority)}”</p><p class="helper-note">Set on ${pretty(prev.fields.completedOn)}.</p></div>` : '';
}
function completeCheckin() {
  const invalid = [...document.querySelectorAll('[data-field]')].find((el) => !el.checkValidity());
  if (invalid) {
    invalid.reportValidity();
    return;
  }
  const rec = currentRecord?.kind === 'review' ? currentRecord : null;
  if (!rec) return;
  const firstTime = rec.fields.status !== 'complete';
  const end = rec.fields.completedOn || today();
  const s = periodSummary(end);
  Object.assign(rec.fields, {
    status: 'complete',
    completedOn: end,
    sumSteps: s.steps === null ? '' : String(Math.round(s.steps)),
    sumSleep: s.sleep === null ? '' : String(Math.round(s.sleep * 10) / 10),
    sumCalories: s.calories === null ? '' : String(Math.round(s.calories)),
    sumProtein: s.protein === null ? '' : String(Math.round(s.protein)),
    sumMinutes: String(s.minutes),
    sumSessions: String(s.sessions),
    sumActiveDays: String(s.activeDays),
    sumFoodDays: String(s.foodDays),
  });
  saveRecordObject(rec);
  // Weight is recorded in the check-in and becomes the profile's current weight.
  const w = upNum(rec.fields.weight), prof = profileRecord();
  if (w !== null && prof && (!prof.fields.weightDate || prof.fields.weightDate <= end)) {
    prof.fields.weight = String(w);
    prof.fields.weightDate = end;
    saveRecordObject(prof);
  }
  checkinView.early = false;
  location.hash = '#home';
  toast(firstTime ? `Check-in saved. The next one opens on ${pretty(shift(end, 7), { weekday: 'long', day: 'numeric', month: 'short' })}.` : 'Check-in updated.');
}

// ---------- Progress history ----------
function weightSeries() {
  const pts = [];
  const prof = profileRecord();
  if (prof && upNum(prof.fields.startWeight ?? prof.fields.weight) !== null && prof.fields.onboardedAt)
    pts.push({ date: prof.fields.onboardedAt, value: Number(prof.fields.startWeight ?? prof.fields.weight) });
  for (const r of reviews('complete').slice().reverse()) if (upNum(r.fields.weight) !== null) pts.push({ date: r.fields.completedOn, value: Number(r.fields.weight) });
  return pts;
}
function weightChart(pts) {
  if (pts.length < 2) return '<p class="helper-note">Your weight trend appears after your first check-in with a weight.</p>';
  const vals = pts.map((p) => p.value), lo = Math.min(...vals) - 1, hi = Math.max(...vals) + 1;
  const x = (i) => 30 + (i * 360) / (pts.length - 1), y = (v) => 150 - ((v - lo) / (hi - lo)) * 120;
  return `<svg class="chart" viewBox="0 0 420 185" role="img" aria-label="Weight at each check-in">${[lo, (lo + hi) / 2, hi].map((v) => `<line x1="30" x2="400" y1="${y(v)}" y2="${y(v)}" stroke="#e2e5d9"/><text x="0" y="${y(v) + 3}" fill="#89907f" font-size="9">${v.toFixed(1)}</text>`).join('')}<polyline fill="none" stroke="#284e43" stroke-width="2" points="${pts.map((p, i) => `${x(i)},${y(p.value)}`).join(' ')}"/>${pts.map((p, i) => `<circle cx="${x(i)}" cy="${y(p.value)}" r="4" fill="#284e43"><title>${pretty(p.date)}: ${p.value} kg</title></circle>`).join('')}${pts.map((p, i) => (pts.length <= 8 || i % Math.ceil(pts.length / 8) === 0 ? `<text x="${x(i)}" y="175" fill="#75816f" text-anchor="middle" font-size="9">${pretty(p.date, { day: 'numeric', month: 'short' })}</text>` : '')).join('')}</svg>`;
}
function progressView() {
  currentRecord = null;
  const done = reviews('complete'), pts = weightSeries();
  const change = pts.length >= 2 ? Math.round((pts.at(-1).value - pts[0].value) * 10) / 10 : null;
  return `${heading('Progress history', 'How things are moving.', 'Your weekly check-ins, weight trend and activity over time.')}<div class="progress-layout"><section class="card card-pad"><h2>Weight trend</h2>${change !== null ? `<p class="helper-note">${change === 0 ? 'No change' : `${change > 0 ? '+' : ''}${change} kg`} since ${pretty(pts[0].date, { day: 'numeric', month: 'short', year: 'numeric' })}. Weekly weights vary with water and food; the trend matters more than any one number.</p>` : ''}${weightChart(pts)}</section><section class="card card-pad"><h2>Last four weeks</h2>${weeksTable()}</section></div>${levelCard()}<div class="section-title"><h2>Weekly check-ins</h2><a class="link-btn" href="#checkin">${checkinIsDue() ? 'Check-in due now' : 'Next: ' + pretty(checkinDue(), { day: 'numeric', month: 'short' })} ${I('arrow')}</a></div><div class="list">${
    done
      .map(
        (r) =>
          `<a class="card entry checkin-entry" href="#checkin/${r.date}"><span class="entry-date">${parseDate(r.fields.completedOn).getDate()}<small>${pretty(r.fields.completedOn, { month: 'short' })}</small></span><span class="entry-main"><h3>Check-in · ${pretty(r.fields.completedOn, { year: 'numeric', month: 'long', day: 'numeric' })}</h3><p>${[r.fields.weight ? `${r.fields.weight} kg` : '', r.fields.sumSteps ? `${upFmt(r.fields.sumSteps)} steps/day` : '', r.fields.sumSessions && r.fields.sumSessions !== '0' ? `${r.fields.sumSessions} sessions` : '', r.fields.wellbeing ? `wellbeing ${r.fields.wellbeing}/10` : ''].filter(Boolean).join(' · ') || 'Saved check-in'}${r.fields.priority ? `<br>Priority: ${esc(r.fields.priority)}` : ''}</p></span>${I('arrow')}</a>`,
      )
      .join('') || `<div class="card empty">${I('calendar')}<h3>No check-ins yet</h3><p>Your first weekly check-in opens on ${pretty(checkinDue())}.</p></div>`
  }</div><div class="support-strip"><div><h3>Notes and reflections</h3><p>Your daily entries, weekly reflections and journal answers are all kept in My journal.</p></div><a class="link-btn" href="#journal">Open My journal ${I('arrow')}</a></div>`;
}
function weeksTable() {
  const rows = [0, 1, 2, 3].map((i) => {
    const end = shift(today(), -7 * i), s = periodSummary(end);
    return `<tr><th>${pretty(s.from, { day: 'numeric', month: 'short' })}–${pretty(s.to, { day: 'numeric', month: 'short' })}</th><td>${s.steps === null ? '—' : upFmt(s.steps)}</td><td>${s.sessions}</td><td>${s.calories === null ? '—' : upFmt(s.calories)}</td><td>${s.sleep === null ? '—' : upFmt(s.sleep, 1)}</td></tr>`;
  });
  return `<div class="table-wrap"><table class="mini-table"><thead><tr><th>Week</th><th>Steps/day</th><th>Sessions</th><th>kcal/day</th><th>Sleep</th></tr></thead><tbody>${rows.join('')}</tbody></table></div>`;
}

// ---------- Home dashboard ----------
function homeView() {
  currentRecord = null;
  currentDate = today();
  const p = profile(), d = state.entries[`daily:${today()}`]?.fields || {}, acts = activityItems(today());
  const draft = reviews('draft')[0], due = checkinIsDue();
  const proposal = targetProposal();
  const steps = upNum(d.steps), stepsT = upNum(p.stepsTarget);
  const week = periodSummary(today());
  const minutes = acts.reduce((s, a) => s + (upNum(a.minutes) || 0), 0);
  const banner = due || draft
    ? `<a class="checkin-banner due" href="#checkin">${I('calendar')}<span><strong>${draft ? 'Finish your weekly check-in' : 'Your weekly check-in is ready'}</strong><small>About two minutes. Your logged days fill in the numbers.</small></span>${I('arrow')}</a>`
    : `<div class="checkin-banner">${I('calendar')}<span><strong>Next check-in: ${pretty(checkinDue(), { weekday: 'long', day: 'numeric', month: 'short' })}</strong><small>No need to do anything until then.</small></span></div>`;
  return `<div class="page-heading home-heading"><div><div class="eyebrow">${I('sun')} ${pretty(today(), { weekday: 'long', day: 'numeric', month: 'long' })}</div><h1>${nowGreeting()}${p.name ? ', ' + esc(p.name) : ''}.</h1><p class="subtitle">Today first, then the bigger picture.</p></div></div>${banner}${guideCard()}${proposal ? `<a class="checkin-banner" href="#profile">${I('flag')}<span><strong>Updated targets suggested</strong><small>Your profile changed. Review them before anything changes.</small></span>${I('arrow')}</a>` : ''}<div class="dash-grid"><a class="card card-pad dash-card dash-food" href="#food"><div class="dash-head"><h2>${I('food')} Today’s food</h2><span class="link-btn">Log food ${I('arrow')}</span></div>${calorieRing(today())}${macroBars(today(), true)}</a><a class="card card-pad dash-card" href="#move"><div class="dash-head"><h2>${I('activity')} Today’s activity</h2><span class="link-btn">Log activity ${I('arrow')}</span></div><div class="dash-stats"><div><strong>${steps === null ? '—' : upFmt(steps)}</strong><span>steps${stepsT ? ` of ${upFmt(stepsT)}` : ''}</span>${stepsT && steps !== null ? `<div class="bar"><i style="width:${Math.min(100, Math.round((steps / stepsT) * 100))}%"></i></div>` : ''}</div><div><strong>${minutes}</strong><span>active minutes</span></div><div><strong>${acts.length}</strong><span>${acts.length === 1 ? 'activity' : 'activities'}</span></div></div>${acts.length ? `<ul class="dash-list">${acts.slice(0, 3).map((a) => `<li>${esc(activityLabel(a))}</li>`).join('')}</ul>` : '<p class="helper-note">Nothing logged yet today.</p>'}${programmeTodayLine()}</a><div class="card card-pad dash-card"><div class="dash-head"><h2>${I('flag')} Your goal</h2><a class="link-btn" href="#profile">Edit ${I('arrow')}</a></div><p class="dash-goal">${esc(GOALS[p.goal]?.[0] || 'Not chosen yet')}</p>${p.obstacle ? `<p class="helper-note">Working around: ${esc(p.obstacle)}</p>` : ''}${reviews('complete')[0]?.fields.priority ? `<p><strong>This week’s priority:</strong> ${esc(reviews('complete')[0].fields.priority)}</p>` : ''}${levelLine()}</div><a class="card card-pad dash-card" href="#progress"><div class="dash-head"><h2>${I('calendar')} Last 7 days</h2><span class="link-btn">Progress ${I('arrow')}</span></div><div class="dash-stats"><div><strong>${week.activeDays}</strong><span>active days${upNum(p.activeDaysTarget) ? ` of ${p.activeDaysTarget}` : ''}</span></div><div><strong>${week.foodDays}</strong><span>days food logged</span></div><div><strong>${week.sleep === null ? '—' : upFmt(week.sleep, 1)}</strong><span>avg sleep (h)</span></div></div>${recentWeightLine()}</a></div><div class="dash-links"><a class="btn secondary" href="#today">${I('sun')}Daily journal</a><a class="btn secondary" href="#explore">${I('book')}Learn</a><a class="btn secondary" href="#plan">${I('flag')}Weekly plan</a><a class="btn secondary" href="#exercise">${I('activity')}Pain Solution programme</a><a class="btn secondary mobile-only" href="#progress">${I('chart')}Progress</a><a class="btn secondary mobile-only" href="#journal">${I('journal')}My journal</a></div><p class="feedback-line">Trying out the online journal? Tell Ger what works and what doesn’t: <a class="text-link" href="mailto:ger@wellmind.ie?subject=Online%20journal%20feedback">ger@wellmind.ie</a></p>${support()}`;
}
function recentWeightLine() {
  const pts = weightSeries();
  if (pts.length < 2) return '';
  const diff = Math.round((pts.at(-1).value - pts.at(-2).value) * 10) / 10;
  return `<p class="helper-note">Weight at last check-in: ${pts.at(-1).value} kg (${diff === 0 ? 'no change' : `${diff > 0 ? '+' : ''}${diff} kg`} from the one before).</p>`;
}
// Filled in by the movement / exercise / levels sections below.

// ---------- Routing hooks ----------
function upgradeViews() {
  return { home: homeView, onboarding: onboardingView, profile: profileView, checkin: checkinView, progress: progressView, move: moveView, exercise: exerciseView };
}
function section() {
  const r = route().split('/')[0];
  if (['profile', 'onboarding'].includes(r)) return 'home';
  if (r === 'exercise') return 'move';
  if (r === 'week') return 'progress';
  return legacySection();
}
function shell(body) {
  if (route().split('/')[0] === 'onboarding')
    return `<div class="focus-shell"><header class="focus-top"><span class="brand">${brand}<span><span class="brand-name">WELL MIND</span><span class="brand-caption">WITH GER BOLAND</span></span></span><a href="#settings" class="top-status">${I('lock')}${storageError ? 'Saving unavailable' : 'Saved on this device'}</a></header>${storageError ? `<div class="error-bar" role="alert">${esc(storageError)}</div>` : ''}<main id="main" class="content" tabindex="-1">${body}</main></div>`;
  return legacyShell(body);
}
let goFallback = '';
function render() {
  gateRoute();
  if (goFallback) {
    const h = goFallback;
    goFallback = '';
    if (location.hash !== h) location.hash = h;
  }
  baseRender();
  injectChapterGuide();
}
function entryRoute(e) {
  if (e.kind === 'profile') return 'profile';
  if (e.kind === 'review') return `checkin/${e.date}`;
  if (['activity', 'exercise'].includes(e.kind)) return 'move';
  if (e.kind === 'library') return 'food';
  return legacyEntryRoute(e);
}
function entryPreview(e) {
  if (e.kind === 'profile') return `${GOALS[e.fields.goal]?.[0] || 'Profile'}${e.fields.name ? ' · ' + e.fields.name : ''}`;
  if (e.kind === 'review') return e.fields.status === 'complete' ? e.fields.priority || e.fields.well || 'Completed weekly check-in' : 'Draft check-in';
  if (e.kind === 'activity') return `${activityItems(e.date).length} activities recorded`;
  if (e.kind === 'targets') return ['calories', 'protein', 'carbs', 'fat'].filter((k) => e.fields[k]).map((k) => `${nutritionNames[k]} ${e.fields[k]}${MACRO_UNITS[k]}`).join(' · ') || 'Daily targets';
  return legacyEntryPreview(e);
}
const upgradeLabels = {
  name: 'Name', goal: 'Main goal', obstacle: 'Biggest obstacle', respSelf: 'Responsibilities to myself', respFamily: 'Responsibilities: family', respRelationships: 'Responsibilities: relationships', respWork: 'Responsibilities: work', special: 'Automatic targets switched off', levels: 'Consistency levels shown', guide: 'Next-to-do items ticked off', guideHidden: 'Next-to-do list hidden', onboardedAt: 'Journal started', onboardingStep: 'Onboarding step', weightDate: 'Weight recorded on', startWeight: 'Starting weight (kg)', stepsTarget: 'Daily steps target', activeDaysTarget: 'Active days per week', strengthTarget: 'Strength sessions per week', minutesTarget: 'Active minutes per week', status: 'Status', completedOn: 'Completed on', goalProgress: 'Progress towards goal', stepsAvg: 'Average daily steps', exercise: 'Exercise & movement', nutrition: 'Nutrition & calorie target', sleepAvg: 'Typical sleep (h)', wellbeing: 'Wellbeing /10', well: 'What went well', sumSteps: 'Average steps (logged)', sumSleep: 'Average sleep (logged)', sumCalories: 'Average calories (logged)', sumProtein: 'Average protein (logged)', sumMinutes: 'Active minutes (logged)', sumSessions: 'Activities (logged)', sumActiveDays: 'Active days', sumFoodDays: 'Days with food logged', source: 'Set by', note: 'Note', carbs: 'Carbohydrate (g)', fat: 'Fat (g)', log: 'Activities',
};
function labelFor(k) {
  return upgradeLabels[k] || legacyLabelFor(k);
}
const UPGRADE_BOUNDS = {
  profile: { startWeight: [20, 400], age: [10, 120], height: [100, 250], weight: [20, 400], factor: [1.4, 2], stepsTarget: [0, 100000], activeDaysTarget: [0, 7], strengthTarget: [0, 14], minutesTarget: [0, 3000] },
  review: { weight: [20, 400], wellbeing: [0, 10], mood: [0, 10], energy: [0, 10], stepsAvg: [0, 100000], sleepAvg: [0, 24] },
};
function upgradeFieldOk(e, k, v) {
  const b = UPGRADE_BOUNDS[e.kind]?.[k];
  if (b && v !== '' && (!Number.isFinite(Number(v)) || Number(v) < b[0] || Number(v) > b[1])) return false;
  if (['onboardedAt', 'completedOn', 'weightDate'].includes(k) && v !== '' && !dateOk(v)) return false;
  if (k === 'log') return jsonListOk(v, validActivity, 60);
  if (e.kind === 'profile' && k === 'guide') {
    try {
      const o = JSON.parse(v);
      return !!o && typeof o === 'object' && !Array.isArray(o) && Object.entries(o).every(([gk, d]) => GUIDE.some((g) => g.key === gk) && dateOk(d));
    } catch {
      return false;
    }
  }
  if (k === 'foods') return jsonListOk(v, validLibraryFood, 500);
  if (k === 'meals') return jsonListOk(v, validSavedMeal, 200);
  return true;
}
function jsonListOk(v, check, max) {
  try {
    const a = JSON.parse(v);
    return Array.isArray(a) && a.length <= max && a.every(check);
  } catch {
    return false;
  }
}
// Placeholders replaced by the movement and food library sections below.

function bindUpgrade() {
  document.querySelectorAll('[data-up]').forEach((el) =>
    el.addEventListener('click', (ev) => {
      ev.preventDefault();
      upgradeAction(el.dataset.up, el);
    }),
  );
  bindFdFields(document);
  bindMove();
  bindExercise();
  const manual = document.querySelector('#ob-manual');
  manual?.addEventListener('change', () => {
    const box = document.querySelector('#ob-manual-box');
    if (box) box.hidden = !manual.checked;
  });
  // Live-refresh the targets card on the profile page as details change.
  if (route() === 'profile')
    document.querySelectorAll('[data-field]').forEach((el) =>
      el.addEventListener('input', () => {
        const card = document.querySelector('#targets-card');
        if (!card || card.contains(document.activeElement)) return;
        card.innerHTML = targetsCardHtml(autoTargets(), targetRecord(today()), targetProposal());
        card.querySelectorAll('[data-up]').forEach((b) => b.addEventListener('click', (ev) => (ev.preventDefault(), upgradeAction(b.dataset.up, b))));
      }),
    );
}
function upgradeAction(name, el) {
  if (name.startsWith('ob-')) return onboardingAction(name);
  if (name === 'apply-proposal') {
    const t = autoTargets();
    if (t.blocked) return toast(t.blocked);
    saveTargetSet(t, 'auto', `Updated from profile for ${GOALS[t.goal][0].toLowerCase()}`);
    renderPreservingScroll();
    return toast('New targets apply from today. Earlier days keep their targets.');
  }
  if (name === 'save-manual-targets') {
    const v = readManualTargets();
    if (!v) return toast('Check the targets: whole numbers, or leave a box blank.');
    saveTargetSet(v, 'manual', 'Set by you');
    renderPreservingScroll();
    return toast('Your targets apply from today onward.');
  }
  if (name === 'checkin-early') {
    checkinView.early = true;
    return render();
  }
  if (name === 'checkin-complete') return completeCheckin();
  if (name === 'levels-on' || name === 'levels-off') {
    const rec = profileRecord();
    if (!rec) return;
    rec.fields.levels = name === 'levels-on' ? 'true' : 'false';
    saveRecordObject(rec);
    renderPreservingScroll();
    return toast(name === 'levels-on' ? 'Consistency levels are on. Your past weeks already count.' : 'Consistency levels are off. Nothing was deleted.');
  }
  return upgradeExtraAction(name, el);
}
function upgradeExtraAction(name, el) {
  if (guideAction(name, el) !== false) return;
  if (foodAction(name, el) !== false) return;
  if (moveAction(name, el) !== false) return;
  return false;
}

// Daily journal: a compact link to the dedicated Food and Movement pages, so nothing is entered twice.
function todayFoodSummary() {
  const acts = activityItems(currentDate), items = foodItems(currentDate);
  const linkDate = currentDate === today() ? '' : ` data-date="${currentDate}"`;
  return `<div class="section-title"><div><div class="eyebrow">Alongside your daily check-in</div><h2>Food & activity for ${currentDate === today() ? 'today' : pretty(currentDate, { day: 'numeric', month: 'short' })}</h2></div></div><div class="dash-grid two"><a class="card card-pad dash-card" href="#food"${linkDate}><div class="dash-head"><h3>${I('food')} Food</h3><span class="link-btn">${items.length ? 'Open food diary' : 'Log food'} ${I('arrow')}</span></div>${items.length ? calorieRing(currentDate) + macroBars(currentDate, true) : '<p class="helper-note">Nothing logged for this date.</p>'}</a><a class="card card-pad dash-card" href="#move"${linkDate}><div class="dash-head"><h3>${I('activity')} Activity</h3><span class="link-btn">${acts.length ? 'Open activity' : 'Log activity'} ${I('arrow')}</span></div>${acts.length ? `<ul class="dash-list">${acts.map((a) => `<li>${esc(activityLabel(a))}</li>`).join('')}</ul>` : '<p class="helper-note">Nothing logged for this date.</p>'}</a></div>`;
}

const MOBILE_LABELS = { home: 'Home', today: 'Journal', food: 'Food', move: 'Move', checkin: 'Check-in' };
function mobileLabel(id, name) {
  return MOBILE_LABELS[id] || name;
}

// ===================== Food tracker (dedicated page) =====================
const MEALS = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
const MEAL_TITLES = { Breakfast: 'Breakfast', Lunch: 'Lunch', Dinner: 'Dinner', Snack: 'Snacks' };
const UNIT_BASIS = { g: '100g', ml: '100ml', serving: 'serving' };
const BASIS_UNIT = { '100g': 'g', '100ml': 'ml', serving: 'serving' };
let foodUi = { adding: null, tab: 'search', editId: null },
  fd = null;
const blankFd = (meal = 'Breakfast') => ({ meal, name: '', brand: '', code: '', source: 'manual', origin: 'entry', unit: 'g', quantity: '', calories: '', protein: '', carbs: '', fat: '', servingQty: null, servingUnit: '', per100: null, saveToLibrary: true });
const mealOf = (f) => (MEALS.includes(f.meal) ? f.meal : f.meal === 'Snacks' ? 'Snack' : 'Other');
function foodMealDefault() {
  return foodUi.adding || 'Breakfast';
}

// --- library of custom foods and saved meals (one record, kept up to date) ---
function libraryRecord() {
  return Object.values(state.entries).filter((e) => e.kind === 'library').sort((a, b) => b.date.localeCompare(a.date))[0] || null;
}
function libraryList(key) {
  try {
    const a = JSON.parse(libraryRecord()?.fields[key] || '[]');
    return Array.isArray(a) ? a : [];
  } catch {
    return [];
  }
}
function saveLibraryList(key, list) {
  const rec = libraryRecord() || { id: `library:${today()}`, kind: 'library', date: today(), title: 'My foods & saved meals', fields: {} };
  rec.fields[key] = JSON.stringify(list);
  saveRecordObject(rec);
}
const nutrientOk = (k, v) => v == null || (typeof v === 'number' && Number.isFinite(v) && v >= 0 && v <= (k === 'calories' ? 10000 : 1000));
function validLibraryFood(f) {
  return !!f && typeof f === 'object' && typeof f.id === 'string' && /^[\w-]{1,100}$/.test(f.id) && typeof f.name === 'string' && f.name.length > 0 && f.name.length <= 180 && ['100g', '100ml', 'serving'].includes(f.basis) && nutritionKeys.every((k) => nutrientOk(k, f[k]));
}
function validSavedMeal(m) {
  return !!m && typeof m === 'object' && typeof m.id === 'string' && typeof m.name === 'string' && m.name.length > 0 && m.name.length <= 120 && Array.isArray(m.items) && m.items.length > 0 && m.items.length <= 40 && m.items.every((f) => validFoodItem({ ...f, id: 'x', meal: 'Meal' }));
}

// --- Open Food Facts results with all four nutrients and serving information ---
function normaliseProduct(p) {
  const base = legacyNormaliseProduct(p), n = p.nutriments || {};
  const unitText = `${p.product_quantity_unit || ''} ${p.quantity || ''}`.toLowerCase();
  const sq = Number(p.serving_quantity), su = String(p.serving_quantity_unit || '').toLowerCase();
  return {
    ...base,
    unitGuess: /\b(ml|cl|l|litre|liter)\b/.test(unitText) || p.nutrition_data_per === '100ml' ? 'ml' : 'g',
    servingQty: Number.isFinite(sq) && sq > 0 && sq <= 5000 ? sq : null,
    servingUnit: su === 'ml' ? 'ml' : 'g',
    servingLabel: String(p.serving_size || '').slice(0, 60),
    hasNutrition: n['energy-kcal_100g'] !== undefined || n['energy-kj_100g'] !== undefined,
  };
}
function foodResultHtml() {
  const fmt = (v, u) => (v === null || v === undefined ? '<span class="unknown">?</span>' : `${Math.round(v * 10) / 10}${u}`);
  return `${foodMessage ? `<p class="notice">${esc(foodMessage)}</p>` : ''}<div class="product-results">${foodResults
    .map(
      (p, i) =>
        `<button class="product-result" data-product="${i}"><span class="pr-main"><strong>${esc(p.name)}</strong><span>${esc(p.brand)}${p.code ? ` · ${esc(p.code)}` : ''}</span></span><span class="pr-nutrition"><b>${fmt(p.calories, '')}</b> kcal · P ${fmt(p.protein, 'g')} · C ${fmt(p.carbs, 'g')} · F ${fmt(p.fat, 'g')}<small>per 100 ${p.unitGuess === 'ml' ? 'ml' : 'g'}${p.servingLabel ? ` · serving ${esc(p.servingLabel)}` : ''} · Open Food Facts</small></span></button>`,
    )
    .join('')}</div>`;
}
function selectProduct(index) {
  const p = foodResults[index];
  if (!p) return;
  const per100 = Object.fromEntries(nutritionKeys.map((k) => [k, p[k] == null ? null : Math.round(p[k] * 100) / 100]));
  fd = { ...blankFd(foodUi.adding || 'Breakfast'), name: p.name, brand: p.brand, code: p.code, source: 'Open Food Facts', origin: 'search', unit: p.unitGuess, per100, servingQty: p.servingQty, servingUnit: p.servingUnit, servingLabel: p.servingLabel, saveToLibrary: false, ...Object.fromEntries(nutritionKeys.map((k) => [k, per100[k] == null ? '' : String(per100[k])])) };
  renderFoodEditor(true);
}
// Values in the editor are always "per basis": per 100 g, per 100 ml, or per one serving.
function fdSetUnit(unit) {
  if (!fd || !UNIT_BASIS[unit] || fd.unit === unit) return;
  const from = fd.unit;
  fd.unit = unit;
  fd.quantity = '';
  if (fd.per100 && unit !== 'serving') {
    nutritionKeys.forEach((k) => (fd[k] = fd.per100[k] == null ? '' : String(fd.per100[k])));
    if (from !== 'serving') toast('Open Food Facts gives values per 100 g or 100 ml as printed on the pack. Check which the label uses.');
  } else if (fd.per100 && unit === 'serving' && fd.servingQty) {
    nutritionKeys.forEach((k) => (fd[k] = fd.per100[k] == null ? '' : String(Math.round(((fd.per100[k] * fd.servingQty) / 100) * 100) / 100)));
  } else {
    nutritionKeys.forEach((k) => (fd[k] = ''));
    toast('Enter the label values for the new unit.');
  }
  renderFoodEditor();
}
function fdItem() {
  const f = {
    id: fd.editId || `f-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    name: String(fd.name || '').trim(),
    basis: UNIT_BASIS[fd.unit],
    quantity: Number(fd.quantity),
    meal: fd.meal,
    source: fd.source === 'Open Food Facts' ? 'Open Food Facts' : 'manual',
    code: fd.code || '',
    ...Object.fromEntries(nutritionKeys.map((k) => [k, fd[k] === '' || fd[k] == null ? null : Number(fd[k])])),
  };
  if (fd.brand) f.brand = String(fd.brand).slice(0, 100);
  if (fd.origin === 'custom' || fd.origin === 'library') f.origin = 'custom';
  if (fd.unit === 'serving' && fd.servingQty) f.servingDesc = `${fd.servingQty} ${fd.servingUnit || 'g'}`;
  return f;
}
function fdPreview() {
  const q = Number(fd?.quantity);
  if (!fd || !(q > 0)) return 'Enter an amount to see the totals.';
  const t = itemTotals({ ...fdItem(), quantity: q });
  return `${q} ${fd.unit === 'serving' ? (q === 1 ? 'serving' : 'servings') : fd.unit} = ${nutritionKeys.map((k) => `${nutritionNames[k]} ${t[k] == null ? 'unknown' : nutritionNumber(t[k]) + MACRO_UNITS[k].replace('kcal', ' kcal')}`).join(' · ')}`;
}
function foodEditorHtml() {
  if (!fd) return '';
  const unit = fd.unit, basis = unit === 'g' ? '100 g' : unit === 'ml' ? '100 ml' : 'serving';
  const presets = unit === 'g' ? [1, 25, 50, 100, 150, 200] : unit === 'ml' ? [1, 50, 100, 200, 250, 330, 500] : [0.5, 1, 1.5, 2];
  const badge = fd.source === 'Open Food Facts' ? '<span class="src-badge off">Open Food Facts · community data, check the pack</span>' : fd.origin === 'custom' || fd.origin === 'library' ? '<span class="src-badge custom">Your custom food</span>' : '<span class="src-badge manual">Your own entry / estimate</span>';
  return `<div class="food-editor-v5" id="fd-editor"><div class="fd-title"><h3>${fd.editId ? 'Edit food' : 'Add this food'}</h3>${badge}</div><div class="field-grid"><div class="field"><label for="fd-name">Food or drink</label><input id="fd-name" data-fd="name" maxlength="180" value="${esc(fd.name)}" placeholder="e.g. Porridge with milk"></div><div class="field"><label for="fd-meal">Meal</label><select id="fd-meal" data-fd="meal">${[...MEALS, ...(MEALS.includes(fd.meal) ? [] : [fd.meal])].map((m) => `<option value="${esc(m)}" ${fd.meal === m ? 'selected' : ''}>${esc(MEAL_TITLES[m] || m)}</option>`).join('')}</select></div></div><div class="unit-switch" role="group" aria-label="Measure in">${[['g', 'Grams'], ['ml', 'Millilitres'], ['serving', 'Servings']].map(([k, l]) => `<button type="button" class="unit-button ${unit === k ? 'active' : ''}" aria-pressed="${unit === k}" data-fd-unit="${k}">${l}</button>`).join('')}</div>${unit === 'serving' && fd.servingQty ? `<p class="helper-note">One serving = ${fd.servingQty} ${fd.servingUnit}${fd.servingLabel ? ` (${esc(fd.servingLabel)})` : ''}, from the product data. Values below are calculated for one serving.</p>` : ''}<div class="amount-row"><div class="field"><label for="fd-quantity">Amount you had</label><div class="input-unit"><input id="fd-quantity" data-fd="quantity" type="number" min="0.01" max="10000" step="any" inputmode="decimal" value="${esc(fd.quantity)}" placeholder="${unit === 'serving' ? '1' : '100'}"><span>${unit === 'serving' ? 'servings' : unit}</span></div></div><div class="amount-presets">${presets.map((n) => `<button type="button" class="portion-preset" data-fd-portion="${n}">${n}${unit === 'serving' ? '' : ' ' + unit}</button>`).join('')}</div></div><div class="nutrition-label-heading"><strong>Nutrition per ${basis}</strong><span>${fd.source === 'Open Food Facts' ? 'From Open Food Facts; correct it if your pack differs.' : 'From the label, or your best estimate. Leave unknown values blank — blank is not zero.'}</span></div><div class="field-grid four">${nutritionKeys.map((k) => `<div class="field"><label for="fd-${k}">${nutritionNames[k]} (${MACRO_UNITS[k]})</label><input id="fd-${k}" data-fd="${k}" type="number" min="0" max="${k === 'calories' ? 10000 : 1000}" step="any" inputmode="decimal" value="${esc(fd[k])}" placeholder="Unknown"></div>`).join('')}</div><p class="portion-result" id="fd-preview" aria-live="polite">${fdPreview()}</p>${fd.editId ? '' : `<label class="checkbox-row"><input type="checkbox" data-fd-check="saveToLibrary" ${fd.saveToLibrary ? 'checked' : ''}>Save to My foods for next time</label>`}<div class="button-row"><button class="btn" data-up="fd-save">${fd.editId ? 'Save changes' : `Add to ${MEAL_TITLES[fd.meal] || fd.meal}`} ${I('arrow')}</button>${fd.editId ? `<button class="btn secondary" data-up="fd-delete">${I('trash')}Delete</button>` : ''}<button class="btn subtle" data-up="fd-cancel">Cancel</button></div></div>`;
}
function renderFoodEditor(scroll = false) {
  const box = document.querySelector('#fd-editor-box');
  if (!box) return renderPreservingScroll();
  box.innerHTML = foodEditorHtml();
  bindFoodEditor(box);
  if (scroll) {
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => box.querySelector(fd?.name ? '#fd-quantity' : '#fd-name')?.focus({ preventScroll: true }), 350);
  }
}
function bindFoodEditor(root) {
  bindFdFields(root);
  root.querySelectorAll('[data-up]').forEach((el) => el.addEventListener('click', (ev) => (ev.preventDefault(), upgradeAction(el.dataset.up, el))));
}
function bindFdFields(root) {
  root.querySelectorAll('[data-fd]').forEach((el) =>
    el.addEventListener('input', () => {
      fd[el.dataset.fd] = el.value;
      const pv = document.querySelector('#fd-preview');
      if (pv) pv.textContent = fdPreview();
    }),
  );
  root.querySelectorAll('[data-fd-check]').forEach((el) => el.addEventListener('change', () => (fd[el.dataset.fdCheck] = el.checked)));
  root.querySelectorAll('[data-fd-unit]').forEach((el) => el.addEventListener('click', () => fdSetUnit(el.dataset.fdUnit)));
  root.querySelectorAll('[data-fd-portion]').forEach((el) =>
    el.addEventListener('click', () => {
      fd.quantity = el.dataset.fdPortion;
      const q = document.querySelector('#fd-quantity');
      if (q) q.value = fd.quantity;
      const pv = document.querySelector('#fd-preview');
      if (pv) pv.textContent = fdPreview();
    }),
  );
}
function writeFoodItems(date, items) {
  if (items.length) {
    const rec = createRecord('food', date, 'Food diary');
    rec.fields.items = JSON.stringify(items);
    saveRecordObject(rec);
  } else {
    delete state.entries[`food:${date}`];
    persist();
  }
}
function saveFd() {
  const f = fdItem();
  if (!f.name) return toast('Add a name for this food.');
  if (!(f.quantity > 0 && f.quantity <= 10000)) return toast('Enter the amount you had (more than 0).');
  if (!nutritionKeys.some((k) => f[k] !== null)) return toast('Add at least one nutrition value. Others can stay blank.');
  if (!validFoodItem(f)) return toast('Check the numbers: calories up to 10,000 and other values up to 1,000 per basis.');
  const items = foodItems(currentDate), idx = items.findIndex((i) => i.id === f.id);
  if (idx < 0 && items.length >= 100) return toast('This day already has 100 foods.');
  if (idx >= 0) items[idx] = f;
  else items.push(f);
  writeFoodItems(currentDate, items);
  if (!fd.editId && fd.saveToLibrary && fd.origin !== 'library') addToLibrary(f);
  const meal = MEAL_TITLES[f.meal] || f.meal;
  fd = null;
  foodUi = { adding: null, tab: foodUi.tab, editId: null };
  renderPreservingScroll();
  toast(storageError ? 'Saved in memory only — download a backup.' : `${f.name} added to ${meal}.`);
}
function addToLibrary(f) {
  const list = libraryList('foods');
  const { id, meal, quantity, ...rest } = f;
  const entry = { ...rest, id: `c-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, defaultQty: quantity, origin: 'custom' };
  const same = list.findIndex((x) => x.name.toLowerCase() === f.name.toLowerCase() && x.basis === f.basis);
  if (same >= 0) list[same] = { ...entry, id: list[same].id };
  else list.unshift(entry);
  saveLibraryList('foods', list.slice(0, 500));
}
function recentFoods() {
  const out = [];
  for (const e of Object.values(state.entries).filter((e) => e.kind === 'food').sort((a, b) => b.date.localeCompare(a.date) || b.updatedAt.localeCompare(a.updatedAt)))
    for (const f of foodItems(e.date).slice().reverse()) {
      if (!out.some((x) => x.name === f.name && x.basis === f.basis)) out.push(f);
      if (out.length >= 25) return out;
    }
  return out;
}
function fdFromSaved(f, origin) {
  fd = { ...blankFd(foodUi.adding || 'Breakfast'), name: f.name, brand: f.brand || '', code: f.code || '', source: f.source === 'Open Food Facts' ? 'Open Food Facts' : 'manual', origin, unit: BASIS_UNIT[f.basis], quantity: String(f.defaultQty ?? f.quantity ?? ''), saveToLibrary: false, ...Object.fromEntries(nutritionKeys.map((k) => [k, f[k] == null ? '' : String(f[k])])) };
  renderFoodEditor(true);
}
function quickAdd(f) {
  // One tap: re-add a recent or custom food with its usual amount.
  const item = { ...f, id: `f-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`, meal: foodUi.adding || 'Breakfast', quantity: Number(f.defaultQty ?? f.quantity) };
  delete item.defaultQty;
  if (!validFoodItem(item)) return fdFromSaved(f, 'library');
  const items = foodItems(currentDate);
  if (items.length >= 100) return toast('This day already has 100 foods.');
  items.push(item);
  writeFoodItems(currentDate, items);
  renderPreservingScroll();
  toast(`${item.name} added to ${MEAL_TITLES[item.meal]}.`);
}
function foodLine(f) {
  const t = itemTotals(f), u = BASIS_UNIT[f.basis];
  const src = f.source === 'Open Food Facts' ? 'Open Food Facts' : f.origin === 'custom' ? 'My food' : 'Own entry';
  return `<li class="food-line"><button class="food-line-main" data-up="food-edit" data-id="${esc(f.id)}"><span class="fl-name">${esc(f.name)}</span><span class="fl-detail">${nutritionNumber(f.quantity)} ${u === 'serving' ? (f.quantity === 1 ? 'serving' : 'servings') : u}${f.brand ? ' · ' + esc(f.brand) : ''} · <em>${src}</em></span><span class="fl-macros">P ${t.protein == null ? '?' : Math.round(t.protein)} · C ${t.carbs == null ? '?' : Math.round(t.carbs)} · F ${t.fat == null ? '?' : Math.round(t.fat)}</span></button><span class="fl-kcal">${t.calories == null ? '?' : Math.round(t.calories)}<small>kcal</small></span></li>`;
}
function mealSection(meal, items) {
  const kcal = items.reduce((s, f) => s + (itemTotals(f).calories ?? 0), 0);
  const yesterday = MEALS.includes(meal) ? foodItems(shift(currentDate, -1)).filter((f) => mealOf(f) === meal) : [];
  return `<section class="card meal-card"><header class="meal-head"><h2>${esc(MEAL_TITLES[meal] || 'Other')}</h2><span class="meal-kcal">${items.length ? Math.round(kcal) + ' kcal' : ''}</span></header>${items.length ? `<ul class="food-lines">${items.map(foodLine).join('')}</ul>` : ''}<footer class="meal-foot">${MEALS.includes(meal) ? `<button class="btn subtle small" data-up="food-add" data-meal="${meal}">+ Add food</button>` : ''}${!items.length && yesterday.length ? `<button class="link-btn small" data-up="food-copy" data-meal="${meal}">Copy yesterday’s ${esc((MEAL_TITLES[meal] || meal).toLowerCase())} (${yesterday.length})</button>` : ''}${items.length >= 1 && MEALS.includes(meal) ? `<button class="link-btn small" data-up="meal-save" data-meal="${meal}">Save as a meal</button>` : ''}</footer></section>`;
}
function addPanelHtml() {
  const meal = foodUi.adding, tab = foodUi.tab;
  const tabs = [['search', 'Search'], ['recent', 'Recent'], ['mine', 'My foods'], ['meals', 'Saved meals'], ['manual', 'Enter manually']];
  let body = '';
  if (tab === 'search')
    body = `<form id="food-search-form" class="food-search-row"><label class="screen-reader-only" for="food-search">Product name or barcode</label><input id="food-search" type="search" maxlength="120" placeholder="Search a product or type a barcode" value="${esc(foodQuery)}" autocomplete="off"><button class="btn" type="submit" ${foodBusy ? 'disabled' : ''}>${foodBusy ? 'Searching…' : 'Search'}</button><button class="btn secondary" type="button" data-action="scan">${I('search')}Scan</button></form><div id="scan-area" hidden><video id="scan-video" autoplay muted playsinline></video><button class="btn secondary" type="button" data-action="stop-scan">Stop camera</button></div><div id="food-results" aria-live="polite">${foodResultHtml()}</div><p class="helper-note">Searches send only the words or barcode to Open Food Facts, a free community database. Values can be missing or wrong, so check them against the pack. Fresh foods without a barcode are often easier to add once under “Enter manually” and reuse from My foods.</p>`;
  else if (tab === 'recent' || tab === 'mine') {
    const list = tab === 'recent' ? recentFoods() : libraryList('foods');
    body = list.length
      ? `<ul class="pick-list">${list
          .map((f, i) => {
            const qty = f.defaultQty ?? f.quantity, t = itemTotals({ ...f, quantity: qty });
            return `<li><button class="pick-main" data-up="pick-food" data-list="${tab}" data-i="${i}"><strong>${esc(f.name)}</strong><span>${nutritionNumber(Number(qty))} ${BASIS_UNIT[f.basis] === 'serving' ? 'serving(s)' : BASIS_UNIT[f.basis]} · ${t.calories == null ? '?' : Math.round(t.calories)} kcal</span></button><button class="btn subtle small" data-up="quick-food" data-list="${tab}" data-i="${i}" aria-label="Add ${esc(f.name)} now">+ Add</button>${tab === 'mine' ? `<button class="icon-btn" data-up="lib-remove" data-i="${i}" aria-label="Remove ${esc(f.name)} from My foods">${I('trash')}</button>` : ''}</li>`;
          })
          .join('')}</ul><p class="helper-note">“+ Add” uses the usual amount. Tap a name to change the amount first.</p>`
      : `<p class="empty-note">${tab === 'recent' ? 'Foods you log will appear here for quick re-use.' : 'Foods you enter yourself are saved here. Use “Enter manually” to create one.'}</p>`;
  } else if (tab === 'meals') {
    const meals = libraryList('meals');
    body = meals.length
      ? `<ul class="pick-list">${meals.map((m, i) => `<li><span class="pick-main"><strong>${esc(m.name)}</strong><span>${m.items.length} item${m.items.length > 1 ? 's' : ''} · ${Math.round(m.items.reduce((s, f) => s + (itemTotals(f).calories ?? 0), 0))} kcal</span></span><button class="btn subtle small" data-up="meal-add" data-i="${i}">+ Add all</button><button class="icon-btn" data-up="meal-remove" data-i="${i}" aria-label="Delete saved meal ${esc(m.name)}">${I('trash')}</button></li>`).join('')}</ul>`
      : '<p class="empty-note">Save any meal from your diary with “Save as a meal”, then add it to another day in one tap.</p>';
  } else body = '<p class="helper-note">Enter the name, choose grams, millilitres or servings, and type the label values. It will be saved to My foods.</p>';
  return `<section class="card card-pad add-panel" id="add-panel"><div class="add-head"><button class="link-btn" data-up="food-close">${I('back')}Back to diary</button><h2>Add to ${esc(MEAL_TITLES[meal] || meal)}</h2></div><div class="tab-row" role="tablist">${tabs.map(([k, l]) => `<button role="tab" class="tab ${tab === k ? 'active' : ''}" aria-selected="${tab === k}" data-up="food-tab" data-tab="${k}">${l}</button>`).join('')}</div>${body}<div id="fd-editor-box">${foodEditorHtml()}</div></section>`;
}
function foodHistoryHtml() {
  const rows = Array.from({ length: 10 }, (_, i) => shift(currentDate, -i)).map((d) => {
    const t = foodTotals(d), tg = currentTargets(d), n = foodItems(d).length;
    const cell = (k) => (t[k].count ? `${Math.round(t[k].value)}${t[k].missing ? '+?' : ''}${tg[k] ? `<small>/${tg[k]}</small>` : ''}` : '—');
    return `<tr class="${d === currentDate ? 'current' : ''}"><th><a href="#food" data-date="${d}">${pretty(d, { weekday: 'short', day: 'numeric', month: 'short' })}</a></th><td>${n ? cell('calories') : '—'}</td><td>${n ? cell('protein') : '—'}</td><td>${n ? cell('carbs') : '—'}</td><td>${n ? cell('fat') : '—'}</td></tr>`;
  });
  return `<div class="table-wrap"><table class="mini-table"><thead><tr><th>Day</th><th>kcal</th><th>Protein</th><th>Carbs</th><th>Fat</th></tr></thead><tbody>${rows.join('')}</tbody></table></div><p class="helper-note">“+?” means at least one food had that value missing.</p>`;
}
function foodView() {
  currentRecord = null;
  const items = foodItems(currentDate), isToday = currentDate === today();
  const groups = MEALS.map((m) => [m, items.filter((f) => mealOf(f) === m)]);
  const other = items.filter((f) => mealOf(f) === 'Other');
  if (other.length) groups.push(['Other', other]);
  const targets = targetRecord(currentDate);
  const nav = `<div class="date-stepper"><button class="icon-btn" data-up="food-day" data-delta="-1" aria-label="Previous day">${I('back')}</button><strong>${isToday ? 'Today' : currentDate === shift(today(), -1) ? 'Yesterday' : pretty(currentDate, { weekday: 'short', day: 'numeric', month: 'short' })}</strong><button class="icon-btn" data-up="food-day" data-delta="1" aria-label="Next day" ${isToday ? 'disabled' : ''}>${I('arrow')}</button></div>`;
  return `${heading('Food', 'Your food diary.', 'Search, scan or reuse foods. Totals update as you go.', true)}<div class="food-top card card-pad">${nav}${calorieRing(currentDate)}${macroBars(currentDate)}${targets ? '' : '<p class="notice">No daily targets yet. <a class="text-link" href="#profile">Set targets in your profile</a>.</p>'}</div>${foodUi.adding ? addPanelHtml() : ''}${fd && foodUi.editId ? `<section class="card card-pad add-panel"><div class="add-head"><button class="link-btn" data-up="food-close">${I('back')}Back to diary</button></div><div id="fd-editor-box">${foodEditorHtml()}</div></section>` : ''}<div class="meal-grid">${groups.map(([m, list]) => mealSection(m, list)).join('')}</div><div class="food-bottom"><section class="card card-pad"><h2>Recent days</h2>${foodHistoryHtml()}</section><section class="card card-pad"><h2>Targets & sources</h2><p class="helper-note">${targets ? `Targets in use since ${pretty(targets.date)}${targets.fields.source === 'auto' ? ', calculated from your profile' : ', set by you'}.` : 'No targets set.'} <a class="text-link" href="#profile">Review targets</a></p><p class="helper-note">Exercise calories are only added when you enter an estimate for an activity yourself.</p><p class="helper-note">Product data: <a class="text-link" href="https://world.openfoodfacts.org" target="_blank" rel="noopener noreferrer">Open Food Facts</a>, available under the <a class="text-link" href="https://opendatacommons.org/licenses/odbl/1-0/" target="_blank" rel="noopener noreferrer">Open Database License</a>. It is community-contributed and not independently verified. Your own entries are labelled as your estimates. No affiliation with MyFitnessPal or Open Food Facts.</p></section></div>`;
}
function foodAction(name, el) {
  if (name === 'food-day') {
    const d = shift(currentDate, Number(el.dataset.delta));
    if (d > today()) return;
    selectedDates.food = d;
    fd = null;
    foodUi = { adding: null, tab: foodUi.tab, editId: null };
    return render();
  }
  if (name === 'food-add') {
    foodUi = { adding: el.dataset.meal, tab: foodUi.tab || 'search', editId: null };
    fd = foodUi.tab === 'manual' ? blankFd(el.dataset.meal) : null;
    renderPreservingScroll();
    document.querySelector('#add-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  if (name === 'food-tab') {
    foodUi.tab = el.dataset.tab;
    fd = foodUi.tab === 'manual' ? blankFd(foodUi.adding) : null;
    return renderPreservingScroll();
  }
  if (name === 'food-close' || name === 'fd-cancel') {
    fd = null;
    stopScanner();
    foodUi = { adding: null, tab: foodUi.tab, editId: null };
    return renderPreservingScroll();
  }
  if (name === 'fd-save') return saveFd();
  if (name === 'food-edit') {
    const f = foodItems(currentDate).find((x) => x.id === el.dataset.id);
    if (!f) return;
    foodUi = { adding: null, tab: foodUi.tab, editId: f.id };
    fd = { ...blankFd(f.meal), ...f, editId: f.id, unit: BASIS_UNIT[f.basis], quantity: String(f.quantity), origin: f.origin || 'entry', ...Object.fromEntries(nutritionKeys.map((k) => [k, f[k] == null ? '' : String(f[k])])) };
    renderPreservingScroll();
    return document.querySelector('#fd-editor-box')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  if (name === 'fd-delete') {
    const id = fd?.editId;
    writeFoodItems(currentDate, foodItems(currentDate).filter((f) => f.id !== id));
    fd = null;
    foodUi.editId = null;
    renderPreservingScroll();
    return toast('Food removed. Totals updated.');
  }
  const list = (k) => (k === 'recent' ? recentFoods() : libraryList('foods'));
  if (name === 'pick-food') return fdFromSaved(list(el.dataset.list)[Number(el.dataset.i)], el.dataset.list === 'mine' ? 'library' : 'entry');
  if (name === 'quick-food') {
    const f = list(el.dataset.list)[Number(el.dataset.i)];
    return f && quickAdd(f);
  }
  if (name === 'lib-remove') {
    const l = libraryList('foods');
    l.splice(Number(el.dataset.i), 1);
    saveLibraryList('foods', l);
    return renderPreservingScroll();
  }
  if (name === 'food-copy') {
    const meal = el.dataset.meal, from = foodItems(shift(currentDate, -1)).filter((f) => mealOf(f) === meal);
    const items = foodItems(currentDate).concat(from.map((f, i) => ({ ...f, id: `f-${Date.now()}-${i}-${Math.random().toString(36).slice(2, 6)}` })));
    if (items.length > 100) return toast('That would exceed 100 foods for this day.');
    writeFoodItems(currentDate, items);
    renderPreservingScroll();
    return toast(`${from.length} item${from.length > 1 ? 's' : ''} copied. Tap any item to change the amount.`);
  }
  if (name === 'meal-save') return saveMealDialog(el.dataset.meal);
  if (name === 'meal-add') {
    const m = libraryList('meals')[Number(el.dataset.i)];
    if (!m) return;
    const items = foodItems(currentDate).concat(m.items.map((f, i) => ({ ...f, id: `f-${Date.now()}-${i}-${Math.random().toString(36).slice(2, 6)}`, meal: foodUi.adding || 'Breakfast' })));
    if (items.length > 100) return toast('That would exceed 100 foods for this day.');
    writeFoodItems(currentDate, items);
    const meal = foodUi.adding;
    foodUi = { adding: null, tab: foodUi.tab, editId: null };
    renderPreservingScroll();
    return toast(`${m.name} added to ${MEAL_TITLES[meal] || meal}.`);
  }
  if (name === 'meal-remove') {
    const l = libraryList('meals'), m = l[Number(el.dataset.i)];
    if (!m) return;
    return dialog('Delete this saved meal?', `${m.name} will be removed from your saved meals. Days you already logged are not changed.`, 'Delete meal', () => {
      l.splice(Number(el.dataset.i), 1);
      saveLibraryList('meals', l);
      renderPreservingScroll();
    }, true);
  }
  return false;
}
function saveMealDialog(meal) {
  const items = foodItems(currentDate).filter((f) => mealOf(f) === meal);
  if (!items.length) return;
  const dlg = document.querySelector('#dialog');
  dlg.innerHTML = `<h2>Save as a meal</h2><p>Save these ${items.length} item${items.length > 1 ? 's' : ''} to add them to another day in one tap.</p><div class="field"><label for="meal-name">Meal name</label><input id="meal-name" maxlength="120" value="My ${esc((MEAL_TITLES[meal] || meal).toLowerCase())}"></div><div class="actions"><button class="btn secondary" id="dialog-cancel">Cancel</button><button class="btn" id="dialog-confirm">Save meal</button></div>`;
  dlg.querySelector('#dialog-cancel').onclick = () => dlg.close();
  dlg.querySelector('#dialog-confirm').onclick = () => {
    const nameV = dlg.querySelector('#meal-name').value.trim().slice(0, 120);
    if (!nameV) return;
    const l = libraryList('meals');
    l.unshift({ id: `m-${Date.now()}`, name: nameV, items: items.map(({ id, meal: _m, ...rest }) => rest) });
    saveLibraryList('meals', l.slice(0, 200));
    dlg.close();
    toast(`Saved “${nameV}”. Find it under Add food → Saved meals.`);
  };
  dlg.showModal();
  dlg.querySelector('#meal-name').select();
}

// ===================== Movement & activity =====================
const ACT_TYPES = {
  strength: ['Strength', 'Weights, bands, body-weight or gym work'],
  cardio: ['Cardio', 'Running, cycling, swimming, classes'],
  movement: ['Walk & everyday movement', 'Walks, gardening, active jobs'],
  mobility: ['Mobility & recovery', 'Stretching, yoga, pilates, mobility'],
  programme: ['Pain Solution session', 'Recorded from your programme'],
};
const EFFORT = { easy: 'Easy', moderate: 'Moderate', hard: 'Hard' };
let actDraft = null;
function validActivity(a) {
  return (
    !!a && typeof a === 'object' && typeof a.id === 'string' && /^[\w:-]{1,120}$/.test(a.id) && Object.hasOwn(ACT_TYPES, a.type) &&
    (a.name === undefined || (typeof a.name === 'string' && a.name.length <= 120)) &&
    (a.minutes == null || (Number.isFinite(a.minutes) && a.minutes >= 0 && a.minutes <= 600)) &&
    (a.kcal == null || (Number.isFinite(a.kcal) && a.kcal >= 0 && a.kcal <= 5000)) &&
    (a.effort === undefined || a.effort === '' || Object.hasOwn(EFFORT, a.effort)) &&
    (a.note === undefined || (typeof a.note === 'string' && a.note.length <= 300))
  );
}
function activityLabel(a) {
  return `${a.name || ACT_TYPES[a.type]?.[0] || 'Activity'}${a.minutes ? ` · ${a.minutes} min` : ''}${a.effort ? ` · ${EFFORT[a.effort].toLowerCase()}` : ''}`;
}
function writeActivities(date, list) {
  if (list.length) {
    const rec = createRecord('activity', date, 'Activity log');
    rec.fields.log = JSON.stringify(list);
    saveRecordObject(rec);
  } else {
    delete state.entries[`activity:${date}`];
    persist();
  }
}
function setDailySteps(date, v) {
  const id = `daily:${date}`;
  const rec = state.entries[id] || { id, kind: 'daily', date, title: 'Daily check-in', fields: { trackingBasis: 'today' } };
  if (v === '') delete rec.fields.steps;
  else rec.fields.steps = v;
  if (Object.entries(rec.fields).some(([k, x]) => k !== 'trackingBasis' && x !== '' && x !== 'false' && x !== '[]')) saveRecordObject(rec);
  else {
    delete state.entries[id];
    persist();
  }
}
function weekTargetsHtml(end) {
  const p = profile(), s = periodSummary(end);
  const row = (label, val, target, unit = '') => {
    const t = upNum(target);
    return `<div class="target-row"><div class="macro-bar-top"><span>${label}</span><strong>${val === null ? '—' : upFmt(val)}${t ? ` / ${upFmt(t)}` : ''}${unit}</strong></div>${t ? `<div class="bar"><i style="width:${Math.min(100, Math.round(((val || 0) / t) * 100))}%"></i></div>` : ''}</div>`;
  };
  const anyTarget = ['stepsTarget', 'activeDaysTarget', 'strengthTarget', 'minutesTarget'].some((k) => upNum(p[k]));
  return `<div class="target-rows">${row('Average steps / day', s.steps === null ? null : Math.round(s.steps), p.stepsTarget)}${row('Active days', s.activeDays, p.activeDaysTarget)}${row('Strength & programme sessions', s.strength, p.strengthTarget)}${row('Active minutes', s.minutes, p.minutesTarget, ' min')}</div><p class="helper-note">Last 7 days. ${anyTarget ? '' : 'No weekly targets yet — '}<a class="text-link" href="#profile">${anyTarget ? 'Change targets' : 'add them in your profile'}</a>.</p>`;
}
function actFormHtml() {
  if (!actDraft) return '';
  const presets = { strength: ['Gym session', 'Home strength', 'Resistance bands'], cardio: ['Run', 'Cycle', 'Swim', 'Class'], movement: ['Walk', 'Gardening', 'Housework', 'Active commute'], mobility: ['Stretching', 'Yoga', 'Pilates', 'Mobility routine'] }[actDraft.type] || [];
  return `<div class="act-form" id="act-form"><h3>${actDraft.id ? 'Edit' : 'Add'}: ${ACT_TYPES[actDraft.type][0]}</h3><div class="chip-row">${presets.map((n) => `<button type="button" class="tab ${actDraft.name === n ? 'active' : ''}" data-act-preset="${esc(n)}">${n}</button>`).join('')}</div><div class="field-grid"><div class="field"><label for="act-name">Name (optional)</label><input id="act-name" data-act="name" maxlength="120" value="${esc(actDraft.name || '')}" placeholder="${esc(ACT_TYPES[actDraft.type][0])}"></div><div class="field"><label for="act-minutes">Minutes</label><div class="input-unit"><input id="act-minutes" data-act="minutes" type="number" min="1" max="600" step="1" inputmode="numeric" value="${esc(actDraft.minutes ?? '')}" placeholder="30"><span>min</span></div></div></div><div class="effort-row" role="group" aria-label="Effort">${Object.entries(EFFORT).map(([k, l]) => `<button type="button" class="unit-button ${actDraft.effort === k ? 'active' : ''}" aria-pressed="${actDraft.effort === k}" data-act-effort="${k}">${l}</button>`).join('')}</div><details class="explain"><summary>More (optional) ${I('down')}</summary><div class="field-grid"><div class="field"><label for="act-kcal">Calories burned — your estimate</label><div class="input-unit"><input id="act-kcal" data-act="kcal" type="number" min="0" max="5000" step="1" value="${esc(actDraft.kcal ?? '')}" placeholder="Leave blank"><span>kcal</span></div><small class="field-help">Only add this if you have a reasonable estimate. It is added to your food budget for the day.</small></div><div class="field"><label for="act-note">Note</label><input id="act-note" data-act="note" maxlength="300" value="${esc(actDraft.note || '')}"></div></div></details><div class="button-row"><button class="btn" data-up="act-save">${actDraft.id ? 'Save changes' : 'Add activity'} ${I('arrow')}</button>${actDraft.id ? `<button class="btn secondary" data-up="act-delete">${I('trash')}Delete</button>` : ''}<button class="btn subtle" data-up="act-cancel">Cancel</button></div></div>`;
}
function moveView() {
  currentRecord = null;
  const date = currentDate, isToday = date === today(), acts = activityItems(date);
  const steps = state.entries[`daily:${date}`]?.fields.steps ?? '', p = profile();
  const nav = `<div class="date-stepper"><button class="icon-btn" data-up="move-day" data-delta="-1" aria-label="Previous day">${I('back')}</button><strong>${isToday ? 'Today' : date === shift(today(), -1) ? 'Yesterday' : pretty(date, { weekday: 'short', day: 'numeric', month: 'short' })}</strong><button class="icon-btn" data-up="move-day" data-delta="1" aria-label="Next day" ${isToday ? 'disabled' : ''}>${I('arrow')}</button></div>`;
  return `${heading('Movement', 'Exercise & movement.', 'Record what you did in a few taps. Pain Solution sessions count automatically.')}<div class="move-layout"><div><section class="card card-pad">${nav}<div class="steps-row"><div class="field"><label for="move-steps">${I('activity')}Steps</label><div class="input-unit"><input id="move-steps" type="number" min="0" max="200000" step="1" inputmode="numeric" value="${esc(steps)}" placeholder="—"><span>${upNum(p.stepsTarget) ? `of ${upFmt(p.stepsTarget)}` : 'steps'}</span></div><small class="field-help">From your phone or watch. Shared with your daily journal, so it is only entered once.</small></div></div><h3 class="sub-h">Add activity</h3><div class="act-buttons">${['strength', 'cardio', 'movement', 'mobility'].map((t) => `<button class="act-btn ${actDraft?.type === t && !actDraft.id ? 'active' : ''}" data-up="act-new" data-type="${t}"><strong>${ACT_TYPES[t][0]}</strong><small>${ACT_TYPES[t][1]}</small></button>`).join('')}</div>${actFormHtml()}<h3 class="sub-h">${isToday ? 'Today' : pretty(date, { weekday: 'long', day: 'numeric', month: 'short' })}</h3>${acts.length ? `<ul class="act-list">${acts.map((a) => `<li><span class="act-type t-${a.type}">${esc(ACT_TYPES[a.type][0])}</span><button class="act-main" data-up="${a.type === 'programme' ? 'noop' : 'act-edit'}" data-id="${esc(a.id)}"><strong>${esc(a.name || ACT_TYPES[a.type][0])}</strong><small>${[a.minutes ? a.minutes + ' min' : '', a.effort ? EFFORT[a.effort] : '', a.kcal ? a.kcal + ' kcal (your estimate)' : '', a.note && a.type !== 'programme' ? esc(a.note) : ''].filter(Boolean).join(' · ') || (a.type === 'programme' ? 'Ticked in your programme' : 'Tap to add details')}</small></button>${a.type === 'programme' ? `<button class="icon-btn" data-up="prog-untick" data-id="${esc(a.id)}" aria-label="Remove this session">${I('trash')}</button>` : ''}</li>`).join('')}</ul>` : '<p class="empty-note">Nothing recorded for this day yet.</p>'}</section></div><aside class="aside-stack move-aside"><section class="card card-pad">${programmeCard(date)}</section><section class="card card-pad"><h3>This week</h3>${weekTargetsHtml(date)}</section></aside></div>`;
}
function saveActDraft() {
  const minutes = actDraft.minutes === '' || actDraft.minutes == null ? null : Number(actDraft.minutes);
  const kcal = actDraft.kcal === '' || actDraft.kcal == null ? null : Number(actDraft.kcal);
  const a = { id: actDraft.id || `a-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, type: actDraft.type, name: String(actDraft.name || '').trim().slice(0, 120) || undefined, minutes, effort: actDraft.effort || '', kcal, note: String(actDraft.note || '').trim().slice(0, 300) || undefined };
  if (!validActivity(a)) return toast('Check the minutes (up to 600) and calories (up to 5,000).');
  const list = activityItems(currentDate), i = list.findIndex((x) => x.id === a.id);
  if (i < 0 && list.length >= 60) return toast('This day already has 60 activities.');
  if (i >= 0) list[i] = a;
  else list.push(a);
  writeActivities(currentDate, list);
  actDraft = null;
  renderPreservingScroll();
  toast('Activity saved.');
}
function moveAction(name, el) {
  if (name === 'noop') return;
  if (name === 'move-day') {
    const d = shift(currentDate, Number(el.dataset.delta));
    if (d > today()) return;
    selectedDates.move = d;
    actDraft = null;
    return render();
  }
  if (name === 'act-new') {
    actDraft = { type: el.dataset.type, name: '', minutes: '', effort: '', kcal: '', note: '' };
    renderPreservingScroll();
    return document.querySelector('#act-minutes')?.focus({ preventScroll: true });
  }
  if (name === 'act-edit') {
    const a = activityItems(currentDate).find((x) => x.id === el.dataset.id);
    if (!a) return;
    actDraft = { ...a, minutes: a.minutes ?? '', kcal: a.kcal ?? '' };
    renderPreservingScroll();
    return document.querySelector('#act-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  if (name === 'act-cancel') {
    actDraft = null;
    return renderPreservingScroll();
  }
  if (name === 'act-save') return saveActDraft();
  if (name === 'act-delete') {
    writeActivities(currentDate, activityItems(currentDate).filter((x) => x.id !== actDraft.id));
    actDraft = null;
    renderPreservingScroll();
    return toast('Activity removed.');
  }
  return programmeAction(name, el);
}
function bindMove() {
  const steps = document.querySelector('#move-steps');
  steps?.addEventListener('input', () => {
    if (!steps.checkValidity()) return;
    setDailySteps(currentDate, steps.value);
  });
  steps?.addEventListener('change', () => renderPreservingScroll());
  document.querySelectorAll('[data-act]').forEach((el) => el.addEventListener('input', () => actDraft && (actDraft[el.dataset.act] = el.value)));
  document.querySelectorAll('[data-act-preset]').forEach((el) =>
    el.addEventListener('click', () => {
      actDraft.name = el.dataset.actPreset;
      const n = document.querySelector('#act-name');
      if (n) n.value = actDraft.name;
      document.querySelectorAll('[data-act-preset]').forEach((b) => b.classList.toggle('active', b === el));
    }),
  );
  document.querySelectorAll('[data-act-effort]').forEach((el) =>
    el.addEventListener('click', () => {
      actDraft.effort = actDraft.effort === el.dataset.actEffort ? '' : el.dataset.actEffort;
      document.querySelectorAll('[data-act-effort]').forEach((b) => {
        b.classList.toggle('active', b.dataset.actEffort === actDraft.effort);
        b.setAttribute('aria-pressed', b.dataset.actEffort === actDraft.effort);
      });
    }),
  );
  document.querySelectorAll('[data-session-tick]').forEach((el) => el.addEventListener('change', () => tickSession(el.dataset.sessionTick, el.dataset.sessionName, el.checked)));
  document.querySelector('#ps-import')?.addEventListener('change', importPainSolution);
}

// ===================== Pain Solution programmes =====================
// The programme library is copied from pain-solution-app/dist/programmes.json at build time,
// so there is one source of truth. Schedules mirror pain-solution-app/dist/app.js (schedule()).
// Address of the separate Pain Solution Move app. Left blank so no link is shown; set it when the app has a public address.
const PAIN_SOLUTION_URL = '';
let programmes = null, programmesLoading = false, browseProgramme = null;
function loadProgrammes() {
  if (programmes || programmesLoading || typeof fetch !== 'function') return;
  programmesLoading = true;
  fetch('programmes.json')
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((d) => {
      programmes = Array.isArray(d) ? d : [];
      if (['move', 'exercise', 'home'].includes(route().split('/')[0])) renderPreservingScroll();
    })
    .catch(() => {
      programmes = [];
    })
    .finally(() => (programmesLoading = false));
}
function psSchedule(id, n) {
  const strength = { name: 'Strength session', detail: 'Follow the level’s dose', type: 'strength' },
    gentle = { name: 'Gentle movement', detail: 'Optional · marked gentle exercises only', type: 'gentle' };
  if (id === 'full-body') return [{ name: 'Session A', detail: 'MAIN · listed sets and reps', type: 'A-main' }, { name: 'Session B', detail: 'LIGHT · one easy set', type: 'B-light' }, null, { name: 'Session A', detail: 'LIGHT · one easy set', type: 'A-light' }, { name: 'Session B', detail: 'MAIN · listed sets and reps', type: 'B-main' }, null, null];
  if (['shoulders', 'sciatica'].includes(id)) return [{ name: 'Session A', detail: 'Follow the programme notes', type: 'A' }, { name: 'Session B', detail: 'Follow the programme notes', type: 'B' }, null, { name: 'Session A', detail: 'Follow the programme notes', type: 'A' }, { name: 'Session B', detail: 'Follow the programme notes', type: 'B' }, null, null];
  if (id === 'back' && n === 1) return Array.from({ length: 7 }, (_, i) => (i < 5 ? { name: 'Gentle practice', detail: 'Up to five days · split if useful', type: 'gentle' } : null));
  if ((['neck', 'hips'].includes(id) && n === 1) || id === 'feet') {
    let g = gentle;
    if (id === 'feet' && n === 2) g = { name: 'Toe & arch practice', detail: 'Optional · gentle practice only', type: 'gentle' };
    if (id === 'feet' && n === 3) g = { name: 'Gentle ankle mobility', detail: 'Optional · comfortable movement', type: 'gentle' };
    return [strength, g, strength, g, strength, null, null];
  }
  return [strength, null, strength, null, strength, null, null];
}
function exerciseRecord() {
  return Object.values(state.entries).filter((e) => e.kind === 'exercise').sort((a, b) => b.date.localeCompare(a.date))[0] || null;
}
function currentProgramme() {
  const f = exerciseRecord()?.fields || {};
  const p = programmes?.find((x) => x.id === f.programme);
  const l = p?.levels.find((x) => x.number === Number(f.level));
  return p && l ? { p, l } : null;
}
function completedLevels() {
  try {
    const o = JSON.parse(exerciseRecord()?.fields.completed || '{}');
    return o && typeof o === 'object' && !Array.isArray(o) ? o : {};
  } catch {
    return {};
  }
}
function saveExercise(fields) {
  const rec = exerciseRecord() || { id: `exercise:${today()}`, kind: 'exercise', date: today(), title: 'My Pain Solution programme', fields: {} };
  Object.assign(rec.fields, fields);
  saveRecordObject(rec);
}
const sessionKey = (pid, n, date) => `ps:${pid}:${n}:${date}`;
function sessionFor(date) {
  const c = currentProgramme();
  if (!c) return null;
  const s = psSchedule(c.p.id, c.l.number)[(parseDate(date).getDay() + 6) % 7];
  return s ? { ...s, key: sessionKey(c.p.id, c.l.number, date), label: `${c.p.name} L${c.l.number} · ${s.name}` } : null;
}
function sessionDone(key, date) {
  return activityItems(date).some((a) => a.id === key);
}
function tickSession(key, label, done) {
  const m = /^ps:([a-z-]+):(\d+):(\d{4}-\d{2}-\d{2})$/.exec(key);
  if (!m || m[3] > today()) return toast('Sessions can be recorded for today or earlier.');
  const date = m[3];
  let list = activityItems(date).filter((a) => a.id !== key);
  if (done) {
    const sched = psSchedule(m[1], Number(m[2]))[(parseDate(date).getDay() + 6) % 7];
    list.push({ id: key, type: 'programme', name: String(label).slice(0, 120), effort: /LIGHT|gentle|Gentle/.test(sched?.detail || '') ? 'easy' : '', note: `${m[1]} level ${m[2]}` });
  }
  writeActivities(date, list);
  renderPreservingScroll();
  toast(done ? 'Session recorded — it counts towards your weekly activity.' : 'Session removed.');
}
function programmeCard(date = today()) {
  loadProgrammes();
  if (!programmes) return '<h3>Pain Solution programme</h3><p class="helper-note">Loading your programmes…</p>';
  if (!programmes.length) return `<h3>Pain Solution programme</h3><p class="helper-note">The programme library could not load. Please try again later.</p>`;
  const c = currentProgramme();
  if (!c) return `<h3>Pain Solution programme</h3><p class="helper-note">Choose your programme and level once; your planned sessions then appear here to tick off.</p><a class="btn secondary" href="#exercise">Choose my programme ${I('arrow')}</a>`;
  const s = sessionFor(date);
  return `<div class="eyebrow">Pain Solution · ${esc(c.p.id === 'full-body' ? 'Full Body · ' + c.l.stage : c.p.name)}</div><h3>Level ${c.l.number}: ${esc(c.l.title)}</h3>${s ? `<label class="session-tick ${sessionDone(s.key, date) ? 'done' : ''}"><input type="checkbox" data-session-tick="${s.key}" data-session-name="${esc(s.label)}" ${sessionDone(s.key, date) ? 'checked' : ''} ${date > today() ? 'disabled' : ''}><span><strong>${esc(s.name)}</strong><small>${esc(s.detail)}</small></span></label>` : '<p class="helper-note">Rest day in your programme — your usual activity.</p>'}<div class="button-row"><a class="btn small" href="${esc(c.l.url)}" target="_blank" rel="noopener noreferrer">Open exercises ${I('external')}</a><span class="code-chip">Code <code>${esc(c.l.code)}</code></span></div><a class="link-btn small" href="#exercise">Week plan, levels & programmes ${I('arrow')}</a>`;
}
function programmeTodayLine() {
  if (!programmes) loadProgrammes();
  const s = sessionFor(today());
  if (!s) return '';
  return `<p class="dash-programme">${sessionDone(s.key, today()) ? '✓' : '○'} Pain Solution: ${esc(s.name)}${sessionDone(s.key, today()) ? ' done' : ' planned today'}</p>`;
}
function exerciseView() {
  currentRecord = null;
  loadProgrammes();
  const head = heading('Pain Solution programme', 'Your exercise programme.', 'Your Pain Solution programmes, levels and weekly sessions, inside your journal. Ticked sessions count as activity — no need to record them twice.');
  if (!programmes) return head + '<section class="card card-pad"><p>Loading programmes…</p></section>';
  if (!programmes.length) return head + `<section class="card card-pad"><p>The programme library could not load. Please try again later.</p></section>`;
  const c = currentProgramme(), done = completedLevels();
  const browsing = programmes.find((p) => p.id === (browseProgramme || c?.p.id || 'full-body')) || programmes[0];
  const start = monday(today());
  const week = c
    ? `<section class="card card-pad"><div class="card-heading"><div><div class="eyebrow">This week · ${pretty(start, { day: 'numeric', month: 'short' })} – ${pretty(shift(start, 6), { day: 'numeric', month: 'short' })}</div><h2>${esc(c.p.name)} · Level ${c.l.number}: ${esc(c.l.title)}</h2><p>${esc(c.l.description)}</p></div></div><div class="button-row"><a class="btn" href="${esc(c.l.url)}" target="_blank" rel="noopener noreferrer">Open my exercises in MedBridge ${I('external')}</a><button class="btn secondary" data-up="copy-code" data-code="${esc(c.l.code)}">Copy code ${esc(c.l.code)}</button></div><div class="ps-week">${psSchedule(c.p.id, c.l.number)
        .map((s, i) => {
          const d = shift(start, i), key = sessionKey(c.p.id, c.l.number, d), isDone = s && sessionDone(key, d);
          return `<div class="ps-day ${!s ? 'rest' : ''} ${isDone ? 'done' : ''} ${d === today() ? 'today' : ''}"><span class="ps-date"><b>${pretty(d, { weekday: 'short' })}</b>${parseDate(d).getDate()}</span><span class="ps-label"><strong>${s ? esc(s.name) : 'Rest / usual activity'}</strong>${s ? `<small>${esc(s.detail)}</small>` : ''}</span>${s ? `<input type="checkbox" aria-label="${esc(s.name)} on ${pretty(d)}" data-session-tick="${key}" data-session-name="${esc(`${c.p.name} L${c.l.number} · ${s.name}`)}" ${isDone ? 'checked' : ''} ${d > today() ? 'disabled' : ''}>` : ''}</div>`;
        })
        .join('')}</div><details class="explain"><summary>Routine & ${c.l.milestones ? 'milestones' : 'progression'} ${I('down')}</summary><p><strong>Routine:</strong> ${esc(c.l.routine)}</p>${c.l.includes ? `<p><strong>Includes:</strong> ${esc(c.l.includes)}</p>` : ''}<p><strong>${c.l.milestones ? 'Milestones' : 'Progress'}:</strong> ${esc(c.l.milestones || c.l.progress)}</p></details></section>`
    : `<section class="card card-pad"><h2>Choose your programme</h2><p class="helper-note">Pick the programme and level your therapist suggested, or start at Level 1. You can change it at any time.</p></section>`;
  const levels = browsing.levels
    .map((l) => {
      const isCur = c && c.p.id === browsing.id && c.l.number === l.number, k = `${browsing.id}:${l.number}`;
      return `<article class="ps-level ${isCur ? 'current' : ''}"><div class="ps-level-top"><span>LEVEL ${l.number}${browsing.id === 'full-body' ? ` · ${esc(l.stage)}` : ''}</span>${isCur ? '<b>MY LEVEL</b>' : ''}</div><h4>${esc(l.title)}</h4><p>${esc(l.description)}</p><div class="button-row"><a class="link-btn small" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">Exercises · ${esc(l.code)} ${I('external')}</a>${isCur ? '' : `<button class="btn subtle small" data-up="ps-set" data-programme="${browsing.id}" data-level="${l.number}">Make this my level</button>`}</div><label class="checkbox-row small"><input type="checkbox" data-up-change="ps-complete" data-key="${k}" ${done[k] ? 'checked' : ''}>${browsing.id === 'full-body' ? 'Milestones comfortable — level complete' : 'Ready to progress — level complete'}</label></article>`;
    })
    .join('');
  return `${head}${PAIN_SOLUTION_URL ? `<div class="ps-link card"><div><strong>Prefer the full Pain Solution app?</strong><p class="helper-note">It stays available, with the workbook and install option. Progress you tick there is stored separately in that app; use the import below to bring it across once.</p></div><a class="btn secondary" href="${PAIN_SOLUTION_URL}" target="_blank" rel="noopener">Open Pain Solution Move ${I('external')}</a></div>` : ''}${week}<div class="section-title"><h2>Programmes & levels</h2></div><div class="chip-row ps-picker">${programmes.map((p) => `<button class="tab ${p.id === browsing.id ? 'active' : ''}" data-up="ps-browse" data-programme="${p.id}">${esc(p.name)}</button>`).join('')}</div><p class="helper-note">${esc(browsing.tagline)}</p>${browsing.caution ? `<div class="notice warning">${esc(browsing.caution)}</div>` : ''}<div class="ps-levels">${levels}</div><section class="card card-pad" style="margin-top:22px"><h3>Bring progress across from the Pain Solution app</h3><p class="helper-note">In the Pain Solution app, use “Copy progress to my journal” to download a small file, then choose it here. Your current level, completed levels and ticked sessions are added; nothing already in your journal is overwritten.</p><label class="btn secondary file-btn">${I('upload')}Choose progress file<input type="file" id="ps-import" accept="application/json,.json" hidden></label></section><p class="helper-note" style="margin-top:16px">Exercise demonstrations are hosted by MedBridge for Pain Solution. Ticking a session here records that you did it; it is not read from MedBridge.</p>`;
}
function programmeAction(name, el) {
  if (name === 'ps-browse') {
    browseProgramme = el.dataset.programme;
    return renderPreservingScroll();
  }
  if (name === 'ps-set') {
    const p = programmes?.find((x) => x.id === el.dataset.programme), n = Number(el.dataset.level);
    if (!p?.levels.some((l) => l.number === n)) return;
    saveExercise({ programme: p.id, level: String(n), levelSince: today() });
    renderPreservingScroll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return toast(`${p.name} Level ${n} is now your programme.`);
  }
  if (name === 'copy-code') {
    const code = el.dataset.code;
    navigator.clipboard?.writeText(code).then(() => toast('Access code copied.'), () => toast(`Your access code is ${code}.`));
    if (!navigator.clipboard) toast(`Your access code is ${code}.`);
    return;
  }
  if (name === 'prog-untick') {
    const a = activityItems(currentDate).find((x) => x.id === el.dataset.id);
    if (a) tickSession(a.id, a.name, false);
    return;
  }
  return false;
}
function bindExercise() {
  document.querySelectorAll('[data-up-change="ps-complete"]').forEach((el) =>
    el.addEventListener('change', () => {
      const done = completedLevels();
      if (el.checked) done[el.dataset.key] = true;
      else delete done[el.dataset.key];
      saveExercise({ completed: JSON.stringify(done) });
      toast(el.checked ? 'Level recorded. Move on only when it feels right — there is no deadline.' : 'Level completion removed.');
    }),
  );
}
async function importPainSolution(ev) {
  const file = ev.target.files[0];
  ev.target.value = '';
  if (!file) return;
  try {
    if (file.size > 2 * 1024 * 1024) throw Error('size');
    const data = JSON.parse(await file.text());
    const st = data?.state;
    if (data?.app !== 'Pain Solution Move' || st?.version !== 1 || typeof st.sessions !== 'object') throw Error('format');
    if (!programmes) throw Error('programmes');
    const valid = (id, n) => programmes.some((p) => p.id === id && p.levels.some((l) => l.number === Number(n)));
    let added = 0;
    const byDate = {};
    for (const key of Object.keys(st.sessions || {})) {
      const m = /^([a-z-]+):(\d+):(\d{4}-\d{2}-\d{2})$/.exec(key);
      if (!m || !st.sessions[key] || !valid(m[1], m[2]) || !dateOk(m[3]) || m[3] > today()) continue;
      const s = psSchedule(m[1], Number(m[2]))[(parseDate(m[3]).getDay() + 6) % 7];
      if (!s) continue;
      (byDate[m[3]] ||= []).push({ id: sessionKey(m[1], Number(m[2]), m[3]), type: 'programme', name: `${programmes.find((p) => p.id === m[1]).name} L${m[2]} · ${s.name}`.slice(0, 120), effort: /LIGHT|gentle|Gentle/.test(s.detail) ? 'easy' : '', note: `${m[1]} level ${m[2]}` });
    }
    for (const [date, items] of Object.entries(byDate)) {
      const list = activityItems(date);
      for (const it of items) if (!list.some((a) => a.id === it.id) && list.length < 60) (list.push(it), added++);
      writeActivities(date, list);
    }
    const done = completedLevels();
    for (const k of Object.keys(st.completed || {})) {
      const [id, n] = k.split(':');
      if (st.completed[k] === true && valid(id, n)) done[k] = true;
    }
    const fields = { completed: JSON.stringify(done) };
    if (!exerciseRecord()?.fields.programme && st.current && valid(st.current.programme, st.current.level)) Object.assign(fields, { programme: st.current.programme, level: String(st.current.level), levelSince: today() });
    saveExercise(fields);
    renderPreservingScroll();
    toast(`Imported ${added} session${added === 1 ? '' : 's'} and your completed levels.`);
  } catch {
    toast('That doesn’t look like a Pain Solution progress file. Nothing was changed.');
  }
}

// ===================== Optional consistency levels (1–12) =====================
// Separate from Pain Solution exercise levels. Rewards showing up, learning and reflecting.
// A "good week" needs any 2 of 4 behaviours; every 4 good weeks (about a month) is a new level.
// No streaks: missed weeks never lower a level.
const LEVEL_NAMES = ['Starting out', 'Showing up', 'Finding a rhythm', 'Building habits', 'Steady', 'Learning what works', 'Adapting', 'Consistent', 'Resilient', 'Self-led', 'Sustaining', 'Mentor to yourself'];
function weekCriteria(start) {
  const days = Array.from({ length: 7 }, (_, i) => shift(start, i));
  const logged = days.filter((d) => state.entries[`daily:${d}`] || foodItems(d).length || activityItems(d).length).length;
  const moved = days.filter((d) => activityItems(d).length || upNum(state.entries[`daily:${d}`]?.fields.steps)).length;
  const learned = Object.values(state.entries).some((e) => /^(page\d+|snapshot|pause|body|weekly)$/.test(e.kind) && e.date >= days[0] && e.date <= days[6]);
  const reviewed = reviews('complete').some((r) => r.fields.completedOn >= days[0] && r.fields.completedOn <= days[6]);
  const met = [logged >= 3, moved >= 2, learned, reviewed];
  return { start, logged, moved, learned, reviewed, met, good: met.filter(Boolean).length >= 2 };
}
function levelInfo() {
  const startDay = profile().onboardedAt;
  if (!startDay) return null;
  const weeks = [];
  for (let w = monday(startDay); w <= today(); w = shift(w, 7)) weeks.push(weekCriteria(w));
  const good = weeks.filter((w) => w.good).length;
  const level = Math.min(12, 1 + Math.floor(good / 4));
  return { level, name: LEVEL_NAMES[level - 1], good, toNext: level >= 12 ? 0 : 4 - (good % 4), weeks };
}
function levelLine() {
  if (profile().levels !== 'true') return '';
  const L = levelInfo();
  if (!L) return '';
  return `<p class="level-line"><strong>Consistency level ${L.level}</strong> · ${esc(L.name)}<br><small>${L.level >= 12 ? 'Top level reached — keep going your way.' : `${4 - L.toNext} of 4 good weeks towards Level ${L.level + 1}`}</small></p>`;
}
function levelCard() {
  const on = profile().levels === 'true';
  if (!on) return `<section class="card card-pad"><h2>Consistency levels (optional)</h2><p class="helper-note">An optional Level 1–12 system that rewards showing up, learning and reflecting — not perfection. A good week needs any two of: logging on 3 days, moving on 2 days, reading or reflecting in the journal, or completing your check-in. Four good weeks (about a month) take you to the next level, and missed weeks never take you down.</p><button class="btn secondary" data-up="levels-on">Turn on consistency levels</button></section>`;
  const L = levelInfo();
  const recent = L.weeks.slice(-4).reverse();
  const tick = (b) => (b ? '✓' : '·');
  return `<section class="card card-pad"><div class="card-heading"><div><h2>Consistency level ${L.level}: ${esc(L.name)}</h2><p>${L.good} good week${L.good === 1 ? '' : 's'} so far${L.level < 12 ? ` · ${L.toNext} more for Level ${L.level + 1}` : ''}. Separate from your exercise programme levels.</p></div></div><div class="level-track">${Array.from({ length: 12 }, (_, i) => `<span class="${i < L.level ? 'on' : ''}">${i + 1}</span>`).join('')}</div><div class="table-wrap"><table class="mini-table"><thead><tr><th>Week of</th><th>Logged 3 days</th><th>Moved 2 days</th><th>Learned</th><th>Check-in</th><th>Good week</th></tr></thead><tbody>${recent.map((w) => `<tr><th>${pretty(w.start, { day: 'numeric', month: 'short' })}</th>${w.met.map((m) => `<td>${tick(m)}</td>`).join('')}<td>${w.good ? '✓' : w.start >= monday(today()) ? 'in progress' : '—'}</td></tr>`).join('')}</tbody></table></div><p class="helper-note">Any two of the four make a good week. Take a break whenever you need one; your level waits for you. <button class="link-btn small" data-up="levels-off">Turn off</button></p></section>`;
}

// ===================== "Next to do" guide =====================
// A gentle, optional order for exploring the journal. Set-up steps tick themselves off from
// what the person has recorded; learning topics are ticked off by the person (or by the
// weekly plan's "I've reviewed this topic" box). Stored in the profile as `guide` (JSON).
const GUIDE = [
  { key: 'profile', kind: 'auto', title: 'Set up your profile', blurb: 'Your goal, targets and what matters to you.', link: 'profile', icon: 'person' },
  { key: 'daily', kind: 'auto', title: 'Do your first daily check-in', blurb: 'Sleep, mood and energy in under a minute.', link: 'today', icon: 'sun' },
  { key: 'food', kind: 'auto', title: 'Log a meal or snack', blurb: 'Search, scan or type in anything you ate today.', link: 'food', icon: 'food' },
  { key: 'move', kind: 'auto', title: 'Record some movement', blurb: 'Steps, a walk, or any activity counts.', link: 'move', icon: 'activity' },
  { key: 'sleep', kind: 'learn', title: 'Sleep & recovery', blurb: 'Notice your sleep and choose one small evening change.', link: 'read/8', from: 8, to: 9, legacy: 0, icon: 'moon' },
  { key: 'selfcare', kind: 'learn', title: 'Everyday self-care', blurb: 'Find a smaller, kinder version of an ordinary day.', link: 'read/10', from: 10, to: 13, legacy: 1, icon: 'heart' },
  { key: 'programme', kind: 'auto', optional: true, title: 'Choose your Pain Solution programme', blurb: 'Optional — pick the level your therapist suggested.', link: 'exercise', icon: 'activity' },
  { key: 'foodcare', kind: 'learn', title: 'Food & body care', blurb: 'Nourishment, practical choices and optional tracking.', link: 'read/14', from: 14, to: 28, legacy: 2, icon: 'food' },
  { key: 'checkin', kind: 'auto', title: 'Your first weekly check-in', blurb: 'A two-minute look back at your week.', link: 'checkin', icon: 'calendar' },
  { key: 'screens', kind: 'learn', title: 'Screen time & attention', blurb: 'Make a little more room for what matters to you.', link: 'read/29', from: 29, to: 30, legacy: 3, icon: 'phone' },
  { key: 'pause', kind: 'learn', title: 'Pausing & meditation', blurb: 'Try a brief pause, without having to feel a certain way.', link: 'read/31', from: 31, to: 32, legacy: 4, icon: 'leaf' },
  { key: 'goals', kind: 'learn', title: 'Your life & goal setting', blurb: 'See where you are and choose a step that feels possible.', link: 'read/33', from: 33, to: 36, legacy: 5, icon: 'wheel' },
  { key: 'capability', kind: 'learn', title: 'Movement & everyday capability', blurb: 'Simple checks with clear set-up and stop guidance.', link: 'read/37', from: 37, to: 49, legacy: 6, icon: 'activity' },
  { key: 'mobility', kind: 'learn', title: 'Mobility & comfort', blurb: 'Notice movement and discomfort, without a diagnosis.', link: 'read/50', from: 50, to: 60, legacy: 7, icon: 'person' },
  { key: 'review', kind: 'learn', title: 'Review & your next direction', blurb: 'Keep what helps. Adapt what no longer fits.', link: 'read/61', from: 61, to: 62, legacy: 8, icon: 'flag' },
];
function guideTicks() {
  try {
    const o = JSON.parse(profile().guide || '{}');
    return o && typeof o === 'object' && !Array.isArray(o) ? o : {};
  } catch {
    return {};
  }
}
function guideAuto(key) {
  const entries = Object.values(state.entries);
  if (key === 'profile') return onboarded();
  if (key === 'daily') return entries.some((e) => e.kind === 'daily');
  if (key === 'food') return entries.some((e) => e.kind === 'food');
  if (key === 'move') return entries.some((e) => e.kind === 'activity' || (e.kind === 'daily' && upNum(e.fields.steps) !== null));
  if (key === 'programme') return !!exerciseRecord()?.fields.programme;
  if (key === 'checkin') return reviews('complete').length > 0;
  return false;
}
function guideStatus() {
  const ticks = guideTicks(), plan = planRecord()?.fields || {};
  return GUIDE.map((g) => {
    const done = g.kind === 'auto' ? guideAuto(g.key) || !!ticks[g.key] : !!ticks[g.key] || plan['done' + g.legacy] === 'true';
    const waiting = g.key === 'checkin' && !done && !checkinIsDue() && !reviews('draft').length ? checkinDue() : null;
    return { ...g, done, waiting };
  });
}
function guideCard() {
  if (profile().guideHidden === 'true') return '';
  const list = guideStatus(), doneCount = list.filter((g) => g.done).length;
  const next = list.find((g) => !g.done && !g.waiting);
  const after = next ? list.filter((g) => !g.done && g !== next).slice(0, 2) : [];
  const pct = Math.round((doneCount / list.length) * 100);
  const row = (g) =>
    `<li class="guide-item ${g.done ? 'done' : ''} ${g === next ? 'is-next' : ''}"><button class="guide-tick" data-up="guide-tick" data-key="${g.key}" aria-pressed="${g.done}" aria-label="${g.done ? 'Untick' : 'Tick off'} ${esc(g.title)}" ${g.kind === 'auto' && guideAuto(g.key) ? 'disabled title="Ticked automatically from what you recorded"' : ''}>${g.done ? '✓' : ''}</button><a href="#${g.link}"><strong>${esc(g.title)}${g.optional ? ' <small>optional</small>' : ''}</strong><span>${g.waiting ? `Opens ${pretty(g.waiting, { weekday: 'long', day: 'numeric', month: 'short' })}` : esc(g.blurb)}</span></a></li>`;
  return `<section class="card guide-card" aria-labelledby="guide-h"><div class="guide-head"><div><div class="eyebrow">Your journal, one step at a time</div><h2 id="guide-h">Next to do</h2></div><div class="guide-progress" aria-label="${doneCount} of ${list.length} done"><span>${doneCount} of ${list.length} done</span><div class="bar"><i style="width:${pct}%"></i></div></div></div>${
    next
      ? `<a class="guide-next" href="#${next.link}">${I(next.icon || 'arrow')}<span><small>Up next</small><strong>${esc(next.title)}</strong><em>${esc(next.blurb)}</em></span><span class="btn small">${next.kind === 'learn' ? 'Open' : 'Start'} ${I('arrow')}</span></a>${after.length ? `<p class="guide-after">Then: ${after.map((g) => esc(g.title) + (g.waiting ? ` (from ${pretty(g.waiting, { day: 'numeric', month: 'short' })})` : '')).join(' · ')}</p>` : ''}`
      : `<p class="guide-alldone">${doneCount === list.length ? 'Everything on the list is ticked off. Keep coming back to the topics that help — the list is yours to reuse.' : 'You’re up to date. The next item opens soon.'}</p>`
  }<details class="guide-all"><summary>See the full list ${I('down')}</summary><ol class="guide-list">${list.map(row).join('')}</ol><p class="helper-note">Go in any order and skip anything that doesn’t fit. Set-up steps tick themselves off; tap the circle to tick off a topic when you’ve read it and tried something. <button class="link-btn small" data-up="guide-hide">Hide this list</button></p></details></section>`;
}
function setGuideTick(key, on) {
  const rec = profileRecord();
  if (!rec) return;
  const t = guideTicks();
  if (on) t[key] = today();
  else delete t[key];
  rec.fields.guide = JSON.stringify(t);
  saveRecordObject(rec);
}
function guideAction(name, el) {
  if (name === 'guide-tick') {
    const g = GUIDE.find((x) => x.key === el.dataset.key);
    if (!g || (g.kind === 'auto' && guideAuto(g.key))) return;
    const st = guideStatus().find((x) => x.key === g.key);
    const plan = planRecord();
    if (st.done && g.kind === 'learn' && plan?.fields['done' + g.legacy] === 'true') {
      plan.fields['done' + g.legacy] = 'false';
      saveRecordObject(plan);
    }
    setGuideTick(g.key, !st.done);
    renderPreservingScroll();
    if (!st.done) toast(`${g.title} ticked off.`);
    return;
  }
  if (name === 'guide-hide' || name === 'guide-show') {
    const rec = profileRecord();
    if (!rec) return;
    rec.fields.guideHidden = name === 'guide-hide' ? 'true' : 'false';
    saveRecordObject(rec);
    renderPreservingScroll();
    return toast(name === 'guide-hide' ? 'List hidden. Bring it back any time from your profile.' : 'Your “Next to do” list is back on Home.');
  }
  return false;
}
// End-of-chapter strip on reading pages: "Tick it off" and what comes next.
function chapterGuideStrip() {
  const [r, n] = route().split('/');
  if (r !== 'read') return '';
  const num = Number(n), g = GUIDE.find((x) => x.kind === 'learn' && num >= x.from && num <= x.to);
  if (!g) return '';
  const list = guideStatus(), st = list.find((x) => x.key === g.key);
  const next = list.find((x) => !x.done && !x.waiting && x.key !== g.key);
  return `<section class="card chapter-done ${st.done ? 'done' : ''}"><div><h3>${st.done ? `✓ ${esc(g.title)} is ticked off` : `Finished with ${esc(g.title)}?`}</h3><p>${st.done ? (next ? `Next to do: <a class="text-link" href="#${next.link}">${esc(next.title)}</a>` : 'Everything on your list is ticked off.') : 'Tick it off when you’ve read it and tried one thing. You can come back any time.'}</p></div>${st.done ? `<button class="btn subtle small" data-guide-chapter="${g.key}" data-on="false">Untick</button>` : `<button class="btn" data-guide-chapter="${g.key}" data-on="true">Tick it off ${I('check')}</button>`}</section>`;
}
function injectChapterGuide() {
  const html = chapterGuideStrip(), main = document.querySelector('#main');
  if (!html || !main || typeof main.insertAdjacentHTML !== 'function') return;
  main.insertAdjacentHTML('beforeend', html);
  main.querySelectorAll('[data-guide-chapter]').forEach((b) =>
    b.addEventListener('click', () => {
      setGuideTick(b.dataset.guideChapter, b.dataset.on === 'true');
      renderPreservingScroll();
      if (b.dataset.on === 'true') toast('Ticked off. Nice work.');
    }),
  );
}

let selectedDates={},state={version:1,entries:{}},storageError='',pages=[],currentDate=today(),currentRecord=null,searchTerm='',historyFilter='all',bodySide='front';
let timerLeft=60,timerEnd=0,timerTick=null,timerRunning=false;
try{const raw=localStorage.getItem(KEY);if(raw){const x=JSON.parse(raw);if(x.version!==1||!x.entries||typeof x.entries!=='object'||Array.isArray(x.entries)||!Object.entries(x.entries).every(([id,e])=>validEntry(e,id)))throw Error('format');state=x;}}catch{storageError='Your saved journal could not be opened. Entries will stay in memory for now. Download a backup before leaving; stored data has not been overwritten.';}
function persist(){if(storageError.includes('could not be opened'))return false;try{localStorage.setItem(KEY,JSON.stringify(state));storageError='';return true}catch{storageError='This browser cannot save your entries right now. Download a backup before leaving. Private browsing or storage limits may be the reason.';return false;}}
function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.handle);toast.handle=setTimeout(()=>el.classList.remove('show'),3400);}
const navs=[['home','home','Home'],['today','sun','Daily journal'],['food','food','Food'],['move','activity','Movement'],['checkin','calendar','Weekly check-in'],['progress','chart','Progress'],['explore','book','Learn'],['plan','flag','Weekly plan'],['tools','grid','Tools'],['journal','journal','My journal']];
const chapters=[
{name:'Sleep & recovery',icon:'moon',from:8,to:9,do:9,desc:'Make room for rest that fits your real life.'},
{name:'Everyday self-care',icon:'heart',from:10,to:13,do:13,desc:'Notice what you need. Find a smaller, kinder version.'},
{name:'Food & body care',icon:'food',from:14,to:28,do:15,desc:'Nourishment, practical choices and optional tracking.'},
{name:'Screen time & attention',icon:'phone',from:29,to:30,do:30,desc:'Make a little more room for what matters to you.'},
{name:'Meditation',icon:'leaf',from:31,to:32,do:'pause',desc:'An invitation to pause, without having to feel a certain way.'},
{name:'Your life & goal setting',icon:'wheel',from:33,to:36,do:'snapshot',desc:'See where you are. Choose a step that feels possible.'},
{name:'Fitness checks',icon:'activity',from:37,to:49,do:38,desc:'Observe everyday capability, with clear setup and stop guidance.'},
{name:'Mobility & comfort',icon:'person',from:50,to:60,do:'body',desc:'Notice movement and discomfort, without making a diagnosis.'},
{name:'Review & continue',icon:'flag',from:61,to:62,do:62,desc:'Keep what helps. Adapt what no longer fits.'}];
const areaNames=['Rest & energy','Food & body care','Movement','Relationships','Work & money','Home & support','Play & creativity','Meaning & self'];
const linkFor=v=>typeof v==='number'?`read/${v}`:v;
const route=()=>location.hash.slice(1)||'home';
function legacySection(){const r=route().split('/')[0];return ['read','sources'].includes(r)?'explore':['snapshot','pause','body','energy','videos'].includes(r)?'tools':r;}
function record(kind,title){const id=`${kind}:${currentDate}`;currentRecord={id,kind,date:currentDate,fields:{},...(state.entries[id]||{}),title};recordDrafts[id]=currentRecord;return currentRecord;}
const value=name=>currentRecord?.fields[name]??'';
function field(name,label,options={}){
 const v=value(name),{type='textarea',placeholder='',unit='',min,max,step,help='',icon='',className=''}=options;
 const id=`f-${name}`;
 let input=type==='textarea'?`<textarea id="${id}" ${scopeAttrs()} data-field="${esc(name)}" rows="${options.rows||2}" maxlength="12000" placeholder="${esc(placeholder)}">${esc(v)}</textarea>`:type==='select'?`<select id="${id}" ${scopeAttrs()} data-field="${esc(name)}">${options.options.map(([val,t])=>`<option value="${esc(val)}" ${String(v)===String(val)?'selected':''}>${esc(t)}</option>`).join('')}</select>`:`<input id="${id}" ${scopeAttrs()} data-field="${esc(name)}" type="${type}" value="${esc(v)}" placeholder="${esc(placeholder)}" ${min!==undefined?`min="${min}"`:''} ${max!==undefined?`max="${max}"`:''} ${step!==undefined?`step="${step}"`:''} ${type==='number'?'inputmode="decimal"':''} maxlength="1000">`;
 if(unit)input=`<div class="input-unit">${input}<span>${esc(unit)}</span></div>`;
 return `<div class="field ${className}"><label for="${id}">${icon?I(icon):''}${esc(label)}</label>${input}${help?`<small class="field-help">${esc(help)}</small>`:''}</div>`;
}
const saveFooter=(label='Save reflection')=>`<div class="form-footer"><span class="save-state" role="status">${I('check')}<span class="save-label" data-save-status="${esc(currentRecord?.id)}">${state.entries[currentRecord?.id]?'Saved on this device':'Your words save as you go'}</span></span><button class="btn" data-action="save" ${scopeAttrs()}>${label}${I('arrow')}</button></div>`;
const dateControl=(week=false)=>`<label class="date-label" for="entry-date">${week?'Week beginning':'Journal date'}<input class="date-field" id="entry-date" type="date" value="${week?monday(currentDate):currentDate}" max="${today()}" aria-label="${week?'Choose week':'Choose journal date'}"></label>`;
function heading(eyebrow,title,sub,date=false){return `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p class="subtitle">${sub}</p></div>${date?dateControl(date==='week'):''}</div>`;}
const support=()=>`<div class="support-strip">${I('chat')}<div><h3>A little support can make a difference.</h3><p>Reach out to Ger for a coaching session to work through any of the material together.</p></div><a class="link-btn" href="https://www.wellmind.ie" target="_blank" rel="noopener noreferrer">Connect with Ger ${I('external')}</a></div>`;
function legacyShell(body){
const active=section();
return `<div class="shell"><aside class="sidebar"><a class="brand" href="#today" aria-label="Well Mind home">${brand}<div><span class="brand-name">WELL MIND</span><span class="brand-caption">WITH GER BOLAND</span></div></a><p class="series">Your everyday journal</p><nav class="nav" aria-label="Main navigation">${navs.map(([id,ic,name])=>`<a href="#${id}" class="${id===active?'active':''}" ${id===active?'aria-current="page"':''}>${I(ic)}${name}${id===active?'<span class="nav-dot"></span>':''}</a>`).join('')}</nav><div class="sidebar-bottom"><p>Space to notice.<br>A step that fits.</p><a href="#settings">${I('settings')}Your data & settings</a><span class="credit">ONE STEP FORWARD</span></div></aside><div class="workspace"><header class="topbar"><a class="mobile-brand" href="#today">${brand}WELL MIND</a><div class="breadcrumb"><span>Everyday Wellbeing</span><span>/</span><strong>${navs.find(n=>n[0]===active)?.[2]||'Your data'}</strong></div><a href="#settings" class="top-status">${I('lock')}${storageError?'Saving unavailable':'On this device'}</a></header>${storageError?`<div class="error-bar" role="alert">${esc(storageError)} <a class="text-link" href="#settings">Backup options</a></div>`:''}<main id="main" class="content" tabindex="-1">${body}<footer class="footnote"><span>WELL MIND · GER BOLAND &nbsp; / &nbsp; ONE STEP FORWARD</span><span>For education and reflection. Not diagnosis or treatment.</span></footer></main></div><nav class="mobile-nav" aria-label="Mobile navigation">${navs.filter(n=>['home','today','food','move','checkin'].includes(n[0])).map(([id,ic,name])=>`<a href="#${id}" class="${id===active?'active':''}" ${id===active?'aria-current="page"':''}>${I(ic)}<span>${mobileLabel(id,name)}</span></a>`).join('')}</nav></div>`;
}
function weekEntries(start){return Array.from({length:7},(_,i)=>state.entries[`daily:${shift(start,i)}`]||null);}
function miniWeek(){const m=monday(currentDate),entries=weekEntries(m);return `<div class="card week-mini"><h3>A moment for yourself</h3><p>Your check-ins this week</p><div class="day-dots">${entries.map((e,i)=>`<a href="#today" data-date="${shift(m,i)}" class="day-dot ${e?'recorded':''} ${shift(m,i)===today()?'current':''}" aria-label="${pretty(shift(m,i))}, ${e?'entry saved':'no entry'}"><span>${e?'✓':parseDate(shift(m,i)).getDate()}</span>${['M','T','W','T','F','S','S'][i]}</a>`).join('')}</div><p>No streak to keep. Return when it helps.</p><a class="link-btn" href="#week">See your week ${I('arrow')}</a></div>`;}
function average(entries,key){const vals=entries.filter(e=>e&&e.fields[key]!==''&&e.fields[key]!==undefined&&Number.isFinite(Number(e.fields[key]))).map(e=>Number(e.fields[key]));return {n:vals.length,value:vals.length?(vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1):'—'};}
function moodChart(entries,start){
let svg=`<svg class="chart" viewBox="0 0 420 195" role="img" aria-label="Mood and energy for the selected week. Empty days are left blank.">`;
for(let y=0;y<=10;y+=5)svg+=`<line x1="30" x2="405" y1="${155-y*13}" y2="${155-y*13}" stroke="#e2e5d9"/><text x="8" y="${159-y*13}" fill="#89907f" font-size="9">${y}</text>`;
for(const [key,color] of [['mood','#284e43'],['energy','#b6a271']]){
let prev=null;entries.forEach((e,i)=>{const v=e?.fields[key];if(v===undefined||v===''){prev=null;return;}const x=37+i*59,y=155-Number(v)*13;if(prev)svg+=`<line x1="${prev.x}" y1="${prev.y}" x2="${x}" y2="${y}" stroke="${color}" stroke-width="2"/>`;svg+=`<circle cx="${x}" cy="${y}" r="4" fill="${color}"><title>${pretty(shift(start,i))}: ${key} ${esc(v)}/10</title></circle>`;prev={x,y};});}
for(let i=0;i<7;i++)svg+=`<text x="${37+i*59}" y="183" fill="#75816f" text-anchor="middle" font-size="10">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}</text>`;
return svg+'</svg>';
}
function weekView(){currentDate=monday(currentDate);record('weekly','My week in view');const entries=weekEntries(currentDate);const stats=[['Sleep','sleep','hrs'],['Mood','mood','/ 10'],['Energy','energy','/ 10']];return heading('Notice a pattern','Your week, gently viewed.',`${pretty(currentDate,{day:'numeric',month:'short'})} – ${pretty(shift(currentDate,6),{day:'numeric',month:'short'})}. Use your notes, or simply think back.`,'week')+`<div class="stats-grid">${stats.map(([label,key,unit])=>{const a=average(entries,key);return `<div class="card stat"><span>Average ${label.toLowerCase()}</span><strong>${a.value} <small>${a.n?unit:''}</small></strong><small>${a.n?`${a.n} recorded day${a.n!==1?'s':''}`:'Not recorded yet'}</small></div>`}).join('')}</div><div class="week-layout"><section class="card card-pad"><div class="card-heading"><div><h2>My week in view</h2><p>A few words are enough. Every prompt is optional.</p></div></div>${field('sleep','Sleep / rest — what helped or got in the way?')}${field('mood','Mood / energy — a pattern I noticed')}${field('movement','Movement — how did it feel?')}${field('food','Food / protein')}${field('care','Self-care / support')}<hr class="divider">${field('well','Something that went well')}${field('challenge','A challenge I experienced')}${field('learning','My goal: what moved forward, and what did I learn?')}${field('priority','One priority for next week — and a small step or support')}${saveFooter('Save weekly review')}</section><aside><div class="card card-pad"><h3>Mood & energy</h3><p class="helper-note" style="margin-top:8px">Only recorded values are shown. Gaps are not zeros.</p>${moodChart(entries,currentDate)}<div class="legend"><span><i></i>Mood</span><span><i class="energy"></i>Energy</span></div><p class="helper-note">Look for something worth noticing, rather than a score to improve. These numbers do not explain the cause of a change.</p><div class="open-section"><h3>Recorded numbers</h3><div class="optional-body">${entries.map((e,i)=>`<p class="small">${pretty(shift(currentDate,i),{weekday:'short'})}: mood ${esc(e?.fields.mood??'—')}, energy ${esc(e?.fields.energy??'—')}</p>`).join('')}</div></div></div><div class="notice" style="margin-top:20px">A wider view can help occasionally.<br><a href="#snapshot">Revisit your life-area snapshot →</a></div></aside></div>`;}
const toolsList=[['snapshot','wheel','Your life & goal setting','Start here: notice what matters, explore your scores and choose a goal.'],['videos','play','Videos & guided meditation','Watch body-check demonstrations and a guided meditation directly in the app.'],['pause','leaf','Meditation & a one-minute pause','A guided video, a simple timer and space to notice.'],['body','person','My body map','Mark discomfort and keep notes about your own experience.'],['energy','calc','Calorie & protein calculator','Maintenance, 15% deficit, small surplus examples and daily calorie and protein targets.'],['food','food','Food diary','Find products, record portions and see daily calories and protein.'],['plan','calendar','Your weekly programme','Nine flexible topics alongside your daily habits.'],['read/13','heart','A plan for days when energy is low','Make meals, tasks and connection easier when capacity is limited.'],['read/36','flag','Goal setting with GROW','Choose a goal, understand your reality, explore options and choose a next step.'],['read/9','moon','An evening routine','Build a wind-down that fits your circumstances.'],['read/15','food','An ordinary day of eating','Use words about food, appetite and context.'],['read/30','phone','Protect my attention','Try a small change to how you use your phone.'],['read/7','activity','Steps, at my own pace','Find your step count, or describe movement without a device.'],['energy','food','Your protein estimate','Calculate grams per day alongside calorie needs.'],['read/38','activity','Before a body check','Read the setup and stop guidance before trying a check.']];
function toolsView(){currentRecord=null;return heading('Find what you need','Something practical, for today.','Choose one tool. You don’t need to work through them in order.')+`<div class="tool-grid">${toolsList.map(([url,ic,title,desc])=>`<a class="card topic-card" href="#${url}"><div class="topic-icon">${I(ic)}</div><h3>${title}</h3><p>${desc}</p><span class="link-btn">Open tool ${I('arrow')}</span></a>`).join('')}</div>`;}
function linkedText(text){return esc(text).replace(/p\. (\d{1,2})(?!\d)/g,(match,n)=>Number(n)>=2&&Number(n)<=65?`<a class="text-link" href="#read/${n}">${match}</a>`:match);}
function renderItems(items){return items.map(item=>{
if(item.kind==='field'){
const label=item.label.replace(/_{2,}/g,'…').replace(/ \/ row (\d+)$/,' · entry $1');
if(item.type==='checkbox')return `<label class="checkbox-row"><input type="checkbox" ${scopeAttrs()} data-field="${esc(item.id)}" ${value(item.id)==='true'?'checked':''}>${esc(label)}</label>`;
return field(item.id,label,{rows:item.table?2:3,placeholder:'A few words…'});
}
if(item.kind==='heading')return `<h3>${linkedText(item.text)}</h3>`;
if(item.kind==='columns')return `<div class="columns" style="--cols:${item.columns.length}">${item.columns.map(col=>`<div>${linkedText(col)}</div>`).join('')}</div>`;
return `<p class="${item.size<=8.6?'source-note':''}">${linkedText(item.text)}</p>`;
}).join('');}
function wheel(){const vals=areaNames.map((_,i)=>value(`area${i}`));const pt=(i,r)=>[175+r*Math.cos(-Math.PI/2+i*Math.PI/4),175+r*Math.sin(-Math.PI/2+i*Math.PI/4)];let s='<svg class="wheel" viewBox="0 0 350 350" role="img" aria-label="Wheel of Life. Each spoke shows your recorded score; blank areas are not scored.">';for(let r=25;r<=125;r+=25)s+=`<polygon points="${areaNames.map((_,i)=>pt(i,r).join(',')).join(' ')}" fill="none" stroke="#dde2d3"/>`;areaNames.forEach((_,i)=>{const p=pt(i,125);s+=`<line x1="175" y1="175" x2="${p[0]}" y2="${p[1]}" stroke="#dde2d3"/>`;const label=pt(i,151);s+=`<text x="${label[0]}" y="${label[1]+3}" text-anchor="middle">${i+1}</text>`;});if(vals.every(v=>v!==''))s+=`<polygon points="${vals.map((v,i)=>pt(i,Number(v)*12.5).join(',')).join(' ')}" fill="#9bb58a44" stroke="#67855b" stroke-width="2"/>`;vals.forEach((v,i)=>{if(v!==''){const p=pt(i,Number(v)*12.5);s+=`<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#284e43"><title>${areaNames[i]}: ${esc(v)}/10</title></circle>`;}});return s+'</svg>';}
function pauseView(showVideo=true){record('pause','A one-minute pause');return `<div class="simple-wrap">${heading('No special feeling required','A moment to notice.','Your eyes can stay open. You can stop whenever you want.',true)}<section class="card pause-view">${showVideo?meditationBlock():''}<div class="eyebrow" style="justify-content:center">${I('leaf')} One minute, for you</div><div class="pause-circle ${timerRunning?'running':''}" id="pause-circle"><strong id="timer-value">${timerLeft===60?'1:00':`0:${String(timerLeft).padStart(2,'0')}`}</strong><span id="timer-caption">${timerLeft===0?'Take a look around.':'Nothing to get right.'}</span></div><h2>Choose a simple anchor.</h2><p>A sound around you. Your feet on the floor. Your natural breathing. When your attention wanders, gently return. No need to change or hold your breath.</p><div class="pause-actions"><button class="btn" id="timer-button" data-action="timer">${I(timerRunning?'pause':'play')}${timerRunning?'Pause':timerLeft===60?'Begin a minute':timerLeft===0?'Begin again':'Continue'}</button><button class="btn secondary" data-action="timer-reset">${I('reset')}Reset</button></div><p class="helper-note">If inward attention feels distressing, stop and reconnect with the room or choose another activity. Meditation does not replace needed healthcare.</p><hr class="divider">${field('before','Before the pause, I noticed…')}${field('after','Afterwards, I noticed…')}${saveFooter('Save my notes')}<a class="original-link" href="#read/31">Understand meditation →</a></section></div>`;}
function bodySvg(){const selected=JSON.parse(value('areas')||'[]');const part=(id,label,shape)=>`<g class="part ${selected.includes(bodySide+':'+id)?'selected':''}" data-part="${id}" tabindex="0" role="button" aria-label="${bodySide}: ${label}" aria-pressed="${selected.includes(bodySide+':'+id)}"><title>${label}</title>${shape}</g>`;return `<svg class="body-picture" viewBox="0 0 260 410" aria-label="${bodySide} body map. Select an area or type its location in the notes."><text x="130" y="20" text-anchor="middle">${bodySide==='front'?'FRONT':'BACK'}</text><text x="35" y="61">${bodySide==='front'?'R':'L'}</text><text x="215" y="61">${bodySide==='front'?'L':'R'}</text>${part('head','Head and neck','<ellipse cx="130" cy="60" rx="24" ry="29"/><path d="M119 86v15h22V86"/>')}${part('upper','Shoulders and upper body','<path d="M119 98 91 106 98 178h64l7-72-28-8Z"/>')}${part('middle','Middle and lower body','<path d="M98 178 93 226l37 12 37-12-5-48Z"/>')}${part('arm-left',bodySide==='front'?'Right arm and hand':'Left arm and hand','<path d="M91 107c-12 4-17 29-19 56l-12 67c-4 16 4 24 11 15l11-71 16-21Z"/>')}${part('arm-right',bodySide==='front'?'Left arm and hand':'Right arm and hand','<path d="M169 107c12 4 17 29 19 56l12 67c4 16-4 24-11 15l-11-71-16-21Z"/>')}${part('leg-left',bodySide==='front'?'Right leg and foot':'Left leg and foot','<path d="M93 226 97 288 99 362l-8 17c-3 11 20 10 23 2l11-88 5-55Z"/>')}${part('leg-right',bodySide==='front'?'Left leg and foot':'Right leg and foot','<path d="M167 226 163 288 161 362l8 17c3 11-20 10-23 2l-11-88-5-55Z"/>')}</svg>`;}
function bodyView(){record('body','My body map');return `<div class="simple-wrap">${heading('Personal awareness','My body map.','Select an area, then describe what you notice. The map records an experience, not its cause.',true)}<div class="notice warning">Do not provoke symptoms to fill this in. New, severe or persistent symptoms deserve appropriate assessment. <a href="#read/50">Read the guidance on mobility and comfort.</a></div><section class="card card-pad">${practiceLinks()}<div class="body-layout"><div><div class="body-tabs"><button class="filter ${bodySide==='front'?'active':''}" data-side="front">Front</button><button class="filter ${bodySide==='back'?'active':''}" data-side="back">Back</button></div><div id="body-visual">${bodySvg()}</div><p class="helper-note" style="text-align:center">R and L mean your right and left.<br>Select again to remove a mark.</p><p id="marked-areas" class="helper-note">${areaDescription()}</p></div><div>${field('location','Location / details',{placeholder:'Be as specific as is useful to you.'})}${field('severity','Severity',{type:'number',min:0,max:10,step:1,unit:'/ 10',help:'0 = no discomfort, 10 = worst imaginable.'})}${field('when','When does it occur?')}${field('change','What has changed since last time?')}</div></div><div class="field-grid">${field('better','What seems to ease it?')}${field('worse','What seems to aggravate it?')}</div>${saveFooter('Save body notes')}</section></div>`;}
function areaDescription(){const a=JSON.parse(value('areas')||'[]');return a.length?`${a.length} area${a.length>1?'s':''} marked across front and back. Add details in the location box.`:'No areas marked yet. You can also use words without marking the map.';}
function journalView(){currentRecord=null;const entries=Object.values(state.entries).sort((a,b)=>b.date.localeCompare(a.date)||b.updatedAt.localeCompare(a.updatedAt));return heading('Your words, over time','My journal.','Return to an entry, add to it, or start again on a different date.')+`<div class="filter-row">${[['all','All entries'],['daily','Daily'],['weekly','Weekly'],['tools','Tools & reflections']].map(([k,l])=>`<button class="filter ${historyFilter===k?'active':''}" data-filter="${k}">${l}</button>`).join('')}<a class="filter" href="#settings">Backup & data</a></div><div class="list">${entries.filter(e=>historyFilter==='all'||e.kind===historyFilter||historyFilter==='tools'&&!['daily','weekly'].includes(e.kind)).map(e=>`<div class="card entry"><a class="entry-date" href="#${entryRoute(e)}" data-date="${e.date}" aria-label="Open ${esc(e.title)} for ${pretty(e.date)}">${parseDate(e.date).getDate()}<small>${pretty(e.date,{month:'short'})}</small></a><a class="entry-main" href="#${entryRoute(e)}" data-date="${e.date}"><h3>${esc(e.title)} <small style="color:var(--muted);font-weight:400">· ${parseDate(e.date).getFullYear()}</small></h3><p>${esc(entryPreview(e))}</p></a><button class="icon-btn" data-delete="${esc(e.id)}" aria-label="Delete ${esc(e.title)} for ${pretty(e.date)}">${I('trash')}</button><a class="icon-btn" href="#${entryRoute(e)}" data-date="${e.date}" aria-label="Edit entry">${I('arrow')}</a></div>`).join('')||`<div class="card empty">${I('journal')}<h3>A space that grows with you.</h3><p>Your saved check-ins and reflections will appear here. A few words is a good place to begin.</p><a class="btn" href="#today">Make a check-in ${I('arrow')}</a></div>`}</div>`;}
function legacyEntryRoute(e){return e.kind==='daily'?'today':e.kind==='weekly'?'week':e.kind==='targets'?'food':e.kind.startsWith('page')?`read/${e.kind.slice(4)}`:e.kind;}
function legacyEntryPreview(e){if(e.kind==='daily')return e.fields.action||e.fields.mind||[['sleep','Sleep','h'],['mood','Mood','/10'],['energy','Energy','/10']].filter(([k])=>e.fields[k]!==undefined&&e.fields[k]!=='').map(([k,l,u])=>`${l} ${e.fields[k]}${u}`).join(' · ')||'Optional details recorded';if(e.kind==='food')return `${foodItems(e.date).length} foods recorded`;if(e.kind==='targets')return 'Your chosen daily nutrition targets';if(e.kind==='plan')return 'Weekly topics and daily focus';if(e.kind==='weekly')return e.fields.priority||e.fields.well||'Weekly reflections';return Object.entries(e.fields).find(([k,v])=>!['areas','true','false'].includes(k)&&v&&v!=='true'&&v!=='false')?.[1]||'A reflection to return to';}
function settingsView(){currentRecord=null;return `<div class="simple-wrap">${heading('Your journal belongs to you','Your data & settings.','A few practical things to make returning to your journal easy.')}<section class="card card-pad"><div class="notice">Your entries are saved in this browser on this device. They are not sent to Ger or synced to other devices. Food searches send the product query or barcode to Open Food Facts; camera images stay on your device. Embedded videos connect to YouTube when loaded. Anyone who can use this browser profile may be able to read them. Clearing browser data, using private browsing or changing devices can lose access to entries. Keep a backup somewhere private.</div><div class="settings-list"><div class="settings-row"><div><h3>Download a backup</h3><p>Save all ${Object.keys(state.entries).length} entries as a JSON file. This file contains your personal words and is not encrypted. You can restore it in this app on another device.</p></div><button class="btn" data-action="export">${I('download')}Download backup</button></div><div class="settings-row"><div><h3>Restore from a backup</h3><p>Add entries from an Everyday Wellbeing backup. Existing entries for the same page and date are kept, so current work is not overwritten.</p></div><button class="btn secondary" data-action="import">${I('upload')}Choose backup</button><input type="file" id="import-file" accept="application/json,.json" hidden></div><div class="settings-row"><div><h3>A readable copy of your entries</h3><p>Download a private HTML copy to read or print. It contains your responses, dates and prompts.</p></div><button class="btn secondary" data-action="export-readable">${I('book')}Download entries</button></div><div class="settings-row"><div><h3>The original journal</h3><p>Keep the complete 65-page fillable PDF, including its original diagrams, tables and sources.</p></div><a class="btn secondary" href="assets/Everyday-Wellbeing.pdf" download>${I('download')}Download PDF</a></div><div class="settings-row"><div><h3>Keep it close on your phone</h3><p>In Safari on iPhone, open the Share menu and choose Add to Home Screen. In Chrome on Android, use the browser menu’s Add to Home screen or Install option if offered. Menu wording varies. Use the same browser to return to saved entries. An internet connection is needed to open this version.</p></div>${I('phone')}</div><div class="settings-row"><div><h3>Delete entries on this device</h3><p>This removes journal entries from this browser. Download a backup first if you want to keep them.</p></div><button class="btn secondary" data-action="delete-all">${I('trash')}Delete all entries</button></div></div></section>${support()}</div>`;}
function sourcesView(){currentRecord=null;return `<div class="simple-wrap">${heading('The complete picture','Your journal & its sources.','Adapted from Everyday Wellbeing, the One Step Forward educational journal by Well Mind · Ger Boland.')}<section class="card card-pad"><h2>Space to notice. Knowledge to use.</h2><p class="subtitle" style="margin-top:15px">The original wording, practical prompts and sources are carried into the chapter pages. Repeated fill-in blanks are combined into a single response where they ask the same question.</p><div class="button-row" style="margin-top:23px"><a class="btn" href="assets/Everyday-Wellbeing.pdf" download>${I('download')}Original fillable journal</a><a class="btn secondary" href="#read/63">Read all sources ${I('arrow')}</a></div><hr class="divider"><h3>Selected practical references</h3><div class="source-links"><a href="https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits" target="_blank" rel="noopener noreferrer">NHLBI · Healthy sleep habits</a><a href="https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety" target="_blank" rel="noopener noreferrer">NCCIH · Meditation and mindfulness</a><a href="https://pubmed.ncbi.nlm.nih.gov/2305711/" target="_blank" rel="noopener noreferrer">Mifflin et al. (1990) · Resting energy equation</a><a href="https://www.niddk.nih.gov/bwp" target="_blank" rel="noopener noreferrer">NIDDK · Body Weight Planner</a></div><hr class="divider"><p class="helper-note">For adult education and reflection, not diagnosis or treatment. Individual healthcare advice comes first. External resources are independent; no affiliation or endorsement is implied. Their content and availability may change.</p><p class="helper-note">Original text, selection and journal design © Ger Boland. Other authors’ work and concepts are credited in the journal’s sources.</p></section>${support()}</div>`;}
function dateContext(r=route()){return r.split('/')[0];}
function baseRender(){stopScanner();recordDrafts={};currentDate=selectedDates[dateContext()]||today();const [name,number]=route().split('/');const views={...upgradeViews(),videos:videosView,food:foodView,plan:planView,today:todayView,week:weekView,explore:exploreView,tools:toolsView,journal:journalView,snapshot:snapshotView,pause:pauseView,body:bodyView,energy:energyView,settings:settingsView,sources:sourcesView};let html=name==='read'?readerView(Number(number)):(views[name]||homeView)();document.querySelector('#app').innerHTML=shell(html);document.title=`${name==='read'?pageTitle(Number(number))||'Explore':navs.find(n=>n[0]===section())?.[2]||'Your data'} · Everyday Wellbeing`;bind();bindRevision();bindUpgrade();updateSaveState();}
function writeField(name,v){if(!currentRecord)return;if(currentRecord.kind==='daily'&&!state.entries[currentRecord.id])currentRecord.fields.trackingBasis='today';if(currentRecord.kind==='plan'&&!currentRecord.fields.startDate)currentRecord.fields.startDate=monday(today());currentRecord.fields[name]=v;currentRecord.updatedAt=new Date().toISOString();if(Object.entries(currentRecord.fields).some(([k,v])=>k!=='trackingBasis'&&v!==''&&v!=='false'&&v!=='[]'))state.entries[currentRecord.id]=currentRecord;else delete state.entries[currentRecord.id];persist();updateSaveState();}
function updateSaveState(){document.querySelectorAll('[data-save-status]').forEach(label=>{label.textContent=storageError?'Not saved — download a backup':state.entries[label.dataset.saveStatus]?'Saved on this device':'Your words save as you go';});if(storageError&&!document.querySelector('.error-bar')){const bar=document.createElement('div');bar.className='error-bar';bar.role='alert';bar.textContent=storageError;document.querySelector('.workspace').prepend(bar);}}
function bind(){
document.querySelectorAll('[data-field]').forEach(el=>el.addEventListener('input',()=>{activateRecord(el.dataset.record);if(el.dataset.field==='screenHours'||el.dataset.field==='screenMinutes'){const hours=document.querySelector('#f-screenHours');const mins=document.querySelector('#f-screenMinutes');hours.setCustomValidity('');mins.setCustomValidity('');if(Number(hours.value)===24&&Number(mins.value)>0){el.setCustomValidity('Screen time cannot exceed 24 hours in a day.');return;}}if(el.type!=='checkbox'&&!el.checkValidity())return;writeField(el.dataset.field,el.type==='checkbox'?String(el.checked):el.value);if(/^area\d$/.test(el.dataset.field)&&document.querySelector('#wheel-visual'))document.querySelector('#wheel-visual').innerHTML=wheel();if(currentRecord?.kind==='energy'){const c=document.querySelector('#energy-result'),p=document.querySelector('#protein-result'),m=document.querySelector('#macro-result');if(c)c.innerHTML=calcHtml(false);if(p)p.innerHTML=proteinHtml();if(m)m.innerHTML=macroHtml();}}));
document.querySelector('#entry-date')?.addEventListener('change',e=>{if(!dateOk(e.target.value)||e.target.value>today()){toast('Choose a valid date, today or earlier.');return;}selectedDates[dateContext()]=route()==='week'?monday(e.target.value):e.target.value;render();});
document.querySelectorAll('[data-date]').forEach(el=>el.addEventListener('click',e=>{if(el.dataset.date>today()){e.preventDefault();toast('That date hasn’t arrived yet.');return;}selectedDates[dateContext(el.hash.slice(1))]=el.dataset.date;if(el.hash===location.hash||(!location.hash&&el.hash==='#today'))setTimeout(render,0);}));
document.querySelectorAll('[data-action]').forEach(el=>el.addEventListener('click',()=>{activateRecord(el.dataset.record);action(el.dataset.action);}));
document.querySelectorAll('[data-filter]').forEach(el=>el.addEventListener('click',()=>{historyFilter=el.dataset.filter;render();}));
document.querySelectorAll('[data-delete]').forEach(el=>el.addEventListener('click',()=>confirmDelete(el.dataset.delete)));
document.querySelectorAll('[data-side]').forEach(el=>el.addEventListener('click',()=>{bodySide=el.dataset.side;render();}));
bindParts();
document.querySelector('#search-chapters')?.addEventListener('input',e=>{searchTerm=e.target.value;document.querySelector('#explore-results').innerHTML=exploreResults();});
document.querySelector('#import-file')?.addEventListener('change',importBackup);
}
function bindParts(){document.querySelectorAll('[data-part]').forEach(el=>{const toggle=()=>{activateRecord('body:'+currentDate);let a=JSON.parse(value('areas')||'[]'),key=bodySide+':'+el.dataset.part;a=a.includes(key)?a.filter(x=>x!==key):[...a,key];writeField('areas',JSON.stringify(a));document.querySelector('#body-visual').innerHTML=bodySvg();document.querySelector('#marked-areas').textContent=areaDescription();bindParts();};el.addEventListener('click',toggle);el.addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();toggle();}});});}
function dialog(title,text,button,callback,danger=false){const el=document.querySelector('#dialog');el.innerHTML=`<h2>${esc(title)}</h2><p>${esc(text)}</p><div class="actions"><button class="btn secondary" id="dialog-cancel">Cancel</button><button class="btn ${danger?'danger':''}" id="dialog-confirm">${esc(button)}</button></div>`;el.querySelector('#dialog-cancel').onclick=()=>el.close();el.querySelector('#dialog-confirm').onclick=()=>{el.close();callback();};el.showModal();}
function confirmDelete(id){const entry=state.entries[id];if(!entry)return;dialog('Delete this entry?',`${entry.title} · ${pretty(entry.date)}. This cannot be undone unless you have a backup.`,'Delete entry',()=>{delete state.entries[id];const saved=persist();render();toast(saved?'Entry deleted from this device.':'Deletion could not be saved. Check your browser storage.');},true);}
function download(data,name,type){const blob=new Blob([data],{type});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function action(name){if(revisionAction(name))return;if(name==='save'){const invalid=[...document.querySelectorAll('[data-field]')].find(el=>!el.checkValidity());if(invalid){invalid.reportValidity();return;}if(!state.entries[currentRecord?.id]){toast('Add something you’d like to record. Everything is optional.');return;}toast(persist()?'Your entry is saved. Come back whenever it helps.':'Your entry is in memory only. Download a backup before leaving.');updateSaveState();}if(name==='calculate'){const invalid=[...document.querySelectorAll('[data-field]')].find(el=>!el.checkValidity());if(invalid){invalid.reportValidity();return;}document.querySelector('#energy-result').innerHTML=calcHtml(true);}if(name==='timer')toggleTimer();if(name==='timer-reset'){clearInterval(timerTick);timerRunning=false;timerLeft=60;updateTimer();}if(name==='export')download(JSON.stringify({app:'Everyday Wellbeing',version:1,exportedAt:new Date().toISOString(),entries:state.entries},null,2),`Everyday-Wellbeing-backup-${today()}.json`,'application/json');if(name==='export-readable')exportReadable();if(name==='import')document.querySelector('#import-file').click();if(name==='delete-all')dialog('Delete all journal entries?',`This permanently removes ${Object.keys(state.entries).length} entries from this browser. Backups you downloaded are not affected.`,'Delete all entries',()=>{state={version:1,entries:{}};storageError='';const saved=persist();render();toast(saved?'Journal entries cleared on this device.':'Could not clear stored entries. Check your browser storage.');},true);}
function toggleTimer(){if(timerRunning){timerLeft=Math.max(0,Math.ceil((timerEnd-Date.now())/1000));clearInterval(timerTick);timerRunning=false;}else{if(timerLeft===0)timerLeft=60;timerEnd=Date.now()+timerLeft*1000;timerRunning=true;timerTick=setInterval(()=>{timerLeft=Math.max(0,Math.ceil((timerEnd-Date.now())/1000));if(timerLeft===0){clearInterval(timerTick);timerRunning=false;toast('Your minute is complete. Take a look around.');}updateTimer();},250);}updateTimer();}
function updateTimer(){const v=document.querySelector('#timer-value'),b=document.querySelector('#timer-button');if(v)v.textContent=timerLeft===60?'1:00':`0:${String(timerLeft).padStart(2,'0')}`;if(b)b.innerHTML=I(timerRunning?'pause':'play')+(timerRunning?'Pause':timerLeft===0?'Begin again':timerLeft===60?'Begin a minute':'Continue');document.querySelector('#pause-circle')?.classList.toggle('running',timerRunning);const c=document.querySelector('#timer-caption');if(c)c.textContent=timerLeft===0?'Take a look around.':'Nothing to get right.';}
function validEntry(e,id){if(!e||typeof e!=='object'||typeof e.kind!=='string'||!dateOk(e.date)||e.date>today()||id!==`${e.kind}:${e.date}`||e.id!==id||typeof e.title!=='string'||e.title.length>300||typeof e.updatedAt!=='string'||isNaN(Date.parse(e.updatedAt))||!e.fields||typeof e.fields!=='object'||Array.isArray(e.fields))return false;if(!/^(daily|weekly|snapshot|pause|body|energy|food|targets|plan|profile|review|activity|library|exercise|page(?:[7-9]|[1-5]\d|6[0-5]))$/.test(e.kind))return false;if(Object.keys(e.fields).length>100)return false;const bounds=e.kind==='daily'?{sleep:[0,24],mood:[0,10],energy:[0,10],steps:[0,200000],calories:[0,30000],protein:[0,2000],screenHours:[0,24],screenMinutes:[0,59]}:e.kind==='snapshot'?Object.fromEntries(Array.from({length:8},(_,i)=>['area'+i,[0,10]])):e.kind==='body'?{severity:[0,10]}:e.kind==='energy'?{weight:[20,400],height:[100,250],age:[18,110],factor:[1.4,2],proteinRate:[.5,2.2],fatPercent:[20,35]}:e.kind==='targets'?{calories:[1,10000],protein:[1,1500],carbs:[1,1500],fat:[1,1500]}:{};for(const [key,[lo,hi]] of Object.entries(bounds)){const v=e.fields[key];if(v!==undefined&&v!==''&&(!Number.isFinite(Number(v))||Number(v)<lo||Number(v)>hi))return false;}if(e.kind==='daily'&&Number(e.fields.screenHours)*60+Number(e.fields.screenMinutes)>1440)return false;return Object.entries(e.fields).every(([k,v])=>/^[A-Za-z][\w-]{0,100}$/.test(k)&&!['__proto__','constructor','prototype'].includes(k)&&typeof v==='string'&&v.length<=(['items','foods','meals','log'].includes(k)?200000:12000)&&(k!=='items'||(()=>{try{const a=JSON.parse(v);return Array.isArray(a)&&a.length<=100&&a.every(validFoodItem);}catch{return false;}})())&&(k!=='startDate'||dateOk(v))&&upgradeFieldOk(e,k,v)&&(k!=='areas'||(()=>{try{let a=JSON.parse(v);return Array.isArray(a)&&a.length<=14&&a.every(x=>/^(front|back):(head|upper|middle|arm-left|arm-right|leg-left|leg-right)$/.test(x));}catch{return false;}})()));}
async function importBackup(event){const file=event.target.files[0];if(!file)return;if(file.size>12*1024*1024){toast('That file is too large. Choose an Everyday Wellbeing backup under 12 MB.');return;}try{const data=JSON.parse(await file.text());if(data.app!=='Everyday Wellbeing'||data.version!==1||!data.entries||typeof data.entries!=='object'||Array.isArray(data.entries)||Object.keys(data.entries).length>10000||!Object.entries(data.entries).every(([id,e])=>validEntry(e,id)))throw Error('format');const fresh=Object.entries(data.entries).filter(([id])=>!Object.hasOwn(state.entries,id));dialog('Restore this backup?',`Add ${fresh.length} new entries. ${Object.keys(data.entries).length-fresh.length} entries already on this device will be kept as they are.`,'Restore entries',()=>{for(const [id,e] of fresh)state.entries[id]={id,kind:e.kind,date:e.date,title:e.title,updatedAt:e.updatedAt,fields:{...e.fields}};persist();render();toast(`${fresh.length} entries restored${storageError?' in memory only':'.'}`);});}catch{toast('This does not look like a valid Everyday Wellbeing backup. No entries were changed.');}event.target.value='';}
const fieldNames={sleep:'Sleep / rest',mood:'Mood',energy:'Energy',mind:'One thing on my mind',action:'One thing for myself',steps:'Steps (selected date)',calories:'Calories (selected date)',protein:'Protein (selected date)',screenHours:'Screen time (selected date, hours)',screenMinutes:'Screen time (selected date, minutes)',movement:'Movement',care:'Self-care / support',well:'Something that went well',challenge:'A challenge',learning:'What I learned',priority:'My next priority',focus:'My chosen focus',own:'An area I would rename or add',before:'Before the pause',after:'After the pause',location:'Location / details',severity:'Severity /10',when:'When it occurs',change:'Changes since last time',better:'What eases it',worse:'What aggravates it',areas:'Marked body areas',weight:'Weight (kg)',height:'Height (cm)',age:'Age',equation:'Original equation',factor:'Activity factor'};
function legacyLabelFor(k){const match=/^(reflection|done)([0-8])$/.exec(k);if(match){const topic=programme.find(t=>t.legacy===Number(match[2]));return (match[1]==='reflection'?'Reflection: ':'Reviewed: ')+(topic?.title||k);}if(k==='trackingBasis')return 'Daily tracking date basis';if(k==='startDate')return 'Programme starts';if(k==='dailyFocus')return 'My daily focus';if(k==='items')return 'Food diary';if(k==='proteinRate')return 'Protein multiplier (g/kg)';if(k==='fatPercent')return 'Fat percentage';if(k==='scenario')return 'Calorie scenario';if(/^area\d$/.test(k))return areaNames[Number(k.slice(4))]+' /10';for(const p of pages){const f=p.items.find(i=>i.kind==='field'&&i.id===k);if(f)return f.label;}return fieldNames[k]||k;}
function exportReadable(){const content=Object.values(state.entries).sort((a,b)=>b.date.localeCompare(a.date)).map(e=>`<section><h2>${esc(e.title)}</h2><p>${pretty(e.date)}</p>${Object.entries(e.fields).filter(([,v])=>v!==''&&v!=='false'&&v!=='[]').map(([k,v])=>`<h3>${esc(labelFor(k))}</h3><p style="white-space:pre-wrap">${k==='items'?JSON.parse(v).map(f=>esc(`${f.name}: ${f.quantity} ${f.basis==='100g'?'g':f.basis==='100ml'?'ml':'servings'}; ${Object.entries(itemTotals(f)).map(([key,val])=>key+': '+(val===null?'unknown':Math.round(val*10)/10)).join(', ')}`)).join('<br>'):esc(v==='true'?'Selected':v)}</p>`).join('')}</section>`).join('');download(`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>My Everyday Wellbeing entries</title><style>body{max-width:740px;margin:40px auto;padding:24px;font:16px/1.7 system-ui;color:#284e43;background:#fffefa}h1,h2{font-family:Georgia;font-weight:400}h3{font-size:13px;margin-bottom:0;color:#65705e}p{margin-top:4px;overflow-wrap:anywhere}section{border-top:1px solid #ccc;padding:24px 0}@media print{section{break-inside:avoid}}</style><h1>My Everyday Wellbeing journal</h1><p>Well Mind · Ger Boland | Exported ${pretty(today())}</p><p>Private journal entries. Store this file somewhere safe.</p>${content||'<p>No entries recorded yet.</p>'}</html>`,`Everyday-Wellbeing-entries-${today()}.html`,'text/html');}
function scrollToRoute(){const [name,n]=route().split('/');const target=name==='read'?document.querySelector('#section-'+n):null;if(target)target.scrollIntoView({block:'start'});else window.scrollTo(0,0);}
window.addEventListener('hashchange',()=>{foodAbort?.abort();foodAbort=null;foodBusy=false;render();scrollToRoute();document.querySelector('#main')?.focus({preventScroll:true});});
window.addEventListener('pagehide',stopScanner);
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopScanner();});
window.addEventListener('storage',e=>{if(e.key===KEY){try{const fresh=e.newValue?JSON.parse(e.newValue):{version:1,entries:{}};if(fresh.version===1&&fresh.entries&&Object.entries(fresh.entries).every(([id,v])=>validEntry(v,id))){state=fresh;render();toast('Updated with changes from your other tab.');}}catch{toast('Could not read a change from another tab. Download a backup before leaving.');}}});
try{const response=await fetch('journal.json');if(!response.ok)throw Error('Unable to load journal');pages=await response.json();render();scrollToRoute();}catch{document.querySelector('#app').innerHTML=`<div class="loading"><h1>Your journal couldn’t open.</h1><p>Please reload the page when your connection is available.</p><button class="btn" onclick="location.reload()">Try again</button><p><a class="text-link" href="assets/Everyday-Wellbeing.pdf">Open the original journal</a></p></div>`;}
