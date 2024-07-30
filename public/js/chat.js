document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messages = document.getElementById('messages');
  
    messageForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = messageInput.value;
      socket.emit('chat message', message);
      messageInput.value = '';
    });
  
    socket.on('chat message', (msg) => {
      const item = document.createElement('li');
      item.textContent = msg;
      messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    });
  });
  