class Vec3
{
    constructor(x, y, z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v)
    {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this
    }

    sub(v){
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this      
    }

    innerProduct(v){
        return this.x*v.x + this.y*v.y + this.z*v.z
    }

    norm(){
        let norm = Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z)
        return norm
    }

    sum()
    {
        this.x + this.y + this.z
    }

    min(){
        let min = this.x;
        if(this.y < min){
            min = this.y;
        }
        if(this.z < min){
            min = this.z;
        }
        return min
    }

    max(){
        let max = this.x;
        if(this.y > max){
            max = this.y;
        }
        if(this.z > max){
            max = this.z;
        }
        return max
    }

    mid(){
        let mid = this.x ;
        if((this.max() == mid)||(this.min() == mid)){
            mid = this.y;
        }
        if((this.max() == mid)||(this.min() == mid)){
            mid = this.z;
        }
        return mid
    }
}