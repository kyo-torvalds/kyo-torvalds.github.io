import { WaveGroup } from './wave-group.js'
// bind ??? 
// callback 함수로 어떤 객체의 메서드를 전달하면 더이상 그 객체의 정보가 남아있지 않다. 
// 객체의 정보까지 가져오는 것이 아니고 메서드만 복사 ? 
// 근데 arrow function을 쓴다면 항상 상위 scope의 this를 받아온다. 

class App {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d')
        // document.body.appendChild(this.canvas);

        this.waveGroup = new WaveGroup()

        window.addEventListener('resize', this.resize.bind(this), false)
        this.resize();
        requestAnimationFrame(this.animate.bind(this))
        // 브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트 하는 함수를 호출한다. 
    }

    resize() {

        // 레티나 디스플레이 때문에 이런 작업을 해주는데 
        // 레티나 디스플레이는 보통 디스플레이보다 픽셀 개수가 4배나 만다. 
        // 따라서 캔버스의 픽셀 사이즈를 가로 세로 각각 2배씩 늘리고 캔버스 내부 컨텍스트의 크기를 2배로 확대하면 
        // 레티나 디스플레이에서 작게 보이는 현상이 없어진다... 
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2)

        this.waveGroup.resize(this.stageWidth, this.stageHeight)
    }

    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        // 지워주는 함수 erase method

        this.waveGroup.draw(this.ctx)

        // 아 아래함수를 재귀로 해서 계속해서 실행해서 그리는 것!!!!
        requestAnimationFrame(this.animate.bind(this))
    }
}

window.onload = () => {
    new App();
};



var myHeaders = new Headers();
myHeaders.append("AccessToken", `${secrets.STIBEE_API_KEY}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "eventOccuredBy": "MANUAL",
  "confirmEmailYN": "Y",
  "subscribers": [
    {
      "email": "keumky2@gmail.com",
      "name": "kyoYoung"
    }
  ]
});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.stibee.com/v1/lists/137513/subscribers", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

console.log(`${secrets.LISTID }`)
