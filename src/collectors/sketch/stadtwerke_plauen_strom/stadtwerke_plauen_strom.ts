
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkePlauenStromCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_plauen_strom",
        name: "Stadtwerke Plauen Strom",
        description: "i18n.collectors.stadtwerke_plauen_strom.description",
        version: "0",
        website: "https://kundenportal.stadtwerke-strom-plauen.de/bkp/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4096562.jpg",
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
        entryUrl: "https://kundenportal.stadtwerke-strom-plauen.de/bkp/rechnungen",
    }

    constructor() {
        super(StadtwerkePlauenStromCollector.CONFIG);
    }
}
