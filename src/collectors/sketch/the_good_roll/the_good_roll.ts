
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TheGoodRollCollector extends SketchCollector {

    static CONFIG = {
        id: "the_good_roll",
        name: "The Good Roll",
        description: "i18n.collectors.the_good_roll.description",
        version: "0",
        website: "https://thegoodroll.com/nl-nl/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2158086.jpg",
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
        loginUrl: "https://thegoodroll.com/nl-nl/account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TheGoodRollCollector.CONFIG);
    }
}
