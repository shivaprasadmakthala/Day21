function move(){
    let bar = document.getElementById("progress_bar");
    let width = 1;
    let id = setInterval(frame, 10); //callback & async way of coding

    function frame() {
        if(width >=100) {
            clearInterval(id);
        } else {
            width = width + 1;
            bar.style.width = width + "%" ;

        }
    }
}