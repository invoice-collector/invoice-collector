
import { SketchCollector } from '../../sketchCollector';

export class CosmosdirektCollector extends SketchCollector {

    static CONFIG = {
        id: "cosmosdirekt",
        name: "CosmosDirekt",
        description: "i18n.collectors.cosmosdirekt.description",
        version: "0",
        website: "https://www.cosmosdirekt.de/services/mcd-info/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18489.jpg",
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
        entryUrl: "https://www.cosmosdirekt.de/services/mcd-info/",
    }

    constructor() {
        super(CosmosdirektCollector.CONFIG);
    }
}
