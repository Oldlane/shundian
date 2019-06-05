var ouser=document.getElementById("user");
        var opass=document.getElementById("pass");
        var opass2=document.getElementById("pass2");
        var obtn=document.getElementById("btn3");
        var ospan1=document.getElementById("span1");
        var ospan2=document.getElementById("span2");
        var ospan3=document.getElementById("span3");
    
        var ouseronOff=opassonOff=opass2onOff=false;
        //		用户名仅支持中文、字母、数字、“-”“_”的组合，4-20个字符
            ouser.onblur=function(){
                var reg=/^[\u2E80-\u9FFF\w-]{4,20}$/;
                if(reg.test(this.value)){
                    ospan1.innerHTML="用户名符合";
                    ouseronOff=true;
                }else{
                    ospan1.innerHTML="用户名不符合";	
                    ouseronOff=false;
                }
            }
    //		 数字字母特殊字符，一种类型，弱。两种类型为中，三种类型为强
            opass.onblur=function(){
                var a=b=c=0;
                var lengthReg=/^.{6,18}$/;
                if(!lengthReg.test(this.value)){
                    ospan2.innerHTML="密码长度不符合";
                    opassonOff=false;
                    return ;
                }
                var numReg=/\d/;
                if(numReg.test(this.value)){
                    a=1;
                }
                var azReg=/[a-zA-Z]/;
                if(azReg.test(this.value)){
                    b=1;
                }
                var tsReg=/[\W_]/;
                if(tsReg.test(this.value)){
                    c=1;
                }
                switch(a+b+c){
                    case 1:ospan2.innerHTML="密码强度弱";break;
                    case 2:ospan2.innerHTML="密码强度一般";break;
                    case 3:ospan2.innerHTML="密码强度强";break;								
                }
                opassonOff=true;
                if(opass2.value!=""){
                    if(this.value==opass2.value){
                        ospan3.innerHTML="密码一致";
                        opass2onOff=true;
                    }else{
                        ospan3.innerHTML="密码不一致";
                        opass2onOff=false;
                    }
                }
            }
            opass2.onblur=function(){
                if(this.value==opass.value){
                    ospan3.innerHTML="密码一致";
                    opass2onOff=true;
                }else{
                    ospan3.innerHTML="密码不一致";
                    opass2onOff=false;
                }
            }
            
            obtn.onclick=function(){
                if(ouseronOff && opassonOff && opass2onOff){
                    alert("注册成功");
                }else if(!ouseronOff){
                    alert("用户名不符合，注册失败");
                }else if(!opassonOff){
                    alert("密码不符合，注册失败");
                }else if(opass.value!=opass2.value){
                    alert("密码不一致，注册失败");
                }
            }