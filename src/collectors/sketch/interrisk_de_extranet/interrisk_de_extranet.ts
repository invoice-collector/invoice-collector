
import { SketchCollector } from '../../sketchCollector';

export class InterriskDeExtranetCollector extends SketchCollector {

    static CONFIG = {
        id: "interrisk_de_extranet",
        name: "InterRisk.de - Extranet",
        description: "i18n.collectors.interrisk_de_extranet.description",
        version: "0",
        website: "https://extranet.interrisk.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115652.jpg",
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
        entryUrl: "https://extranet.interrisk.de/",
    }

    constructor() {
        super(InterriskDeExtranetCollector.CONFIG);
    }
}
