
import { SketchCollector } from '../../sketchCollector';

export class MsiPortalSrcCollector extends SketchCollector {

    static CONFIG = {
        id: "msi_portal_src",
        name: "MSI Portal-SRC",
        description: "i18n.collectors.msi_portal_src.description",
        version: "0",
        website: "https://www.portail-src.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4396264.jpg",
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
        entryUrl: "https://www.portail-src.fr",
    }

    constructor() {
        super(MsiPortalSrcCollector.CONFIG);
    }
}
