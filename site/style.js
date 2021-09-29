const input = document.getElementsByClassName('input');

for (i = 0; i < input.length; i++) {
    input[i].addEventListener('input', resizeInput);
    resizeInput.call(input[i]);

    function resizeInput() {
        this.style.width = this.value.length + "ch";
    }
}

const tabelas = document.getElementById('tabela-pequena')
