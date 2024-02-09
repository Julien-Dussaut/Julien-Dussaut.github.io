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

let corps = document.querySelector('body');

corps.addEventListener('click', function(e) {

    let classesRecuperees = e.target.className.split(' ');

    if (!classesRecuperees.includes('boxVisu')) {
        classesRecuperees = e.target.parentNode.className.split(' ');
    }

    let classeConcernee = classesRecuperees.includes('presentation') ? '.presentation' : classesRecuperees.includes('projets') ? '.projets' : classesRecuperees.includes('competences') ? '.competences': false;

    let divPresentation = document.querySelector('.presentation'), divProjets = document.querySelector('.projets'), divCompetences = document.querySelector('.competences');

    
    switch (classeConcernee) {

        case '.presentation':
            if (!divPresentation.classList.contains('firstPosition') && divPresentation.classList.contains('secondPosition')) {
                secondPositionToFirstPosition(divPresentation, divProjets, divCompetences);
            } else if (!divPresentation.classList.contains('firstPosition') && divPresentation.classList.contains('thirdPosition')) {
                thirdPositionToFirstPosition(divPresentation, divProjets, divCompetences);
            }

        case '.projets':
            if (!divProjets.classList.contains('firstPosition') && divProjets.classList.contains('secondPosition')) {
                secondPositionToFirstPosition(divProjets, divCompetences, divPresentation);
            } else if (!divProjets.classList.contains('firstPosition') && divProjets.classList.contains('thirdPosition')) {
                thirdPositionToFirstPosition(divProjets, divCompetences, divPresentation);
            }
        break;

        case '.competences':
            if (!divCompetences.classList.contains('firstPosition') && divCompetences.classList.contains('secondPosition')) {
                secondPositionToFirstPosition(divCompetences, divPresentation, divProjets);
            } else if (!divCompetences.classList.contains('firstPosition') && divCompetences.classList.contains('thirdPosition')) {
                thirdPositionToFirstPosition(divCompetences, divPresentation, divProjets);
            }
        break;
    }

})
