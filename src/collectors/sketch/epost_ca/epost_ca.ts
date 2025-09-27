
import { SketchCollector } from '../../sketchCollector';

export class EpostCaCollector extends SketchCollector {

    static CONFIG = {
        id: "epost_ca",
        name: "epost.ca",
        description: "i18n.collectors.epost_ca.description",
        version: "0",
        website: "https://www.epost.ca",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23340.jpg",
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
        entryUrl: "https://www.epost.ca",
    }

    constructor() {
        super(EpostCaCollector.CONFIG);
    }
}
