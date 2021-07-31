// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides   
    }
        
        get countSides() {
            return this.sides.length
        }

        get perimeter() {
            return this.sides.reduce(function(total, side){
                return total+side
            })
        }  
};

class Triangle extends Polygon {
    //inherits constructors

    get isValid() {
        let trianglez = this.countSides == 3 && this.sides[0]+this.sides[1] > this.sides[2] && this.sides[0]+this.sides[2] > this.sides[1] && this.sides[1]+this.sides[2] > this.sides[0]

        if (trianglez) {
            return !!trianglez
        } else {
            return !!trianglez
        }

    }
}

class Square extends Polygon {

    get isValid() {
        let squarez = this.countSides == 4 && this.sides[0] == this.sides[1] && this.sides[0] == this.sides[2] && this.sides[0] == this.sides[3]

        if (squarez) {
            return !!squarez
        } else {
            return !!squarez
        }
    }

    get area() {
        return this.sides[0]**2
    }
}
