
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DruckzillaCollector extends SketchCollector {

    static CONFIG = {
        id: "druckzilla",
        name: "Druckzilla",
        description: "i18n.collectors.druckzilla.description",
        version: "0",
        website: "https://www.druckzilla.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19791.jpg",
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
        loginUrl: "https://www.druckzilla.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DruckzillaCollector.CONFIG);
    }
}
