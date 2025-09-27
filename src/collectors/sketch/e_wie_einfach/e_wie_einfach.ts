
import { SketchCollector } from '../../sketchCollector';

export class EWieEinfachCollector extends SketchCollector {

    static CONFIG = {
        id: "e_wie_einfach",
        name: "e-wie-einfach",
        description: "i18n.collectors.e_wie_einfach.description",
        version: "0",
        website: "https://mein.e-wie-einfach.de/qpo/portal/ewi/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11057.jpg",
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
        entryUrl: "https://mein.e-wie-einfach.de/qpo/portal/ewi/login",
    }

    constructor() {
        super(EWieEinfachCollector.CONFIG);
    }
}
