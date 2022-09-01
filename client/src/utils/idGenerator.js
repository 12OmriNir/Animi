// ============== //
// idGenerator.js //
// ============== //

const nanoid = require('nanoid')

export function getId() {
    return 'input_' + nanoid.nanoid();
}

export function getIdWithNumber(num) {
    return 'input_' + num.toString() + '_' + nanoid.nanoid();
}