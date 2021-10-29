const getClass = (selector) => document.querySelector(selector);

const meh = (function () {
    let users = [];
    function btnAddUser() {
        getClass('.add-user').addEventListener('click', () => {
            users.push(getClass('.input1').value);
            console.log(users);
            render();
        })
    }

    let p;
    function render() {
        getClass('.left').innerHTML = '';
        for (let i = 0; i < users.length; i++) {
        p = document.createElement('p');
        p.innerHTML = 
        `<span>${i+1}</span>.
        <span>${users[i]}</span>
        <button class="delete">delete</button>`
        getClass('.left').append(p);
        getClass('.input1').value = ''
    }
    }

    getClass('.left').addEventListener('click', () => {
        if (event.target.classList.contains('delete')) {
            console.log(event.target.parentElement.children[0].innerText - 1);
            users.splice(event.target.parentElement.children[0].innerText - 1, 1);
            render()
        }
    })

    return {
        btnAddUser: btnAddUser
    }
}())

meh.btnAddUser();