$(document).ready(function() {
    let dialog = $("dialog");
    let dialogContent = dialog.find("div.mdl-dialog__content");

    let spinner = $("<center><div class='mdl-spinner mdl-js-spinner is-active'></div></center>");
    componentHandler.upgradeElement($(spinner)[0]);
    dialogContent.append($(spinner)[0]);
});
