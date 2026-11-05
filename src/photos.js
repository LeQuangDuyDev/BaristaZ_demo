// Tự động nhận ảnh trong thư mục src/photos theo TÊN FILE (xem README.txt trong thư mục đó).
// Có ảnh -> dùng ảnh thật. Không có -> giữ hình minh họa cũ.
const files=import.meta.glob('./photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',{eager:true,query:'?url',import:'default'})
const map={}
for(const p in files)map[p.split('/').pop().replace(/\.[^.]+$/,'').toLowerCase()]=files[p]

export const photo=(kind,n)=>map[`${kind}-${n}`]
export const imgTag=(src,alt)=>`<img src="${src}" alt="${String(alt).replace(/"/g,'&quot;')}" loading="lazy" decoding="async" draggable="false">`
