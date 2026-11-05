import {useEffect,useRef} from 'react'
export default function Lightbox({lb,setLb,onReg}){
const sx=useRef(0),n=lb?lb.items.length:0
const go=d=>setLb(l=>({...l,i:(l.i+d+n)%n})),close=()=>setLb(null)
useEffect(()=>{if(!lb)return;const k=e=>{if(e.key==='Escape')close();if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1)};addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[lb])
const it=lb&&lb.items[lb.i]
return(<div id="lb" className={lb?'o':''} onClick={e=>e.target===e.currentTarget&&close()}
onTouchStart={e=>sx.current=e.touches[0].clientX} onTouchEnd={e=>{const d=e.changedTouches[0].clientX-sx.current;if(Math.abs(d)>50&&n>1)go(d<0?1:-1)}}>
<button className="x" onClick={close} aria-label="Đóng">×</button>
{it&&<div id="lc" key={lb.i} className={n<2?'one':''} dangerouslySetInnerHTML={{__html:it.svg}}/>}
<p id="lt">{it?.cap}</p>
{it?.rg&&<button className="btn" style={{marginTop:4}} onClick={()=>{close();onReg(it.rg)}}>Đăng ký khóa học này</button>}
{n>1&&<><button className="nv" onClick={()=>go(-1)} aria-label="Trước">‹</button><button className="nv r" onClick={()=>go(1)} aria-label="Sau">›</button></>}
</div>)}
