export default function initStudies() {
  const match = window.matchMedia('screen and (max-width: 768px)');
  let isMobile = match.matches;
  match.addEventListener('change', (e) => (isMobile = e.matches));

  const studyDisplay = document.querySelector('.study-display');
  if (!studyDisplay) return;

  const studies = document.querySelectorAll('[data-study-label]');
  studies.forEach((study) => {
    study?.addEventListener('click', () => {
      selectStudy(study.getAttribute('data-study-label'));
    });
  });

  function selectStudy(label) {
    // Grabbing study display title
    const title = studyDisplay?.querySelector('[data-js="study-title"]');
    // Grabbing the container of the study list
    const studyContainer = document.querySelector('[data-js="studies"]');
    // If they for some reason dont exist, do nothing
    if (!title || !studyDisplay || !studyContainer) return;
    // Setting label to display the current study
    title.innerHTML = label;
    studyDisplay.dataset.study = label;

    studyContainer.innerHTML = /*html*/ `
      <div class="study p-2">
        <h2 class="f3 font-weight-bold">${label} Course name 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsum.</p>
      </div>
      <div class="study p-2">
        <h2 class="f3 font-weight-bold">${label} Course name 2</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsum.</p>
      </div>
      <div class="study p-2">
        <h2 class="f3 font-weight-bold">${label} Course name 3</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsum.</p>
      </div>
      <div>.....</div>
    `;
    isMobile && studyContainer.scrollIntoView({ behavior: 'smooth' });
  }
}
