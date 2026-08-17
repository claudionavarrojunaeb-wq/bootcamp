const busqueda = document.querySelector("#empleos-search-input")
busqueda.addEventListener('input', (event) =>{
    let contador = 0
    console.log(busqueda.value)
    const valor = busqueda.value
    const jobs = document.querySelectorAll('.job-listing-card');//!
    jobs.forEach(job => {
            const jobTextoTitulo = job.querySelector('#titulo').textContent
            const isShown = jobTextoTitulo === '' || jobTextoTitulo.includes(valor);
            job.classList.toggle('is-hidden',!isShown);
            if(isShown){
                contador  +=1
            };
        }) 
    console.log(contador)
});

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
        const jobTechnology = job.getAttribute('data-technology')
        const arregloTecnologias = jobTechnology.split(',');// lo dejo como arreglo
        //console.log(arregloTecnologias)
        //busca la coincidencia dentro del arreglo
        const isShown = selectedTechnology === '' || arregloTecnologias.includes(selectedTechnology);
        job.classList.toggle('is-hidden',!isShown);
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

// jobs.forEach(job => {
//         const jobTechnology = job.getAttribute('data-technology');
//         const jobMmodalidad = job.getAttribute('dataset.modalidad');
//         const jobExperience = job.getAttribute('data-experience');
//         const isShownTechnology = selectedTechnology === '' || arregloTecnologias.includes(selectedTechnology);
//         const isShownLocation = selectedLocation === '' || jobModalidad === selectedLocation;
//         const isShownExperience = selectedExperience === '' || jobExperience === selectedExperience;
//         const isShown = isShownTechnology & isShownExperience & isShownExperience
//         job.classList.toggle('is-hidden',!isShown);
// })