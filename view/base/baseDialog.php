<html>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.5.1/dialog-polyfill.min.css" integrity="sha256-qVjBFbunjrWQ4IikV5dkK1ziW9XKskisX1rUbCIJEhk=" crossorigin="anonymous" />
    </head>
    <body>
        <dialog class="mdl-dialog">
            <h4 class="mdl-dialog__title"><?=$dialogTitle?></h4>
            <div class="mdl-dialog__content">
            <p><?=$dialogContent?></p>
            </div>
            <div class="mdl-dialog__actions">
            <button type="button" class="mdl-button"><?php echo isset($dialogButton) ? $dialogButton : ""; ?></button>
            <button type="button" class="mdl-button close"><?php echo isset($dialogButtonClose) ? $dialogButtonClose : ""; ?></button>
            </div>
        </dialog>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.5.1/dialog-polyfill.min.js" integrity="sha256-B4Jb9j0PE2EzFJ6NaPkoJXDcQtQYR0Zd3DJKeYLifbg=" crossorigin="anonymous"></script>
    </body>
</html>