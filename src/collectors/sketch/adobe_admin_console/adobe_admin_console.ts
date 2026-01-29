
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AdobeAdminConsoleCollector extends SketchCollector {

    static CONFIG = {
        id: "adobe_admin_console",
        name: "Adobe Admin Console",
        description: "i18n.collectors.adobe_admin_console.description",
        version: "0",
        website: "https://adminconsole.adobe.com/2B7A015D60D18D5C0A495E16@AdobeOrg/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1248104.jpg",
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
        loginUrl: "https://adminconsole.adobe.com/2B7A015D60D18D5C0A495E16@AdobeOrg/account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AdobeAdminConsoleCollector.CONFIG);
    }
}
