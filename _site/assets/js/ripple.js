function createRipple(event){
    const button = event.currentTarget;
    const container = button.parentNode
    console.log(container,button)
    const circle = document.createElement('span');
    const diameter = Math.max(container.clientWidth, container.clientHeight)
    const radius = diameter / 2
    console.log(diameter,radius)

    circle.style.width = circle.style.height = `${diameter}px`; // 원의 width는 지름으로 한다.
    circle.style.left = `${event.clientX - (container.offsetLeft + radius)}px` // 왜 이건지는 그림을 그리면 편하다.
    circle.style.top = `${event.pageY - (container.offsetTop + radius)}px`;
    console.log(circle.style.left, circle.style.top,event.clientX,event.pageY,container.offsetLeft,container.offsetTop )
    circle.classList.add("ripple");


    const ripple = button.getElementsByClassName("ripple")[0]
    if(ripple){
        ripple.remove();
    }

    button.appendChild(circle);
}

const buttons = document.querySelectorAll('.js-link')
for(const button of buttons){
    button.addEventListener('click', createRipple)
}


