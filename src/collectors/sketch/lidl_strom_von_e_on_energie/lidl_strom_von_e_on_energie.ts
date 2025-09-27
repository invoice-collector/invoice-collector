
import { SketchCollector } from '../../sketchCollector';

export class LidlStromVonEOnEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "lidl_strom_von_e_on_energie",
        name: "Lidl-Strom von E.ON Energie",
        description: "i18n.collectors.lidl_strom_von_e_on_energie.description",
        version: "0",
        website: "https://www.eon.de/de/meineon/start.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129032.jpg",
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
        entryUrl: "https://www.eon.de/de/meineon/start.html",
    }

    constructor() {
        super(LidlStromVonEOnEnergieCollector.CONFIG);
    }
}
