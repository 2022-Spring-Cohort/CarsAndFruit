

export default class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
    volume(depth) {
        return this.area() * depth;
    }
}
class Square{
    constructor(side){

    }
}
