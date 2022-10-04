import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

var lightbox = new SimpleLightbox('.gallery a', {
  animationSpeed: 1000,

  captionDelay: 250,
  captionsData: 'alt',
});
