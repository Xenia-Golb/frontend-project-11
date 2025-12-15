export const initView = () => {
  const form = document.querySelector("#rss-form");
  const urlInput = document.querySelector("#rss-url");
  const feedback = document.querySelector("#rss-url-feedback");

  if (!feedback) {
    const el = document.createElement("div");
    el.id = "rss-url-feedback";
    el.classList.add("invalid-feedback");
    urlInput.parentNode.insertBefore(el, urlInput.nextSibling);
  }

  return {
    form,
    urlInput,
    feedback: document.querySelector("#rss-url-feedback"),
    showError(message) {
      this.urlInput.classList.add("is-invalid");
      this.feedback.textContent = message;
    },
    clearError() {
      this.urlInput.classList.remove("is-invalid");
      this.feedback.textContent = "";
    },
    reset() {
      this.urlInput.value = "";
      this.clearError();
      this.urlInput.focus();
    },
  };
};
