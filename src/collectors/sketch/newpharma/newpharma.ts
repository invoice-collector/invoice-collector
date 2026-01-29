
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NewpharmaCollector extends SketchCollector {

    static CONFIG = {
        id: "newpharma",
        name: "NewPharma",
        description: "i18n.collectors.newpharma.description",
        version: "0",
        website: "https://www.newpharma.de/myaccount/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1108443.jpg",
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
        loginUrl: "https://www.newpharma.de/myaccount/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NewpharmaCollector.CONFIG);
    }
}
