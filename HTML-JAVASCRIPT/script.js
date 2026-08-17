// const botones = document.querySelectorAll('.button-apply-job');
// botones.forEach(boton => {
//         boton.addEventListener('click', () => {
//         boton.textContent = "Aplicado!!";
//         boton.disabled = true;
//         boton.classList.add('is-applied');
//     });
// });



const jobListingSection = document.querySelector('.jobs-listings');
jobListingSection.addEventListener('click', (event) => {
    const element = event.target;
    if (element.classList.contains('button-apply-job')) {
        element.textContent = "Aplicado!!";
        element.disabled = true;
        element.classList.add('is-applied');
    }
})

const mensaje = document.querySelector('#filter-selected-value');
// const jobs = document.querySelectorAll('.job-listing-card'); //! se mueve a cada filtro para que al actualizar se obtengan los jobs

const filterTechnology = document.querySelector('#filter-technology');
filterTechnology.addEventListener('change', (event) => {
    const jobs = document.querySelectorAll('.job-listing-card');//!
    const selectedTechnology = filterTechnology.value;
    if (selectedTechnology) {
        mensaje.textContent = `Tecnología seleccionada: ${selectedTechnology}`;
    }


    jobs.forEach(job => {
        // const jobTechnology = job.dataset.technology;
        const jobTechnology = job.getAttribute('data-technology')
        const isShown = selectedTechnology === '' || jobTechnology === selectedTechnology;
        job.classList.toggle('is-hidden',!isShown);
        /*
        if(selectedTechnology === '' || jobTechnology === selectedTechnology) {
            // job.style.display = 'flex';
            job.classList.remove('is-hidden')
        } else {
            // job.style.display = 'none';
            job.classList.add('is-hidden')
        }
        */
    })
});

const filterLocation = document.querySelector('#filter-location');
filterLocation.addEventListener('change', (event) => {
    const jobs = document.querySelectorAll('.job-listing-card');//!
    const selectedLocation = event.target.value;
    if (selectedLocation) {
            mensaje.textContent = `Ubicación seleccionada: ${selectedLocation}`;
        }
    
    jobs.forEach(job => {
        //const jobMmodalidad = job.dataset.modalidad;
        const jobModalidad = job.getAttribute('data-modalidad')
        const isShown = selectedLocation === '' || jobModalidad === selectedLocation;
        job.classList.toggle('is-hidden',!isShown);
    })
})

const filterExperienceLevel = document.querySelector('#filter-experience-level');
filterExperienceLevel.addEventListener('change', (event) => {
    const jobs = document.querySelectorAll('.job-listing-card');//!
    const selectedExperience = event.target.value;
        if (selectedExperience) {
            mensaje.textContent = `Nivel de experiencia seleccionada: ${selectedExperience}`;
        }
    jobs.forEach(job => {
        //const jobExperience = job.dataset.experience;
        const jobExperience = job.getAttribute('data-experience')
        const isShown = selectedExperience === '' || jobExperience === selectedExperience;
        job.classList.toggle('is-hidden',!isShown);
    })
});

// const searchInput = document.querySelector('#empleos-search-input');
// searchInput.addEventListener('input', function(){
//     console.log(searchInput.value);
// });

// const searchForm = document.querySelector('#empleos-search-form');
// searchForm.addEventListener('submit', function(event){
//     event.preventDefault();
//     console.log('submit');
// });

// document.addEventListener('keydown', function(event) {
//   console.log("Tecla presionada: ", event.key)
//   console.log("¿Está pulsada la tecla shift?", event.shiftKey)
//   console.log("¿Está pulsada la tecla ctrl?", event.ctrlKey)
//   console.log("¿Está pulsada la tecla alt?", event.altKey)
//   console.log("¿Está pulsada la tecla enter?", event.key === "Enter")
//   console.log("¿Está pulsada la tecla escape?", event.key === "Escape")
//   console.log("¿Está pulsada la tecla tab?", event.key === "Tab")
//   console.log("¿Está pulsada la tecla backspace?", event.key === "Backspace")
//   console.log("¿Está pulsada la tecla delete?", event.key === "Delete")
//   console.log("¿Está pulsada la tecla flecha arriba?", event.key === "ArrowUp")
//   console.log("¿Está pulsada la tecla flecha abajo?", event.key === "ArrowDown")
//   console.log("¿Está pulsada la tecla flecha izquierda?", event.key === "ArrowLeft")
//   console.log("¿Está pulsada la tecla flecha derecha?", event.key === "ArrowRight")
// });

