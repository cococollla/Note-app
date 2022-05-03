function openForm(e, nameAction) {
    $('#modelWindowForm').addClass('active');

    let parent = $(e).parent().prev();
    console.log(parent)

    let id = parent.find('#id').val();
    console.log(id)

    let name = parent.find('#name').text().trim();
    console.log(name);

    let discription = parent.find('#discription').text().trim();
    console.log(discription)

    if (nameAction !== "Note/CreateNote") {
        $("input[name='Id']").val(id);
        $("input[name='Name']").val(name);
        $("textarea[name='Discription']").val(discription);
    }
    else {
        $("input[name='Name']").val('');
        $("textarea[name='Discription']").val('');
    }

    $("#noteForm").attr("action", nameAction);
}

function resizeTxta(element) {
    element.style.height = "auto";
    element.style.height = (element.scrollHeight) + "px";
}

