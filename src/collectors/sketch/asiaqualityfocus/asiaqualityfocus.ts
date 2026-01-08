
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AsiaqualityfocusCollector extends SketchCollector {

    static CONFIG = {
        id: "asiaqualityfocus",
        name: "AsiaQualityFocus",
        description: "i18n.collectors.asiaqualityfocus.description",
        version: "0",
        website: "https://manage.asiaqualityfocus.com/dashboard/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56658.jpg",
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
        loginUrl: "https://manage.asiaqualityfocus.com/dashboard/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AsiaqualityfocusCollector.CONFIG);
    }
}
