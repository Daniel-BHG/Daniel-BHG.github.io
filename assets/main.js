
// Enhance only generic interactions. Each page contains its own research content.
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
  });
});
document.querySelectorAll('[data-gif-intro]').forEach(figure => {
  const image = figure.querySelector('img');
  const button = figure.querySelector('button');
  const source = figure.querySelector('source');
  const still = image.getAttribute('src');
  const animation = image.dataset.animatedSrc;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let playing = false;
  const setPlaying = value => {
    playing = value;
    if (source) source.srcset = value ? source.dataset.animatedSrc : still;
    image.src = value ? animation : still;
    button.textContent = value ? 'Pause animation' : 'Play animation';
    button.setAttribute('aria-pressed', String(value));
    button.setAttribute('aria-label', (value ? 'Pause' : 'Play') + ' OSARO introduction animation');
  };
  button.hidden = false;
  button.addEventListener('click', () => setPlaying(!playing));
  reduced.addEventListener('change', event => { if (event.matches) setPlaying(false); });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        if (!reduced.matches) setPlaying(true);
        observer.disconnect();
      }
    }, {rootMargin: '150px'});
    observer.observe(figure);
  } else if (!reduced.matches) setPlaying(true);
});

