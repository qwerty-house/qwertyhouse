import React, { useState, useEffect, useRef } from 'react';

/* ═══════════════════════════════ CONSTANTS ═══════════════════════════════ */
const W = 1080, H = 1440;

const FONTS = [
  { label: 'SF Pro / System', value: 'system', param: null, google: false },
  { label: 'Inter',            value: 'Inter',            google: true, param: 'Inter:wght@300;400;500;600;700' },
  { label: 'Fraunces',         value: 'Fraunces',         google: true, param: 'Fraunces:ital,opsz,wght@0,9..144,300..900' },
  { label: 'Playfair Display', value: 'Playfair Display', google: true, param: 'Playfair+Display:wght@400;500;600;700' },
  { label: 'Montserrat',       value: 'Montserrat',       google: true, param: 'Montserrat:wght@300;400;500;600;700' },
  { label: 'Oswald',           value: 'Oswald',           google: true, param: 'Oswald:wght@300;400;500;600;700' },
  { label: 'Bebas Neue',       value: 'Bebas Neue',       google: true, param: 'Bebas+Neue' },
  { label: 'DM Serif Display', value: 'DM Serif Display', google: true, param: 'DM+Serif+Display:ital@0;1' },
  { label: '── Thai ──',       value: '__sep', param: null, google: false, disabled: true },
  { label: 'Prompt (ไทย)',    value: 'Prompt',       google: true, param: 'Prompt:wght@300;400;500;600;700' },
  { label: 'Kanit (ไทย)',     value: 'Kanit',        google: true, param: 'Kanit:wght@300;400;500;600;700' },
  { label: 'Sarabun (ไทย)',   value: 'Sarabun',      google: true, param: 'Sarabun:wght@300;400;500;600;700' },
  { label: 'Noto Sans Thai',   value: 'Noto Sans Thai', google: true, param: 'Noto+Sans+Thai:wght@300;400;500;600;700' },
];

const GRAD_PRESETS = [
  { name:'Dusk',    stops:['#FF6B35','#9B27AF'],           angle:135 },
  { name:'Ocean',   stops:['#0F2027','#2C5364'],           angle:180 },
  { name:'Neon',    stops:['#FF0080','#7928CA','#0070F3'], angle:45  },
  { name:'Forest',  stops:['#11998E','#38EF7D'],           angle:135 },
  { name:'Night',   stops:['#0F0C29','#302B63','#24243E'], angle:190 },
  { name:'Rose',    stops:['#F953C6','#B91D73'],           angle:135 },
  { name:'Slate',   stops:['#1A1A2E','#0F3460'],           angle:160 },
  { name:'Gold',    stops:['#F7971E','#FFD200'],           angle:135 },
  { name:'Ash',     stops:['#232526','#414345'],           angle:180 },
  { name:'Arctic',  stops:['#1a2a6c','#b21f1f','#fdbb2d'], angle:45  },
];

const THEME_MAP = {
  warm: [['#FF6B35','#E8B86A'],['#C97B3F','#2B1810']],
  cool: [['#2E5F9E','#0A1A2E'],['#A8C8EC','#2E5F9E']],
  acid: [['#D8FF4D','#1A3300'],['#C8E600','#0A1400']],
  dusk: [['#9E5B8D','#1A0A2E'],['#F953C6','#B91D73']],
  mono: [['#404040','#0A0A0A'],['#D0D0D0','#606060']],
};

const DEFAULT_T = { scale:1, offsetX:0, offsetY:0 };
const uid = () => Math.random().toString(36).slice(2,9);

function makeSlide(kind, i) {
  const p = GRAD_PRESETS[i % GRAD_PRESETS.length];
  return {
    id: uid(), kind,
    text: kind==='hook' ? 'Your hook goes here' : kind==='cta' ? 'Save this for later →' : 'One insight per slide',
    font:'Inter', fontSize:kind==='hook'?108:kind==='cta'?88:76,
    fontWeight:kind==='hook'?700:500, lineHeight:1.15, letterSpacing:-0.02,
    textColor:'#FFFFFF', textAlign:'left', textY:50,
    bgType:'gradient', bgColor:'#1A1A2E',
    gradientStops:[...p.stops], gradientAngle:p.angle,
    imageUrl:null, imageTransform:{...DEFAULT_T},
    imageEnabled:true, overlay:0.45, magicLoading:false,
  };
}

/* ═════════════════════════════ HELPERS ═══════════════════════════════════ */
function hexToRgb(hex) {
  const h = (hex||'#000000').replace('#','').padStart(6,'0');
  const m = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
  return m ? {r:parseInt(m[1],16),g:parseInt(m[2],16),b:parseInt(m[3],16)} : {r:0,g:0,b:0};
}
function rgbToHex(r,g,b) {
  return '#'+[r,g,b].map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');
}
function gradCss(stops,angle) {
  if(!stops?.length) return '#000';
  if(stops.length===1) return stops[0];
  return `linear-gradient(${angle}deg,${stops.join(',')})`;
}
function fontCss(fontValue) {
  if(!fontValue||fontValue==='system') return '-apple-system,Helvetica Neue,Helvetica,Arial,sans-serif';
  return `'${fontValue}',-apple-system,Helvetica Neue,Helvetica,Arial,sans-serif`;
}

async function fileToDataUri(file) {
  return new Promise((res,rej) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        let {width:w,height:h} = img;
        const s = Math.min(1, 2048/Math.max(w,h));
        w=Math.round(w*s); h=Math.round(h*s);
        const c = document.createElement('canvas');
        c.width=w; c.height=h;
        c.getContext('2d').drawImage(img,0,0,w,h);
        res(c.toDataURL('image/jpeg',0.9));
      };
      img.onerror=rej; img.src=reader.result;
    };
    reader.onerror=rej; reader.readAsDataURL(file);
  });
}

async function loadImg(src) {
  return new Promise((res,rej) => {
    const img = new Image(); img.crossOrigin='anonymous';
    img.onload = () => res(img);
    img.onerror = () => { const i2=new Image(); i2.onload=()=>res(i2); i2.onerror=rej; i2.src=src; };
    img.src = src;
  });
}

function wrapText(ctx, text, maxW) {
  const words = String(text||'').trim().split(/\s+/);
  const lines=[]; let cur='';
  for(const w of words){
    const cand = cur ? cur+' '+w : w;
    if(ctx.measureText(cand).width>maxW && cur) { lines.push(cur); cur=w; } else cur=cand;
  }
  if(cur) lines.push(cur);
  return lines;
}

function rRect(ctx,x,y,w,h,r) {
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y); ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r); ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h); ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
}

async function ensureFonts(fam) {
  if(!document.fonts?.load||!fam||fam==='system') return;
  try {
    await Promise.all(['400','500','600','700'].map(w=>document.fonts.load(`${w} 80px '${fam}'`)));
    await document.fonts.ready;
  } catch {}
}

function triggerDl(blob,name) {
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download=name;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url),3000);
}

async function loadJSZip() {
  if(window.JSZip) return window.JSZip;
  return new Promise((res,rej) => {
    const s=document.createElement('script');
    s.src='https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    s.onload=()=>res(window.JSZip); s.onerror=rej;
    document.head.appendChild(s);
  });
}

