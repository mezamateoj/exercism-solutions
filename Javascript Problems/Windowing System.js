// https://exercism.org/tracks/javascript/exercises/windowing-system

//  tasks 1 and 2 with prototype syntax 
// Task #1
function Size(width=80, height=60) {
    this.width = width;
    this.height = height;
    
}

Size.prototype.resize = function(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}

// task # 2
function Position(x=0, y=0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function(newX, newY) {
    this.x = newX;
    this.y = newY;
}

// Remaining Task using class syntax.
// task 3

class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();

    }

    resize(size) {
        this.size.resize(size);
    }
}

const programWindow = new ProgramWindow();

const newSize = new Size(600, 400);
programWindow.resize(newSize);
console.log(programWindow.size.width);
// => 600
console.log(programWindow.size.height);

