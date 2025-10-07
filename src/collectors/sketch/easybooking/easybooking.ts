
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EasybookingCollector extends SketchCollector {

    static CONFIG = {
        id: "easybooking",
        name: "easybooking",
        description: "i18n.collectors.easybooking.description",
        version: "0",
        website: "https://web-eb-de-3.easy-booking.at/julia/?customer=2647",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1577618.jpg",
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
        entryUrl: "https://web-eb-de-3.easy-booking.at/julia/?customer=2647",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EasybookingCollector.CONFIG);
    }
}
