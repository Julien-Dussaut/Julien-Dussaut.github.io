export default class domManager {   

    secondPositionToFirstPosition (nodeSelected, nodeToPlaceInSecondPosition, nodeToPlaceInthirdPosition) {
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
        this.placeNodeInSecondPosition(nodeToPlaceInSecondPosition);
        this.placeNodeInThirdPosition(nodeToPlaceInthirdPosition);
        
        setTimeout(function() {
            nodeSelected.style.animationName = '';
            nodeToPlaceInSecondPosition.style.animationName = '';
            nodeToPlaceInthirdPosition.style.animationName = '';
        }, 2100);
        
    }
    
    thirdPositionToFirstPosition (nodeSelected, nodeToPlaceInSecondPosition, nodeToPlaceInthirdPosition) {
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
        this.placeNodeInSecondPosition(nodeToPlaceInSecondPosition);
        this.placeNodeInThirdPosition(nodeToPlaceInthirdPosition);
    
        setTimeout(function() {
            nodeSelected.style.animationName = '';
        nodeToPlaceInSecondPosition.style.animationName = '';
        nodeToPlaceInthirdPosition.style.animationName = '';
        }, 2100);
    }
    
    placeNodeInSecondPosition (nodeSelected) {
        nodeSelected.style.animationPlayState = "running";
        setTimeout(function() {
            nodeSelected.classList.add('secondPosition');
            nodeSelected.classList.remove('firstPosition', 'thirdPosition');
            nodeSelected.style.animationPlayState = "paused";
        }, 2000);
        
    }
    
    placeNodeInThirdPosition (nodeSelected) {
        nodeSelected.style.animationPlayState = "running";
        setTimeout(function() {
            nodeSelected.classList.add('thirdPosition');
            nodeSelected.classList.remove('firstPosition', 'secondPosition');
            nodeSelected.style.animationPlayState = "paused";
        }, 2000);
        
    }
}


