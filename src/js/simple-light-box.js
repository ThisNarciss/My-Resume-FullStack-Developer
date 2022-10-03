import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
var lightbox = $('.gallery a').simpleLightbox({
  captionDelay: 250,
  captionsData: 'alt',
});
