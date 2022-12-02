class Pacman {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.current_direction = "RIGHT";
      this.size = 100;
      this.moutn_size = 90;
      this.start = 45;
      this.stop = this.start - this.moutn_size;
      this.speed = 7;
      this.start_direction = 4;
      this.stop_direction = -4;
    }
  
    moveMouth() {
      if (this.isMouthOpen() || this.isMouthClose()) {
        this.start_direction = this.start_direction * -1;
        this.stop_direction = this.stop_direction * -1;
      }
  
      this.start = this.start + this.start_direction;
      this.stop = this.stop + this.stop_direction;
    }
  
    isMouthOpen() {
      return (this.start - this.stop) == this.moutn_size;
    }
  
    isMouthClose() {
      return (this.start - this.stop) == 10;
    }
  
    walk() {
      switch (this.current_direction) {
        case "UP":
          this.y = this.y - this.speed;
          break;
        case "DOWN":
          this.y = this.y + this.speed;
          break;
        case "LEFT":
          this.x = this.x - this.speed;
          break;
        case "RIGHT":
          this.x = this.x + this.speed;
          break;
      }
    }
  
    changeDirection() {
      console.log(this.x, this.y);
      if (this.current_direction != "DOWN" && this.x > (windowWidth- 90) && this.y < (windowHeight - 90)) {
        this.current_direction = "DOWN";
        this.start = this.start + 90;
        this.stop = this.stop + 90;
      } else if (this.current_direction != "LEFT" && this.y > (windowHeight - 90) && this.x > 90) {
        this.current_direction = "LEFT";
        this.start = this.start + 90;
        this.stop = this.stop + 90;
      } else if (this.current_direction != "UP" && this.y > (windowHeight - 90) && this.x < 90) {
        this.current_direction = "UP";
        this.start = this.start + 90;
        this.stop = this.stop + 90;
      } else if (this.current_direction != "RIGHT" && this.y < 90 && this.x < 90) {
        this.current_direction = "RIGHT";
        this.start = this.start + 90;
        this.stop = this.stop + 90;
      }
    }
  
    draw() {
      this.changeDirection()
      this.moveMouth();
      this.walk();
  
      fill(255, 213, 4);
      noStroke();
      arc(this.x, this.y, this.size, this.size, radians(this.start), radians(this.stop));
    }
  }
  
  let pacman = new Pacman(90, 90);
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(0);
  
    pacman.draw();
  }
  
  function onResize() {  
    createCanvas(window.innerWidth, window.innerHeight);
  }
  
  window.addEventListener('resize', onResize);