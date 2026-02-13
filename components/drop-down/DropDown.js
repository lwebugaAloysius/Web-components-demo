export class DropDown extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.dropIcon = {
      downIcon: "drop-down-icons/down.png",
      upIcon: "drop-down-icons/angle-up.png",
    };
  }

  openCloseFunctionality() {
    const dropBtnToggle = this.shadowRoot.querySelector(".drop-btn-toggle");
    const dropDownBody = this.shadowRoot.querySelector(".drop-down-body");
    const dropDownId = this.getAttribute("dropDownId");

    if (!sessionStorage.getItem(`dropDown${dropDownId}State`)) {
      sessionStorage.setItem(`dropDown${dropDownId}State`, "closed");
    }

    dropBtnToggle.setAttribute(
      "data-btn-state",
      sessionStorage.getItem(`dropDown${dropDownId}State`),
    );
    dropDownBody.setAttribute(
      "data-drop-body-state",
      sessionStorage.getItem(`dropDown${dropDownId}State`),
    );

    dropBtnToggle.addEventListener("click", (e) => {
      let dropDownBodyState = dropDownBody.getAttribute("data-drop-body-state");

      if (dropDownBodyState == "closed") {
        dropBtnToggle.setAttribute("data-btn-state", "open");
        dropDownBody.setAttribute("data-drop-body-state", "open");
        sessionStorage.setItem(`dropDown${dropDownId}State`, "open");
      } else {
        dropBtnToggle.setAttribute("data-btn-state", "closed");
        dropDownBody.setAttribute("data-drop-body-state", "closed");
        sessionStorage.setItem(`dropDown${dropDownId}State`, "closed");
      }
    });
  }

  render() {
    let mobileCenterState = this.getAttribute("mobileCenter") || "false";
    let mobileCenterPoint = this.getAttribute("mobileCenterPoint") || "600px";
    let title = this.getAttribute("name") || "Drop Down";
    this.shadowRoot.innerHTML = `
                                <link rel="stylesheet" href="./components/drop-down/DropDown.css" />

                                <style>
                                    @media (min-width:${mobileCenterPoint}) {
                                        .drop-down-body {
                                          position: absolute;
                                          left: 0;
                                          right: 0;
                                          z-index: 9999999;
                                          width: max-content;
                                        }
                                    }
                                    @media (max-width: ${mobileCenterPoint}) {
                                        .drop-down-container[data-mobileCenter="true"] {
                                            text-align: center;
                                        }

                                        .drop-header[data-mobileCenter="true"] {
                                            justify-content: center;
                                        }
                                    }
                                </style>

                                <div class="drop-down-container" data-mobileCenter=${mobileCenterState}>
                                    <div class="drop-header" data-mobileCenter=${mobileCenterState}>
                                        <p class="drop-title">${title}</p>
                                        <button class="drop-btn-toggle" data-btn-state="closed"></button>
                                    </div>
                                    <div class="drop-down-body" data-drop-body-state="closed">
                                        <slot></slot>
                                    </div>
                                </div>

    `;
    this.openCloseFunctionality();
  }

  connectedCallback() {
    this.render();
  }
}

export class DropDownItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadowRoot.innerHTML = `
                            <style>
                                div {
                                    margin-block: .4rem;
                                }
                            </style>
                            <div><slot></slot></div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

