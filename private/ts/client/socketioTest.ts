let content = window.document.getElementById("content");

declare let io: any;

window.onload = () => {
    const socket = io();

    socket.on("content", (name: any) => {
        console.log(name);
        content!.innerHTML += `<p>${name} tt</p>`;
    });

    //console.log(socket);
};
