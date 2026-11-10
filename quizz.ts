class Mario {
  hp: number = 1;
  speed: number = 5;
  positionX: number = 0;
  positionY: number = 0;
  invincible: boolean = false;
  currentForm: string = "mario";

  moveRight() {
    this.positionX += this.speed;
    console.log("Mario bergerak ke kanan");
  }

  moveLeft() {
    this.positionX -= this.speed;
    console.log("Mario bergerak ke kiri");
  }

  attacked() {
    if (this.invincible == true) {
      console.log("Mario kebal dari serangan!");
    } else {
      this.hp -= 1;
      this.currentForm = "mario";
      console.log("Mario terkena serangan!");
    }
  }

  status() {
    console.log("HP:", this.hp);
    console.log("Form:", this.currentForm);
    console.log("Posisi X:", this.positionX);
    console.log("Posisi Y:", this.positionY);
    console.log("Invincible:", this.invincible);
  }
}

class SuperMushroom extends Mario {
  use() {
    this.hp += 1;
    this.currentForm = "super mario";
    console.log("Mario menjadi Super Mario!");
  }
}

class FireFlower extends Mario {
  use() {
    this.hp += 1;
    this.currentForm = "fire mario";
    console.log("Mario menjadi Fire Mario!");
  }

  shootFireball() {
    console.log("Mario menembakkan bola api!");
  }
}

class SuperStar extends Mario {
  use() {
    this.invincible = true;
    console.log("Mario sekarang kebal!");
  }
}
const mario = new Mario();
const mushroom = new SuperMushroom();
const flower = new FireFlower();
const star = new SuperStar();

console.log("=== MARIO AWAL ===");
mario.status();

console.log("\n=== SUPER MUSHROOM ===");
mushroom.use();
mushroom.status();

console.log("\n=== FIRE FLOWER ===");
flower.use();
flower.shootFireball();
flower.status();

console.log("\n=== SUPER STAR ===");
star.use();
star.attacked();
star.status();

console.log("\n=== BERGERAK ===");
mario.moveRight();
mario.moveLeft();
mario.status();

console.log("\n=== DISERANG ===");
mario.attacked();
mario.status();