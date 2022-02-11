//slideshow

let image=document.getElementById('smoothiehomeimg1');
let randomimgarray=["Home-images/slide.jpg","Home-images/slide1.jpg","Home-images/slide2.jpg"];
let length=randomimgarray.length;

function displayimg(){
    let imageindex=0;
    setInterval(function(){
        image.src=randomimgarray[imageindex];
        imageindex++;
        if(imageindex>=length){
            imageindex=0;
        }
    },2200);
}

displayimg();


// form 

let namenode;
let spannode1;

let emailnode;
let spannode2;

let mnumnode;
let spannode3;

let invalidborder="4px double red";
let validborder="4px double green"

$(document).ready(function(){
    namenode=$('#name');
    spannode1=$('#error1');;

    emailnode=$('#email');
    spannode2=$('#error2');

    mnumnode=$('#mobilenumber');
    spannode3=$('#error3');

    namenode.blur(()=>validate1());
    emailnode.blur(()=>validate2());
    mnumnode.blur(()=>validate3());
    

    $('#partnerform').submit(()=>formValidate());
});

function validate1(){
    let firstname=namenode.val();
    spannode1.text("");
    if(firstname===""){
        spannode1.text("Please enter name");
        namenode.css({'border':invalidborder});
        return false;
    }
    else{
        namenode.css({'border':validborder});
        return true;
    }

}

function validate2(){
    let email=emailnode.val();
    spannode2.text("");
    if(email===""){
        spannode2.text("Email is Required ");
        emailnode.css({'border':invalidborder});
        return false;
    }
    else if(!email.includes('@')|| email.substring(email.indexOf('@')+1)===""){
        spannode2.text("Enter a valid email ");
        emailnode.css({'border':invalidborder});
        return false;
    }
    else{
        emailnode.css({'border':validborder});
        return true;
    }

}


function validate3(){
    let mobilenumber=mnumnode.val();
    spannode3.text("");
    let regexp=new RegExp("^[0-9]{10}$");
    let result=regexp.test(mobilenumber);
    if(mobilenumber===""){
        spannode3.text("Required Field");
        mnumnode.css({'border':invalidborder});
        return false;
    }
    else if(result===false){
        spannode3.text("Please Enter a valid Mobile number");
        mnumnode.css({'border':invalidborder});
        return false;
    }
    else{
        mnumnode.css({'border':validborder});
        return true;
    }

}


function formValidate(){
    let s1=validate1();
    let s2=validate2();
    let s3=validate3();

    return(s1 && s2 && s3);
}
