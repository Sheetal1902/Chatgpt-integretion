//getting example values in input
const Buttons = document.querySelectorAll(".example-query");
const ChatInput = document.querySelector(".chat-input");
const SendButton = document.querySelector(".send-btn");

for (const button of Buttons) {
    button.addEventListener("click", async (event) => {
        const targetElement = event.target;
        if(targetElement.classList.contains("example-query")){
            event.stopPropagation();
            const ButtonText = targetElement.textContent.trim();
            ChatInput.value = "",
            ChatInput.value = ButtonText;
        }
    });
}

SendButton.addEventListener("click", () => {
    ChatInput.value = "";
    alert("Message Send");
});