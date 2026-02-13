export class Notification extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  render() {
    let type = this.getAttribute("type");
    let content = this.getAttribute("content");

    let icons = {
      success: "images/check.png",
      error: "images/remove.png",
      warning: "images/warning.png",
      info: "images/information.png",
    };

    let tag = {
      success: "Succes! ",
      error: "Error: ",
      warning: "Warning! ",
      info: "Information: ",
    };

    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/notification/Notification.css">

        <div class="card-container" data-type=${type}>
            <div class="card-info-container">
                <div class="icon-container">
                    <img src=${icons[type]} class="card-icon" />
                </div>
                <div class="card-message-container">
                    ${tag[type]} <span class="card-message">${content}</span>
                </div>
            </div>
            <button class="card-close-btn"><img src="images/close.png" /></button>
        </div>
    `;

    this.setUpEventListners();
  }

  connectedCallback() {
    this.render();
  }

  setUpEventListners() {
    const closeCardBtn = this.shadowRoot.querySelector(".card-close-btn");

    closeCardBtn.addEventListener("click", (e) => {
      this.dispatchEvent(
        new CustomEvent("close-notification-card", {
          detail: e,
          bubbles: true,
        }),
      );
    });
  }
}

