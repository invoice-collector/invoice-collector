
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MeistertaskCollector extends SketchCollector {

    static CONFIG = {
        id: "meistertask",
        name: "MeisterTask",
        description: "i18n.collectors.meistertask.description",
        version: "0",
        website: "https://accounts.meister.co/billing/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32081.jpg",
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
        entryUrl: "https://accounts.meister.co/billing/payments",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MeistertaskCollector.CONFIG);
    }
}
