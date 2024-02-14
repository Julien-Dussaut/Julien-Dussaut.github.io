/* window.addEventListener('scroll', function(scroll) {

    if(window.scrollY / this.document.body.clientHeight > 0) {
        document.querySelector('header').style.backgroundColor = '#011222';
    } else {
        document.querySelector('header').style.backgroundColor = '';
    }
    
}) */

let anchorLink = document.querySelectorAll('.internLink');

anchorLink.forEach(currentNode => {

    currentNode.addEventListener('click', function() {
        document.querySelector(currentNode.href.slice(currentNode.href.indexOf('#'))).scrollIntoView({behavior: "smooth"});
    })
    
});