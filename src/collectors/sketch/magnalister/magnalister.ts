
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MagnalisterCollector extends SketchCollector {

    static CONFIG = {
        id: "magnalister",
        name: "magnalister",
        description: "i18n.collectors.magnalister.description",
        version: "0",
        website: "https://www.magnalister.com/de/customer/login/check.do/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10280.jpg",
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
        entryUrl: "https://www.magnalister.com/de/customer/login/check.do/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MagnalisterCollector.CONFIG);
    }
}
