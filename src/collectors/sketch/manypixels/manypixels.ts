
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ManypixelsCollector extends SketchCollector {

    static CONFIG = {
        id: "manypixels",
        name: "Manypixels",
        description: "i18n.collectors.manypixels.description",
        version: "0",
        website: "https://app.manypixels.co/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777410.jpg",
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
        entryUrl: "https://app.manypixels.co/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ManypixelsCollector.CONFIG);
    }
}
