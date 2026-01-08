
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Onlinebrief24DeCollector extends SketchCollector {

    static CONFIG = {
        id: "onlinebrief24_de",
        name: "onlinebrief24.de",
        description: "i18n.collectors.onlinebrief24_de.description",
        version: "0",
        website: "https://service.onlinebrief24.de/kundencenter.pl?act=loginerror&providerid=onlinebrief24",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/321.jpg",
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
        loginUrl: "https://service.onlinebrief24.de/kundencenter.pl?act=loginerror&providerid=onlinebrief24",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Onlinebrief24DeCollector.CONFIG);
    }
}
