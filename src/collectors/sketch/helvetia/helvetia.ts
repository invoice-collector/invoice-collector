
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HelvetiaCollector extends SketchCollector {

    static CONFIG = {
        id: "helvetia",
        name: "Helvetia",
        description: "i18n.collectors.helvetia.description",
        version: "0",
        website: "https://ebusiness.helvetia.com/de/helvetianet/de/secure/showapp.html?app=vpk&page=message.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69469.jpg",
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
        loginUrl: "https://ebusiness.helvetia.com/de/helvetianet/de/secure/showapp.html?app=vpk&page=message.xhtml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HelvetiaCollector.CONFIG);
    }
}
