
import { SketchCollector } from '../../sketchCollector';

export class FahrlehrerversicherungCollector extends SketchCollector {

    static CONFIG = {
        id: "fahrlehrerversicherung",
        name: "Fahrlehrerversicherung",
        description: "i18n.collectors.fahrlehrerversicherung.description",
        version: "0",
        website: "https://www.fv.de/meine-fv/postfach/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2522873.jpg",
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
        entryUrl: "https://www.fv.de/meine-fv/postfach/",
    }

    constructor() {
        super(FahrlehrerversicherungCollector.CONFIG);
    }
}
