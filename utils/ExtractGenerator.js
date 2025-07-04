const ExtractAboutPropertyBuild = require('../models/ExtractAboutPropertyBuild');

// Вспомогательные функции
function randomString(prefix = '') {
    return prefix + Math.random().toString(36).substring(2, 10);
}

function randomDate(start = new Date(2000, 0, 1), end = new Date()) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function formatDate(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function formatDateTime(date) {
    return formatDate(date) + `T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}.0`;
}

function generateRandomExtract(index = 0) {
    const now = new Date();
    const pastDate = randomDate(new Date(1990, 0, 1), now);

    return new ExtractAboutPropertyBuild({
        organRegistrRights: `organ_registr_rights${index}`,
        dateFormation: formatDate(pastDate),
        registrationDate: formatDateTime(pastDate),
        cadNumber: `cad_number${index}`,
        quarterCadNumber: `quarter_cad_number${index}`,
        type: Math.random() > 0.5 ? `type${index}` : '',
        area: Math.floor(Math.random() * 1000),
        purpose: Math.random() > 0.5 ? `purpose${index}` : '',
        recipientStatement: `recipient_statement${index}`,
        status: `status${index}`,
    });
}

function generateExtracts(count = 10) {
    const extracts = [];
    for (let i = 0; i < count; i++) {
        extracts.push(generateRandomExtract(i));
    }
    return extracts;
}

module.exports = generateExtracts;