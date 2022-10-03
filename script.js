// let btn = document.getElementById('btn');
// btn.addEventListener('click', function nameCheck(event) {
//     let inp1 = document.getElementById('name');
//     inp1.style.backgroundColor = 'green';
//
// });

function fieldsCheck(){
        //Check name
        let name = document.getElementById("name");
        if (name.value === null || !name.value.match("[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+\\s+[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]\.[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]\.")) {
            name.style.background = "red";
            document.getElementById("info").style.display = "none";
            document.querySelector("form").style.width = "100%";
        } else {
            let new_name = document.getElementById("new_name");
            new_name.innerText = name.value;
            document.getElementById("info").style.display = "block";
            document.querySelector("form").style.width = "50%";
        }

        //Check variant
        let variant = document.getElementById("variant");
        if (variant.value === null || !variant.value.match("^\\d+$")) {
            variant.style.background = "red";
            document.getElementById("info").style.display = "none";
            document.querySelector("form").style.width = "100%";
        } else {
            let new_var = document.getElementById("new_var");
            new_var.innerText = variant.value;
            document.getElementById("info").style.display = "block";
            document.querySelector("form").style.width = "50%";
        }

        //Check group
        let group = document.getElementById("group");
        if (group.value === null || !group.value.match("[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ][а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]\-[0-9][0-9]")) {
            group.style.background = "red";
            document.getElementById("info").style.display = "none";
            document.querySelector("form").style.width = "100%";
        } else {
            let new_group = document.getElementById("new_group");
            new_group.innerText = group.value;
            document.getElementById("info").style.display = "block";
            document.querySelector("form").style.width = "50%";
        }

        //Check phone
        let phone = document.getElementById("phone");
        if (phone.value === null || !phone.value.match("((\\(\\d{3}\\) ?)|(\\d{3}-))?\\-\\d{3}-\\d{2}-\\d{2}")) {
            phone.style.background = "red";
            document.getElementById("info").style.display = "none";
            document.querySelector("form").style.width = "100%";
        } else {
            let new_phone = document.getElementById("new_phone");
            new_phone.innerText = phone.value;
            document.getElementById("info").style.display = "block";
            document.querySelector("form").style.width = "50%";
        }

        //Check card
        let card = document.getElementById("card");
        if (card.value === null || !card.value.match("[A-Z][A-Z]+\\s+\\№\\d{6}")) {
            card.style.background = "red";
            document.getElementById("info").style.display = "none";
            document.querySelector("form").style.width = "100%";
        } else {
            let new_card = document.getElementById("new_card");
            new_card.innerText = card.value;
            document.getElementById("info").style.display = "block";
            document.querySelector("form").style.width = "50%";
        }
}
