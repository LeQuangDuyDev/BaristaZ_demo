import {useEffect,useState} from 'react'

// Fade-in + Scale + trượt lên khi cuộn tới (các khối cùng hàng vào lần lượt)
export function useReveal(){useEffect(()=>{
  document.querySelectorAll('.rv').forEach(el=>{
    const n=[...el.parentElement.children].filter(c=>c.classList.contains('rv')).indexOf(el)
    if(!el.style.transitionDelay)el.style.transitionDelay=(n%4)*.1+'s'
  })
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting)return
    const t=e.target
    t.classList.add('in');io.unobserve(t)
    if(t.classList.contains('rv'))setTimeout(()=>{t.style.transitionDelay='0s';t.classList.add('done')},2600)
  }),{threshold:.12,rootMargin:'0px 0px -8% 0px'})
  document.querySelectorAll('.rv,h2').forEach(e=>io.observe(e))
  return()=>io.disconnect()
},[])}

// Hiệu ứng cuộn: nhẹ, chỉ chạy 1 lần/khung hình khi có scroll
export function useScrollFx(){useEffect(()=>{
  const $=s=>document.querySelector(s)
  const bar=$('#bar'),nav=$('#nav'),hero=$('#home'),vis=$('.visual'),svc=$('#services')
  const svs=[...document.querySelectorAll('.sv')]
  let ticking=false,heroOn=true,svcOn=false

  const update=()=>{
    ticking=false
    const y=scrollY,H=innerHeight,max=document.documentElement.scrollHeight-H
    bar.style.transform=`scaleX(${max>0?y/max:0})`
    nav.classList.toggle('s',y>40)
    if(svcOn){ // số trong thẻ dịch vụ: càng gần giữa màn hình càng đậm và lớn
      svs.forEach(el=>{const r=el.getBoundingClientRect(),d=Math.abs(r.top+r.height/2-H/2)/(H*.6)
        el.style.setProperty('--p',Math.max(0,1-d).toFixed(2))})
    }
    if(heroOn)vis.style.transform=y<4?'':`translate3d(0,${y*.08}px,0)` // chỉ parallax nhẹ, KHÔNG làm mờ nội dung
  }
  const onScroll=()=>{if(!ticking){ticking=true;requestAnimationFrame(update)}}

  // Hero ra khỏi màn hình -> tạm dừng hạt cà phê, vòng quay, logo...
  const io=new IntersectionObserver(([e])=>{heroOn=e.isIntersecting;hero.classList.toggle('paused',!heroOn);if(heroOn)onScroll()})
  io.observe(hero)
  const io2=new IntersectionObserver(([e])=>{svcOn=e.isIntersecting;if(svcOn)onScroll()})
  if(svc)io2.observe(svc)
  addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);update()

  // Nghiêng thẻ khóa học: chỉ trên máy có chuột, đo vị trí 1 lần khi vào thẻ
  const off=[]
  if(matchMedia('(hover:hover)').matches){
    document.querySelectorAll('.card').forEach(c=>{
      let r,raf=0
      const en=()=>{r=c.getBoundingClientRect()}
      const mv=e=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{
        const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5
        c.style.transform=`perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-6px)`})}
      const lv=()=>{cancelAnimationFrame(raf);c.style.transform=''}
      c.addEventListener('mouseenter',en);c.addEventListener('mousemove',mv);c.addEventListener('mouseleave',lv)
      off.push(()=>{c.removeEventListener('mouseenter',en);c.removeEventListener('mousemove',mv);c.removeEventListener('mouseleave',lv)})
    })
  }

  // Tia lấp lánh khi chạm
  const sp=e=>{for(let i=0;i<6;i++){const s=document.createElement('i');s.className='sp'
    const a=Math.PI*2*i/6,d=30+Math.random()*30
    s.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;--x:${Math.cos(a)*d}px;--y:${Math.sin(a)*d}px`
    document.body.appendChild(s);setTimeout(()=>s.remove(),700)}}
  document.addEventListener('pointerdown',sp)

  return()=>{io.disconnect();io2.disconnect();removeEventListener('scroll',onScroll);removeEventListener('resize',onScroll);document.removeEventListener('pointerdown',sp);off.forEach(f=>f())}
},[])}

export function useCount(n){const[v,setV]=useState(0);useEffect(()=>{let x=0;const st=n/60,t=setInterval(()=>{x+=st;if(x>=n){x=n;clearInterval(t)}setV(Math.round(x))},25);return()=>clearInterval(t)},[n]);return v.toLocaleString('vi-VN')+(n>=1000?'+':'')}
