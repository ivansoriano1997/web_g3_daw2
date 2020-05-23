$(document).ready(function() {
    let dialog = $('dialog')[0];

    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }

    $(dialog).find('button.close').on( "click", function() {
        dialog.close();
    });

    $(dialog).find("button").each(function() {
        if($(this).text() === "") {
            $(this).hide();
        }
    });
});