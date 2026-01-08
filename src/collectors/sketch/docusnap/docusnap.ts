
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DocusnapCollector extends SketchCollector {

    static CONFIG = {
        id: "docusnap",
        name: "Docusnap",
        description: "i18n.collectors.docusnap.description",
        version: "0",
        website: "https://www.docusnap.com/mydocusnap/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1132279.jpg",
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
        loginUrl: "https://www.docusnap.com/mydocusnap/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DocusnapCollector.CONFIG);
    }
}
