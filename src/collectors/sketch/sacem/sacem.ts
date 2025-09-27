
import { SketchCollector } from '../../sketchCollector';

export class SacemCollector extends SketchCollector {

    static CONFIG = {
        id: "sacem",
        name: "Sacem",
        description: "i18n.collectors.sacem.description",
        version: "0",
        website: "https://clients.sacem.fr/mon-compte/mes-factures?cid=30004454302",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777347.jpg",
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
        entryUrl: "https://clients.sacem.fr/mon-compte/mes-factures?cid=30004454302",
    }

    constructor() {
        super(SacemCollector.CONFIG);
    }
}
