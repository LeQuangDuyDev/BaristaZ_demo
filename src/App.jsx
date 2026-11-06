import {useState,useMemo,Fragment} from 'react'
import {C,T,G2,K,MC,U,art,RV} from './data'
import logo from './assets/logo.jpg'
import {photo,imgTag} from './photos'
import {useReveal,useScrollFx,useCount} from './hooks'
import Lightbox from './components/Lightbox'
import RegModal from './components/RegModal'
import DetailModal from './components/DetailModal'
import {initial} from './details'

const Brand=()=><span className="bn">Barista<b>Zone</b></span>
const MQ1=Array.from({length:8},()=>['☕ CÀ PHÊ','🎨 LATTE ART','🧋 TRÀ SỮA','🍰 BÁNH LẠNH','🍵 MATCHA','🌍 BARISTA QUỐC TẾ']).flat()
const MQ2=Array.from({length:8},()=>['🔥 THỰC HÀNH 100%','🎓 CẤP CHỨNG NHẬN','💼 HỖ TRỢ VIỆC LÀM','🏪 TƯ VẤN MỞ QUÁN','👨‍🍳 GIẢNG VIÊN GIÀU KINH NGHIỆM']).flat()
const pick=(kind,i,alt,fallback)=>{const src=photo(kind,i+1);return src?imgTag(src,alt):fallback}
const items={
 course:C.map((c,i)=>({svg:pick('course',i,c[1],art(K[i][0],K[i][1],i)),cap:`${c[1]} · ${c[3]}đ · ${c[4]} buổi`,rg:c[1]})),
 student:G2.map((g,i)=>({svg:pick('student',i,g[0],art(g[1],g[3],i,g[2])),cap:g[0]})),
 machine:MC.map((m,i)=>({svg:pick('machine',i,m[0],art(m[2],m[3],i)),cap:`${m[0]} – ${m[1]}`})),
 setup:U.map((u,i)=>({svg:pick('setup',i,u[0],art(u[1],u[2],i,3,i)),cap:u[0]}))}
const Zm=({k,i,html,cap,cls='',style,zoom})=><div className={`zm ${cls}`} data-cap={cap} style={style} onClick={()=>zoom(k,i)} dangerouslySetInnerHTML={{__html:html}}/>
const Count=({n,label})=>{const v=useCount(n);return <div><b>{v}</b><small>{label}</small></div>}
const Head=({tag,children,sub,cls=''})=><div className={`rv ${cls}`}><span className="tag">{tag}</span><h2>{children}</h2>{sub&&<p className="sub">{sub}</p>}</div>
const FEATS=[['👨‍🏫','Giảng viên chuyên gia','Barista quốc tế, bartender nhiều năm'],['🛠️','Thực hành 80%','Mỗi học viên một bộ dụng cụ riêng'],['📜','Chứng nhận','Cấp chứng chỉ sau khóa học'],['🤝','Hỗ trợ việc làm','Giới thiệu quán, tư vấn mở quán']]
const SV=[['🏪','Setup quán coffee',['Tư vấn mô hình & mặt bằng','Thiết kế menu, tính giá vốn','Đào tạo nhân sự trước khai trương','Hỗ trợ vận hành 3 tháng đầu'],'Nhận tư vấn'],
['🫘','Nguyên liệu pha chế',['Cà phê hạt rang xay chuẩn vị','Matcha, trà, syrup, sauce, bột','Topping, kem, nguyên liệu bánh','Giá sỉ cho học viên'],'Báo giá nguyên liệu'],
['⚙️','Máy móc thiết bị',['Máy espresso, máy xay chuyên dụng','Máy xay sinh tố, tủ mát, tủ bánh','Dụng cụ barista đầy đủ','Bảo hành, hướng dẫn sử dụng'],'Xem thiết bị']]
const LINKS=[['about','Giới thiệu'],['courses','Khóa học'],['team','Giảng viên'],['gallery','Học viên'],['services','Dịch vụ'],['machines','Thiết bị'],['setup','Setup quán'],['contact','Liên hệ']]

