
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RoadpostCaCollector extends SketchCollector {

    static CONFIG = {
        id: "roadpost_ca",
        name: "Roadpost.ca",
        description: "i18n.collectors.roadpost_ca.description",
        version: "0",
        website: "https://www.roadpost.ca/invoice/invoicelist/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778130.jpg",
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
        entryUrl: "https://www.roadpost.ca/invoice/invoicelist/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RoadpostCaCollector.CONFIG);
    }
}
