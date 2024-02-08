function secondPositionToFirstPosition (nodeSelected, nodeToPlaceInSecondPosition, nodeToPlaceInthirdPosition) {
    nodeSelected.classList.add('firstPosition');
    nodeSelected.classList.remove('secondPosition', 'thirdPosition');
    placeNodeInSecondPosition(nodeToPlaceInSecondPosition);
    placeNodeInThirdPosition(nodeToPlaceInthirdPosition);
}

function thirdPositionToFirstPosition (nodeSelected, nodeToPlaceInSecondPosition, nodeToPlaceInthirdPosition) {
    nodeSelected.classList.add('firstPosition');
    nodeSelected.classList.remove('secondPosition', 'thirdPosition');
    placeNodeInSecondPosition(nodeToPlaceInSecondPosition);
    placeNodeInThirdPosition(nodeToPlaceInthirdPosition);
}

function placeNodeInSecondPosition (nodeSelected) {
    nodeSelected.classList.add('secondPosition');
    nodeSelected.classList.remove('firstPosition', 'thirdPosition');
}

function placeNodeInThirdPosition (nodeSelected) {
    nodeSelected.classList.add('thirdPosition');
    nodeSelected.classList.remove('firstPosition', 'secondPosition');
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
        break;

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

let box = document.querySelector('#boxtext');

box.addEventListener('click', function() {
    box.style.animationPlayState = 'running'; 
    setTimeout(function() {
        box.style.top = '100px';
        box.style.left = '100px';
    }, 2000);
    
    
})