export default function App(){
const [lb,setLb]=useState(null),[reg,setReg]=useState(null),[menu,setMenu]=useState(false),[det,setDet]=useState(null)
useReveal();useScrollFx()
const zoom=(k,i)=>setLb({items:items[k],i})
const beans=useMemo(()=>Array.from({length:8},()=>({left:Math.random()*100+'%',animationDuration:10+Math.random()*14+'s',animationDelay:-Math.random()*20+'s',scale:.6+Math.random()})),[])
const R=c=>e=>{e.preventDefault();setReg(c)}
return(<>
<div id="bar"/>
<nav id="nav"><div className="wrap">
<a href="#home" className="brand"><img src={logo} alt="BaristaZone"/><Brand/></a>
<button id="burger" aria-label="Menu" onClick={()=>setMenu(!menu)}>☰</button>
<div className={`links ${menu?'o':''}`} onClick={()=>setMenu(false)}>
{LINKS.map(([h,t])=><a key={h} href={'#'+h}>{t}</a>)}
<a href="#" className="btn" onClick={R('')}>Đăng ký ngay</a></div></div></nav>

<header id="home" className="hero">
<div id="beans" style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none'}}>{beans.map((b,i)=><i key={i} className="bean" style={b}/>)}</div>
<div className="wrap"><div>
<span className="tag"><Brand/> · Trung tâm đào tạo pha chế</span>
<h1>Pha chế bằng <span>đam mê</span>, thành nghề bằng thực hành</h1>
<p>Từ ly cà phê đầu tiên đến việc làm chủ cả một quán. <Brand/> đồng hành cùng bạn với giáo trình thực tế, giảng viên giàu kinh nghiệm và thiết bị chuyên nghiệp.</p>
<div className="flex flex-wrap gap-3.5"><a href="#courses" className="btn">Khám phá khóa học ↓</a><a href="#" className="btn ghost" onClick={R('')}>Buổi trải nghiệm miễn phí</a></div>
<div className="stats"><Count n={5000} label="Học viên"/><Count n={9} label="Khóa học"/><Count n={95} label="% có việc làm"/></div>
</div>
<div className="visual"><div className="ring"/><div className="ring b"/><div className="orbit"/><div className="orbit b"/>
<img className="logo" src={logo} alt="Logo BaristaZone" onClick={()=>setLb({items:[{svg:`<img src="${logo}" alt="Logo BaristaZone">`,cap:'BaristaZone – Trung tâm đào tạo pha chế'}],i:0})}/>
<span className="chip c1">Espresso</span><span className="chip c2">Latte Art</span><span className="chip c3">Matcha</span></div></div>
<div className="scroll"/></header>

<div className="mqs">
<div className="mq"><div className="tk">{MQ1.map((t,i)=><Fragment key={i}><span>{t}</span><b>✦</b></Fragment>)}</div></div>
<div className="mq b"><div className="tk">{MQ2.map((t,i)=><Fragment key={i}><span>{t}</span><b>✦</b></Fragment>)}</div></div>
</div>

<section id="about"><div className="wrap about">
<div className="rv l"><span className="tag">Về chúng tôi</span><h2>Nơi mỗi người học <em>trở thành barista</em></h2>
<p><Brand/> là trung tâm đào tạo pha chế với phương châm “học ít lý thuyết – thực hành thật nhiều”. Mỗi học viên được tự tay vận hành máy móc, pha chế bằng nguyên liệu thật ngay từ buổi đầu.</p>
<p>Chúng tôi không chỉ dạy công thức, mà còn chia sẻ kinh nghiệm vận hành, tính giá vốn và xây dựng thực đơn để bạn tự tin đi làm hoặc mở quán riêng.</p>
<a href="#courses" className="btn">Xem lộ trình học</a></div>
<div className="feats rv r">{FEATS.map(f=><div key={f[1]} className="feat fx"><i>{f[0]}</i><b>{f[1]}</b><small>{f[2]}</small></div>)}</div></div></section>

<section id="courses" className="light"><div className="wrap">
<Head tag="Khóa học" sub="9 khóa học từ cơ bản đến chuyên sâu, mở lớp liên tục. Chạm vào khóa học để xem chi tiết.">Chọn khóa học <em>dành cho bạn</em></Head>
<div className="grid">{C.map((c,i)=><div key={c[1]} className={`card fx rv ${RV[i%3]}`} style={{transitionDelay:(i%3)*.12+'s'}} onClick={()=>setDet({t:'course',i})}>
<div className="zm cimg" dangerouslySetInnerHTML={{__html:items.course[i].svg+`<span class="cn">${c[1]}</span>`}}/>
<span className="lv">{c[2]}</span><div className="ic">{c[0]}</div><h3>{c[1]}</h3><p>{c[5]}</p><span className="more">Xem chi tiết ›</span>
<div className="meta"><span>📅 {c[4]} buổi<br/>Học phí</span><b>{c[3]}đ</b></div>
<button className="btn" onClick={e=>{e.stopPropagation();setReg(c[1])}}>Đăng ký khóa học</button></div>)}</div></div></section>

<section id="team"><div className="wrap">
<Head tag="Đội ngũ giảng viên" sub="Giảng viên đều có nhiều năm kinh nghiệm vận hành quán và tham gia các cuộc thi pha chế.">Học cùng <em>người trong nghề</em></Head>
<div className="team">{T.map((t,i)=><div key={t[0]} className="tm fx rv" style={{transitionDelay:i*.12+'s'}} onClick={()=>setDet({t:'team',i})}><div className="av">{photo('team',i+1)?<img src={photo('team',i+1)} alt={t[0]} loading="lazy" decoding="async"/>:initial(t)}</div><h3>{t[0]}</h3><em>{t[1]}</em><p>{t[2]}</p><span className="more">Xem chi tiết ›</span></div>)}</div></div></section>

<section id="gallery" className="light"><div className="wrap">
<Head tag="Học viên" sub="Những ly nước đầu tay, những nụ cười và ngày nhận chứng chỉ. (Ảnh demo)">Khoảnh khắc <em>tại <Brand/></em></Head>
<div className="gal">{G2.map((g,i)=><Zm zoom={zoom} key={i} k="student" i={i} cls={`ph rv ${RV[i%3]}`} cap={g[0]} style={{transitionDelay:i*.08+'s'}} html={items.student[i].svg+`<small>${g[0]}</small>`}/>)}</div></div></section>

<section id="services"><div className="wrap">
<Head tag="Dịch vụ" sub="Bạn muốn mở quán? Chúng tôi lo từ ý tưởng đến ngày khai trương.">Hơn cả một <em>lớp học</em></Head>
<div className="svc">{SV.map((s,i)=><div key={s[1]} className="sv fx rv" data-n={'0'+(i+1)}><div className="ic">{s[0]}</div><h3>{s[1]}</h3><ul>{s[2].map(l=><li key={l}>{l}</li>)}</ul><a href="#" className="btn" onClick={R('Tư vấn setup quán / thiết bị')}>{s[3]}</a></div>)}</div></div></section>

<section id="machines" className="light"><div className="wrap">
<Head tag="Máy móc thiết bị" sub="Học viên thực hành trên chính những thiết bị đang dùng tại các quán. Chạm vào ảnh để xem lớn hơn.">Thiết bị <em>chuyên nghiệp</em></Head>
<div className="mg">{MC.map((m,i)=><div key={m[0]} className={`mc fx rv ${RV[i%3]}`}><Zm zoom={zoom} k="machine" i={i} cap={items.machine[i].cap} html={items.machine[i].svg}/><div className="mi"><h3>{m[0]}</h3><p>{m[1]}</p></div></div>)}</div></div></section>

<section id="setup"><div className="wrap">
<Head tag="Setup quán" sub="Từ quán takeaway nhỏ đến quán sân vườn, mỗi không gian đều được tư vấn theo ngân sách và phong cách của bạn.">15 mẫu <em>không gian quán</em></Head>
<div className="sg">{U.map((u,i)=><Zm zoom={zoom} key={i} k="setup" i={i} cls={`rv ${RV[i%3]}`} cap={u[0]} style={{transitionDelay:(i%4)*.08+'s'}} html={items.setup[i].svg+`<small>${u[0]}</small>`}/>)}</div></div></section>

<section id="contact" className="light"><div className="wrap">
<Head tag="Liên hệ">Ghé thăm <em><Brand/></em></Head>
<div className="ct"><div className="info rv l">
<p><i>📍</i><span>123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh<br/><small>(địa chỉ demo)</small></span></p>
<p><i>📞</i><span>0900 000 000</span></p><p><i>✉️</i><span>hello@baristazone.vn</span></p><p><i>🕘</i><span>Thứ 2 – Chủ nhật: 8:00 – 20:00</span></p>
<a className="btn mt-3.5" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=123+Nguyen+Hue+Quan+1+Ho+Chi+Minh">Chỉ đường Google Maps</a></div>
<div className="map rv r"><iframe loading="lazy" title="Bản đồ BaristaZone" src="https://maps.google.com/maps?q=123%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM&output=embed" allowFullScreen/></div></div></div></section>

<footer>© 2026 <Brand/> – Trung tâm đào tạo pha chế. Tất cả quyền được bảo lưu.<div className="dep">Deploy by <b>LeQuangDuy</b></div></footer>
<a href="#" className="btn fab" onClick={R('')}>🎓 Đăng ký tư vấn</a>
<Lightbox lb={lb} setLb={setLb} onReg={setReg}/>
<DetailModal det={det} items={items} photo={photo} setDet={setDet} onReg={setReg}/>
<RegModal course={reg} onClose={()=>setReg(null)}/>
</>)}
