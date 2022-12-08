const validator = require('validator');

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();

    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e)
        });

    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = null;


        if (!validator.isEmail(emailInput.value)) {
            alert('E-mail inválido!')
            error = true;
        }

        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            alert('A senha precisa ter entre 3 a 50 caracteresa')
            error = true;
        }

        if (!error) el.submit();
    }
}