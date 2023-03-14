class ValidEmail{
    constructor(){
        this.form = document.querySelector('.form');
        this.valid();
    }

    valid(){
        if(!this.handleSubmit()) return;
        this.form.submit();
    }

    handleSubmit(){
        const inputEmail = document.querySelector('.input-email');
        this.form.addEventListener('submit', e => {   
            e.preventDefault();
            this.validation(inputEmail.value);
            
        });

    }
    // Valida de forma pouco segura se o email enviado é um email valido 
    validation(email){
        const flag = true;
        // remove mensagem de erro se ja houver uma
        for (let error of document.querySelectorAll('.error')){ 
            error.remove();
        }
        //regex para verificar se o que foi digitado no input esta no formato de um email valido
        const reg = /\S+@\S+\.\S+/;
        //condicional: se o email enviado não for de acordo com a regex retorna a função de erro
        if (!reg.test(email)) {
            this.emailInvalid()
            return flag = false;
        };
        // se passar da condicional remove o fomulario do documento e retorna a função de sucesso
        for (let del of document.querySelectorAll('.delete')){ 
            del.remove();
        }
         this.emailvalid();
         return flag;
        
    }
    // Cria mensagem de sucesso
    emailvalid(){
        const signUp = document.querySelector('.sign-up');
        const div = this.createElements('div', 'success');
        const img = this.createElements('div', 'img-success');
        const title = this.createElements('p', 'title-success');
        const text = this.createElements('p', 'text-success');
        title.innerText = 'Yay! thank you!';
        text.innerText = "We've set a confirmation link to your inbox";
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(text);      
        signUp.insertAdjacentElement('afterend', div);
    }
    
    // Cria mensagem de erro
    emailInvalid(){
        document.querySelector('.input-email').value = 'Invalid email input';
        document.querySelector('.input-email').focus;
        const div = this.createElements('div', 'error');
        const img = this.createElements('div', 'img-error');
        const title = this.createElements('p', 'title-error');
        const text = this.createElements('p', 'text-error');
        title.innerText = 'Please use a valid email';
        text.innerText = 'like: person@person.com';
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(text);
        this.form.insertAdjacentElement('afterend', div);
    }

    //função para criar elementos Html com classe
    createElements(el, cl){
        const elementName = el;
        const className = cl;

        const element = document.createElement(elementName);
        element.classList.add(className);

        return element;
    }

    
}


console.log('HELOO WORLD');


const validEmail = new ValidEmail();