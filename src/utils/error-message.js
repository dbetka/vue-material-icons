export class ErrorMessage extends Error {
  constructor (...params) {
    super(...params);
    this.humanMessage = '';
  }

  showMessage (humanMessage) {
    this.humanMessage = humanMessage;
    alert(humanMessage);
  }
}
