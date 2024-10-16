function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText || element.textContent;

    navigator.clipboard.writeText(text).then(() => {
    }).catch(err => {
        console.error("Falha ao copiar: ", err);
    });
}
