function openForm(e, nameAction) {
    $('#modelWindowForm').addClass('active');

    if (nameAction !== "Note/CreateNote") {
        document.getElementById('superButton').innerHTML = "Сохранить";

        let parent = $(e).parent().prev();
        console.log(parent)

        let id = parent.find('#id').val();
        console.log(id)

        let name = parent.find('#name').text().trim();
        console.log(name);

        let discription = parent.find('#discription').html();
        console.log(discription)
        if (name === "Без названия") {
            name = '';
        }

        $("input[name='Id']").val(id);
        $("input[name='Name']").val(name);
        $("div[name='Discription']").html(discription);
    }
    else {
        document.getElementById('superButton').innerHTML = "Создать";
        $("input[name='Id']").val('');
        $("input[name='Name']").val('');
        $("div[name='Discription']").text('');
    }

    $("#noteForm").attr("action", nameAction);
}

function resizeTxta(element) {
    element.style.height = "auto";
    element.style.height = (element.scrollHeight) + "px";
}

$(document).ready(function () {
    $('#jBold').click(function () {
        document.execCommand('bold');
    });
});

$(document).ready(function () {
    $('#jItalic').click(function () {
        document.execCommand('italic');
    });
});

$(document).ready(function () {
    $('#jUnderline').click(function () {
        document.execCommand('underline');
    });
});

$(document).ready(function () {
    $('#aLeft').click(function () {
        document.execCommand("JustifyLeft");
    });
});

$(document).ready(function () {
    $('#aCenter').click(function () {
        document.execCommand("JustifyCenter");
    });
});

$(document).ready(function () {
    $('#aRight').click(function () {
        document.execCommand("JustifyRight");
    });
});

$(document).ready(function () {
    $('aFull').click(function () {
        document.execCommand("JustifyFull");
    });
});

