
import { SketchCollector } from '../../sketchCollector';

export class LegalZoomCollector extends SketchCollector {

    static CONFIG = {
        id: "legal_zoom",
        name: "Legal Zoom",
        description: "i18n.collectors.legal_zoom.description",
        version: "0",
        website: "https://www.legalzoom.com/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1230913.jpg",
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
        entryUrl: "https://www.legalzoom.com/account/orders",
    }

    constructor() {
        super(LegalZoomCollector.CONFIG);
    }
}
