
import { SketchCollector } from '../../sketchCollector';

export class AlzaDeCollector extends SketchCollector {

    static CONFIG = {
        id: "alza_de",
        name: "alza.de",
        description: "i18n.collectors.alza_de.description",
        version: "0",
        website: "https://www.alza.de/mein-konto/bestellungen.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777852.jpg",
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
        entryUrl: "https://www.alza.de/mein-konto/bestellungen.htm",
    }

    constructor() {
        super(AlzaDeCollector.CONFIG);
    }
}
