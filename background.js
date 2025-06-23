// Se esta pendiente de las solicitudes a zajuna y se bloquean las que afectan.
browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = details.url;
    if (url.includes("&info=core_courseformat_get_state")) {
      console.log("Bloqueado:", url);
      return { cancel: true };
    }
    return { cancel: false };
  },
  { urls: ["*://zajuna.sena.edu.co/*"] },
  ["blocking"]
);
