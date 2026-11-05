import {useState,useEffect} from 'react'
import {C} from '../data'
export default function RegModal({course,onClose}){
const open=course!==null,[f,setF]=useState({n:'',p:'',e:'',c:'',t:''}),[ok,setOk]=useState(false)
useEffect(()=>{if(open){setOk(false);setF(x=>({...x,c:course}))}},[open,course])
useEffect(()=>{const k=e=>e.key==='Escape'&&onClose();addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[onClose])
const set=k=>e=>setF({...f,[k]:e.target.value})
const send=()=>{if(!f.n.trim()||!/^[0-9 +().-]{9,15}$/.test(f.p.trim())||!f.c)return alert('Vui lòng nhập họ tên, số điện thoại hợp lệ và chọn khóa học.');setOk(true)}
const reset=()=>{setF({n:'',p:'',e:'',c:'',t:''});onClose()}
return(<div id="m" className={open?'o':''} onClick={e=>e.target===e.currentTarget&&reset()}><div className="box">
<button className="x" onClick={reset} aria-label="Đóng">×</button>
{!ok?<div><h3>Đăng ký <em>học pha chế</em></h3><small style={{opacity:.65}}>Để lại thông tin, chúng tôi sẽ gọi tư vấn trong 24h.</small>
<label>Họ và tên *</label><input value={f.n} onChange={set('n')} placeholder="Nguyễn Văn A"/>
<label>Số điện thoại *</label><input type="tel" value={f.p} onChange={set('p')} placeholder="09xx xxx xxx"/>
<label>Email</label><input type="email" value={f.e} onChange={set('e')} placeholder="email@gmail.com"/>
<label>Khóa học quan tâm *</label><select value={f.c} onChange={set('c')}><option value="">-- Chọn khóa học --</option>{C.map(c=><option key={c[1]}>{c[1]}</option>)}<option>Tư vấn setup quán / thiết bị</option></select>
<label>Ghi chú</label><textarea rows="2" value={f.t} onChange={set('t')} placeholder="Thời gian học mong muốn..."/>
<button className="btn" onClick={send}>Gửi đăng ký ☕</button></div>
:<div className="ok" style={{display:'block'}}><div>🎉</div><h3>Đăng ký thành công!</h3><p style={{opacity:.7,marginTop:8}}>Cảm ơn <b>{f.n}</b>. BaristaZone sẽ liên hệ bạn sớm nhất.</p></div>}
</div></div>)}
