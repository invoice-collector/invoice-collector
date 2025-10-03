
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IkeaAtCollector extends SketchCollector {

    static CONFIG = {
        id: "ikea_at",
        name: "IKEA AT",
        description: "i18n.collectors.ikea_at.description",
        version: "0",
        website: "https://www.ikea.com/at/de/purchases/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2310225.jpg",
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
        entryUrl: "https://www.ikea.com/at/de/purchases/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IkeaAtCollector.CONFIG);
    }
}
