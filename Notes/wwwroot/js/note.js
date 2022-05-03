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
        $("input[name='Discription']").val(discription);
    }

    $("#noteForm").attr("action", nameAction);
}