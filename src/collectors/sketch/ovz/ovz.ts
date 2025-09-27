
import { SketchCollector } from '../../sketchCollector';

export class OvzCollector extends SketchCollector {

    static CONFIG = {
        id: "ovz",
        name: "OVZ",
        description: "i18n.collectors.ovz.description",
        version: "0",
        website: "https://www.ovz.de/login/kunde/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1781495.jpg",
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
        entryUrl: "https://www.ovz.de/login/kunde/",
    }

    constructor() {
        super(OvzCollector.CONFIG);
    }
}
