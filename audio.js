//здесь сам плеер   во второй строке адрес файла звука может быть и url
const player = new Tone.Player(
	"80s.mp3"	
).toMaster();	
player.volume.value = 0;
player.loop=true;


//здесь скрипт остановки звука при уходе со страницы
document.addEventListener('visibilitychange', () =>  {
  if (document.visibilityState === 'hidden') { 
    player.stop();  
  } else { 
    player.start(); 
  } 
}); 
