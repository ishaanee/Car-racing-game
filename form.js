class Form{
    constructor(){
this.input=createInput("name");
this.button=createButton("play");
this.greeting =createElement("h3");
this.title=createElement('h2')
this.reset=createButton('reset')

        
    }

    hide()
        {
            this.greeting.hide()
            this.button.hide()
            this.input.hide()

        }
    
    display()
    {
        this.title.html("car racing game");
        this.title.position(displayWidth/2-50,20);
        this.input.position(displayWidth/2,displayHeight/2);
        this.button.position(displayWidth/2,displayHeight/2+30)
        this.reset.position(displayWidth-100,20)

        this.button.mousePressed(()=>

        {
    this.input.hide()
    this.button.hide()
    player.name = this.input.value();
    count=count+1;
    player.index=count;
    player.update();
    player.updatecount(count);
    this.greeting.html("hello "+player.name);
    this.greeting.position(displayWidth/2-50,displayHeight/4);





        })
        this.reset.mousePressed(()=>{
            player.updatecount(0)
            game.update(0);

        }
        )
        
    }
}