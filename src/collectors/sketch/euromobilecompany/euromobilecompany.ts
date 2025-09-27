
import { SketchCollector } from '../../sketchCollector';

export class EuromobilecompanyCollector extends SketchCollector {

    static CONFIG = {
        id: "euromobilecompany",
        name: "Euromobilecompany",
        description: "i18n.collectors.euromobilecompany.description",
        version: "0",
        website: "https://euromobilecompany.de/de/konto/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1801066.jpg",
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
        entryUrl: "https://euromobilecompany.de/de/konto/rechnungen",
    }

    constructor() {
        super(EuromobilecompanyCollector.CONFIG);
    }
}
