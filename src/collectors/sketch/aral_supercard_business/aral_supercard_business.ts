
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AralSupercardBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "aral_supercard_business",
        name: "Aral Supercard Business",
        description: "i18n.collectors.aral_supercard_business.description",
        version: "0",
        website: "https://business.aral-supercard.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1307410.jpg",
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
        entryUrl: "https://business.aral-supercard.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AralSupercardBusinessCollector.CONFIG);
    }
}
