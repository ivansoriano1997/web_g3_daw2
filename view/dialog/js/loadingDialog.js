$(document).ready(function() {
    let dialog = $("dialog");
    let dialogContent = dialog.find("div.mdl-dialog__content");

    let center = $("<center />");

    let spinner = $("<div class='mdl-spinner mdl-js-spinner is-active'></div>");
    componentHandler.upgradeElement($(spinner)[0]);

    center.append(spinner);

    dialogContent.append($(center));
});
