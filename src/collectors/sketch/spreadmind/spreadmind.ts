
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SpreadmindCollector extends SketchCollector {

    static CONFIG = {
        id: "spreadmind",
        name: "spreadmind",
        description: "i18n.collectors.spreadmind.description",
        version: "0",
        website: "https://akademie.spiritbalance.de/wp-admin/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/945648.jpg",
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
        loginUrl: "https://akademie.spiritbalance.de/wp-admin/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SpreadmindCollector.CONFIG);
    }
}
