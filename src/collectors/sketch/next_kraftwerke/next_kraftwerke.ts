
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NextKraftwerkeCollector extends SketchCollector {

    static CONFIG = {
        id: "next_kraftwerke",
        name: "Next Kraftwerke",
        description: "i18n.collectors.next_kraftwerke.description",
        version: "0",
        website: "https://mein-kraftwerk.next-kraftwerke.de/document/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2656513.jpg",
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
        loginUrl: "https://mein-kraftwerk.next-kraftwerke.de/document/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NextKraftwerkeCollector.CONFIG);
    }
}
