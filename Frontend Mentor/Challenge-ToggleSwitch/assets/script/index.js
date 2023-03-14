
class ToggleMode{
    constructor(){
        this.button = document.getElementById('toggle');
    }

    init(){
        this.event();
    }

    event(){
        this.button.addEventListener('change', e => {
            this.toggle(e);
        });
    }

    toggle(e){
        
        if(e.target.checked){
            this.formatStyle('#4a4a4a', '#fff', 'Dark Mode');
            return;
        }
        this.formatStyle('#fff', '#000', 'Light Mode');
    }

    formatStyle(backgrounColor, color, text){
        const modeText = document.querySelector('.mode-text');
        const body = document.body.style;
        body.backgroundColor = backgrounColor;
        body.color = color;
        modeText.innerText = text;

    }
}

const toggleMode = new ToggleMode();
toggleMode.init();