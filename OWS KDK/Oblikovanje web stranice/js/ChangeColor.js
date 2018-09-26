
$("#changeImg").ready(function(){
    //prepare Your data array with img urls
    var dataArray=new Array();
    dataArray[0]="images/Blue.jpg";
    dataArray[1]="images/Cyan.jpg";
    dataArray[2]="images/Green.jpg";
    dataArray[3]="images/Red.jpg";
    

    //start with id=0 after 5 seconds
    var thisId=0;

    window.setInterval(function(){
        $('#changeImg').attr('src',dataArray[thisId]);
        thisId++; //increment data array id
        if (thisId==3) thisId=0; //repeat from start
    },2000);        
});

$( window ).ready(function(){
    //prepare Your data array with img urls
    var dataArray=new Array();
    dataArray[0]="images/MobImg1.jpg";
    dataArray[1]="images/MobImg2.jpg";
    dataArray[2]="images/MobImg3.jpg";
    dataArray[3]="images/MobImg4.jpg";

    dataArray[4]="images/First_Left.jpg";
    dataArray[5]="images/First_Right.jpg";
    dataArray[6]="images/Second_Left.jpg";
    dataArray[7]="images/Second_Right.jpg";

    if($( document ).width()<992){
        $('#img1').attr('src',dataArray[0]);
        $('#img2').attr('src',dataArray[1]);
        $('#img3').attr('src',dataArray[2]);
        $('#img4').attr('src',dataArray[3]);
    }
    else{
        $('#img1').attr('src',dataArray[4]);
        $('#img2').attr('src',dataArray[5]);
        $('#img3').attr('src',dataArray[6]);
        $('#img4').attr('src',dataArray[7]);
    }
});
$( window ).resize(function(){
    //prepare Your data array with img urls
    var dataArray=new Array();
    dataArray[0]="images/MobImg1.jpg";
    dataArray[1]="images/MobImg2.jpg";
    dataArray[2]="images/MobImg3.jpg";
    dataArray[3]="images/MobImg4.jpg";

    dataArray[4]="images/First_Left.jpg";
    dataArray[5]="images/First_Right.jpg";
    dataArray[6]="images/Second_Left.jpg";
    dataArray[7]="images/Second_Right.jpg";

    if($( document ).width()<992){
        $('#img1').attr('src',dataArray[0]);
        $('#img2').attr('src',dataArray[1]);
        $('#img3').attr('src',dataArray[2]);
        $('#img4').attr('src',dataArray[3]);
    }
    else{
        $('#img1').attr('src',dataArray[4]);
        $('#img2').attr('src',dataArray[5]);
        $('#img3').attr('src',dataArray[6]);
        $('#img4').attr('src',dataArray[7]);
    }
});







