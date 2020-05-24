$(document).ready(function() {
    let dialog = $('dialog')[0];

    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }

    $(dialog).find('button.close').on( "click", function() {
        dialog.close();
    });

    $(dialog).find("mdl-dialog__title").each(function() {
        if($(this).text() === "") {
            $(this).hide();
        }
    });

    $(dialog).find("mdl-dialog__content").each(function() {
        if($(this).text() === "") {
            $(this).hide();
        }
    });

    $(dialog).find("button").each(function() {
        if($(this).text() === "") {
            $(this).hide();
        }
    });
});
