
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HpInstantIncCollector extends SketchCollector {

    static CONFIG = {
        id: "hp_instant_inc",
        name: "HP INSTANT INC",
        description: "i18n.collectors.hp_instant_inc.description",
        version: "0",
        website: "https://instantink.hpconnected.com/users/signin?redirect=isep_or_same_origin&theme=RWD",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115307.jpg",
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
        loginUrl: "https://instantink.hpconnected.com/users/signin?redirect=isep_or_same_origin&theme=RWD",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HpInstantIncCollector.CONFIG);
    }
}
