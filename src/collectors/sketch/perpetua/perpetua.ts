
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PerpetuaCollector extends SketchCollector {

    static CONFIG = {
        id: "perpetua",
        name: "Perpetua",
        description: "i18n.collectors.perpetua.description",
        version: "0",
        website: "https://app.perpetua.io/settings?geocompany=4544&selectedTab=3",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779014.jpg",
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
        loginUrl: "https://app.perpetua.io/settings?geocompany=4544&selectedTab=3",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PerpetuaCollector.CONFIG);
    }
}