//! ofuscado pero hermoso

// const \u005f\u005f\u0053\u0031\u0030=["\u006b\u0065\u0079\u0064\u006f\u0077\u006e", "\u0054\u0065\u0063\u006c\u0061\u0020\u0070\u0072\u0065\u0073\u0069\u006f\u006e\u0061\u0064\u0061\u003a\u0020","\u00bf\u0045\u0073\u0074\u00e1\u0020\u0070\u0075\u006c\u0073\u0061\u0064\u0061\u0020\u006c\u0061\u0020\u0074\u0065\u0063\u006c\u0061\u0020\u0073\u0068\u0069\u0066\u0074\u003f","\u00bf\u0045\u0073\u0074\u00e1\u0020\u0070\u0075\u006c\u0073\u0061\u0064\u0061\u0020\u006c\u0061\u0020\u0074\u0065\u0063\u006c\u0061\u0020\u0063\u0074\u0072\u006c\u003f","\u00bf\u0045\u0073\u0074\u00e1\u0020\u0070\u0075\u006c\u0073\u0061\u0064\u0061\u0020\u006c\u0061\u0020\u0074\u0065\u0063\u006c\u0061\u0020\u0061\u006c\u0074\u003f","\u00bf\u0045\u0073\u0074\u00e1\u0020\u0070\u0075\u006c\u0073\u0061\u0064\u0061\u0020\u006c\u0061\u0020\u0074\u0065\u0063\u006c\u0061\u0020\u0065\u006e\u0074\u0065\u0072\u003f","\u0045\u006e\u0074\u0065\u0072","\u00bf\u0045\u0073\u0074\u00e1\u0020\u0070\u0075\u006c\u0073\u0061\u0064\u0061\u0020\u006c\u0061\u0020\u0074\u0065\u0063\u006c\u0061\u0020\u0065\u0073\u0063\u0061\u0070\u0065\u003f","\u0045\u0073\u0063\u0061\u0070\u0065","\u00bf\u0045\u0073\u0074\u00e1\u0020\u0070\u0075\u006c\u0073\u0061\u0064\u0061\u0020\u006c\u0061\u0020\u0074\u0065\u0063\u006c\u0061\u0020\u0074\u0061\u0062\u003f","\u0054\u0061\u0062","\u00bf\u0045\u0073\u0074\u00e1\u0020\u0070\u0075\u006c\u0073\u0061\u0064\u0061\u0020\u006c\u0061\u0020\u0074\u0065\u0063\u006c\u0061\u0020\u0062\u0061\u0063\u006b\u0073\u0070\u0061\u0063\u0065\u003f","\u0042\u0061\u0063\u006b\u0073\u0070\u0061\u0063\u0065","\u00bf\u0045\u0073\u0074\u00e1\u0020\u0070\u0075\u006c\u0073\u0061\u0064\u0061\u0020\u006c\u0061\u0020\u0074\u0065\u0063\u006c\u0061\u0020\u0064\u0065\u006c\u0065\u0074\u0065\u003f","\u0044\u0065\u006c\u0065\u0074\u0065","\u00bf\u0045\u0073\u0074\u00e1\u0020\u0070\u0075\u006c\u0073\u0061\u0064\u0061\u0020\u006c\u0061\u0020\u0074\u0065\u0063\u006c\u0061\u0020\u0066\u006c\u0065\u0063\u0068\u0061\u0020\u0061\u0072\u0072\u0069\u0062\u0061\u003f","\u0041\u0072\u0072\u006f\u0077\u0055\u0070","\u00bf\u0045\u0073\u0074\u00e1\u0020\u0070\u0075\u006c\u0073\u0061\u0064\u0061\u0020\u006c\u0061\u0020\u0074\u0065\u0063\u006c\u0061\u0020\u0066\u006c\u0065\u0063\u0068\u0061\u0020\u0061\u0062\u0061\u006a\u006f\u003f","\u0041\u0072\u0072\u006f\u0077\u0044\u006f\u0077\u006e","\u00bf\u0045\u0073\u0074\u00e1\u0020\u0070\u0075\u006c\u0073\u0061\u0064\u0061\u0020\u006c\u0061\u0020\u0074\u0065\u0063\u006c\u0061\u0020\u0066\u006c\u0065\u0063\u0068\u0061\u0020\u0069\u007a\u0071\u0075\u0069\u0065\u0072\u0064\u0061\u003f","\u0041\u0072\u0072\u006f\u0077\u004c\u0065\u0066\u0074","\u00bf\u0045\u0073\u0074\u00e1\u0020\u0070\u0075\u006c\u0073\u0061\u0064\u0061\u0020\u006c\u0061\u0020\u0074\u0065\u0063\u006c\u0061\u0020\u0066\u006c\u0065\u0063\u0068\u0061\u0020\u0064\u0065\u0072\u0065\u0063\u0068\u0061\u003f","\u0041\u0072\u0072\u006f\u0077\u0052\u0069\u0067\u0068\u0074"];
// const \u005f\u005f\u0053\u0039=[\u005f\u005f\u0053\u0031\u0030[0x0],\u005f\u005f\u0053\u0031\u0030[0x1],\u005f\u005f\u0053\u0031\u0030[0x1+0x1],\u005f\u005f\u0053\u0031\u0030[0x1+0x2],\u005f\u005f\u0053\u0031\u0030[0x2+0x2],\u005f\u005f\u0053\u0031\u0030[0x2+0x3],\u005f\u005f\u0053\u0031\u0030[0x3+0x3],\u005f\u005f\u0053\u0031\u0030[0x3+0x4],\u005f\u005f\u0053\u0031\u0030[0x4+0x4],\u005f\u005f\u0053\u0031\u0030[0x4+0x5],\u005f\u005f\u0053\u0031\u0030[0x5+0x5],\u005f\u005f\u0053\u0031\u0030[0x5+0x6],\u005f\u005f\u0053\u0031\u0030[0x6+0x6],\u005f\u005f\u0053\u0031\u0030[0x6+0x7],\u005f\u005f\u0053\u0031\u0030[0x7+0x7],\u005f\u005f\u0053\u0031\u0030[0x7+0x8],\u005f\u005f\u0053\u0031\u0030[0x8+0x8],\u005f\u005f\u0053\u0031\u0030[0x8+0x9],\u005f\u005f\u0053\u0031\u0030[0x9+0x9],\u005f\u005f\u0053\u0031\u0030[0x9+0xA],\u005f\u005f\u0053\u0031\u0030[0xA+0xA],\u005f\u005f\u0053\u0031\u0030[0xA+0xB],\u005f\u005f\u0053\u0031\u0030[0xB+0xB]];
// const \u005f\u005f\u0053\u0038=[\u005f\u005f\u0053\u0039[0x0],\u005f\u005f\u0053\u0039[0x1],\u005f\u005f\u0053\u0039[0x1+0x1],\u005f\u005f\u0053\u0039[0x1+0x2],\u005f\u005f\u0053\u0039[0x2+0x2],\u005f\u005f\u0053\u0039[0x2+0x3],\u005f\u005f\u0053\u0039[0x3+0x3],\u005f\u005f\u0053\u0039[0x3+0x4],\u005f\u005f\u0053\u0039[0x4+0x4],\u005f\u005f\u0053\u0039[0x4+0x5],\u005f\u005f\u0053\u0039[0x5+0x5],\u005f\u005f\u0053\u0039[0x5+0x6],\u005f\u005f\u0053\u0039[0x6+0x6],\u005f\u005f\u0053\u0039[0x6+0x7],\u005f\u005f\u0053\u0039[0x7+0x7],\u005f\u005f\u0053\u0039[0x7+0x8],\u005f\u005f\u0053\u0039[0x8+0x8],\u005f\u005f\u0053\u0039[0x8+0x9],\u005f\u005f\u0053\u0039[0x9+0x9],\u005f\u005f\u0053\u0039[0x9+0xA],\u005f\u005f\u0053\u0039[0xA+0xA],\u005f\u005f\u0053\u0039[0xA+0xB],\u005f\u005f\u0053\u0039[0xB+0xB]];
// const \u005f\u005f\u0053\u0037=[\u005f\u005f\u0053\u0038[0x0],\u005f\u005f\u0053\u0038[0x1],\u005f\u005f\u0053\u0038[0x1+0x1],\u005f\u005f\u0053\u0038[0x1+0x2],\u005f\u005f\u0053\u0038[0x2+0x2],\u005f\u005f\u0053\u0038[0x2+0x3],\u005f\u005f\u0053\u0038[0x3+0x3],\u005f\u005f\u0053\u0038[0x3+0x4],\u005f\u005f\u0053\u0038[0x4+0x4],\u005f\u005f\u0053\u0038[0x4+0x5],\u005f\u005f\u0053\u0038[0x5+0x5],\u005f\u005f\u0053\u0038[0x5+0x6],\u005f\u005f\u0053\u0038[0x6+0x6],\u005f\u005f\u0053\u0038[0x6+0x7],\u005f\u005f\u0053\u0038[0x7+0x7],\u005f\u005f\u0053\u0038[0x7+0x8],\u005f\u005f\u0053\u0038[0x8+0x8],\u005f\u005f\u0053\u0038[0x8+0x9],\u005f\u005f\u0053\u0038[0x9+0x9],\u005f\u005f\u0053\u0038[0x9+0xA],\u005f\u005f\u0053\u0038[0xA+0xA],\u005f\u005f\u0053\u0038[0xA+0xB],\u005f\u005f\u0053\u0038[0xB+0xB]];
// const \u005f\u005f\u0053\u0036=[\u005f\u005f\u0053\u0037[0x0],\u005f\u005f\u0053\u0037[0x1],\u005f\u005f\u0053\u0037[0x1+0x1],\u005f\u005f\u0053\u0037[0x1+0x2],\u005f\u005f\u0053\u0037[0x2+0x2],\u005f\u005f\u0053\u0037[0x2+0x3],\u005f\u005f\u0053\u0037[0x3+0x3],\u005f\u005f\u0053\u0037[0x3+0x4],\u005f\u005f\u0053\u0037[0x4+0x4],\u005f\u005f\u0053\u0037[0x4+0x5],\u005f\u005f\u0053\u0037[0x5+0x5],\u005f\u005f\u0053\u0037[0x5+0x6],\u005f\u005f\u0053\u0037[0x6+0x6],\u005f\u005f\u0053\u0037[0x6+0x7],\u005f\u005f\u0053\u0037[0x7+0x7],\u005f\u005f\u0053\u0037[0x7+0x8],\u005f\u005f\u0053\u0037[0x8+0x8],\u005f\u005f\u0053\u0037[0x8+0x9],\u005f\u005f\u0053\u0037[0x9+0x9],\u005f\u005f\u0053\u0037[0x9+0xA],\u005f\u005f\u0053\u0037[0xA+0xA],\u005f\u005f\u0053\u0037[0xA+0xB],\u005f\u005f\u0053\u0037[0xB+0xB]];
// const \u005f\u005f\u0053\u0035=[\u005f\u005f\u0053\u0036[0x0],\u005f\u005f\u0053\u0036[0x1],\u005f\u005f\u0053\u0036[0x1+0x1],\u005f\u005f\u0053\u0036[0x1+0x2],\u005f\u005f\u0053\u0036[0x2+0x2],\u005f\u005f\u0053\u0036[0x2+0x3],\u005f\u005f\u0053\u0036[0x3+0x3],\u005f\u005f\u0053\u0036[0x3+0x4],\u005f\u005f\u0053\u0036[0x4+0x4],\u005f\u005f\u0053\u0036[0x4+0x5],\u005f\u005f\u0053\u0036[0x5+0x5],\u005f\u005f\u0053\u0036[0x5+0x6],\u005f\u005f\u0053\u0036[0x6+0x6],\u005f\u005f\u0053\u0036[0x6+0x7],\u005f\u005f\u0053\u0036[0x7+0x7],\u005f\u005f\u0053\u0036[0x7+0x8],\u005f\u005f\u0053\u0036[0x8+0x8],\u005f\u005f\u0053\u0036[0x8+0x9],\u005f\u005f\u0053\u0036[0x9+0x9],\u005f\u005f\u0053\u0036[0x9+0xA],\u005f\u005f\u0053\u0036[0xA+0xA],\u005f\u005f\u0053\u0036[0xA+0xB],\u005f\u005f\u0053\u0036[0xB+0xB]];
// const \u005f\u005f\u0053\u0034=[\u005f\u005f\u0053\u0035[0x0],\u005f\u005f\u0053\u0035[0x1],\u005f\u005f\u0053\u0035[0x1+0x1],\u005f\u005f\u0053\u0035[0x1+0x2],\u005f\u005f\u0053\u0035[0x2+0x2],\u005f\u005f\u0053\u0035[0x2+0x3],\u005f\u005f\u0053\u0035[0x3+0x3],\u005f\u005f\u0053\u0035[0x3+0x4],\u005f\u005f\u0053\u0035[0x4+0x4],\u005f\u005f\u0053\u0035[0x4+0x5],\u005f\u005f\u0053\u0035[0x5+0x5],\u005f\u005f\u0053\u0035[0x5+0x6],\u005f\u005f\u0053\u0035[0x6+0x6],\u005f\u005f\u0053\u0035[0x6+0x7],\u005f\u005f\u0053\u0035[0x7+0x7],\u005f\u005f\u0053\u0035[0x7+0x8],\u005f\u005f\u0053\u0035[0x8+0x8],\u005f\u005f\u0053\u0035[0x8+0x9],\u005f\u005f\u0053\u0035[0x9+0x9],\u005f\u005f\u0053\u0035[0x9+0xA],\u005f\u005f\u0053\u0035[0xA+0xA],\u005f\u005f\u0053\u0035[0xA+0xB],\u005f\u005f\u0053\u0035[0xB+0xB]];
// const \u005f\u005f\u0053\u0033=[\u005f\u005f\u0053\u0034[0x0],\u005f\u005f\u0053\u0034[0x1],\u005f\u005f\u0053\u0034[0x1+0x1],\u005f\u005f\u0053\u0034[0x1+0x2],\u005f\u005f\u0053\u0034[0x2+0x2],\u005f\u005f\u0053\u0034[0x2+0x3],\u005f\u005f\u0053\u0034[0x3+0x3],\u005f\u005f\u0053\u0034[0x3+0x4],\u005f\u005f\u0053\u0034[0x4+0x4],\u005f\u005f\u0053\u0034[0x4+0x5],\u005f\u005f\u0053\u0034[0x5+0x5],\u005f\u005f\u0053\u0034[0x5+0x6],\u005f\u005f\u0053\u0034[0x6+0x6],\u005f\u005f\u0053\u0034[0x6+0x7],\u005f\u005f\u0053\u0034[0x7+0x7],\u005f\u005f\u0053\u0034[0x7+0x8],\u005f\u005f\u0053\u0034[0x8+0x8],\u005f\u005f\u0053\u0034[0x8+0x9],\u005f\u005f\u0053\u0034[0x9+0x9],\u005f\u005f\u0053\u0034[0x9+0xA],\u005f\u005f\u0053\u0034[0xA+0xA],\u005f\u005f\u0053\u0034[0xA+0xB],\u005f\u005f\u0053\u0034[0xB+0xB]];
// const \u005f\u005f\u0053\u0032=[\u005f\u005f\u0053\u0033[0x0],\u005f\u005f\u0053\u0033[0x1],\u005f\u005f\u0053\u0033[0x1+0x1],\u005f\u005f\u0053\u0033[0x1+0x2],\u005f\u005f\u0053\u0033[0x2+0x2],\u005f\u005f\u0053\u0033[0x2+0x3],\u005f\u005f\u0053\u0033[0x3+0x3],\u005f\u005f\u0053\u0033[0x3+0x4],\u005f\u005f\u0053\u0033[0x4+0x4],\u005f\u005f\u0053\u0033[0x4+0x5],\u005f\u005f\u0053\u0033[0x5+0x5],\u005f\u005f\u0053\u0033[0x5+0x6],\u005f\u005f\u0053\u0033[0x6+0x6],\u005f\u005f\u0053\u0033[0x6+0x7],\u005f\u005f\u0053\u0033[0x7+0x7],\u005f\u005f\u0053\u0033[0x7+0x8],\u005f\u005f\u0053\u0033[0x8+0x8],\u005f\u005f\u0053\u0033[0x8+0x9],\u005f\u005f\u0053\u0033[0x9+0x9],\u005f\u005f\u0053\u0033[0x9+0xA],\u005f\u005f\u0053\u0033[0xA+0xA],\u005f\u005f\u0053\u0033[0xA+0xB],\u005f\u005f\u0053\u0033[0xB+0xB]];
// const \u005f\u005f\u0053\u0031=[\u005f\u005f\u0053\u0032[0x0],\u005f\u005f\u0053\u0032[0x1],\u005f\u005f\u0053\u0032[0x1+0x1],\u005f\u005f\u0053\u0032[0x1+0x2],\u005f\u005f\u0053\u0032[0x2+0x2],\u005f\u005f\u0053\u0032[0x2+0x3],\u005f\u005f\u0053\u0032[0x3+0x3],\u005f\u005f\u0053\u0032[0x3+0x4],\u005f\u005f\u0053\u0032[0x4+0x4],\u005f\u005f\u0053\u0032[0x4+0x5],\u005f\u005f\u0053\u0032[0x5+0x5],\u005f\u005f\u0053\u0032[0x5+0x6],\u005f\u005f\u0053\u0032[0x6+0x6],\u005f\u005f\u0053\u0032[0x6+0x7],\u005f\u005f\u0053\u0032[0x7+0x7],\u005f\u005f\u0053\u0032[0x7+0x8],\u005f\u005f\u0053\u0032[0x8+0x8],\u005f\u005f\u0053\u0032[0x8+0x9],\u005f\u005f\u0053\u0032[0x9+0x9],\u005f\u005f\u0053\u0032[0x9+0xA],\u005f\u005f\u0053\u0032[0xA+0xA],\u005f\u005f\u0053\u0032[0xA+0xB],\u005f\u005f\u0053\u0032[0xB+0xB]];
// \u0064\u006f\u0063\u0075\u006d\u0065\u006e\u0074.\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072(\u005f\u005f\u0053\u0031[0x0], function(\u005f\u0065\u0031) {
// \u0063\u006f\u006e\u0073\u006f\u006c\u0065.\u006c\u006f\u0067(\u005f\u005f\u0053\u0031[0x1], \u005f\u0065\u0031.\u006b\u0065\u0079);
// \u0063\u006f\u006e\u0073\u006f\u006c\u0065.\u006c\u006f\u0067(\u005f\u005f\u0053\u0031[0x1+0x1], \u005f\u0065\u0031.\u0073\u0068\u0069\u0066\u0074\u004b\u0065\u0079);
// \u0063\u006f\u006e\u0073\u006f\u006c\u0065.\u006c\u006f\u0067(\u005f\u005f\u0053\u0031[0x1+0x2], \u005f\u0065\u0031.\u0063\u0074\u0072\u006c\u004b\u0065\u0079);
// \u0063\u006f\u006e\u0073\u006f\u006c\u0065.\u006c\u006f\u0067(\u005f\u005f\u0053\u0031[0x2+0x2], \u005f\u0065\u0031.\u0061\u006c\u0074\u004b\u0065\u0079);
// \u0063\u006f\u006e\u0073\u006f\u006c\u0065.\u006c\u006f\u0067(\u005f\u005f\u0053\u0031[0x2+0x3], \u005f\u0065\u0031.\u006b\u0065\u0079 === \u005f\u005f\u0053\u0031[0x3+0x3]);
// \u0063\u006f\u006e\u0073\u006f\u006c\u0065.\u006c\u006f\u0067(\u005f\u005f\u0053\u0031[0x3+0x4], \u005f\u0065\u0031.\u006b\u0065\u0079 === \u005f\u005f\u0053\u0031[0x4+0x4]);
// \u0063\u006f\u006e\u0073\u006f\u006c\u0065.\u006c\u006f\u0067(\u005f\u005f\u0053\u0031[0x4+0x5], \u005f\u0065\u0031.\u006b\u0065\u0079 === \u005f\u005f\u0053\u0031[0x5+0x5]);
// \u0063\u006f\u006e\u0073\u006f\u006c\u0065.\u006c\u006f\u0067(\u005f\u005f\u0053\u0031[0x5+0x6], \u005f\u0065\u0031.\u006b\u0065\u0079 === \u005f\u005f\u0053\u0031[0x6+0x6]);
// \u0063\u006f\u006e\u0073\u006f\u006c\u0065.\u006c\u006f\u0067(\u005f\u005f\u0053\u0031[0x6+0x7], \u005f\u0065\u0031.\u006b\u0065\u0079 === \u005f\u005f\u0053\u0031[0x7+0x7]);
// \u0063\u006f\u006e\u0073\u006f\u006c\u0065.\u006c\u006f\u0067(\u005f\u005f\u0053\u0031[0x7+0x8], \u005f\u0065\u0031.\u006b\u0065\u0079 === \u005f\u005f\u0053\u0031[0x8+0x8]);
// \u0063\u006f\u006e\u0073\u006f\u006c\u0065.\u006c\u006f\u0067(\u005f\u005f\u0053\u0031[0x8+0x9], \u005f\u0065\u0031.\u006b\u0065\u0079 === \u005f\u005f\u0053\u0031[0x9+0x9]);
// \u0063\u006f\u006e\u0073\u006f\u006c\u0065.\u006c\u006f\u0067(\u005f\u005f\u0053\u0031[0x9+0xA], \u005f\u0065\u0031.\u006b\u0065\u0079 === \u005f\u005f\u0053\u0031[0xA+0xA]);
// \u0063\u006f\u006e\u0073\u006f\u006c\u0065.\u006c\u006f\u0067(\u005f\u005f\u0053\u0031[0xA+0xB], \u005f\u0065\u0031.\u006b\u0065\u0079 === \u005f\u005f\u0053\u0031[0xB+0xB])});

const container = document.querySelector('.jobs-listings')

const RESULTS_PER_PAGE = 3

fetch("./data.json") /* fetch es asíncrono */
    .then((response) => {
        return response.json();
    })
    .then((jobs) => {
        jobs.forEach(job => {
            const article = document.createElement('article')
            article.className = 'job-listing-card'

            article.dataset.modalidad = job.data.modalidad
            article.dataset.nivel = job.data.nivel
            article.dataset.technology = job.data.technology

            article.innerHTML = `<div>
                <h3>${job.titulo}</h3>
                <small>${job.empresa} | ${job.ubicacion}</small>
                <p>${job.descripcion}</p>
                </div>
                <button class="button-apply-job">Aplicar</button>`
            container.appendChild(article)
        })
  });