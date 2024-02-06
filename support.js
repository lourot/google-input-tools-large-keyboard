// Add a support link to the keyboard.
(function () {
  const kbdButtons = document.querySelector(".vk-t-btns");
  if (!kbdButtons) {
    // Either we're not in the google input tools extension document or the
    // extension hasn't loaded yet. This will for sure run again and pass.
    return;
  }

  const supportLinkClassName = "largeKbdSupportLink-7aLYVpEoK4";
  const supportLink = document.querySelector(`.${supportLinkClassName}`);
  if (supportLink) {
    return; // already exists
  }

  const newSupportLink = document.createElement("a");
  newSupportLink.innerHTML = "help / support this project 💚";
  newSupportLink.className = supportLinkClassName;
  newSupportLink.href = "https://lourot.dev/support";
  newSupportLink.target = "_blank";
  kbdButtons.insertBefore(newSupportLink, kbdButtons.firstChild);
})();
