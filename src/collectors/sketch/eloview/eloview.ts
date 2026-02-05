
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EloviewCollector extends SketchCollector {

    static CONFIG = {
        id: "eloview",
        name: "eloview",
        description: "i18n.collectors.eloview.description",
        version: "0",
        website: "https://manage.eloview.com/3.56.50/accountSettings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1307603.jpg",
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
        loginUrl: "https://manage.eloview.com/3.56.50/accountSettings",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EloviewCollector.CONFIG);
    }
}
