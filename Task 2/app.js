"use strict";

// Generates current hour and minute
const getCurrentTime = function () {
  return `${new Date().getHours()}:${new Date().getMinutes()}`;
};

const Message = class {
  constructor(authorName, deliveryTime, message) {
    this.authorName = authorName;
    this.deliveryTime = deliveryTime;
    this.message = message;
  }

  toString() {
    return `${this.deliveryTime} ${this.authorName} : ${this.message}`;
  }
};

const Messenger = class {
  messageHistory = [];
  send(author, text) {
    const messageSentTime = getCurrentTime();

    // Pushes all new message objects to array
    this.messageHistory.push(new Message(author, messageSentTime, text));
  }

  showHistory() {
    // Loops through message history and passes corresponding elements to toString method by using Prototypal Inheritance.
    this.messageHistory.forEach((message) => {
      console.log(message.toString());
    });
  }
};

const message = new Messenger();

message.send("Ragnar", "Who wants to be king?");
message.send("Neo", "There is no spoon.");
message.send("Morpheous", "Do not believe you are, know you are!");
message.send("Agent Smith", "Mr.Anderson!");

message.showHistory();
