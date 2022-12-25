// States
// 0 = title
// 1 = Spring
// 2 = Summer
// 3 = Fall
// 4 = Winter
let state = 0;
const stateMap = [
    { before: 'title', after: 'spring' },
    { before: 'spring', after: 'summer' },
    { before: 'summer', after: 'fall' },
    { before: 'fall', after: 'winter' },
    { before: 'winter', after: 'title' },
];
let animationList = [];
let paused = false;
let titleAnime;

window.onload = () => {
    titleAnime = anime({
        targets: '#title-text',
        scale: 1.75,
        duration: 1500,
    });

    // Spring
    animationList.push(
        anime({
            targets: '#title-spring',
            scale: 1.75,
            duration: 1500,
            autoplay: false,
        })
    );
    let springTimeline = anime.timeline({
        duration: 500,
        delay: 1000,
        easing: 'easeInQuad',
        autoplay: false,
    });
    const springImages = 11;
    for (let i = 0; i < springImages; i++) {
        springTimeline.add({
            opacity: 1,
            scale: 1.5,
            translateX: anime.random(-50, 50),
            translateY: anime.random(-30, 30),
            targets: '#spring-' + i,
        });
    }
    for (let j = springImages - 1; j >= 0; j--) {
        springTimeline.add({
            opacity: 0,
            delay: 500,
            targets: '#spring-' + j,
        });
    }
    animationList.push(springTimeline);

    // Summer
    animationList.push(
        anime({
            targets: '#title-summer',
            scale: 1.75,
            duration: 1500,
            autoplay: false,
        })
    );
    let summerTimeline = anime.timeline({
        duration: 500,
        delay: 1000,
        easing: 'easeInQuad',
        autoplay: false,
    });
    const summerImages = 30;
    for (let i = 0; i < summerImages; i++) {
        summerTimeline.add({
            opacity: 1,
            scale: 1.5,
            translateX: anime.random(-50, 50),
            translateY: anime.random(-30, 30),
            targets: '#summer-' + i,
        });
    }
    for (let j = summerImages - 1; j >= 0; j--) {
        summerTimeline.add({
            opacity: 0,
            delay: 500,
            targets: '#summer-' + j,
        });
    }
    animationList.push(summerTimeline);

    // Fall
    animationList.push(
        anime({
            targets: '#title-fall',
            scale: 1.75,
            duration: 1500,
            autoplay: false,
        })
    );
    let fallTimeline = anime.timeline({
        duration: 500,
        delay: 1000,
        easing: 'easeInQuad',
        autoplay: false,
    });
    const fallImages = 10;
    for (let i = 0; i < fallImages; i++) {
        fallTimeline.add({
            opacity: 1,
            scale: 1.5,
            translateX: anime.random(-50, 50),
            translateY: anime.random(-30, 30),
            targets: '#fall-' + i,
        });
    }
    for (let j = fallImages - 1; j >= 0; j--) {
        fallTimeline.add({
            opacity: 0,
            delay: 500,
            targets: '#fall-' + j,
        });
    }
    animationList.push(fallTimeline);

    // Winter
    animationList.push(
        anime({
            targets: '#title-winter',
            scale: 1.75,
            duration: 1500,
            autoplay: false,
        })
    );
    let winterTimeline = anime.timeline({
        duration: 500,
        delay: 1000,
        easing: 'easeInQuad',
        autoplay: false,
    });
    const winterImages = 4;
    for (let i = 0; i < winterImages; i++) {
        winterTimeline.add({
            opacity: 1,
            scale: 1.5,
            translateX: anime.random(-50, 50),
            translateY: anime.random(-30, 30),
            targets: '#winter-' + i,
        });
    }
    for (let j = winterImages - 1; j >= 0; j--) {
        winterTimeline.add({
            opacity: 0,
            delay: 500,
            targets: '#winter-' + j,
        });
    }
    animationList.push(winterTimeline);

    document.addEventListener('click', changePage);
    document.addEventListener('keydown', (e) => {
        if (e.key === ' ') {
            if (state !== 0) {
                if (paused) {
                    animationList[(state - 1) * 2 + 1].play();
                    paused = false;
                } else {
                    animationList[(state - 1) * 2 + 1].pause();
                    paused = true;
                }
            }
        }
    });
};

function changePage() {
    paused = false;
    document.getElementById(stateMap[state].before).classList.add('hidden');
    setTimeout(() => {
        document.getElementById(stateMap[state].before).classList.add('gone');
        document.getElementById(stateMap[state].after).classList.remove('gone');
        if (state === 4) {
            stateMap.forEach((s) => {
                let el = document.getElementById(s.before);
                el.classList.remove('hidden');
                animationList.forEach(a => {
                    a.restart();
                    a.pause();
                });
            })
            titleAnime.play();
            state = 0;
        } else {
            animationList[state * 2].play();
            animationList[state * 2 + 1].play();
            state++;
        }
    }, 500);
}
