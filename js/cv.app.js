function secondPositionToFirstPosition (nodeSelected, nodeToPlaceInSecondPosition, nodeToPlaceInthirdPosition) {
    nodeSelected.style.animationName = 'secondToFirst';
    nodeSelected.style.animationPlayState = "running";
    nodeSelected.style.zIndex = '3';
    nodeToPlaceInSecondPosition.style.zIndex = '2';
    nodeToPlaceInthirdPosition.style.zIndex = '1';
    setTimeout(function() {
        nodeSelected.classList.add('firstPosition');
        nodeSelected.classList.remove('secondPosition', 'thirdPosition');
        nodeSelected.style.animationPlayState = "paused";
    }, 2000);
    
    nodeToPlaceInSecondPosition.style.animationName = 'thirdToSecond';
    nodeToPlaceInthirdPosition.style.animationName = 'firstToThird';
    placeNodeInSecondPosition(nodeToPlaceInSecondPosition);
    placeNodeInThirdPosition(nodeToPlaceInthirdPosition);
    
    setTimeout(function() {
        nodeSelected.style.animationName = '';
        nodeToPlaceInSecondPosition.style.animationName = '';
        nodeToPlaceInthirdPosition.style.animationName = '';
    }, 2100);
    
}

function thirdPositionToFirstPosition (nodeSelected, nodeToPlaceInSecondPosition, nodeToPlaceInthirdPosition) {
    nodeSelected.style.animationName = 'thirdToFirst';
    nodeSelected.style.animationPlayState = "running";
    nodeSelected.style.zIndex = '3';
    nodeToPlaceInSecondPosition.style.zIndex = '2';
    nodeToPlaceInthirdPosition.style.zIndex = '1';
    setTimeout(function() {
        nodeSelected.classList.add('firstPosition');
        nodeSelected.classList.remove('secondPosition', 'thirdPosition');
        nodeSelected.style.animationPlayState = "paused";
    }, 2000);
    
    nodeToPlaceInSecondPosition.style.animationName = 'firstToSecond';
    nodeToPlaceInthirdPosition.style.animationName = 'secondToThird';
    placeNodeInSecondPosition(nodeToPlaceInSecondPosition);
    placeNodeInThirdPosition(nodeToPlaceInthirdPosition);

    setTimeout(function() {
        nodeSelected.style.animationName = '';
    nodeToPlaceInSecondPosition.style.animationName = '';
    nodeToPlaceInthirdPosition.style.animationName = '';
    }, 2100);
}

function placeNodeInSecondPosition (nodeSelected) {
    nodeSelected.style.animationPlayState = "running";
    setTimeout(function() {
        nodeSelected.classList.add('secondPosition');
        nodeSelected.classList.remove('firstPosition', 'thirdPosition');
        nodeSelected.style.animationPlayState = "paused";
    }, 2000);
    
}

function placeNodeInThirdPosition (nodeSelected) {
    nodeSelected.style.animationPlayState = "running";
    setTimeout(function() {
        nodeSelected.classList.add('thirdPosition');
        nodeSelected.classList.remove('firstPosition', 'secondPosition');
        nodeSelected.style.animationPlayState = "paused";
    }, 2000);
    
}

let boxVisuList = document.querySelectorAll('.boxVisu');;

boxVisuList.forEach(currentNode => {
    currentNode.addEventListener('click', function() {
        if(currentNode.classList.contains('secondPosition')) {
            switch (currentNode.classList[1]) {
                case 'presentation':
                    secondPositionToFirstPosition(currentNode, boxVisuList[1], boxVisuList[2]);
                break;

                case 'projets':
                    secondPositionToFirstPosition(currentNode, boxVisuList[2], boxVisuList[0]);
                break;

                case 'competences':
                    secondPositionToFirstPosition(currentNode, boxVisuList[0], boxVisuList[1]);
                break;
            }
        } else if(currentNode.classList.contains('thirdPosition')) {
            switch (currentNode.classList[1]) {
                case 'presentation':
                    thirdPositionToFirstPosition(currentNode, boxVisuList[1], boxVisuList[2]);
                break;

                case 'projets':
                    thirdPositionToFirstPosition(currentNode, boxVisuList[2], boxVisuList[0]);
                break;

                case 'competences':
                    thirdPositionToFirstPosition(currentNode, boxVisuList[0], boxVisuList[1]);
                break;
            }
        }

        boxVisuList = document.querySelectorAll('.boxVisu');
    })
    
})
