document.addEventListener('DOMContentLoaded', () => {
  var manifest = chrome.runtime.getManifest();
  document.body.innerHTML = `
<h1>${manifest.name}</h1> // ${manifest.version}
<p class="question">Q: Where is the keyboard?</p>
<p class="answer">
  A: Install
  <a target="_blank" href="https://chrome.google.com/webstore/detail/google-input-tools/mclkkofklkfljcocdinagocijmpgbhab">
    Google Input Tools</a>.
</p>
`;
});
