
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BillomatCollector extends SketchCollector {

    static CONFIG = {
        id: "billomat",
        name: "billomat",
        description: "i18n.collectors.billomat.description",
        version: "0",
        website: "https://www.billomat.net/?_ga=2.19581373.46259205.1523339149-2117286498.1523339149",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/493.jpg",
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
        entryUrl: "https://www.billomat.net/?_ga=2.19581373.46259205.1523339149-2117286498.1523339149",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BillomatCollector.CONFIG);
    }
}
