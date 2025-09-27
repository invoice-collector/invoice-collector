
import { SketchCollector } from '../../sketchCollector';

export class ServcorpCollector extends SketchCollector {

    static CONFIG = {
        id: "servcorp",
        name: "Servcorp",
        description: "i18n.collectors.servcorp.description",
        version: "0",
        website: "https://home.servcorp.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4532205.jpg",
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
        entryUrl: "https://home.servcorp.com/billing",
    }

    constructor() {
        super(ServcorpCollector.CONFIG);
    }
}
