
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TiptransCollector extends SketchCollector {

    static CONFIG = {
        id: "tiptrans",
        name: "tiptrans",
        description: "i18n.collectors.tiptrans.description",
        version: "0",
        website: "https://www.tiptrans.com/clients/home?type=4",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/98722.jpg",
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
        loginUrl: "https://www.tiptrans.com/clients/home?type=4",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TiptransCollector.CONFIG);
    }
}
