document.querySelector('.button').addEventListener("click", function(){
    document.querySelector('.select-subject').classList.add("active-sub");
});

const btn = document.querySelector('.glow-on-hover');
const sb = document.querySelector('#txt')
btn.onclick = (event) => {
    event.preventDefault();
    if(sb.value == "Aptitude")
        window.location.replace("aptitude.html");
    else if(sb.value == "Operating System")
        window.location.replace("os.html");
    else if(sb.value == "C++")
        window.location.replace("cpp.html");
};