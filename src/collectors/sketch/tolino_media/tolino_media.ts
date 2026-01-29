
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TolinoMediaCollector extends SketchCollector {

    static CONFIG = {
        id: "tolino_media",
        name: "Tolino Media",
        description: "i18n.collectors.tolino_media.description",
        version: "0",
        website: "https://www.tolino-media.de/mein-konto/#/my-royalties",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43697.jpg",
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
        loginUrl: "https://www.tolino-media.de/mein-konto/#/my-royalties",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TolinoMediaCollector.CONFIG);
    }
}