function loadGFont(font) {
  if(!font?.google||!font.param) return;
  const id='gf-'+font.value.replace(/[\s,]/g,'-');
  if(document.getElementById(id)) return;
  const link=document.createElement('link');
  link.id=id; link.rel='stylesheet';
  link.href=`https://fonts.googleapis.com/css2?family=${font.param}&display=swap`;
  document.head.appendChild(link);
}

/* ═══════════════════════════ CANVAS RENDER ═══════════════════════════════ */
async function renderSlide(sl, idx, handle) {
  if(sl.font && sl.font!=='system') await ensureFonts(sl.font);
  const canvas=document.createElement('canvas'); canvas.width=W; canvas.height=H;
  const ctx=canvas.getContext('2d');
  ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality='high';
  const isCTA=sl.kind==='cta', tc=sl.textColor||'#fff';

  // Background
  const showImg=sl.imageUrl&&sl.imageEnabled;
  if(showImg) {
    try {
      const img=await loadImg(sl.imageUrl);
      const ir=img.naturalWidth/img.naturalHeight, br=W/H;
      let dw,dh;
      if(ir>br){dh=H;dw=H*ir;}else{dw=W;dh=W/ir;}
      const t=sl.imageTransform||DEFAULT_T;
      ctx.save(); ctx.translate(W/2+t.offsetX,H/2+t.offsetY); ctx.scale(t.scale,t.scale);
      ctx.drawImage(img,-dw/2,-dh/2,dw,dh); ctx.restore();
    } catch {}
    ctx.fillStyle=`rgba(0,0,0,${sl.overlay??0.45})`; ctx.fillRect(0,0,W,H);
  } else {
    if(sl.bgType==='gradient'&&sl.gradientStops?.length>1) {
      const θ=sl.gradientAngle*Math.PI/180;
      const dx=Math.sin(θ),dy=-Math.cos(θ);
      const mag=W*Math.abs(dx)+H*Math.abs(dy);
      const g=ctx.createLinearGradient(W/2-dx*mag/2,H/2-dy*mag/2,W/2+dx*mag/2,H/2+dy*mag/2);
      sl.gradientStops.forEach((c,i,a)=>g.addColorStop(i/(a.length-1),c));
      ctx.fillStyle=g;
    } else { ctx.fillStyle=sl.bgColor||'#1A1A2E'; }
    ctx.fillRect(0,0,W,H);
  }

  const ff=fontCss(sl.font);
  // Slide number
  ctx.globalAlpha=0.6; ctx.fillStyle=tc;
  ctx.font=`500 28px ${ff}`; ctx.textAlign='left'; ctx.textBaseline='alphabetic';
  ctx.fillText(String(idx+1),80,116); ctx.globalAlpha=1;

  // Main text
  const fs=sl.fontSize||78, fw=sl.fontWeight||500, lh=(sl.lineHeight||1.15)*fs;
  ctx.font=`${fw} ${fs}px ${ff}`;
  if(ctx.letterSpacing!==undefined) ctx.letterSpacing=`${(sl.letterSpacing||0)*fs}px`;
  ctx.fillStyle=tc; ctx.textAlign=sl.textAlign||'left';
  const lines=wrapText(ctx,sl.text,W-160);
  const blockH=lines.length*lh, tyPx=((sl.textY||50)/100)*H;
  const startY=tyPx-blockH/2+fs*0.82;
  const tx=sl.textAlign==='center'?W/2:sl.textAlign==='right'?W-80:80;
  lines.forEach((l,i)=>ctx.fillText(l,tx,startY+i*lh));
  if(ctx.letterSpacing!==undefined) ctx.letterSpacing='0px';

  // Divider
  ctx.globalAlpha=0.2; ctx.strokeStyle=tc; ctx.lineWidth=1;
  ctx.beginPath(); ctx.moveTo(80,1308); ctx.lineTo(1000,1308); ctx.stroke(); ctx.globalAlpha=1;

  // Handle + CTA
  ctx.fillStyle=tc; ctx.globalAlpha=0.75;
  ctx.font=`500 24px ${ff}`; ctx.textAlign='left';
  ctx.fillText(handle,80,1374);
  if(!isCTA) { ctx.textAlign='right'; ctx.fillText('swipe →',1000,1374); }
  else {
    ctx.globalAlpha=1; rRect(ctx,775,1328,225,58,29);
    ctx.fillStyle=tc; ctx.fill();
    ctx.fillStyle='#000'; ctx.font=`600 22px ${ff}`;
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText('save this →',887,1357);
  }
  ctx.globalAlpha=1;
  return canvas;
}

