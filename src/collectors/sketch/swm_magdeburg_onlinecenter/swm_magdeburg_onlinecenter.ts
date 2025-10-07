
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SwmMagdeburgOnlinecenterCollector extends SketchCollector {

    static CONFIG = {
        id: "swm_magdeburg_onlinecenter",
        name: "SWM Magdeburg Onlinecenter",
        description: "i18n.collectors.swm_magdeburg_onlinecenter.description",
        version: "0",
        website: "https://onlinecenter.sw-magdeburg.de/onlineservice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203774.jpg",
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
        entryUrl: "https://onlinecenter.sw-magdeburg.de/onlineservice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SwmMagdeburgOnlinecenterCollector.CONFIG);
    }
}
