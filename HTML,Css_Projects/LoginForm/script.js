function show() {
    let username = document.getElementById(`userName`);
    let showUserName = document.getElementById(`showUserName`);
    showUserName.innerHTML = `Your username is <b>"${username.value}"</b>`;

    let password = document.getElementById(`password`);
    let showPassword = document.getElementById(`showPassword`);
    showPassword.innerHTML = `Your password is <b>"${password.value}"</b>`;

    let dob = document.getElementById(`birthDate`);
    let show_dob = document.getElementById(`date_of_birth`);
    show_dob.innerHTML = `Date of Birth : <b>"${dob.value}"</b>`;

    let male = document.getElementById(`male`);
    let female = document.getElementById(`female`);
    if (male.checked) {
        document.getElementById(`gender`).innerHTML = `Gender : <b>"Male"</b>`;
    } else if (female.checked) {
        document.getElementById(`gender`).innerHTML = `Gender : <b>"Female"</b>`;
    }

    let html = document.getElementById(`html`);
    let css = document.getElementById(`css`);
    let javascript = document.getElementById(`javascript`);
    let java = document.getElementById(`java`);
    let php = document.getElementById(`php`);
    let python = document.getElementById(`python`);

    let skillsets = [];

    if (html.checked) {
        skillsets.push(` HTML`)
    }
    if (css.checked) {
        skillsets.push(` CSS`)
    }
    if (javascript.checked) {
        skillsets.push(` JavaScript`)
    }
    if (java.checked) {
        skillsets.push(` Java`)
    }
    if (php.checked) {
        skillsets.push(` PHP`)
    }
    if (python.checked) {
        skillsets.push(` Python`)
    }

    // console.log(skillsets);
    document.getElementById(`skillsets`).innerHTML = `The skills you chose : <b>" ${skillsets}"</b>`;
}