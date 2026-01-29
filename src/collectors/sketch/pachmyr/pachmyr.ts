
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PachmyrCollector extends SketchCollector {

    static CONFIG = {
        id: "pachmyr",
        name: "Pachmyr",
        description: "i18n.collectors.pachmyr.description",
        version: "0",
        website: "https://www.pachmayr.de/shop/neu-im-sortiment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2063561.jpg",
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
        loginUrl: "https://www.pachmayr.de/shop/neu-im-sortiment",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PachmyrCollector.CONFIG);
    }
}
