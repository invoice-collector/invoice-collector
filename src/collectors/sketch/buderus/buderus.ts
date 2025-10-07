
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BuderusCollector extends SketchCollector {

    static CONFIG = {
        id: "buderus",
        name: "Buderus",
        description: "i18n.collectors.buderus.description",
        version: "0",
        website: "https://www.onlineshop.buderus.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26517.jpg",
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
        entryUrl: "https://www.onlineshop.buderus.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BuderusCollector.CONFIG);
    }
}
