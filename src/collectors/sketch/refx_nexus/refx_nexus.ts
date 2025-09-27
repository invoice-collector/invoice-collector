
import { SketchCollector } from '../../sketchCollector';

export class RefxNexusCollector extends SketchCollector {

    static CONFIG = {
        id: "refx_nexus",
        name: "Refx Nexus",
        description: "i18n.collectors.refx_nexus.description",
        version: "0",
        website: "https://refx.com/purchases/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4237978.jpg",
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
        entryUrl: "https://refx.com/purchases/",
    }

    constructor() {
        super(RefxNexusCollector.CONFIG);
    }
}
