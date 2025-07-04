const generateExtracts = require('../utils/ExtractGenerator');
const fs = require('fs');
const { js2xml } = require('xml-js');

// Генерируем 5 объектов
const extracts = generateExtracts(3);

// Для вывода в консоль
console.log('Сгенерированные объекты:', JSON.stringify(extracts, null, 2));

// Сохраняем в JSON (для отладки)
fs.writeFileSync('generated_extracts.json', JSON.stringify(extracts, null, 2));

// Конвертируем в XML и сохраняем
const xmlData = {
    _declaration: { _attributes: { version: '1.0', encoding: 'UTF-8' } },
    extract_about_property_build: extracts.map(extract => ({
        _attributes: {
            xmlns_xsi: "http://www.w3.org/2001/XMLSchema-instance",
            xsi_noNamespaceSchemaLocation: "file:/D:/svn/GeoMeta/Requirements%204.0/4.%20%D0%98%D0%A1%D0%98%D0%90%D0%9F%20%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%20%D0%B8%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B9/%D0%9F%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%81%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%A0%D0%BE%D1%81%D1%80%D0%B5%D0%B5%D1%81%D1%82%D1%80%D0%B0/%D0%9F%D1%80%D0%B8%D0%B5%D0%BC%20%D0%BE%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%B2%20%D0%A4%D0%93%D0%98%D0%A1%20%D0%95%D0%93%D0%A0%D0%9D/%D0%92%D0%A1%201.2.2/%D0%A1%D1%85%D0%B5%D0%BC%D0%B0%20%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D0%B0%20%D0%BD%D0%B0%20%D0%B2%D1%8B%D0%BF%D0%B8%D1%81%D0%BA%D1%83%20%D0%95%D0%93%D0%A0%D0%9D/extract_v02_smev/extract_about_property_build_v02.xsd"
        },
        details_statement: {
            group_top_requisites: {
                organ_registr_rights: extract.details_statement.group_top_requisites.organ_registr_rights,
                date_formation: extract.details_statement.group_top_requisites.date_formation,
            }
        },
        build_record: {
            record_info: {
                registration_date: extract.build_record.record_info.registration_date,
            },
            object: {
                common_data: {
                    cad_number: extract.build_record.object.common_data.cad_number,
                    quarter_cad_number: extract.build_record.object.common_data.quarter_cad_number,
                    type: extract.build_record.object.common_data.type,
                },
            },
            params: {
                area: extract.build_record.params.area,
                purpose: extract.build_record.params.purpose,
            }
        },
        recipient_statement: extract.recipient_statement,
        status: extract.status,
    }))
};

const xml = js2xml(xmlData, { compact: false, spaces: 4 });
fs.writeFileSync('generated_extracts.xml', xml);

console.log('XML файл успешно создан: generated_extracts.xml');