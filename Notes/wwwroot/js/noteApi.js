function submitFormNote() {
    const id = document.getElementById('noteID').value;
    const name = document.getElementById('noteName').value;
    const discription = document.getElementById('discriptionNote').innerHTML;
    const url = document.getElementById('noteForm').action;

    if (!isValid(name, discription)) {
        let alert = document.getElementById('alert').removeAttribute('hidden');
        return;
    }
    let note = {
        Name: name,
        Discription: discription
    };


    if (id !== '') {
        console.log(url);
        note = {
            Id: id,
            Name: name,
            Discription: discription
        };
    };

    console.log(note);

    fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    }).then(response => response.json).then(() => window.location.reload());

   
}

function isValid(name, discription) {

    name = name.trim();
    discription = discription.trim()
    if (name !== '' || discription !== '') {
        return true;
    }
    return false;
}
