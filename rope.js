class Rope{
    constructor(BodyA,BodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY
        var options={
            bodyA:BodyA,
            bodyB:BodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        var pointC=pointB.x+this.offsetX 
        var pointP=pointB.y+this.offsetY
        strokeWeight(3);
        line(pointA.x,pointA.y,pointC,pointP)
    }
}