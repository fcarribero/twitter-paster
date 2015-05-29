$(function () {
    $('#result').hide();

    if (location.href.indexOf('?') >= 0 && location.href.substr(location.href.indexOf('?') + 1) !== '') {
        var content = location.href.substr(location.href.indexOf('?') + 1);
        $('#view .panel-body div').text(decodeURIComponent(content));
        $('#create').hide();
    } else {
        $('#view').hide();
        $('#create button').click(function () {
            var url = (location.href + '?' + encodeURIComponent($(this).prev('textarea').val())).replace('??', '?');
            $('#result .panel-body').text(url);
            $('#result').show();
        });
    }

    $('#create textarea').keyup(function () {
        $('#result').hide();
    })
});