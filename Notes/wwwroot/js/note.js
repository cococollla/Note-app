function openForm(e, nameAction) {
    $('#modelWindowForm').addClass('active');

    if (nameAction !== "Note/CreateNote") {
        let parent = $(e).parent().prev();
        console.log(parent)

        let id = parent.find('#id').val();
        console.log(id)

        let name = parent.find('#name').text().trim();
        console.log(name);

        let discription = parent.find('#discription').text().trim();
        console.log(discription)
        $("input[name='Id']").val(id);
        $("input[name='Name']").val(name);
        $("textarea[name='Discription']").val(discription);
    }
    else {
        $("input[name='Id']").val('');
        $("input[name='Name']").val('');
        $("textarea[name='Discription']").val('');
    }

    $("#noteForm").attr("action", nameAction);
}

function resizeTxta(element) {
    element.style.height = "auto";
    element.style.height = (element.scrollHeight) + "px";
}

$('#jBold').click(function () {
    var control = $('#txtarea')[0];
    var start = control.selectionStart;
    var end = control.selectionEnd;

    if (start != end) {
        var text = $(control).val();
        $(control).val(text.substring(0, start) + '<b>' + text.substring(start, end) + '</b>' + text.substring(end));

        // Ставим каретку в конец добавленного тега.
        $(control).focus();
        var sel = end + 7;
        control.setSelectionRange(sel, sel);
    }
    return false;
});