
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ZiggoZakelijkCollector extends SketchCollector {

    static CONFIG = {
        id: "ziggo_zakelijk",
        name: "ziggo zakelijk",
        description: "i18n.collectors.ziggo_zakelijk.description",
        version: "0",
        website: "https://factuur.ziggozakelijk.nl/ziggo/welcome.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/875950.jpg",
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
        loginUrl: "https://factuur.ziggozakelijk.nl/ziggo/welcome.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZiggoZakelijkCollector.CONFIG);
    }
}
