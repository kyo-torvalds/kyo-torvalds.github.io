function makeCircleBox(){
    const flexBox = document.createElement("div")
    flexBox.style = `display:flex;`
    return flexBox
}

function prependCircleAt(node,color){
    const svg = document.createElement("span");
    svg.innerHTML =  `<svg style="padding-right:6px " width="16"  height="16" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="50" fill= ${color} />
</svg>`;
    node.prepend(svg);
}

function makeThreeCircleCodeBlovck(codeBlock){
    const div = makeCircleBox()

    prependCircleAt(div,"#FF5F56");
    prependCircleAt(div,'#FFBD2E');
    prependCircleAt(div,'#27C93F');
    codeBlock.prepend(div)
}

const codeblocks = document.querySelectorAll(".highlight > pre")
for(const codeblock of codeblocks){
        makeThreeCircleCodeBlovck(codeblock)
}