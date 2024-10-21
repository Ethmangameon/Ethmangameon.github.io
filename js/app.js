
const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } 
        });
});



const hiddenleftElements = document.querySelectorAll('.hidden-left');
hiddenleftElements.forEach((el) => observer.observe(el));

const hiddenrightElements = document.querySelectorAll('.hidden-right');
hiddenrightElements.forEach((el) => observer.observe(el));

const hiddenfadeElements = document.querySelectorAll('.hidden-fade');
hiddenfadeElements.forEach((el) => observer.observe(el));