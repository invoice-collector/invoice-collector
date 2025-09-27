
import { SketchCollector } from '../../sketchCollector';

export class EdenredCollector extends SketchCollector {

    static CONFIG = {
        id: "edenred",
        name: "Edenred",
        description: "i18n.collectors.edenred.description",
        version: "0",
        website: "https://firmenkunden.mein-edenred.de/Konto_Meine_Rechnungen.htm?ActiveID=1141",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/112974.jpg",
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
        entryUrl: "https://firmenkunden.mein-edenred.de/Konto_Meine_Rechnungen.htm?ActiveID=1141",
    }

    constructor() {
        super(EdenredCollector.CONFIG);
    }
}
