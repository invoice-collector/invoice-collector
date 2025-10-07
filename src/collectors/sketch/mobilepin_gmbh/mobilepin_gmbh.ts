
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MobilepinGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "mobilepin_gmbh",
        name: "Mobilepin GmbH",
        description: "i18n.collectors.mobilepin_gmbh.description",
        version: "0",
        website: "https://mobilepin.de/invoices-all",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1764059.jpg",
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
        entryUrl: "https://mobilepin.de/invoices-all",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MobilepinGmbhCollector.CONFIG);
    }
}
