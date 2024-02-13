import domManager from "./DomManager.js";

const manager = new domManager;

let boxVisuList = document.querySelectorAll('.boxVisu');;

boxVisuList.forEach(currentNode => {
    currentNode.addEventListener('click', function() {
        if(currentNode.classList.contains('secondPosition')) {
            switch (currentNode.classList[1]) {
                case 'presentation':
                    manager.secondPositionToFirstPosition(currentNode, boxVisuList[1], boxVisuList[2]);
                break;

                case 'projets':
                    manager.secondPositionToFirstPosition(currentNode, boxVisuList[2], boxVisuList[0]);
                break;

                case 'competences':
                    manager.secondPositionToFirstPosition(currentNode, boxVisuList[0], boxVisuList[1]);
                break;
            }
        } else if(currentNode.classList.contains('thirdPosition')) {
            switch (currentNode.classList[1]) {
                case 'presentation':
                    manager.thirdPositionToFirstPosition(currentNode, boxVisuList[1], boxVisuList[2]);
                break;

                case 'projets':
                    manager.thirdPositionToFirstPosition(currentNode, boxVisuList[2], boxVisuList[0]);
                break;

                case 'competences':
                    manager.thirdPositionToFirstPosition(currentNode, boxVisuList[0], boxVisuList[1]);
                break;
            }
        }

        boxVisuList = document.querySelectorAll('.boxVisu');
        testLinkMoreInfo = document.querySelector('.firstPosition a');
    })
    
})

let testLinkMoreInfo = document.querySelector('.firstPosition a');
let linksBox = document.querySelectorAll('.boxVisu a');



testLinkMoreInfo.addEventListener("click", function() {
    manager.displayMoreInfos();
    testLinkMoreInfo = document.querySelector('.firstPosition a');
})
/*linksBox.forEach(currentLink => {
    currentLink.addEventListener('click', function() {
        console.log('click');
        if(currentLink.closest('.boxVisu').classList.contains('firstPosition')) {
            let firstBox = document.querySelector('.firstPosition');
            let secondBox = document.querySelector('.secondPosition');
            let thirdBox = document.querySelector('.thirdPosition');
            console.log(firstBox);

            thirdBox.style.animationName = 'boxToRight';
            thirdBox.style.animationPlayState = "running";

            secondBox.style.animationName = 'boxToTop';
            secondBox.style.animationPlayState = "running";

            firstBox.style.animationName = 'boxToLeft';
            firstBox.style.animationPlayState = 'running';

            setTimeout(function() {
                thirdBox.style.animationName = '';
                thirdBox.style.animationPlayState = "paused";

                secondBox.style.animationName = '';
                secondBox.style.animationPlayState = "paused";

                firstBox.style.animationName = '';
                firstBox.style.animationPlayState = 'paused';
            }, 2000);
        }
    })
    // console.log(currentLink.closest('.boxVisu').classList);
})*/
