let targets = document.querySelectorAll('.anim');
let options = {
    root: null, // by default it's the viewport
    treshold: 1,
    rootMargin: "-100px"
};
let observer = new IntersectionObserver(entries => {


    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }

        entry.target.classList.add(`${entry.target.dataset.animation}`);
        observer.unobserve(entry.target);

    });
}, options);

targets.forEach(target => {
    observer.observe(target);

});