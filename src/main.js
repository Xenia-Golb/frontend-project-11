import './style.css';
import './i18n.js';
import { createRssUrlSchema } from './validation.js';
import { initView } from './view.js';

const feeds = [];

document.addEventListener('DOMContentLoaded', () => {
  const view = initView();

  view.form.addEventListener('submit', (e) => {
    e.preventDefault();
    view.clearError();

    const schema = createRssUrlSchema(feeds);

    schema
      .validate(view.urlInput.value)
      .then((validUrl) => {
        feeds.push(validUrl);
        view.reset();
      })
      .catch((err) => {
        if (err.name === 'ValidationError') {
          view.showError(err.message);
        }
        else {
          view.showError('Validation failed');
        }
      });
  });
});
