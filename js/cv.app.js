let corps = document.querySelector('body');

corps.addEventListener('click', function(e) {

    let classesRecuperees = e.target.className.split(' ');

    if (!classesRecuperees.includes('boxVisu')) {
        classesRecuperees = e.target.parentNode.className.split(' ');
    }


    let classeConcernee = classesRecuperees.includes('presentation') ? '.presentation' : classesRecuperees.includes('projets') ? '.projets' : '.competences';
    let divPresentation = document.querySelector('.presentation'), divProjets = document.querySelector('.projets'), divCompetences = document.querySelector('.competences');

    switch (classeConcernee) {
        case '.presentation':
            if (divPresentation.classList.contains('firstPosition')) {
                // divPresentation.classList.add('firstPosition');
                // divPresentation.classList.remove('secondPosition', 'thirdPosition');
            }

            divProjets.classList.add('secondPosition');
            divProjets.classList.remove('firstPosition', 'thirdPosition');

            divCompetences.classList.add('thirdPosition');
            divCompetences.classList.remove('firstPosition', 'secondPosition');
        break;

        case '.projets':
            if(!divProjets.classList.contains('firstPosition')) {
                divProjets.classList.add('firstPosition');
                divProjets.classList.remove('secondPosition', 'thirdPosition');
            }

            divCompetences.classList.add('secondPosition');
            divCompetences.classList.remove('firstPosition', 'thirdPosition');

            divPresentation.classList.add('thirdPosition');
            divPresentation.classList.remove('firstPosition', 'secondPosition');
        break;

        case '.competences':
            if(!divCompetences.classList.contains('firstPosition')) {
                divCompetences.classList.add('firstPosition');
                divCompetences.classList.remove('secondPosition', 'thirdPosition');
            }

            divPresentation.classList.add('secondPosition');
            divPresentation.classList.remove('firstPosition', 'thirdPosition');

            divProjets.classList.add('thirdPosition');
            divProjets.classList.remove('firstPosition', 'secondPosition');
        break;
    }

})