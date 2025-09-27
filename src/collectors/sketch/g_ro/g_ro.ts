
import { SketchCollector } from '../../sketchCollector';

export class GRoCollector extends SketchCollector {

    static CONFIG = {
        id: "g_ro",
        name: "G-Ro",
        description: "i18n.collectors.g_ro.description",
        version: "0",
        website: "https://g-ro.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/163753.jpg",
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
        entryUrl: "https://g-ro.com/account",
    }

    constructor() {
        super(GRoCollector.CONFIG);
    }
}
