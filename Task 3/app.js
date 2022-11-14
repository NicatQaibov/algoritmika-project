"use strict";

const messageContainer = document.querySelector(".message-container");

// Generates current hour and minutes
const getCurrentTime = () =>
  `${new Date().getHours()}:${new Date()
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

const Message = class {
  constructor(authorName, deliveryTime, message) {
    this.authorName = authorName;
    this.deliveryTime = deliveryTime;
    this.message = message;
  }
  toHtml() {
    const p = document.createElement("p");
    p.innerHTML = `<span class = "time">${this.deliveryTime}</span> 
    <span class = "author">${this.authorName}</span> : ${this.message} `;
    messageContainer.appendChild(p);
  }
};

const Messenger = class {
  constructor() {
    this.messageHistory = [];
  }

  // Invokes toHtml method on each message object
  showHistory() {
    this.messageHistory.forEach((message) => {
      message.toHtml();
    });
  }
  // Pushes message object to array
  send(author, text) {
    const messageSentTime = getCurrentTime();
    this.messageHistory.push(new Message(author, messageSentTime, text));
  }
};

const inputAuthorName = document.querySelector("input#author-name");
const inputMessage = document.querySelector("textarea#message");
const form = document.querySelector("form");
const showHistoryBtn = document.querySelector(".show-history");

const newMessenger = new Messenger();
form.addEventListener("submit", () => {
  if (inputAuthorName.value !== "" && inputMessage.value !== "") {
    newMessenger.send(inputAuthorName.value, inputMessage.value);

    inputAuthorName.value = "";
    inputMessage.value = "";
  }
});

showHistoryBtn.addEventListener("click", () => {
  messageContainer.innerHTML = "";
  newMessenger.showHistory();
});
