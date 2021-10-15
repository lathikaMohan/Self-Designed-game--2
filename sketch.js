var title;
var title1;
var mentalAbility,level1,level2,question;
var generalKnowledge;
var riddles;
var puzzles;
var funAndGames;
var winSound;
function preload(){
 // winSound = loadSound("");
}

function setup() {
  createCanvas(400,600);
  
  title = createElement('h2')
  title.html("Your Brain Lab ");
  title.position(510, 100);

  mentalAbility = createButton('Mental Ability');
  mentalAbility.position(530, 230);
  mentalAbility.style('background-color',"lightBlue")
  mentalAbility.style('border-radius','25px')

  generalKnowledge = createButton('General Knowledge');
  generalKnowledge.position(520, 280);

  riddles = createButton('Riddles');
  riddles .position(550, 330);

  puzzles = createButton('Puzzles');
  puzzles.position(550, 380);
  puzzles.style('background-color',"lightYellow")
  puzzles.style('border-radius','25px')


  funAndGames= createButton('Fun And Games');
  funAndGames.position(530, 430);
  funAndGames.style('background-color',"lightYellow")
  funAndGames.style('border-radius','25px')
  
  


}

function draw() {
  background("lightpink");  
  drawSprites();

  mentalAbility.mousePressed(() => {
    mentalAbility.hide();
    generalKnowledge.hide();
    riddles.hide();
    puzzles.hide();
    funAndGames.hide();
    title.hide();

    title1 = createElement('h4')
    title1.html("Mental Ability ");
    title1.position(550, 100);

    level1 = createButton('EASY');
    level1 .position(550, 330);

    level2= createButton('HARD');
    level2.position(550, 380);


  level1.mousePressed(() => {
    level1.hide();
    level2.hide();

    question = createElement('h5')
    question.html("16:56 as 32 : ?");
    question.position(475, 200);

    option1 = createButton('97');
    option1 .position(550, 330);
    

    option2= createButton('112');
    option2.position(550, 380);

    option3= createButton('120');
    option3.position(550,430);


    option1.mousePressed(() => {
      option1.style('background-color',"red");
    });
    
    option3.mousePressed(() => {
    option3.style('background-color',"red");
    });
    option2.mousePressed(() => {
    option2.style('background-color',"green");

    //winSound.play();

    });





  });
    
  });

}
