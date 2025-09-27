
import { SketchCollector } from '../../sketchCollector';

export class OuestfranceImmoComCollector extends SketchCollector {

    static CONFIG = {
        id: "ouestfrance_immo_com",
        name: "ouestfrance-immo.com",
        description: "i18n.collectors.ouestfrance_immo_com.description",
        version: "0",
        website: "https://www.ouestfrance-immo.com/mon-compte/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/840198.jpg",
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
        entryUrl: "https://www.ouestfrance-immo.com/mon-compte/",
    }

    constructor() {
        super(OuestfranceImmoComCollector.CONFIG);
    }
}
