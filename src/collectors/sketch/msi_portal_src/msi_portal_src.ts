
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MsiPortalSrcCollector extends SketchCollector {

    static CONFIG = {
        id: "msi_portal_src",
        name: "MSI Portal-SRC",
        description: "i18n.collectors.msi_portal_src.description",
        version: "0",
        website: "https://www.portail-src.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4396264.jpg",
        type: CollectorType.SKETCH,
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MsiPortalSrcCollector.CONFIG);
    }
}
