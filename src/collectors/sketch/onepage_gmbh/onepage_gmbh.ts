
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OnepageGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "onepage_gmbh",
        name: "Onepage GmbH",
        description: "i18n.collectors.onepage_gmbh.description",
        version: "0",
        website: "https://app.onepage.io/sites",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1302714.jpg",
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
        loginUrl: "https://app.onepage.io/sites",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OnepageGmbhCollector.CONFIG);
    }
}
