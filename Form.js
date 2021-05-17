class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.character = createButton("Boy/Girl");
      
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.character.hide();
    }
    
    display(){
      this.title.html("COVID WARRIOR");
      this.title.position(displayWidth/2 - 50, 0);
      this.character.position(displayWidth/2-40,displayHeight/2-120);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
    
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.greeting.html("Hello " + this.input.value())
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      
    }
  }
  