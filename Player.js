class Player{
constructor (X,Y)
{
    this.x=X;
    this.y=Y;
    this.spt=createSprite(this.x,this.y,50,50);
    this.spt.shapecolor="yellow";
    
 

}
move (xdir,ydir)
{    this.spt.x += xdir*grid;
    this.spt.y += ydir*grid;
}
}