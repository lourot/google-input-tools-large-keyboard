document.addEventListener('DOMContentLoaded', () => {
  var manifest = chrome.runtime.getManifest();
  document.body.innerHTML = `
<h1>${manifest.name}</h1> // ${manifest.version}
<h2>Find us:</h2>
<a target="_blank" href="https://chrome.google.com/webstore/detail/large-keyboard-for-google/gjhnbhjegnfhehpjhkajgfbkcbpmomoh">On the Web Store</a><br />
<a target="_blank" href="https://github.com/AurelienLourot/google-input-tools-large-keyboard">On GitHub</a><br />
<a target="_blank" href="mailto:aurelien.lourot@gmail.com">Via e-mail</a> // aurelien.lourot@gmail.com

<h2>FAQ:</h2>
<p class="question">Q: Where is the keyboard?</p>
<p class="answer">
  A: Install
  <a target="_blank" href="https://chrome.google.com/webstore/detail/google-input-tools/mclkkofklkfljcocdinagocijmpgbhab">
    Google Input Tools</a>.
</p>
`;
});
