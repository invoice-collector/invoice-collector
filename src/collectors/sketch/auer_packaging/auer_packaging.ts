
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AuerPackagingCollector extends SketchCollector {

    static CONFIG = {
        id: "auer_packaging",
        name: "AUER Packaging",
        description: "i18n.collectors.auer_packaging.description",
        version: "0",
        website: "https://www.auer-packaging.com/de/de/Mein-AUER.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27907.jpg",
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
        loginUrl: "https://www.auer-packaging.com/de/de/Mein-AUER.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AuerPackagingCollector.CONFIG);
    }
}
