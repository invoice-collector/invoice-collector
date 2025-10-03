
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TransgourmetAtCollector extends SketchCollector {

    static CONFIG = {
        id: "transgourmet_at",
        name: "Transgourmet.at",
        description: "i18n.collectors.transgourmet_at.description",
        version: "0",
        website: "https://shop.transgourmet.at/archive",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200389.jpg",
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
        entryUrl: "https://shop.transgourmet.at/archive",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TransgourmetAtCollector.CONFIG);
    }
}
