let anchorLink = document.querySelectorAll('.internLink');

anchorLink.forEach(currentNode => {

    currentNode.addEventListener('click', function() {
        document.querySelector(currentNode.href.slice(currentNode.href.indexOf('#'))).scrollIntoView({behavior: "smooth"});
    })
    
});