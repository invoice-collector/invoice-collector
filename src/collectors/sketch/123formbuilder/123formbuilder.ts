
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class _123formbuilderCollector extends SketchCollector {

    static CONFIG = {
        id: "123formbuilder",
        name: "123formbuilder",
        description: "i18n.collectors.123formbuilder.description",
        version: "0",
        website: "https://www.123formbuilder.com/index.php?p=myaccount&click_from=usrman#account-details",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/213127.jpg",
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
        loginUrl: "https://www.123formbuilder.com/index.php?p=myaccount&click_from=usrman#account-details",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_123formbuilderCollector.CONFIG);
    }
}
