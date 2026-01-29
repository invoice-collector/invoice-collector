
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FieberNlCollector extends SketchCollector {

    static CONFIG = {
        id: "fieber_nl",
        name: "fieber.nl",
        description: "i18n.collectors.fieber_nl.description",
        version: "0",
        website: "https://support.fieber.nl/hc/nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32700.jpg",
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
        loginUrl: "https://support.fieber.nl/hc/nl",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FieberNlCollector.CONFIG);
    }
}
