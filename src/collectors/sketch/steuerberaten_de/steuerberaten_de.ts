
import { SketchCollector } from '../../sketchCollector';

export class SteuerberatenDeCollector extends SketchCollector {

    static CONFIG = {
        id: "steuerberaten_de",
        name: "Steuerberaten.de",
        description: "i18n.collectors.steuerberaten_de.description",
        version: "0",
        website: "http://www.steuerberaten.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/5057.jpg",
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
        entryUrl: "http://www.steuerberaten.de/",
    }

    constructor() {
        super(SteuerberatenDeCollector.CONFIG);
    }
}
