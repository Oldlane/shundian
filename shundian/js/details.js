
    class Magnifier{
        constructor(){
            this.lPic=document.querySelector(".l-pic");
            this.span=document.querySelector(".l-pic span");
            this.rPic=document.querySelector(".r-pic");
            this.rImg=document.querySelector(".r-pic img");
            this.init();
        }
        init(){
            var that=this;
            this.lPic.onmouseover=function(){
                that.show();
            }
            this.lPic.onmouseout=function(){
                that.hide();
            }
            this.lPic.onmousemove=function(eve){
                var e=eve || window.event;
                that.move(e);
            }
        }
        move(e){
            var l=e.pageX-this.lPic.offsetLeft-this.span.offsetWidth/2;
            var t=e.pageY-this.lPic.offsetTop-this.span.offsetHeight/2;
            if(l<0) l=0;
            if(t<0) t=0;
            if(l>this.lPic.offsetWidth-this.span.offsetWidth){
                l=this.lPic.offsetWidth-this.span.offsetWidth;
            }
            if(t>this.lPic.offsetHeight-this.span.offsetHeight){
                t=this.lPic.offsetHeight-this.span.offsetHeight;
            }
            this.span.style.left=l+"px";
            this.span.style.top=l+"px";
            var x=l/(this.lPic.offsetWidth-this.span.offsetWidth);
            var y=t/(this.lPic.offsetHeight-this.span.offsetHeight);
            this.rImg.style.left=x*(this.rPic.offsetWidth-this.rImg.offsetWidth)+"px";
            this.rImg.style.top=y*(this.rPic.offsetHeight-this.rImg.offsetHeight)+"px";

           
        }
        show(){
            this.span.style.display="block";
            this.rPic.style.display="block";
        }
        hide(){
            this.span.style.display="none";
            this.rPic.style.display="none";            
        }
    }

    new Magnifier();

