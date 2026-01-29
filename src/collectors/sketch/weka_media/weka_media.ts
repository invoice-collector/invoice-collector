
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WekaMediaCollector extends SketchCollector {

    static CONFIG = {
        id: "weka_media",
        name: "WEKA MEDIA",
        description: "i18n.collectors.weka_media.description",
        version: "0",
        website: "http://www.weka.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54869.jpg",
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
        loginUrl: "http://www.weka.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WekaMediaCollector.CONFIG);
    }
}
