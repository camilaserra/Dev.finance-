
const Modal = {
    open() {
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const trasactions = [
    {
        id: 1,
        descriptions: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },

    {
        id: 2,
        descriptions: 'Internet',
        amount: 500000,
        date: '23/01/2021',
    },

    {
        id: 3,
        descriptions: 'Criar Website',
        amount: -20000,
        date: '23/01/2021',
    },
]

const trasaction = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somar as saídas
    },
    total() {
        //entradas - saídas
    }
}

const DOM = {
    addTransaction(transaction, index) {


        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()
    },

    innerHTMLTransaction() {

        const html = `
           
                <td class="description">Luz</td>
                <td class="expense">- R$ 500,00</td>
                <td class="date">23/01/2021</td>
                <td>
                    <img src="./assets/minus.svg" alt="Remover transação">
                </td>
        `
        return html
    }
}

DOM.addTransaction()
