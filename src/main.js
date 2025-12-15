import "./style.css";
import { createRssUrlSchema } from "./validation.js";
import { initView } from "./view.js";

const feeds = [];

document.querySelector("#app").innerHTML = `
  <div>
    <form id="rss-form" class="row g-3">
      <div class="col-12">
        <label for="rss-url" class="form-label">RSS URL</label>
        <input
          type="url"
          class="form-control"
          id="rss-url"
          placeholder="https://example.com/feed.xml"
          required
        />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Add RSS</button>
      </div>
    </form>
  </div>
`;

const view = initView();

view.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const rawUrl = view.urlInput.value;

  view.clearError();

  const schema = createRssUrlSchema(feeds);

  schema
    .validate(rawUrl)
    .then((validUrl) => {
      feeds.push(validUrl);
      console.log("Added feed:", validUrl);
      view.reset();
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        view.showError(err.message);
      } else {
        view.showError("Validation failed");
        console.error(err);
      }
    });
});
