var questionsArray = new Array();
var questionNumber = 0;


questionsArray.push(["Should you leave your AC on when you leave your house?","nobutton", "Running your AC wastes energy"]);
questionsArray.push(["Should you drive your car to go to the market a block away?","nobutton","Using your car is a bad idea beacuse the exaust will polute the ozone layer"]);
questionsArray.push(["If you only have a couple of dishes in your dishwasher, should you still  use it?","nobutton", "you should wait  until the dishwasher is full so you could save water and energy"])
questionsArray.push(["Should you keep your shower water running to get warm while you finish up chores?","nobutton", "No because  your wasting water"])
questionsArray.push(["If you and your friends are going to the same place, but live far away from  each other should you meet up with them and use one car to get to ur destination?","yesbutton", "you should carpool every chance you get it helps stop pollution"])
questionsArray.push(["Should you use a microwave to cook vegetables?", "yesbutton", "it will cook quicker and will consume less energy"])
questionsArray.push(["Should you open your oven door and take a peak while your baking something?","nobutton","No because everytime you take a peak you lose 25% of the heat in there, thus wasting more power"])
questionsArray.push(["Is it necessary to spell check your work before printing it?","yesbutton","it saves more paper"])
questionsArray.push(["Should you give a child a clean piece of paper if they want to draw?","nobutton","they tend to waste so give them a used piece of paper"])

$(document).ready(function() {
    $("#explanation").hide( );
    $("#continue")
    $("#questioncard").html(questionsArray[questionNumber][0]);
    $(".button").click(function() {
        var buttonId = $(this).attr("id");
        if(buttonId === questionsArray[questionNumber][1]) {
           $(".cloud:visible ").eq(Math.floor(Math.random() *$(".cloud:visible").length)).hide();
        }
        else{
            
            $(".cloud:hidden").eq(Math.floor(Math.random() *$(".cloud:hidden").length)).show();
        }
        $("#questioncard").hide();
        $(".button").hide();
        $("#explanation").show( );
        $("#continue").show();
        $("#explanation").html(questionsArray[questionNumber][2]);
       
        
        
        
    });
    
    $("#continue").click(function() {
        questionNumber++; 
        $("#questioncard").html(questionsArray[questionNumber][0]);
        $("#questioncard").show();
        $(".button").show();
        $("#explanation").hide();
        $("#continue").hide();
        
        
    })
    
    
    
    //cloud code
    $("#skyline").append('<div><img style="left:'+Math.floor(Math.random() *500)+'px;" class="cloud" src="http://www.cartoonlearning.com/wp-content/uploads/gray-cloud-black-outline.png"></div>');
    for(var i = 0; i < 15; i++) {
   $("#skyline").append('<div style="display:none;"><img style="right:'+Math.floor(Math.random() *900)+'px;top:'+Math.floor(Math.random() *200)+'px;" class="cloud" src="http://www.cartoonlearning.com/wp-content/uploads/gray-cloud-black-outline.png"></div>').children().last().fadeIn("slow");
   
}
});
