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
    })
    
})
