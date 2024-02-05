document.addEventListener("DOMContentLoaded", () => {
  var manifest = chrome.runtime.getManifest();
  document.body.innerHTML = `
<h2>${manifest.name} v${manifest.version}</h2>
<div><a target="_blank" href="https://chrome.google.com/webstore/detail/large-keyboard-for-google/gjhnbhjegnfhehpjhkajgfbkcbpmomoh">Web Store / Download</a></div>
<div><a target="_blank" href="https://github.com/AurelienLourot/google-input-tools-large-keyboard">GitHub / Source code</a></div>
<div><a target="_blank" href="https://lourot.dev/support">Contact / Support / Donate</a></div>

<h2>FAQ:</h2>
<div class="question">Q: Where is the keyboard?</div>
<div>
  A: Install
  <a target="_blank" href="https://chrome.google.com/webstore/detail/google-input-tools/mclkkofklkfljcocdinagocijmpgbhab">
    Google Input Tools</a>.
</div>
`;
});
