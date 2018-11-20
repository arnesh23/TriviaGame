
var i = -1;
var correct = 0;
//Questions
var question = ["What is the capital of America?",
                "What is the capital of Russia?",
                "What is the capital of Mexico?",
                "What is the capital of India?",
                "What is the capital of Nepal?",
                "What is the capital of Australia?",
                "What is the capital of New Zealand?",
                "What is the capital of Spain?",
                "What is the capital of Portugal?",
                "What is the capital of China?"
                ]
//Answers
var answers = [
            ["DC", "Mexico City", "Ottowa", "Kathmandu"],
            ["Latvia", "Beijing", "Seoul", "Moscow"],
            ["Madrid", "Mexico City", "Brasilia", "Guatemala City"],
            ["Kabul", "Kathmandu", "Karachi", "New Delhi"],
            ["Munich", "London", "Tel-Aviv", "Kathmandu"],
            ["Sydney", "Melbourne", "Perth", "Phucket"],
            ["Wellington", "London", "Tel-Aviv", "Kathmandu"],
            ["Rome", "Oslo", "Madrid", "Melbourne"],
            ["Munich", "Lisbon", "Tel-Aviv", "Kathmandu"],
            ["Tokyo", "Shanghai", "Beijing", "Seoul"]
          ]
 //CorrectAns         
var correctAns = ["Ans0box", "Ans3box", "Ans1box", "Ans3box", "Ans3box", "Ans0box", "Ans0box", "Ans2box", "Ans1box", "Ans2box"]
  
//Run the questions 10 times
setInterval(tenSeconds, 1000*10,10);
    
    
function tenSeconds(){

    var j = 0;
    console.log("IIIIII:"+i);
    i++;
    //clear buttons everytime new question pops up
    $('input[type=radio]').prop('checked',false)
      
   // console.log(i);
   // console.log(question[i]);

   //Display Question
    $("#Question").html(question[i]);

    //Display the Questions
    for(var j = 0; j < 4; j++){
      console.log("J:"+j);
        $("#"+"Answ"+j).html(answers[i][j]);
        console.log(answers[i][j]);
    };

    //Display correct or incorrect answer to the screen
    $("input").unbind().click(function() {
      console.log("click");
      console.log($(this).attr("id"));

      console.log(i);
      if($(this).attr("id") === correctAns[i]){
        $("#PlaceHolder").html("<h1>Correct!!</h1>");
        correct++;
        console.log(correct);
        console.log("Correct!!!")
      }
      else
      $("#PlaceHolder").html("<h1>Incorrect!!</h2>");
      $("#scorePlaceHolder").text("Score:"+correct);
    });
    
  };
 