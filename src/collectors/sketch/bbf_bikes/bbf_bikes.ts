
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BbfBikesCollector extends SketchCollector {

    static CONFIG = {
        id: "bbf_bikes",
        name: "BBF Bikes",
        description: "i18n.collectors.bbf_bikes.description",
        version: "0",
        website: "https://b2b.bbf-bike.de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1918670.jpg",
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
        entryUrl: "https://b2b.bbf-bike.de/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BbfBikesCollector.CONFIG);
    }
}
