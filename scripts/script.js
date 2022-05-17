window.onload = () => {
    let fullName = document.getElementsByTagName('input')[0];
    fullName.onkeydown = function (event) {
        let number = parseInt(event.key);
        if (!isNaN(number)) {
            event.preventDefault();
        }
    };

    let yourName = document.getElementsByTagName('input')[1];
    yourName.onkeydown = function (event) {
        if (event.key === "," || event.key === ".") {
            event.preventDefault();
        }
    };

    let checkbox = document.getElementsByTagName('input')[5];
    checkbox.onchange = function (event) {
        if (event.target.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    };

    let question = document.getElementById('question');
    let mainTitle = document.getElementsByClassName('main__info-title')[0];
    let button = document.getElementById('button');
    let input = document.getElementsByTagName('input');

   let check = function (event) {

        event.preventDefault();
        if (!input[0].value) {
            alert('Заполните поле ' + input[0].name);
            return false;
        }
        if (!input[1].value) {
            alert('Заполните поле ' + input[1].name);
            return false;
        }
        if (!input[2].value) {
            alert('Заполните поле ' + input[2].name);
            return false;
        }
        if (!input[3].value) {
            alert('Заполните поле ' + input[3].name);
            return false;
        }
        if (input[3].value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов');
            return false;
        }
        if (!input[4].value) {
            alert('Заполните поле ' + input[4].name);
            return false;
        }
        if (input[3].value !== input[4].value) {
            alert('Пароли не совпадают!');
            return false;
        }
        if (checkbox.checked === false) {
            alert('Согласитель с условиями!');
            return false;
        }

        let modal = document.getElementById('modal');
        modal.style.display = 'block';
        document.getElementById('modal-button').onclick = () => {
            modal.style.display = 'none';
            input[0].value = '';
            input[1].value = '';
            input[2].value = '';
            input[3].value = '';
            input[4].value = '';
            input[5].value = '';
            transition();
        }

    }

    button.addEventListener('click', check);

    question.addEventListener('click', transition);
    function transition() {
        mainTitle.innerHTML = "Log in to the system";
        document.getElementsByClassName('form__item')[0].remove();
        document.getElementsByClassName('form__item')[1].remove();
        document.getElementsByClassName('form__item')[2].remove();
        document.getElementById('checkbox').remove();
        button.innerText = "Sing In";
        question.remove();
        button.removeEventListener('click', check);
        button.onclick = function () {
            if (!input[0].value) {
                alert('Заполните поле ' + input[0].name);
                return false;
            }
            if (!input[1].value) {
                alert('Заполните поле ' + input[1].name);
                return false;
            }
            alert('Успешно');
        }
    }
};