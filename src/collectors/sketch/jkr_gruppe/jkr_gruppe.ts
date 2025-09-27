
import { SketchCollector } from '../../sketchCollector';

export class JkrGruppeCollector extends SketchCollector {

    static CONFIG = {
        id: "jkr_gruppe",
        name: "JKR-Gruppe",
        description: "i18n.collectors.jkr_gruppe.description",
        version: "0",
        website: "https://jkr-gruppe.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2525638.jpg",
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
        entryUrl: "https://jkr-gruppe.de/",
    }

    constructor() {
        super(JkrGruppeCollector.CONFIG);
    }
}
