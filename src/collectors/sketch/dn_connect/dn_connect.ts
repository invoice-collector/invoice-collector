
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DnConnectCollector extends SketchCollector {

    static CONFIG = {
        id: "dn_connect",
        name: "DN-Connect",
        description: "i18n.collectors.dn_connect.description",
        version: "0",
        website: "https://www.dn-connect.de/kunden-bereich.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9584.jpg",
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
        entryUrl: "https://www.dn-connect.de/kunden-bereich.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DnConnectCollector.CONFIG);
    }
}
