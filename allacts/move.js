function move_picture(d){
    if (d=='left'){
        position_left=document.getElementById('box').style.left;
        position_left=position_left.substring(0,position_left.length-2);
        position_left=parseInt(position_left)-50;
        document.getElementById('box').style.left=position_left+"px";
        document.getElementById('box').innerHTML='<img src=l.png />';
         }
    if (d=='right'){
        position_left=document.getElementById('box').style.left;
        position_left=position_left.substring(0,position_left.length-2);
        position_left=parseInt(position_left)+50;
        document.getElementById('box').style.left=position_left+"px";
        document.getElementById('box').innerHTML="<img src=r.png />";
    }
   if(d=='up'){
    position_top=document.getElementById('box').style.top;
    position_top=position_top.substring(0,position_top.length-2);
    position_top=parseInt(position_top)-50;
    document.getElementById('box').style.top=position_top+"px";
    document.getElementById('box').innerHTML='<img src=t.png />';
}
   if (d=='down'){
    position_top=document.getElementById('box').style.top;
    position_top=position_top.substring(0,position_top.length-2);
    position_top=parseInt(position_top)+50;
    document.getElementById('box').style.top=position_top+"px";
    document.getElementById('box').innerHTML='<img src=d.png />';
}
    }
    