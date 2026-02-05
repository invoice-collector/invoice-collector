
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BeefreeDeveloperCollector extends SketchCollector {

    static CONFIG = {
        id: "beefree_developer",
        name: "Beefree Developer",
        description: "i18n.collectors.beefree_developer.description",
        version: "0",
        website: "https://developers.beefree.io/subscriptions/16000/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3110525.jpg",
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
        loginUrl: "https://developers.beefree.io/subscriptions/16000/statements",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BeefreeDeveloperCollector.CONFIG);
    }
}
