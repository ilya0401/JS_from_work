class ExtractAboutPropertyBuild {
    constructor(data) {
        this.details_statement = {
            group_top_requisites: {
                organ_registr_rights: data.organRegistrRights,
                date_formation: data.dateFormation,
            },
        };

        this.build_record = {
            record_info: {
                registration_date: data.registrationDate,
            },
            object: {
                common_data: {
                    cad_number: data.cadNumber,
                    quarter_cad_number: data.quarterCadNumber,
                    type: data.type || '',
                },
            },
            params: {
                area: data.area,
                purpose: data.purpose || '',
            },
        };

        this.recipient_statement = data.recipientStatement;
        this.status = data.status;
    }
}

module.exports = ExtractAboutPropertyBuild;