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
        event.preventDefault();

        if ($("input[name='drivingLicenseNumber']").val() === "") {
            alert("Hem detectat que no has introduït el carnet de conduïr. Per tant, si no tens carnet, mai condueixis un cotxe!")
        }

        this.submit();
    });
});

