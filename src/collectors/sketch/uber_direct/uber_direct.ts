
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UberDirectCollector extends SketchCollector {

    static CONFIG = {
        id: "uber_direct",
        name: "Uber Direct",
        description: "i18n.collectors.uber_direct.description",
        version: "0",
        website: "https://direct.uber.com/accounts/e8d05837-e82c-45d3-ae3e-52c0bb8b26eb/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2698765.jpg",
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
        loginUrl: "https://direct.uber.com/accounts/e8d05837-e82c-45d3-ae3e-52c0bb8b26eb/billing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(UberDirectCollector.CONFIG);
    }
}