/* ════════════════════════ COLOR PICKER ══════════════════════════════════ */
function ColorPicker({value,onChange,label}) {
  const [open,setOpen]=useState(false);
  const [hex,setHex]=useState(value||'#FFFFFF');
  const ref=useRef(null);

  useEffect(()=>setHex(value||'#FFFFFF'),[value]);
  useEffect(()=>{
    if(!open) return;
    const h=e=>{ if(ref.current&&!ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown',h,true);
    return()=>document.removeEventListener('mousedown',h,true);
  },[open]);

  function commit(v) {
    const c=v.startsWith('#')?v:'#'+v;
    if(/^#[0-9a-fA-F]{6}$/.test(c)) { setHex(c); onChange(c); } else setHex(v);
  }
  function hRgb(ch,val) {
    const rgb=hexToRgb(hex); rgb[ch]=Math.max(0,Math.min(255,parseInt(val)||0));
    const nh=rgbToHex(rgb.r,rgb.g,rgb.b); setHex(nh); onChange(nh);
  }
  const rgb=hexToRgb(hex);

  return (
    <div ref={ref} style={{position:'relative'}}>
      {label&&<div style={S.lbl}>{label}</div>}
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <div onClick={()=>setOpen(!open)} style={{width:34,height:34,borderRadius:9,background:hex,border:'1px solid rgba(255,255,255,0.15)',cursor:'pointer',flexShrink:0,boxShadow:open?'0 0 0 2px #0A84FF':'none',transition:'box-shadow 140ms'}}/>
        <input value={hex} onChange={e=>{setHex(e.target.value);if(/^#[0-9a-fA-F]{6}$/.test(e.target.value))onChange(e.target.value);}} onBlur={()=>{if(!/^#[0-9a-fA-F]{6}$/.test(hex))setHex(value||'#fff');}} style={{...S.inp,fontFamily:'monospace',fontSize:12,flex:1}}/>
      </div>
      {open&&(
        <div style={{position:'absolute',top:'calc(100% + 8px)',left:0,zIndex:400,background:'#1C1C1E',borderRadius:16,padding:14,border:'1px solid rgba(255,255,255,0.1)',boxShadow:'0 24px 70px rgba(0,0,0,0.85)',width:230,backdropFilter:'blur(20px)',WebkitBackdropFilter:'blur(20px)'}}>
          <div style={{position:'relative',height:110,borderRadius:10,marginBottom:12,overflow:'hidden',border:'1px solid rgba(255,255,255,0.07)'}}>
            <div style={{position:'absolute',inset:0,background:hex}}/>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(to right,#fff,transparent)'}}/>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,#000,transparent)'}}/>
            <input type="color" value={hex} onChange={e=>commit(e.target.value)} style={{position:'absolute',inset:0,opacity:0,cursor:'crosshair',width:'100%',height:'100%'}}/>
          </div>
          {[['R','r','#FF453A'],['G','g','#30D158'],['B','b','#0A84FF']].map(([lb,ch,cl])=>(
            <div key={ch} style={{display:'flex',alignItems:'center',gap:7,marginBottom:8}}>
              <span style={{width:12,fontSize:10,color:cl,fontWeight:700,fontFamily:'monospace',flexShrink:0}}>{lb}</span>
              <input type="range" min={0} max={255} value={rgb[ch]} onChange={e=>hRgb(ch,e.target.value)} style={{flex:1,accentColor:cl}}/>
              <input type="number" min={0} max={255} value={rgb[ch]} onChange={e=>hRgb(ch,e.target.value)} style={{width:36,...S.inp,padding:'3px 5px',fontSize:10,textAlign:'center'}}/>
            </div>
          ))}
          <input type="color" value={hex} onChange={e=>commit(e.target.value)} style={{width:'100%',height:26,border:'none',borderRadius:8,cursor:'pointer',marginTop:2,background:'transparent'}}/>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════ GRADIENT EDITOR ═════════════════════════════════ */
function GradEditor({stops,angle,onChange}) {
  const [sel,setSel]=useState(0);
  const idx=Math.min(sel,stops.length-1);
  const upd=(i,c)=>{ const n=[...stops]; n[i]=c; onChange({stops:n,angle}); };
  const addStop=()=>{ if(stops.length>=3) return; onChange({stops:[...stops,'#888'],angle}); };
  const remStop=i=>{ if(stops.length<=2) return; const n=stops.filter((_,x)=>x!==i); onChange({stops:n,angle}); if(idx>=n.length) setSel(n.length-1); };

  return (
    <div>
      <div style={{height:36,borderRadius:10,background:gradCss(stops,angle),marginBottom:12,position:'relative',border:'1px solid rgba(255,255,255,0.08)'}}>
        {stops.map((c,i)=>(
          <div key={i} onClick={()=>setSel(i)} style={{position:'absolute',top:'50%',left:`${(i/Math.max(stops.length-1,1))*100}%`,transform:'translate(-50%,-50%)',width:20,height:20,borderRadius:'50%',background:c,cursor:'pointer',border:`2.5px solid ${idx===i?'#0A84FF':'#fff'}`,boxShadow:'0 2px 8px rgba(0,0,0,0.6)',transition:'border-color 140ms',zIndex:1}}/>
        ))}
      </div>
      <ColorPicker value={stops[idx]||'#000'} onChange={c=>upd(idx,c)} label={`Stop ${idx+1} color`}/>
      <div style={{display:'flex',gap:5,marginTop:9}}>
        {stops.length<3&&<button onClick={addStop} style={S.ghost}>+ Add stop</button>}
        {stops.length>2&&<button onClick={()=>remStop(idx)} style={{...S.ghost,color:'#FF453A'}}>− Remove</button>}
      </div>
      <div style={{marginTop:13}}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:5}}>
          <span style={S.lbl}>Angle</span>
          <span style={{fontSize:11,color:'#fff',fontFamily:'monospace'}}>{angle}°</span>
        </div>
        <input type="range" min={0} max={360} value={angle} onChange={e=>onChange({stops,angle:parseInt(e.target.value)})} style={{width:'100%',accentColor:'#0A84FF'}}/>
      </div>
      <div style={{marginTop:12}}>
        <div style={S.lbl}>Presets</div>
        <div style={{display:'flex',flexWrap:'wrap',gap:5,marginTop:5}}>
          {GRAD_PRESETS.map(p=>(
            <div key={p.name} onClick={()=>onChange({stops:[...p.stops],angle:p.angle})} title={p.name}
              style={{width:26,height:26,borderRadius:7,cursor:'pointer',background:gradCss(p.stops,p.angle),border:'1px solid rgba(255,255,255,0.1)',transition:'transform 130ms'}}
              onMouseEnter={e=>e.currentTarget.style.transform='scale(1.18)'}
              onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}/>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════ SLIDER ROW ══════════════════════════════════ */
function SliderRow({value,min,max,step=1,dec=0,dfn,onChange}) {
  const display=dfn?dfn(value):(dec>0?Number(value).toFixed(dec):value);
  return (
    <div style={{display:'flex',gap:8,alignItems:'center'}}>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e=>onChange(dec>0?parseFloat(e.target.value):parseInt(e.target.value))} style={{flex:1,accentColor:'#0A84FF'}}/>
      <span style={{fontSize:10,color:'#fff',fontFamily:'monospace',width:44,textAlign:'right',flexShrink:0}}>{display}</span>
    </div>
  );
}

/* ══════════════════════ CONTAINER SIZE HOOK ══════════════════════════════ */
function useSize() {
  const ref=useRef(null);
  const [sz,setSz]=useState({width:0,height:0});
  useEffect(()=>{
    if(!ref.current) return;
    const ro=new ResizeObserver(([e])=>setSz({width:e.contentRect.width,height:e.contentRect.height}));
    ro.observe(ref.current); return()=>ro.disconnect();
  },[]);
  return [ref,sz];
}

/* ════════════════════════ SLIDE CANVAS ═══════════════════════════════════ */
function SlideCanvas({slide,index,handle,onUpdate}) {
  const [cRef,sz]=useSize();
  const [imgDrag,setImgDrag]=useState(null);
  const [editing,setEditing]=useState(false);
  const txtRef=useRef(null);
  const ds=sz.width>0?sz.width/W:0.25;
  const isCTA=slide.kind==='cta', tc=slide.textColor||'#fff';
  const showImg=slide.imageUrl&&slide.imageEnabled;
  const t=slide.imageTransform||DEFAULT_T;
  const ff=fontCss(slide.font);
  const fs=slide.fontSize||78;

  // Wheel zoom on image
  useEffect(()=>{
    const el=cRef.current; if(!el||!showImg) return;
    const onW=e=>{ if(editing) return; e.preventDefault(); const f=e.deltaY>0?0.93:1.07; onUpdate({imageTransform:{...t,scale:Math.max(1,Math.min(5,t.scale*f))}}); };
    el.addEventListener('wheel',onW,{passive:false}); return()=>el.removeEventListener('wheel',onW);
  },[showImg,t.scale,editing]);

  const onPD=e=>{ if(editing||e.target.closest('[data-ctrl]')||!showImg) return; try{cRef.current?.setPointerCapture(e.pointerId);}catch{} const r=cRef.current.getBoundingClientRect(); setImgDrag({sx:e.clientX,sy:e.clientY,ox:t.offsetX,oy:t.offsetY,sf:W/r.width}); };
  const onPM=e=>{ if(!imgDrag) return; onUpdate({imageTransform:{...t,offsetX:imgDrag.ox+(e.clientX-imgDrag.sx)*imgDrag.sf,offsetY:imgDrag.oy+(e.clientY-imgDrag.sy)*imgDrag.sf}}); };
  const onPU=()=>setImgDrag(null);

  const bgStyle=showImg?{}:slide.bgType==='gradient'?{background:gradCss(slide.gradientStops,slide.gradientAngle)}:{background:slide.bgColor||'#1A1A2E'};

  return (
    <div ref={cRef} style={{width:'100%',aspectRatio:'3/4',position:'relative',overflow:'hidden',borderRadius:16,background:'#000',cursor:showImg&&!editing?(imgDrag?'grabbing':'grab'):'default',touchAction:'none',userSelect:'none'}} onPointerDown={onPD} onPointerMove={onPM} onPointerUp={onPU} onPointerCancel={onPU}>
      {/* 1080×1440 inner scaled to fit */}
      <div style={{width:W,height:H,transform:`scale(${ds})`,transformOrigin:'top left',position:'absolute',top:0,left:0,...bgStyle}}>
        {showImg&&(<>
          <img src={slide.imageUrl} alt="" draggable={false} style={{position:'absolute',width:W,height:H,objectFit:'cover',transform:`translate(${t.offsetX}px,${t.offsetY}px) scale(${t.scale})`,transformOrigin:'center',pointerEvents:'none'}}/>
          <div style={{position:'absolute',inset:0,background:`rgba(0,0,0,${slide.overlay??0.45})`,pointerEvents:'none'}}/>
        </>)}
        {slide.magicLoading&&(
          <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.78)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',zIndex:8}}>
            <div style={{width:48,height:48,borderRadius:'50%',border:'3px solid rgba(255,255,255,0.15)',borderTopColor:'#0A84FF',animation:'cpSpin 0.7s linear infinite',marginBottom:14}}/>
            <div style={{color:'#fff',fontSize:16,fontFamily:ff}}>Generating…</div>
          </div>
        )}
        {/* Slide number */}
        <div style={{position:'absolute',top:80,left:80,fontSize:28,fontWeight:500,color:tc,opacity:0.65,fontFamily:ff,lineHeight:1}}>{index+1}</div>
        {/* Editable main text */}
        {editing?(
          <textarea ref={txtRef} value={slide.text}
            onChange={e=>onUpdate({text:e.target.value})}
            onBlur={()=>setEditing(false)}
            onKeyDown={e=>{if(e.key==='Escape')setEditing(false);e.stopPropagation();}}
            style={{position:'absolute',left:slide.textAlign==='right'?undefined:80,right:slide.textAlign==='left'?undefined:80,top:`${slide.textY||50}%`,transform:'translateY(-50%)',width:W-160,fontFamily:ff,fontSize:fs,fontWeight:slide.fontWeight||500,lineHeight:slide.lineHeight||1.15,letterSpacing:`${(slide.letterSpacing||0)*fs}px`,color:tc,textAlign:slide.textAlign||'left',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.3)',borderRadius:14,padding:16,resize:'none',outline:'none',cursor:'text',userSelect:'text',overflow:'hidden',minHeight:fs*2}}/>
        ):(
          <div onClick={()=>{setEditing(true);setTimeout(()=>txtRef.current?.focus(),30);}}
            style={{position:'absolute',left:slide.textAlign==='right'?undefined:80,right:slide.textAlign!=='left'?80:undefined,top:`${slide.textY||50}%`,transform:'translateY(-50%)',width:W-160,fontFamily:ff,fontSize:fs,fontWeight:slide.fontWeight||500,lineHeight:slide.lineHeight||1.15,letterSpacing:`${(slide.letterSpacing||0)*fs}px`,color:tc,textAlign:slide.textAlign||'left',cursor:'text',wordWrap:'break-word'}}>
            {slide.text||<span style={{opacity:0.3}}>Click to edit…</span>}
          </div>
        )}
        {/* Divider */}
        <div style={{position:'absolute',bottom:132,left:80,right:80,height:1,background:tc,opacity:0.2}}/>
        {/* Handle row */}
        <div style={{position:'absolute',bottom:68,left:80,fontSize:26,fontWeight:500,color:tc,opacity:0.75,fontFamily:ff,lineHeight:1}}>{handle}</div>
        {!isCTA&&<div style={{position:'absolute',bottom:68,right:80,fontSize:26,fontWeight:500,color:tc,opacity:0.75,fontFamily:ff,lineHeight:1}}>swipe →</div>}
        {isCTA&&<div style={{position:'absolute',bottom:50,right:80,width:225,height:58,borderRadius:29,background:tc,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:ff,fontSize:22,fontWeight:600,color:'#000'}}>save this →</div>}
      </div>
      {/* Controls */}
      {slide.imageUrl&&(
        <div data-ctrl style={{position:'absolute',top:8,right:8,display:'flex',gap:4,zIndex:10}}>
          <button data-ctrl onClick={e=>{e.stopPropagation();onUpdate({imageEnabled:!slide.imageEnabled});}} style={{...S.ovBtn,background:slide.imageEnabled?'rgba(10,132,255,0.85)':'rgba(0,0,0,0.65)'}} title="Toggle">{slide.imageEnabled?'◑':'○'}</button>
          {(t.scale!==1||t.offsetX!==0||t.offsetY!==0)&&<button data-ctrl onClick={e=>{e.stopPropagation();onUpdate({imageTransform:{...DEFAULT_T}});}} style={S.ovBtn} title="Reset">↺</button>}
        </div>
      )}
      {!editing&&<div style={{position:'absolute',bottom:8,left:'50%',transform:'translateX(-50%)',fontSize:9,color:'rgba(255,255,255,0.25)',whiteSpace:'nowrap',pointerEvents:'none',letterSpacing:.5}}>{showImg?'drag · scroll zoom':'click text to edit'}</div>}
    </div>
  );
}

/* ════════════════════════ INSPECTOR PANEL ════════════════════════════════ */
function Inspector({slide,onUpdate,onMagicImage,onUploadImage,onDownload}) {
  const [tab,setTab]=useState('style');
  const fRef=useRef(null);

  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
      <div style={{display:'flex',borderBottom:'1px solid rgba(255,255,255,0.07)',flexShrink:0}}>
        {['Content','Style','Image'].map(t=>(
          <button key={t} onClick={()=>setTab(t.toLowerCase())} style={{flex:1,padding:'12px 4px',fontSize:11,fontWeight:tab===t.toLowerCase()?600:400,color:tab===t.toLowerCase()?'#0A84FF':'rgba(255,255,255,0.4)',background:'transparent',border:'none',cursor:'pointer',borderBottom:`2px solid ${tab===t.toLowerCase()?'#0A84FF':'transparent'}`,transition:'color 140ms'}}>{t}</button>
        ))}
      </div>
      <div style={{flex:1,overflowY:'auto',padding:'14px 12px',display:'flex',flexDirection:'column',gap:13}}>

        {/* ── CONTENT TAB ── */}
        {tab==='content'&&<>
          <div>
            <div style={S.lbl}>Text</div>
            <textarea value={slide.text} onChange={e=>onUpdate({text:e.target.value})} style={{...S.inp,minHeight:100,resize:'vertical',lineHeight:1.6,fontSize:12,fontFamily:'inherit'}}/>
          </div>
          <div>
            <div style={S.lbl}>Slide type</div>
            <div style={{display:'flex',gap:4}}>
              {['hook','value','cta'].map(k=>(
                <button key={k} onClick={()=>onUpdate({kind:k})} style={{flex:1,padding:'7px',fontSize:10,borderRadius:9,background:slide.kind===k?'#0A84FF':'rgba(255,255,255,0.08)',color:'#fff',border:'none',cursor:'pointer',textTransform:'uppercase',letterSpacing:1}}>{k}</button>
              ))}
            </div>
          </div>
          <div>
            <div style={S.lbl}>Text position Y — {slide.textY||50}%</div>
            <SliderRow value={slide.textY||50} min={15} max={85} dfn={v=>v+'%'} onChange={v=>onUpdate({textY:v})}/>
          </div>
          <div>
            <div style={S.lbl}>Text align</div>
            <div style={{display:'flex',gap:4}}>
              {[['left','⬅'],['center','↔'],['right','➡']].map(([v,ic])=>(
                <button key={v} onClick={()=>onUpdate({textAlign:v})} style={{flex:1,padding:'8px',fontSize:14,borderRadius:9,background:(slide.textAlign||'left')===v?'#0A84FF':'rgba(255,255,255,0.08)',color:'#fff',border:'none',cursor:'pointer'}}>{ic}</button>
              ))}
            </div>
          </div>
        </>}

        {/* ── STYLE TAB ── */}
        {tab==='style'&&<>
          <div>
            <div style={S.lbl}>Font family</div>
            <select value={slide.font||'Inter'} onChange={e=>{const f=FONTS.find(f=>f.value===e.target.value);if(f)loadGFont(f);onUpdate({font:e.target.value});}} style={{...S.inp,cursor:'pointer',paddingRight:28}}>
              {FONTS.map(f=><option key={f.value||f.label} value={f.value} disabled={f.disabled}>{f.label}</option>)}
            </select>
          </div>
          <div>
            <div style={S.lbl}>Font size — {slide.fontSize||78}px</div>
            <SliderRow value={slide.fontSize||78} min={28} max={180} dfn={v=>v+'px'} onChange={v=>onUpdate({fontSize:v})}/>
          </div>
          <div>
            <div style={S.lbl}>Weight</div>
            <div style={{display:'flex',gap:3}}>
              {[300,400,500,600,700].map(w=>(
                <button key={w} onClick={()=>onUpdate({fontWeight:w})} style={{flex:1,padding:'6px 2px',fontSize:10,borderRadius:8,background:(slide.fontWeight||500)===w?'#0A84FF':'rgba(255,255,255,0.08)',color:'#fff',border:'none',cursor:'pointer',fontWeight:w}}>{w}</button>
              ))}
            </div>
          </div>
          <div>
            <div style={S.lbl}>Line height — {(slide.lineHeight||1.15).toFixed(2)}</div>
            <SliderRow value={slide.lineHeight||1.15} min={0.8} max={2.5} step={0.05} dec={2} dfn={v=>v.toFixed(2)} onChange={v=>onUpdate({lineHeight:v})}/>
          </div>
          <div>
            <div style={S.lbl}>Letter spacing — {((slide.letterSpacing||0)*1000).toFixed(0)}‰</div>
            <SliderRow value={slide.letterSpacing||0} min={-0.1} max={0.35} step={0.005} dec={3} dfn={v=>(v*1000).toFixed(0)+'‰'} onChange={v=>onUpdate({letterSpacing:v})}/>
          </div>
          <ColorPicker value={slide.textColor||'#FFFFFF'} onChange={c=>onUpdate({textColor:c})} label="Text color"/>
          <div style={{height:1,background:'rgba(255,255,255,0.07)'}}/>
          <div>
            <div style={S.lbl}>Background type</div>
            <div style={{display:'flex',gap:4,marginBottom:12}}>
              {['plain','gradient'].map(bt=>(
                <button key={bt} onClick={()=>onUpdate({bgType:bt})} style={{flex:1,padding:'8px',fontSize:11,borderRadius:9,textTransform:'capitalize',background:(slide.bgType||'gradient')===bt?'#0A84FF':'rgba(255,255,255,0.08)',color:'#fff',border:'none',cursor:'pointer'}}>{bt}</button>
              ))}
            </div>
            {slide.bgType==='plain'
              ?<ColorPicker value={slide.bgColor||'#1A1A2E'} onChange={c=>onUpdate({bgColor:c})} label="Color"/>
              :<GradEditor stops={slide.gradientStops||['#1A1A2E','#333']} angle={slide.gradientAngle||135} onChange={({stops,angle})=>onUpdate({gradientStops:stops,gradientAngle:angle})}/>
            }
          </div>
        </>}

        {/* ── IMAGE TAB ── */}
        {tab==='image'&&<>
          <button onClick={onMagicImage} style={{padding:'13px',background:'linear-gradient(135deg,#0A84FF,#5E5CE6)',border:'none',borderRadius:12,color:'#fff',fontSize:13,fontWeight:700,cursor:'pointer',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',gap:8,letterSpacing:'-0.01em'}}>
            ✦ Magic Image
          </button>
          <input ref={fRef} type="file" accept="image/*" onChange={e=>{if(e.target.files[0])onUploadImage(e.target.files[0]);e.target.value='';}} style={{display:'none'}}/>
          <button onClick={()=>fRef.current?.click()} style={S.ghost}>↑ Upload photo</button>
          {slide.imageUrl&&<>
            <div style={{display:'flex',gap:6}}>
              <button onClick={()=>onUpdate({imageEnabled:!slide.imageEnabled})} style={{...S.ghost,flex:1,color:slide.imageEnabled?'#0A84FF':'rgba(255,255,255,0.4)'}}>{slide.imageEnabled?'◑ Showing':'○ Hidden'}</button>
              <button onClick={()=>onUpdate({imageUrl:null,imageTransform:{...DEFAULT_T}})} style={{...S.ghost,color:'#FF453A'}}>Remove</button>
            </div>
            <div>
              <div style={S.lbl}>Overlay — {Math.round((slide.overlay??0.45)*100)}%</div>
              <SliderRow value={slide.overlay??0.45} min={0} max={0.9} step={0.05} dec={2} dfn={v=>Math.round(v*100)+'%'} onChange={v=>onUpdate({overlay:v})}/>
            </div>
            <div style={{borderRadius:12,overflow:'hidden',aspectRatio:'3/4',background:`url(${slide.imageUrl}) center/cover`,border:'1px solid rgba(255,255,255,0.08)'}}/>
          </>}
          <div style={{height:1,background:'rgba(255,255,255,0.07)'}}/>
          <button onClick={onDownload} style={{...S.ghost,fontSize:11}}>↓ Download this PNG</button>
        </>}
      </div>
    </div>
  );
}

/* ═══════════════════════ GENERATE MODAL ═════════════════════════════════ */
function GenerateModal({onGenerate,onClose}) {
  const [hook,setHook]=useState('');
  const [context,setContext]=useState('');
  const [ctxOpen,setCtxOpen]=useState(false);
  const [count,setCount]=useState(8);
  const [loading,setLoading]=useState(false);
  const [genCtx,setGenCtx]=useState(false);
  const [error,setError]=useState('');

  async function doCtx() {
    if(!hook.trim()) return;
    setGenCtx(true);
    try {
      const res=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:500,messages:[{role:'user',content:`Hook: "${hook.trim()}"\nWrite 5-6 supporting context bullet points. Output only the bullets, no preamble.`}]})});
      const d=await res.json();
      setContext((d.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('').trim());
      setCtxOpen(true);
    } catch {}
    setGenCtx(false);
  }

  async function go() {
    const h=hook.trim(); if(!h) return;
    setLoading(true); setError('');
    const vc=count-2, ctx2=context.trim()?`\n\nContext:\n${context.trim()}`:'';
    const prompt=`Instagram carousel. Output ONLY JSON, no markdown.
HOOK: "${h}"${ctx2}
${count} slides, ≤12 words each, no hashtags, no emoji.
Slide 1 kind:"hook", slides 2–${count-1} kind:"value" (${vc} slides), slide ${count} kind:"cta".
Pick ONE theme: warm|cool|acid|dusk|mono
{"theme":"cool","slides":[{"text":"...","kind":"hook"}${',{"text":"...","kind":"value"}'.repeat(vc)},{"text":"...","kind":"cta"}]}`;
    try {
      const res=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1200,messages:[{role:'user',content:prompt}]})});
      if(!res.ok) throw new Error('API '+res.status);
      const d=await res.json();
      let tx=(d.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('').replace(/```json\s*|```/g,'').trim();
      const a=tx.indexOf('{'),b=tx.lastIndexOf('}');
      if(a!==-1&&b!==-1) tx=tx.slice(a,b+1);
      const parsed=JSON.parse(tx);
      if(!Array.isArray(parsed.slides)||parsed.slides.length!==count) throw new Error('Unexpected shape');
      onGenerate(parsed.slides,parsed.theme||'cool',h,count);
      onClose();
    } catch(e){setError(e.message);}
    setLoading(false);
  }

  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.78)',zIndex:300,display:'flex',alignItems:'center',justifyContent:'center',padding:20,backdropFilter:'blur(20px)',WebkitBackdropFilter:'blur(20px)'}}>
      <div style={{background:'#1C1C1E',borderRadius:22,width:'100%',maxWidth:500,padding:26,border:'1px solid rgba(255,255,255,0.08)',boxShadow:'0 40px 120px rgba(0,0,0,0.9)'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:18}}>
          <div>
            <div style={{fontSize:10,color:'rgba(255,255,255,0.35)',textTransform:'uppercase',letterSpacing:2,marginBottom:4}}>AI Generate</div>
            <div style={{fontSize:22,fontWeight:700,letterSpacing:'-0.03em',color:'#fff'}}>New Carousel</div>
          </div>
          <button onClick={onClose} style={{width:30,height:30,borderRadius:9,background:'rgba(255,255,255,0.1)',border:'none',color:'#fff',cursor:'pointer',fontSize:15}}>×</button>
        </div>
        <div style={S.lbl}>Hook</div>
        <textarea value={hook} onChange={e=>setHook(e.target.value)} onKeyDown={e=>{if((e.metaKey||e.ctrlKey)&&e.key==='Enter')go();}} placeholder="One sharp line. Your angle." style={{...S.inp,minHeight:76,marginBottom:8,resize:'vertical'}}/>
        <div style={{display:'flex',gap:5,marginBottom:14,flexWrap:'wrap'}}>
          {["I built a bot writing my carousels","5 signs you're building the wrong thing"].map((h2,i)=>(
            <button key={i} onClick={()=>setHook(h2)} style={{...S.ghost,fontSize:10,padding:'5px 9px',overflow:'hidden',maxWidth:200,whiteSpace:'nowrap',textOverflow:'ellipsis'}}>{h2}</button>
          ))}
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:ctxOpen?7:12}}>
          <div style={S.lbl}>Context <span style={{color:'rgba(255,255,255,0.3)',fontWeight:400,textTransform:'none',letterSpacing:0}}>(optional)</span></div>
          <div style={{display:'flex',gap:5}}>
            <button onClick={doCtx} disabled={genCtx||!hook.trim()} style={{...S.ghost,fontSize:9,padding:'4px 9px',color:'#0A84FF',display:'flex',alignItems:'center',gap:5}}>
              {genCtx?<><span style={{width:8,height:8,borderRadius:'50%',border:'1.5px solid rgba(255,255,255,0.3)',borderTopColor:'#0A84FF',animation:'cpSpin 0.7s linear infinite'}}/>generating</>:'✦ AI fill'}
            </button>
            <button onClick={()=>setCtxOpen(!ctxOpen)} style={{...S.ghost,fontSize:9,padding:'4px 9px'}}>{ctxOpen?'▲':'▼'}</button>
          </div>
        </div>
        {ctxOpen&&<textarea value={context} onChange={e=>setContext(e.target.value)} placeholder="Paste notes, data, bullet points…" style={{...S.inp,minHeight:80,marginBottom:14,resize:'vertical'}}/>}
        {!ctxOpen&&context.trim()&&<div style={{fontSize:10,color:'#0A84FF',marginBottom:12}}>✦ {context.split('\n').length} lines of context ready</div>}
        <div style={S.lbl}>Slide count</div>
        <div style={{display:'flex',gap:4,marginBottom:18}}>
          {[4,5,6,7,8,9,10,12].map(n=>(
            <button key={n} onClick={()=>setCount(n)} style={{flex:1,padding:'8px 0',fontSize:12,borderRadius:9,background:count===n?'#0A84FF':'rgba(255,255,255,0.07)',color:'#fff',border:'none',cursor:'pointer',fontWeight:count===n?700:400}}>{n}</button>
          ))}
        </div>
        {error&&<div style={{padding:'9px 12px',background:'rgba(255,69,58,0.15)',borderRadius:10,fontSize:12,color:'#FF453A',marginBottom:14}}>{error}</div>}
        <button onClick={go} disabled={loading||!hook.trim()} style={{width:'100%',padding:'13px',border:'none',borderRadius:12,background:loading||!hook.trim()?'rgba(255,255,255,0.08)':'#0A84FF',color:'#fff',fontSize:14,fontWeight:700,cursor:loading||!hook.trim()?'not-allowed':'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:10,transition:'background 200ms'}}>
          {loading?<><span style={{width:14,height:14,borderRadius:'50%',border:'2px solid rgba(255,255,255,0.3)',borderTopColor:'#fff',animation:'cpSpin 0.7s linear infinite'}}/>Writing {count} slides…</>:`✦ Generate ${count} slides`}
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════ SHARED STYLES ═════════════════════════════════ */
const S = {
  lbl: {display:'block',fontSize:10,color:'rgba(255,255,255,0.45)',textTransform:'uppercase',letterSpacing:1.2,marginBottom:6,fontWeight:500},
  inp: {width:'100%',background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:10,padding:'9px 11px',color:'#fff',fontSize:12},
  ghost: {padding:'8px 12px',background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:9,color:'#fff',fontSize:11,cursor:'pointer',transition:'background 140ms',width:'100%'},
  ovBtn: {width:28,height:28,borderRadius:8,background:'rgba(0,0,0,0.65)',color:'#fff',border:'1px solid rgba(255,255,255,0.2)',cursor:'pointer',fontSize:12,display:'flex',alignItems:'center',justifyContent:'center',backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)'},
};

/* ═══════════════════════════ MAIN APP ═══════════════════════════════════ */
export default function CarouselPro() {
  const [slides,setSlides]=useState(()=>[
    makeSlide('hook',0),...Array.from({length:6},(_,i)=>makeSlide('value',i+1)),makeSlide('cta',7)
  ]);
  const [selIdx,setSelIdx]=useState(0);
  const [handle,setHandle]=useState('@yourhandle');
  const [showGen,setShowGen]=useState(false);
  const [dlStatus,setDlStatus]=useState(null); // null | {done,total}
  const [error,setError]=useState('');

  const sel=slides[Math.min(selIdx,slides.length-1)];

  useEffect(()=>{ FONTS.filter(f=>f.google).forEach(loadGFont); },[]);

  useEffect(()=>{
    const h=e=>{
      if(e.target.tagName==='TEXTAREA'||e.target.tagName==='INPUT') return;
      if(e.key==='ArrowRight'||e.key==='ArrowDown') setSelIdx(p=>Math.min(p+1,slides.length-1));
      if(e.key==='ArrowLeft'||e.key==='ArrowUp') setSelIdx(p=>Math.max(p-1,0));
    };
    window.addEventListener('keydown',h); return()=>window.removeEventListener('keydown',h);
  },[slides.length]);

  function update(i,u){ setSlides(p=>p.map((s,x)=>x===i?{...s,...u}:s)); }

  function addSlide(){
    const ns=makeSlide('value',slides.length);
    setSlides(p=>[...p.slice(0,-1),ns,p[p.length-1]]);
    setSelIdx(slides.length-1);
  }
  function removeSlide(i){
    if(slides.length<=2) return;
    setSlides(p=>p.filter((_,x)=>x!==i));
    setSelIdx(p=>Math.min(p,slides.length-2));
  }

  function onGenerate(newSlides,theme,hook,count){
    const pairs=THEME_MAP[theme]||THEME_MAP.cool;
    setSlides(newSlides.map((s,i)=>({
      ...makeSlide(s.kind,i), text:s.text,
      gradientStops:pairs[i%pairs.length],
      gradientAngle:130+(i%3)*20,
    })));
    setSelIdx(0);
  }

  async function magicImage(i){
    const sl=slides[i];
    update(i,{magicLoading:true});
    try {
      const res=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:80,messages:[{role:'user',content:`3-4 visual keywords (comma-separated) for an Instagram background photo for: "${sl.text}". Keywords only, no explanation.`}]})});
      const d=await res.json();
      const kw=encodeURIComponent((d.content[0]?.text||'abstract minimal dark').trim());
      const url=`https://source.unsplash.com/1080x1440/?${kw}`;
      await new Promise((res,rej)=>{const img=new Image();img.onload=res;img.onerror=rej;img.src=url;});
      update(i,{imageUrl:url,imageEnabled:true,magicLoading:false});
    } catch {
      update(i,{magicLoading:false});
      setError('Image unavailable — try uploading a photo instead.');
      setTimeout(()=>setError(''),3500);
    }
  }

  async function uploadImage(i,file){
    try { const url=await fileToDataUri(file); update(i,{imageUrl:url,imageEnabled:true,imageTransform:{...DEFAULT_T}}); }
    catch { setError('Failed to read image.'); }
  }

  async function downloadSingle(i){
    try {
      const canvas=await renderSlide(slides[i],i,handle);
      const blob=await new Promise((res,rej)=>canvas.toBlob(b=>b?res(b):rej(new Error('toBlob')),'image/png'));
      triggerDl(blob,`slide-${String(i+1).padStart(2,'0')}.png`);
    } catch(e){ setError('Export: '+e.message); }
  }

  async function downloadAllZip(){
    if(dlStatus) return;
    setDlStatus({done:0,total:slides.length});
    try {
      const JSZip=await loadJSZip();
      const zip=new JSZip();
      for(let i=0;i<slides.length;i++){
        setDlStatus({done:i+1,total:slides.length});
        const canvas=await renderSlide(slides[i],i,handle);
        const blob=await new Promise((res,rej)=>canvas.toBlob(b=>b?res(b):rej(new Error('toBlob')),'image/png'));
        zip.file(`slide-${String(i+1).padStart(2,'0')}.png`,blob);
        await new Promise(r=>setTimeout(r,80));
      }
      const zipBlob=await zip.generateAsync({type:'blob',compression:'STORE'});
      triggerDl(zipBlob,`carousel-${slides.length}-slides.zip`);
    } catch(e){ setError('ZIP export: '+e.message); }
    setDlStatus(null);
  }

  const filmBg=sl=>{
    if(sl.imageUrl&&sl.imageEnabled) return `url(${sl.imageUrl}) center/cover`;
    if(sl.bgType==='gradient') return gradCss(sl.gradientStops,sl.gradientAngle);
    return sl.bgColor||'#1A1A2E';
  };

  return (
    <div style={{height:'100vh',display:'flex',flexDirection:'column',background:'#1C1C1E',color:'#fff',fontFamily:'-apple-system,Helvetica Neue,Helvetica,Arial,sans-serif',overflow:'hidden'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;}body{margin:0;}
        ::-webkit-scrollbar{width:3px;height:3px;}::-webkit-scrollbar-track{background:transparent;}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.13);border-radius:2px;}
        input[type=range]{-webkit-appearance:none;height:3px;background:rgba(255,255,255,0.14);border-radius:2px;cursor:pointer;outline:none;}
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:15px;height:15px;border-radius:50%;background:#fff;box-shadow:0 1px 6px rgba(0,0,0,0.5);cursor:pointer;}
        input[type=range]::-moz-range-thumb{width:15px;height:15px;border-radius:50%;background:#fff;border:none;}
        select{appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='rgba(255,255,255,0.4)'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;}
        textarea:focus,input:focus{outline:none;box-shadow:0 0 0 2px rgba(10,132,255,0.45);}
        textarea,input,select,button{font-family:-apple-system,Helvetica Neue,Helvetica,Arial,sans-serif;}
        @keyframes cpSpin{to{transform:rotate(360deg);}}
        @keyframes cpFade{from{opacity:0;transform:translateY(4px);}to{opacity:1;transform:none;}}
        .cpf{animation:cpFade 180ms ease;}
        .filmitem:hover .filmrem{opacity:1!important;}
        .filmitem:hover{filter:brightness(1.08);}
      `}</style>

      {/* ── HEADER ── */}
      <header style={{height:50,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 14px',borderBottom:'1px solid rgba(255,255,255,0.06)',background:'rgba(28,28,30,0.94)',backdropFilter:'blur(24px)',WebkitBackdropFilter:'blur(24px)',flexShrink:0,zIndex:50}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:26,height:26,borderRadius:7,background:'linear-gradient(135deg,#0A84FF,#5E5CE6)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,flexShrink:0}}>✦</div>
          <div>
            <div style={{fontSize:13,fontWeight:700,letterSpacing:'-0.02em',lineHeight:1}}>Carousel Pro</div>
            <div style={{fontSize:9,color:'rgba(255,255,255,0.35)',letterSpacing:1,textTransform:'uppercase'}}>{slides.length} slides</div>
          </div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:7}}>
          <input value={handle} onChange={e=>setHandle(e.target.value)} placeholder="@handle"
            style={{padding:'5px 10px',background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.09)',borderRadius:8,color:'#fff',fontSize:12,width:130,fontFamily:'monospace'}}/>
          <button onClick={()=>setShowGen(true)} style={{padding:'6px 13px',background:'rgba(10,132,255,0.14)',border:'1px solid rgba(10,132,255,0.3)',borderRadius:9,color:'#0A84FF',fontSize:11,fontWeight:600,cursor:'pointer'}}>✦ Generate</button>
          <button onClick={downloadAllZip} disabled={!!dlStatus} style={{padding:'6px 13px',background:dlStatus?'rgba(255,255,255,0.07)':'#0A84FF',border:'none',borderRadius:9,color:'#fff',fontSize:11,fontWeight:600,cursor:dlStatus?'wait':'pointer',display:'flex',alignItems:'center',gap:6,minWidth:114,justifyContent:'center',transition:'background 150ms'}}>
            {dlStatus?<><span style={{width:10,height:10,borderRadius:'50%',border:'2px solid rgba(255,255,255,0.3)',borderTopColor:'#fff',animation:'cpSpin 0.7s linear infinite'}}/>{dlStatus.done}/{dlStatus.total}</>:'↓ Export ZIP'}
          </button>
        </div>
      </header>

      {error&&(
        <div className="cpf" style={{background:'rgba(255,69,58,0.12)',borderBottom:'1px solid rgba(255,69,58,0.2)',padding:'7px 14px',fontSize:11,color:'#FF453A',display:'flex',justifyContent:'space-between',alignItems:'center',flexShrink:0}}>
          {error}
          <button onClick={()=>setError('')} style={{background:'none',border:'none',color:'#FF453A',cursor:'pointer',fontSize:15,lineHeight:1}}>×</button>
        </div>
      )}

      {/* ── BODY ── */}
      <div style={{flex:1,display:'flex',overflow:'hidden'}}>

        {/* ── FILMSTRIP ── */}
        <div style={{width:136,borderRight:'1px solid rgba(255,255,255,0.06)',overflowY:'auto',padding:'10px 7px',display:'flex',flexDirection:'column',gap:5,flexShrink:0,background:'rgba(0,0,0,0.2)'}}>
          {slides.map((sl,i)=>(
            <div key={sl.id} className="filmitem" onClick={()=>setSelIdx(i)} style={{borderRadius:9,overflow:'hidden',cursor:'pointer',position:'relative',flexShrink:0,border:`2px solid ${selIdx===i?'#0A84FF':'transparent'}`,transition:'border-color 130ms,filter 130ms',boxShadow:selIdx===i?'0 0 0 1px rgba(10,132,255,0.2)':'none'}}>
              <div style={{aspectRatio:'3/4',background:filmBg(sl),position:'relative'}}>
                {sl.imageUrl&&sl.imageEnabled&&<div style={{position:'absolute',inset:0,background:`rgba(0,0,0,${sl.overlay??0.45})`}}/>}
                <div style={{position:'absolute',top:4,left:5,fontSize:8,fontWeight:700,color:sl.textColor||'#fff',opacity:.8}}>{i+1}</div>
                <div style={{position:'absolute',inset:0,padding:'16px 6px 6px',display:'flex',alignItems:'center'}}>
                  <div style={{fontSize:7,fontWeight:500,color:sl.textColor||'#fff',lineHeight:1.3,overflow:'hidden',display:'-webkit-box',WebkitLineClamp:5,WebkitBoxOrient:'vertical',wordBreak:'break-word'}}>{sl.text}</div>
                </div>
              </div>
              {slides.length>2&&<button className="filmrem" onClick={e=>{e.stopPropagation();removeSlide(i);}} style={{position:'absolute',top:2,right:2,width:15,height:15,borderRadius:4,background:'rgba(0,0,0,0.78)',color:'#fff',border:'none',cursor:'pointer',fontSize:9,display:'flex',alignItems:'center',justifyContent:'center',opacity:0,transition:'opacity 140ms',zIndex:5}}>×</button>}
            </div>
          ))}
          <button onClick={addSlide} style={{padding:'9px',background:'rgba(255,255,255,0.05)',border:'1px dashed rgba(255,255,255,0.12)',borderRadius:9,color:'rgba(255,255,255,0.35)',fontSize:18,cursor:'pointer',transition:'all 140ms',flexShrink:0}}
            onMouseEnter={e=>{e.currentTarget.style.background='rgba(10,132,255,0.1)';e.currentTarget.style.color='#0A84FF';}}
            onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.05)';e.currentTarget.style.color='rgba(255,255,255,0.35)';}}>+</button>
        </div>

        {/* ── CANVAS CENTER ── */}
        <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'18px 22px',overflow:'hidden',background:'radial-gradient(ellipse at 50% 30%,rgba(10,132,255,0.05) 0%,transparent 65%)'}}>
          <div style={{width:'100%',maxWidth:360}}>
            {/* Nav info + buttons */}
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:9}}>
              <span style={{fontSize:11,color:'rgba(255,255,255,0.4)',letterSpacing:.3}}>Slide {selIdx+1} / {slides.length} · <span style={{textTransform:'uppercase',fontSize:10,letterSpacing:.8}}>{sel?.kind}</span></span>
              <div style={{display:'flex',gap:4}}>
                <button onClick={()=>setSelIdx(p=>Math.max(0,p-1))} disabled={selIdx===0} style={{width:28,height:28,borderRadius:8,background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.1)',color:'#fff',cursor:'pointer',fontSize:14,opacity:selIdx===0?.3:1}}>‹</button>
                <button onClick={()=>setSelIdx(p=>Math.min(slides.length-1,p+1))} disabled={selIdx===slides.length-1} style={{width:28,height:28,borderRadius:8,background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.1)',color:'#fff',cursor:'pointer',fontSize:14,opacity:selIdx===slides.length-1?.3:1}}>›</button>
                <button onClick={()=>downloadSingle(selIdx)} style={{width:28,height:28,borderRadius:8,background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.1)',color:'#fff',cursor:'pointer',fontSize:11}}>↓</button>
              </div>
            </div>

            {/* ── Fluid slider navigation ── */}
            <div style={{marginBottom:14,position:'relative'}}>
              <input type="range" min={0} max={slides.length-1} value={selIdx} onChange={e=>setSelIdx(parseInt(e.target.value))} style={{width:'100%',accentColor:'#0A84FF'}}/>
              <div style={{display:'flex',justifyContent:'space-between',marginTop:3}}>
                {slides.map((_,i)=>(
                  <div key={i} style={{width:6,height:6,borderRadius:'50%',background:i===selIdx?'#0A84FF':'rgba(255,255,255,0.2)',transition:'background 150ms,transform 150ms',transform:i===selIdx?'scale(1.5)':'scale(1)',cursor:'pointer'}} onClick={()=>setSelIdx(i)}/>
                ))}
              </div>
            </div>

            {sel&&(
              <SlideCanvas key={sel.id} slide={sel} index={selIdx} handle={handle} onUpdate={u=>update(selIdx,u)}/>
            )}
          </div>
        </div>

        {/* ── INSPECTOR ── */}
        <div style={{width:268,borderLeft:'1px solid rgba(255,255,255,0.06)',flexShrink:0,background:'rgba(22,22,24,0.97)',backdropFilter:'blur(20px)',WebkitBackdropFilter:'blur(20px)',display:'flex',flexDirection:'column',overflow:'hidden'}}>
          {sel&&<Inspector slide={sel} onUpdate={u=>update(selIdx,u)} onMagicImage={()=>magicImage(selIdx)} onUploadImage={f=>uploadImage(selIdx,f)} onDownload={()=>downloadSingle(selIdx)}/>}
        </div>
      </div>

      {showGen&&<GenerateModal onGenerate={onGenerate} onClose={()=>setShowGen(false)}/>}
    </div>
  );
}
