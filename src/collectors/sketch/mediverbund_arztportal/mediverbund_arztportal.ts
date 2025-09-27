
import { SketchCollector } from '../../sketchCollector';

export class MediverbundArztportalCollector extends SketchCollector {

    static CONFIG = {
        id: "mediverbund_arztportal",
        name: "MEDIVERBUND Arztportal",
        description: "i18n.collectors.mediverbund_arztportal.description",
        version: "0",
        website: "https://www.medi-arztportal.de/dokumente/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1467947.jpg",
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
        entryUrl: "https://www.medi-arztportal.de/dokumente/",
    }

    constructor() {
        super(MediverbundArztportalCollector.CONFIG);
    }
}
