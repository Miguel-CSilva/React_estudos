

export function calcularTotalIngresso(qtdIng, meioIng, cupom) {
    let total = 0;
        if (meioIng === true) {
            total = qtdIng * 15.00;
        }
        else {
            total = qtdIng * 30.00
        }

        if (cupom === 'QUERO50') {
            let desc = total * 50 / 100;
            total = total - desc;
        }

        return total;
}
