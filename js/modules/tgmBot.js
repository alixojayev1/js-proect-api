function tgmBot(){
    const form = document.querySelector("form"),
    tgmBotToken = "6603555551:AAFOLAFKCBbfZN_G_ZrtxhT-sHIr0HtTbMo",
    chatId = "1903488561";

  const message = {
    loading: "Loading...",
    succsess: "Malumot jonatildi",
    error: "Malumot jonatilmadi ",
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const statusMsg = document.createElement("div");
    statusMsg.textContent = message.loading;

    form.append(statusMsg);

    formData = new FormData(form);

    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    fetch(`https://api.telegram.org/bot${tgmBotToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: `Name: ${object.name}, Phone: ${object.phone}`,
      }),
    })
      .then(() => ((statusMsg.textContent = message.succsess), form.reset()))
      .catch(() => (statusMsg.textContent = message.error))
      .finally(() => {
        setTimeout(() => {
          statusMsg.remove();
        }, 1500);
      });
  });

}

export default tgmBot