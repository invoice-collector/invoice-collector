
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LowenEntertaimentCollector extends SketchCollector {

    static CONFIG = {
        id: "lowen_entertaiment",
        name: "Lowen Entertaiment",
        description: "i18n.collectors.lowen_entertaiment.description",
        version: "0",
        website: "https://www.loewen-kundenportal.de/mein-konto/meine-rechnungen/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1653476.jpg",
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
        entryUrl: "https://www.loewen-kundenportal.de/mein-konto/meine-rechnungen/rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LowenEntertaimentCollector.CONFIG);
    }
}
