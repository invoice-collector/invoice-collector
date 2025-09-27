
import { SketchCollector } from '../../sketchCollector';

export class OberbankCollector extends SketchCollector {

    static CONFIG = {
        id: "oberbank",
        name: "Oberbank",
        description: "i18n.collectors.oberbank.description",
        version: "0",
        website: "https://www.banking-oberbank.at/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/81960.jpg",
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
        entryUrl: "https://www.banking-oberbank.at/",
    }

    constructor() {
        super(OberbankCollector.CONFIG);
    }
}
