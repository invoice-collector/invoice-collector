
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InternetnordCollector extends SketchCollector {

    static CONFIG = {
        id: "internetnord",
        name: "InternetNord",
        description: "i18n.collectors.internetnord.description",
        version: "0",
        website: "https://subscriptions.zoho.eu/portal/internetnord/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/955929.jpg",
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
        loginUrl: "https://subscriptions.zoho.eu/portal/internetnord/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(InternetnordCollector.CONFIG);
    }
}
