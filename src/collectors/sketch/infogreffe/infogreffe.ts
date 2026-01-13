
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InfogreffeCollector extends SketchCollector {

    static CONFIG = {
        id: "infogreffe",
        name: "Infogreffe",
        description: "i18n.collectors.infogreffe.description",
        version: "0",
        website: "https://www.infogreffe.fr",
        logo: "https://mma.prnewswire.com/media/2658130/Infogreffe_Logo.jpg",
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
        loginUrl: "https://www.infogreffe.fr",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InfogreffeCollector.CONFIG);
    }
}
