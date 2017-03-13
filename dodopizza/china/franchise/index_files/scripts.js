/**
 * Created by Dmitry on 25.12.2016.
 */
(function($) {

    function isDisabledButton() {
        return $('#submit').prop('disabled');
    }

    function enableButton() {
        $('#submit').prop('disabled', false);
    }

    function disableButton() {
        $('#submit').prop('disabled', true);
    }

    /**
     * Показывает ошибки если есть, после отправки формы
     * @param response
     */
    function onSubmittedFeedback(response) {
        $('.input_error').removeClass('input_error');

        if (response.result === 'ERROR') {
            $.each(response.errors, function(index, value) {
                $('[name="' + value.field + '"]').addClass('input_error');
            });
        } else {
            $('#success').removeClass('success-message_hidden');
        }

        enableButton();
    }

    /**
     * Отправляет форму аяксом
     * @param e
     */
    function onSubmitFeedback(e) {
        e.preventDefault();

        if (isDisabledButton()) return;

        disableButton();
        $.post('/scripts/franchise-cn/feedback.php', $(this).serialize(), onSubmittedFeedback, 'json');
    }

    /**
     * Удаляет класс ошибки с поля
     */
    function onFocusField() {
        $(this).removeClass('input_error');
    }

    /**
     * Ресетит форму
     * @param e
     */
    function resetForm(e) {
        e.preventDefault();
        $('#feedback')[0].reset();
        $('#success').addClass('success-message_hidden');
    }

    $(document).on('submit', '#feedback', onSubmitFeedback);
    $(document).on('focus', 'input, textarea', onFocusField);
    $(document).on('click', '#new-feedback', resetForm);
})(jQuery);