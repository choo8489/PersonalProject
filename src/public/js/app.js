const messageList = document.querySelector("ul");
const nickForm = document.querySelector("#nick");
const messageForm = document.querySelector("#message");
const socket = new WebSocket(`ws://${window.location.host}`);

function makeMessage(type, payload) {
    const msg = {type, payload};
    return JSON.stringify(msg);
}

socket.addEventListener("open", () => {
    console.log("Connected to Server");
});

socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message.data;
    messageList.append(li);

    // if (message.data instanceof Blob) {
    //     reader = new FileReader();

    //     reader.onload = () => {
    //         const li = document.createElement("li");
    //         li.innerText = reader.result;
    //         messageList.append(li);
    //     };

    //     reader.readAsText(message.data);
    // }
});

socket.addEventListener("close", () => {
    console.log("Close");
})

messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(makeMessage("new_message", input.value));

    const li = document.createElement("li");
    li.innerText = `You: ${message.data}`;
    messageList.append(li);

    input.value = "";
}); 

nickForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = nickForm.querySelector("input");
    socket.send(makeMessage("nickname", input.value));
}); 