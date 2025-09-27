
import { SketchCollector } from '../../sketchCollector';

export class EOnEnergiaCollector extends SketchCollector {

    static CONFIG = {
        id: "e_on_energia",
        name: "E.ON Energia",
        description: "i18n.collectors.e_on_energia.description",
        version: "0",
        website: "https://www.eon-energia.com/it/area-riservata.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9194.jpg",
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
        entryUrl: "https://www.eon-energia.com/it/area-riservata.html",
    }

    constructor() {
        super(EOnEnergiaCollector.CONFIG);
    }
}
