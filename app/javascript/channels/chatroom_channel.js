import consumer from "channels/consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
  const container = document.getElementById("message-container");
  if (container) {
  container.insertAdjacentHTML("beforeend", data.mod_message);
  container.scrollTop = container.scrollHeight;
}
  const input = document.querySelector("input[name='message[body]']");
  if (input) input.value = "";
}
});
