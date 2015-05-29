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

            $.ajax({
                url: 'https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyANFw1rVq_vnIzT4vVOwIw3fF1qHXV7Mjw',
                type: 'post',
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({longUrl: url}),
                success: function (data) {
                    $('#result input').val(data.id);
                    $('#result').show();
                }
            });

        });
    }

    $('#create textarea').keyup(function () {
        $('#result').hide();
    })
});