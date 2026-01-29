
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NnsendCollector extends SketchCollector {

    static CONFIG = {
        id: "nnsend",
        name: "nnsend",
        description: "i18n.collectors.nnsend.description",
        version: "0",
        website: "https://ebill.nnsend.net/vfne/documents/list_by?action=update",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/414367.jpg",
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
        loginUrl: "https://ebill.nnsend.net/vfne/documents/list_by?action=update",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NnsendCollector.CONFIG);
    }
}
