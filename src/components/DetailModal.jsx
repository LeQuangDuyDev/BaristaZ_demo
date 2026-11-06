import {useEffect} from 'react'
import {C,T} from '../data'
import {COURSE_DETAIL,TEAM_DETAIL,PERKS} from '../details'

export default function DetailModal({det,items,photo,setDet,onReg}){
  const open=!!det,close=()=>setDet(null)
  useEffect(()=>{if(!open)return;const k=e=>e.key==='Escape'&&close();addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[open])
  if(!open)return null
  const wrap=body=><div id="dm" className="o" onClick={e=>e.target===e.currentTarget&&close()}><div className="box dbox"><button className="x" onClick={close} aria-label="Đóng">×</button>{body}</div></div>

  if(det.t==='course'){
    const c=C[det.i],d=COURSE_DETAIL[det.i]||{goals:[],lessons:[]}
    return wrap(<>
      <div className="dh"><div className="dimg" dangerouslySetInnerHTML={{__html:items.course[det.i].svg}}/>
        <div><span className="lv2">{c[2]}</span><h3>{c[1]}</h3><p className="dsum">{c[5]}</p></div></div>
      <div className="dchips"><span>📅 {c[4]} buổi</span><span>💰 {c[3]}đ</span></div>
      {d.who&&<><h4>Phù hợp với</h4><p>{d.who}</p></>}
      <h4>Học xong bạn sẽ</h4><ul className="dl">{d.goals.map(g=><li key={g}>{g}</li>)}</ul>
      <h4>Nội dung chính</h4><ol className="dn">{d.lessons.map(l=><li key={l}>{l}</li>)}</ol>
      <h4>Quyền lợi</h4><ul className="dl">{PERKS.map(g=><li key={g}>{g}</li>)}</ul>
      <button className="btn" onClick={()=>{close();onReg(c[1])}}>Đăng ký khóa học này</button>
    </>)
  }

  const t=T[det.i],d=TEAM_DETAIL[det.i]||{points:[],courses:[]},p=photo('team',det.i+1)
  return wrap(<>
    <div className="dh"><div className="dav">{p?<img src={p} alt={t[0]} decoding="async"/>:t[3]}</div>
      <div><span className="lv2">{d.exp&&`Kinh nghiệm: ${d.exp}`}</span><h3>{t[0]}</h3><p className="dsum">{t[1]}</p></div></div>
    <p>{d.bio||t[2]}</p>
    {d.quote&&<blockquote className="dq">“{d.quote}”</blockquote>}
    {d.points.length>0&&<><h4>Điểm nổi bật</h4><ul className="dl">{d.points.map(g=><li key={g}>{g}</li>)}</ul></>}
    {d.courses.length>0&&<><h4>Phụ trách các khóa</h4><div className="dchips">{d.courses.map(i=><button key={i} className="dcb" onClick={()=>setDet({t:'course',i})}>{C[i][0]} {C[i][1]}</button>)}</div></>}
    <button className="btn" onClick={()=>{close();onReg('')}}>Đăng ký tư vấn</button>
  </>)
}
