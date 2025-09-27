
import { SketchCollector } from '../../sketchCollector';

export class MeinNvIhrVermittlerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "mein_nv_ihr_vermittlerportal",
        name: "Mein NV - Ihr Vermittlerportal",
        description: "i18n.collectors.mein_nv_ihr_vermittlerportal.description",
        version: "0",
        website: "https://www.mein-nv.net/abrechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/104408.jpg",
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
        entryUrl: "https://www.mein-nv.net/abrechnungen",
    }

    constructor() {
        super(MeinNvIhrVermittlerportalCollector.CONFIG);
    }
}
