
import { SketchCollector } from '../../sketchCollector';

export class EgesaZookaufCollector extends SketchCollector {

    static CONFIG = {
        id: "egesa_zookauf",
        name: "Egesa Zookauf",
        description: "i18n.collectors.egesa_zookauf.description",
        version: "0",
        website: "https://extranet.egesa-zookauf.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1802872.jpg",
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
        entryUrl: "https://extranet.egesa-zookauf.de/",
    }

    constructor() {
        super(EgesaZookaufCollector.CONFIG);
    }
}
