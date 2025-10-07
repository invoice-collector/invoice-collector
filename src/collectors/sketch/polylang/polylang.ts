
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PolylangCollector extends SketchCollector {

    static CONFIG = {
        id: "polylang",
        name: "Polylang",
        description: "i18n.collectors.polylang.description",
        version: "0",
        website: "https://polylang.pro/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/95137.jpg",
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
        entryUrl: "https://polylang.pro/account/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PolylangCollector.CONFIG);
    }
}
