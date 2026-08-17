const jobListingSection = document.querySelector('.jobs-listings');
jobListingSection.addEventListener('click', (event) => {
    const element = event.target;
    if (element.classList.contains('button-apply-job')) {
        element.textContent = "Aplicado!!";
        element.disabled = true;
        element.classList.add('is-applied');
    }
})