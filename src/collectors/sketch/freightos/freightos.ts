
import { SketchCollector } from '../../sketchCollector';

export class FreightosCollector extends SketchCollector {

    static CONFIG = {
        id: "freightos",
        name: "FreightOS",
        description: "i18n.collectors.freightos.description",
        version: "0",
        website: "https://ship.freightos.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2284738.jpg",
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
        entryUrl: "https://ship.freightos.com/billing",
    }

    constructor() {
        super(FreightosCollector.CONFIG);
    }
}
