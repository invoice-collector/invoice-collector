
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ProvinzialOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "provinzial_online",
        name: "Provinzial Online",
        description: "i18n.collectors.provinzial_online.description",
        version: "0",
        website: "https://www.provinzial-online.de/content/privat/meine-provinzial/elektronisches-postfach/#!/elpo",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2077767.jpg",
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
        loginUrl: "https://www.provinzial-online.de/content/privat/meine-provinzial/elektronisches-postfach/#!/elpo",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProvinzialOnlineCollector.CONFIG);
    }
}
