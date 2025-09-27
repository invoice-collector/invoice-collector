
import { SketchCollector } from '../../sketchCollector';

export class MiraklPccomponentesCollector extends SketchCollector {

    static CONFIG = {
        id: "mirakl_pccomponentes",
        name: "MIRAKL | PCCOMPONENTES",
        description: "i18n.collectors.mirakl_pccomponentes.description",
        version: "0",
        website: "https://pccomponentes-prod.mirakl.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/828303.jpg",
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
        entryUrl: "https://pccomponentes-prod.mirakl.net/",
    }

    constructor() {
        super(MiraklPccomponentesCollector.CONFIG);
    }
}
