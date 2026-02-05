
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DutchleaseCollector extends SketchCollector {

    static CONFIG = {
        id: "dutchlease",
        name: "DutchLease",
        description: "i18n.collectors.dutchlease.description",
        version: "0",
        website: "https://dutchlease.fleetplatform.com/FleetPlatform/s:nl_NL/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32720.jpg",
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
        loginUrl: "https://dutchlease.fleetplatform.com/FleetPlatform/s:nl_NL/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DutchleaseCollector.CONFIG);
    }
}
