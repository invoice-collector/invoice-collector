
import { SketchCollector } from '../../sketchCollector';

export class OrbnetCollector extends SketchCollector {

    static CONFIG = {
        id: "orbnet",
        name: "Orbnet",
        description: "i18n.collectors.orbnet.description",
        version: "0",
        website: "https://my.orbnet.de/account/downloads/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/134681.jpg",
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
        entryUrl: "https://my.orbnet.de/account/downloads/",
    }

    constructor() {
        super(OrbnetCollector.CONFIG);
    }
}
