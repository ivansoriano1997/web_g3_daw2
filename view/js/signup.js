const _DRIVING_LICENSE_LETTERS = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

$(document).ready(function() {
    let inputLetter = $("input[name='drivingLicenseLetter']");
    let divLetter = inputLetter.parent();
    divLetter.hide();

    $("input[name='drivingLicenseNumber']").keyup(function() {
        if ($(this).val() !== "") {
            divLetter.show();
            inputLetter.val(_DRIVING_LICENSE_LETTERS[$(this).val() % 23]);
            $(this).parent().addClass("w-75");
        } else {
            if (inputLetter.val() !== "") {
                inputLetter.val("");

                if (divLetter.is(':visible')) {
                    divLetter.hide();
                    $(this).parent().removeClass("w-75");
                }
            }
        }
    });

    $('form').on('submit', function(event){

        if ($("input[name='drivingLicenseNumber']").val() === "" && ($("input[type='hidden']#dialogAccepted").val() === "false")) {
            $('dialog')[0].showModal();
            event.preventDefault();
        }
    });

    $("dialog button.close").click(function() {
        $("input[type='hidden']#dialogAccepted").val("true");
        $("form").submit();
    })
});

