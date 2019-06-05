class Index{
    constructor(){
        this.btn2=document.getElementById("btn2");
        this.btn1=document.getElementById("btn1");
        this.loginSuccess=document.querySelector(".login-success");
        this.user = document.querySelector(".login-success span");
        this.logout = document.querySelector(".logout");

        this.init();
        this.addEvent();
    }
    init(){
        this.usermsg=localStorage.getItem("usermsg") ? JSON.parse(localStorage.getItem("usermsg")) : [];
        this.check();
    }
    check(){
        for(var i=0;i<this.usermsg.length;i++){
            if(this.usermsg[i].onoff==1){
                this.btn2.style.display="none";
                this.btn1.style.display="none";
                this.loginSuccess.style.display="block";
                this.user.innerHTML=this.usermsg[i].user;
                this.name=this.usermsg[i].user;
                return;
            }
        }
    }
    addEvent(){
        this.logout.onclick=function(){
            for(var i=0;i<this.usermsg.length;i++){
                if(this.name==this.usermsg[i].user){
                    this.usermsg[i].onoff=0;
                    this.btn2.style.display="block";
                    this.btn1.style.display="block";
                    this.loginSuccess.style.display="none";
                    localStorage.setItem("usermsg",JSON.stringify(this.usermsg));
                    return;
                }
            }
        }
    }
}

new Index()