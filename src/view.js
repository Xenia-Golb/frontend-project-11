import i18next from './i18n.js';

export const initView = () => {
  document.querySelector('#app').innerHTML = `
    <div>
      <form id="rss-form" class="row g-3">
        <div class="col-12">
          <label for="rss-url" class="form-label">${i18next.t('form.rssUrlLabel')}</label>
          <input
            type="url"
            class="form-control"
            id="rss-url"
            placeholder="${i18next.t('form.rssUrlPlaceholder')}"
            required
          />
          <div id="rss-url-feedback" class="invalid-feedback"></div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">${i18next.t('form.addButton')}</button>
        </div>
      </form>
    </div>
  `;

  const form = document.querySelector('#rss-form');
  const urlInput = document.querySelector('#rss-url');
  const feedback = document.querySelector('#rss-url-feedback');

  return {
    form,
    urlInput,
    feedback,

    showError(message) {
      this.urlInput.classList.add('is-invalid');
      this.feedback.textContent = message;
    },

    clearError() {
      this.urlInput.classList.remove('is-invalid');
      this.feedback.textContent = '';
    },

    reset() {
      this.urlInput.value = '';
      this.clearError();
      this.urlInput.focus();
    },
  };
};
