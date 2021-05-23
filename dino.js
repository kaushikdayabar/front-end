var p=150;
var counter=0;


function jump(){

	if(p ==100)
	{
		p=150;
		document.getElementById('dino').style.top=p + "px";
		clearInterval(id);
	}
	else{
		p--;
		document.getElementById('dino').style.top=p + 'px';
		
	}	
 
}

var sdt=null;
var chk=null;
document.addEventListener("keyup",function(event){
	if(event.keyCode === 32)
	{
		 sdt=new Date();
		 sdt=sdt.getTime();
		 document.getElementById('blk').style.left='380px';
		 document.getElementById('dino').style.left='30px';
		 document.getElementById('dino').style.top='150px';
		 chk=setInterval(blk_run,10);
		 
	}
	else if(event.keyCode === 13){
	 id=setInterval(jump,10);
	}
	
	if(event.keyCode===32)
	{
		 scr=setInterval(score,5);
	}
	
});



var bp=380;
function blk_run()
{
  document.getElementById('blk').style.left=bp+'px';	
  bp=bp-1;
  if(bp === 30  && document.getElementById('dino').style.top === '150px')
  { 
	  clearInterval(scr);
	  clearInterval(chk);
     alert('game over and your score is '+(cdt-sdt)/1000);
	  
  }
  else  if(bp === 0 )
  {
	  bp=380;
	  document.getElementById('blk').style.display='none';
	  clearInterval(chk);
	
	  setTimeout(function()
	          {document.getElementById('blk').style.display='block';
			   chk=setInterval(blk_run,10);},
			  Math.floor(Math.random()*10000));  
  }
}

var cdt=null;
function score(){
	cdt=new Date();
	cdt=cdt.getTime();
	
	document.getElementById('scr').innerHTML=(cdt-sdt)/1000;
}