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

    // The ProgramWindow class should include a method resize. It should accept a parameter of type Size as input and attempts to resize the window to the specified size.
    // If the window is resized to be larger than the screen, the window should be resized to the maximum size that fits on the screen.
    // The resize method should return the new size of the window.
    resize(newSize) {
        this.size = newSize;
        
        if (this.size.width <= 0 || this.size.height <= 0) {
            this.size = new Size(1, 1);
        } else if (this.size.width > this.screenSize.width) {
            this.size.width = this.screenSize.width;
        } else if (this.size.height > this.screenSize.height) {
            this.size.height = this.screenSize.height;
        } 
        return this.size;
    }

    move(newPosition) {
        // calculate the maximum allowed x value. Consider the screen size and the current width of the window.
        // calculate the maximum allowed y value. Consider the screen size and the current height of the window.
        // If the new position is outside the allowed range, move the window to the closest allowed position.
        // The move method should return the new position of the window.

        let maxX = this.screenSize.width - this.size.width;
        let maxY = this.screenSize.height - this.size.height;
        
        this.position = newPosition;
        
        if (this.position.x < 0) {
            this.position.x = 0;
        } else if (this.position.x > maxX) {
            this.position.x = maxX;
        }
        
        if (this.position.y < 0) {
            this.position.y = 0;
        } else if (this.position.y > maxY) {
            this.position.y = maxY;
        }
        return this.position;
    }

    //     this.position = newPosition;
    //     if (this.position.x < 0) {
    //         this.position.x = 0;
    //     } else if (this.position.x > this.screenSize.width - this.size.width) {
    //         this.position.x = this.screenSize.width - this.size.width;
    //     }
        
    //     if (this.position.y < 0) {
    //         this.position.y = 0;
    //     } else if (this.position.y > this.screenSize.height - this.size.height) {
    //         this.position.y = this.screenSize.height - this.size.height;
    //     }
    //     return this.position;
    // }
    
}

// const programWindow = new ProgramWindow();
// const newPosition = new Position(50, 100);

// console.log(programWindow.position.x);
// console.log(programWindow.position.y);

// programWindow.move(newPosition);

// console.log(programWindow.position.x);
// console.log(programWindow.position.y);

const programWindow = new ProgramWindow();
const newPosition = new Position(710, 525);
programWindow.move(newPosition);
const newSize = new Size(1000, 1000);
programWindow.resize(newSize);

console.log(programWindow.position.x);
console.log(programWindow.position.y);


// task 4
