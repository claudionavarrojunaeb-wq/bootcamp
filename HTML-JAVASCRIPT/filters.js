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