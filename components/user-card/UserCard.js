export class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.socialsIcons = {
      facebook: "./images/facebook.svg",
      github: "./images/github.svg",
      instagram: "./images/instagram.svg",
      linkedln: "./images/linkedin.svg",
      youtube: "./images/youtube.svg",
    };
  }

  renderSocialIcons(socialsData) {
    let socialsTemplate = ``;

    Object.entries(socialsData).map(([social, link]) => {
      socialsTemplate += `<a href=${link} class="social-link">
                                <img src=${this.socialsIcons[social]} class="socials-icon icon"/>
                            </a>`;
    });

    return socialsTemplate;
  }

  render() {
    let name = this.getAttribute("name");
    let carrer = this.getAttribute("carrer");
    let summary = this.getAttribute("summary");
    let emailAddress = this.getAttribute("email");
    let socials = JSON.parse(this.getAttribute("socials"));
    let resumeLink = this.getAttribute("resume");
    let imgLink = this.getAttribute("img");

    this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/user-card/UserCard.css" />

            <div class="card-container">
            <div class="avatar-img-container">
              <img src=${imgLink} class="avatar-img" />
            </div>
            <div class="user-name-role-container">
              <h1 class="avatar-name">${name}</h1>
              <h3 class="avatar-role">${carrer}</h3>
            </div>
            <div class="avatar-profile">
              <p class="avator-summary">
                ${summary}
              </p>
            </div>
            <div class="social-links-canvas">
              <div class="social-container">
                ${this.renderSocialIcons(socials)}
              </div>
            </div>
            <div class="btn-container">
              <button class="connect-btn btn">
                <img src="images/gmail.svg" class="icon" />
                Connect
              </button>
              <button class="download-cv-btn btn">
                <img src="images/download.svg" class="icon" />
                Download CV
              </button>
            </div>
          </div>
          `;

    this.setUpEventListners();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) {
      this.render();
    }
  }

  setUpEventListners() {
    let emailBtn = this.shadowRoot.querySelector(".connect-btn");
    let downloadCVBtn = this.shadowRoot.querySelector(".download-cv-btn");

    emailBtn.addEventListener("click", (e) => {
      this.dispatchEvent(
        new CustomEvent("email-connect", {
          detail: e,
          bubbles: true,
        }),
      );
    });

    downloadCVBtn.addEventListener("click", (e) => {
      this.dispatchEvent(
        new CustomEvent("download-cv", {
          detail: e,
          bubbles: true,
        }),
      );
    });
  }
}


