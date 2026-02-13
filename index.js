import { Notification } from "/components/notification/Notification.js";
import { UserCard } from "/components/user-card/UserCard.js";
import { DropDown } from "/components/drop-down/DropDown.js";
import { DropDownItem } from "/components/drop-down/DropDown.js";

// ---------------------------------------------------------------------------------------------------------------------------
window.customElements.define("notify-card", Notification);

const notificationTag = document.querySelectorAll(".notification-card");

notificationTag.forEach((notifyTag) => {
  notifyTag.addEventListener("close-notification-card", (e) => {
    e.target.remove();
  });
});
//-----------------------------------------------------------------------------------------------------------------------------
window.customElements.define("user-card", UserCard);

const userCards = document.querySelectorAll(".user-card");

userCards.forEach((card) => {
  card.addEventListener("email-connect", (e) => {
    console.log("GOING TO EMAIL...");
  });

  card.addEventListener("download-cv", (e) => {
    console.log("DOWNLOADING CV...");
  });
});
// ----------------------------------------------------------------------------------------------------------------------------

window.customElements.define("drop-down", DropDown);
window.customElements.define("drop-item", DropDownItem);
// ----------------------------------------------------------------------------------------------------------------
// const dropBtnToggle = document.querySelector(".drop-btn-toggle");
// const dropDownBody = document.querySelector(".drop-down-body");

// if (!localStorage.getItem("btnBodyState")) {
//   localStorage.setItem("btnBodyState", "closed");
// }

// dropBtnToggle.setAttribute(
//   "data-btn-state",
//   localStorage.getItem("btnBodyState"),
// );
// dropDownBody.setAttribute(
//   "data-drop-body-state",
//   localStorage.getItem("btnBodyState"),
// );

// dropBtnToggle.addEventListener("click", (e) => {
//   let dropDownBodyState = dropDownBody.getAttribute("data-drop-body-state");

//   if (dropDownBodyState == "closed") {
//     dropBtnToggle.setAttribute("data-btn-state", "open");
//     dropDownBody.setAttribute("data-drop-body-state", "open");
//     localStorage.setItem("btnBodyState", "open");
//   } else {
//     dropBtnToggle.setAttribute("data-btn-state", "closed");
//     dropDownBody.setAttribute("data-drop-body-state", "closed");
//     localStorage.setItem("btnBodyState", "closed");
//   }
// });
