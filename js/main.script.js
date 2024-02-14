window.addEventListener('scroll', function(scroll) {

    if(window.scrollY / this.document.body.clientHeight > 0) {
        let fleche = document.querySelector('#fleche-haut');
        fleche.style.display = "block";
        fleche.style.top = this.window.scrollY - '50%';
        fleche.addEventListener('click', function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    } else {
        document.querySelector('#fleche-haut').style.display = 'none';
    }
    
})

let anchorLink = document.querySelectorAll('.internLink');

anchorLink.forEach(currentNode => {

    currentNode.addEventListener('click', function() {
        document.querySelector(currentNode.href.slice(currentNode.href.indexOf('#'))).scrollIntoView({behavior: "smooth"});
    })
    
});