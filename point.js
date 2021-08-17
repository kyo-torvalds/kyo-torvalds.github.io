export class Point {
    // 좌표를 가져오는 것이 중요하다. 
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.04;
        this.cur = index; //cur 때문에 시작 위치가 달라진다. 
        this.max = Math.random() * 70  // 최대 높이 값을 다르게해주는 것
        // this.max = 150 // 최대 높이 값을 다르게해주는 것
    }

    update() {
        // sin 함수를 이용해서 위아래를 움직인다. 
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max)
    }

}