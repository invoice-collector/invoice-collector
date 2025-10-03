
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BluesnapCollector extends SketchCollector {

    static CONFIG = {
        id: "bluesnap",
        name: "BlueSnap",
        description: "i18n.collectors.bluesnap.description",
        version: "0",
        website: "https://cp.bluesnap.com/jsp/account_login.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43198.jpg",
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
        entryUrl: "https://cp.bluesnap.com/jsp/account_login.jsp",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BluesnapCollector.CONFIG);
    }
}
