const fab=document.getElementById('fab');
const panel=document.getElementById('panel');
const overlay=document.getElementById('overlay');
fab.onclick=()=>{panel.classList.remove('hidden');overlay.classList.remove('hidden');}
overlay.onclick=()=>{panel.classList.add('hidden');overlay.classList.add('hidden');}
document.querySelectorAll('.btns button').forEach(b=>{
 b.onclick=()=>{
  const t=b.dataset.t;
  const txt=document.getElementById('jp').value;
  if(!txt) return;
  if(t==='google') window.open('https://translate.google.com/?sl=ja&tl=en&text='+encodeURIComponent(txt),'_blank');
  if(t==='deepl') window.open('https://www.deepl.com/translator#ja/en/'+encodeURIComponent(txt),'_blank');
  if(t==='gemini'){navigator.clipboard.writeText(txt);window.open('https://gemini.google.com','_blank');}
 }
});
