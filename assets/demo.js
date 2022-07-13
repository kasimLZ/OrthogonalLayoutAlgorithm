(function() {
    const DropItemWithMouseMove = function (e) {
        
    }

    document.getElementsByClassName('item').onmousedown = (e) => {
        e.target.onmousemove = (m) => {
            e.target.x.baseVal.value += m.movementX;
            e.target.y.baseVal.value += m.movementY;
        }
    }

    document.getElementsByClassName('bbbb').onmouseup = (e) => {
        e.target.onmousemove = undefined;
    }
}())