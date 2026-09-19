/* Behavioral checks for the canvas runtime without a graphics dependency. */
const {readFileSync}=require('node:fs');
const {runInNewContext}=require('node:vm');
const assert=require('node:assert/strict');
const source=readFileSync(require('node:path').join(__dirname,'../references/ink-gold-ui.js'),'utf8');
function boot({reduced=false,width=1200,storageBlocked=false}={}){
 const events={},docEvents={},rootEvents={},media={},queue=[];
 let arcs=[],currentElement=null,observer;
 const button={attrs:{},addEventListener:(n,f)=>button[n]=f,setAttribute:(k,v)=>button.attrs[k]=v};
 const ctx={clearRect(){arcs=[]},setTransform(){},beginPath(){},arc(x,y,r){arcs.push({x,y,r})},fill(){}};
 const canvas={classList:{add(){}},setAttribute(){},style:{},getContext:()=>ctx,isConnected:false};
 const body={dataset:{},classList:{add(){}},prepend(c){c.isConnected=true}};
 const storage={};
 const win={addEventListener:(n,f)=>events[n]=f};
 const document={body,hidden:false,currentScript:{dataset:{}},querySelectorAll:()=>[button],querySelector:()=>null,createElement:()=>canvas,elementFromPoint:()=>currentElement,addEventListener:(n,f)=>docEvents[n]=f,documentElement:{addEventListener:(n,f)=>rootEvents[n]=f}};
 const sandbox={document,window:win,innerWidth:width,innerHeight:600,devicePixelRatio:2,scrollX:0,scrollY:0,Math,
   matchMedia:q=>media[q]={matches:q.includes('reduce')?reduced:true,addEventListener(n,f){this.change=f}},
   getComputedStyle:()=>({borderTopLeftRadius:'24px'}),
   requestAnimationFrame:f=>(queue.push(f),queue.length),cancelAnimationFrame:()=>{queue.length=0},
   localStorage:{getItem:k=>{if(storageBlocked)throw Error('denied');return storage[k]},setItem:(k,v)=>{if(storageBlocked)throw Error('denied');storage[k]=v}},
   MutationObserver:class {constructor(f){observer=f}observe(){}}
 };
 runInNewContext(source,sandbox);
 let time=0;
 function flush(){let n=0;while(queue.length){assert.ok(n++<400,'animation should settle');queue.shift()(time+=16.67);}return n;}
 flush();
 return {get arcs(){return arcs},body,button,storage,events,docEvents,rootEvents,media,flush,observe:()=>observer(),setElement:e=>currentElement=e};
}
const a=boot();const rest=JSON.stringify(a.arcs);
const ix=a.arcs.findIndex(p=>p.x===160&&p.y===208);assert.ok(ix>=0);
a.events.pointermove({clientX:240,clientY:230,pointerType:'mouse'});a.flush();
assert.ok(a.arcs[ix].x>160 && a.arcs[ix].y>208,'dots must move toward the pointer, not just grow');
a.rootEvents.pointerleave();a.flush();
assert.ok(Math.abs(a.arcs[ix].x-160)<.1,'dots return to original grid');
const el={closest:()=>null,isConnected:true,getBoundingClientRect:()=>({x:180,y:180,width:200,height:64})};
a.setElement({closest:()=>el});a.events.pointermove({clientX:240,clientY:212,pointerType:'mouse'});a.flush();
assert.ok(a.arcs[ix].x>160,'dots outside left border move toward the rounded control');
a.docEvents.visibilitychange();
const r=boot({reduced:true});const staticGrid=JSON.stringify(r.arcs);
r.events.pointermove({clientX:240,clientY:230,pointerType:'mouse'});assert.equal(r.flush(),0);assert.equal(JSON.stringify(r.arcs),staticGrid);
const m=boot({width:414});const mobile=JSON.stringify(m.arcs);m.events.pointermove({clientX:200,clientY:200,pointerType:'touch'});m.flush();assert.equal(JSON.stringify(m.arcs),mobile);
a.button.click();a.observe();assert.equal(a.body.dataset.theme,'night');assert.equal(a.storage.igTheme,'night');assert.equal(a.button.attrs['aria-label'],'切換淺色模式');
a.button.click();a.observe();assert.equal(a.body.dataset.theme,'day');
const blocked=boot({storageBlocked:true});blocked.button.click();assert.equal(blocked.body.dataset.theme,'night');
console.log('PASS: positional attraction, contour attraction, restoration, finite animation, reduced motion, mobile static, theme state, blocked storage.');
