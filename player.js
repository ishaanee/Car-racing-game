class Player
{
constructor(){
    this.index=null
    this.distance=0;
    this.name=null
    this.rank=null
    this.flag=0
}

getcount()
{
    var playercountref=database.ref('playercount');
    playercountref.on("value",function(data)
    {
       count=data.val()
    })

}
updatecount(count)
{
    database.ref ('/').update({
        playercount:count
    })
}
update()
{
    var playerindex ="players/player"+this.index
    database.ref (playerindex).set({
        name:this.name,
        distance:this.distance

    })
}
static getplayerinfo()
{
    var playerinforef=database.ref("players");
    playerinforef.on("value",(data)=>{
    allplayers=data.val();
    })
}

 getCarsAtEnd(){
database.ref('carsAtEnd').on("value",(data)=>{
 this.rank=data.val();   
})
}

static updatecarsAtEnd(rank){
    database.ref('/').update({
        carsAtEnd:rank
    })

}
}


