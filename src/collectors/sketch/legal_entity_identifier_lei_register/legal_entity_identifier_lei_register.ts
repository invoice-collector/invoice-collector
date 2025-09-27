
import { SketchCollector } from '../../sketchCollector';

export class LegalEntityIdentifierLeiRegisterCollector extends SketchCollector {

    static CONFIG = {
        id: "legal_entity_identifier_lei_register",
        name: "Legal Entity Identifier (LEI) Register",
        description: "i18n.collectors.legal_entity_identifier_lei_register.description",
        version: "0",
        website: "https://service.leireg.de/en/invoices?10",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2761410.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://service.leireg.de/en/invoices?10",
    }

    constructor() {
        super(LegalEntityIdentifierLeiRegisterCollector.CONFIG);
    }
}
