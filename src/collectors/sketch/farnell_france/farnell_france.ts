
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FarnellFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "farnell_france",
        name: "Farnell France",
        description: "i18n.collectors.farnell_france.description",
        version: "0",
        website: "https://fr.farnell.com/webapp/wcs/stores/servlet/LogonForm?returnToURL&URL=https%3A%2F%2Ffr.farnell.com%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/510847.jpg",
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
        loginUrl: "https://fr.farnell.com/webapp/wcs/stores/servlet/LogonForm?returnToURL&URL=https%3A%2F%2Ffr.farnell.com%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FarnellFranceCollector.CONFIG);
    }
}
