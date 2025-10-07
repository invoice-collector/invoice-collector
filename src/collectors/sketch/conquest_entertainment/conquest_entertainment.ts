
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ConquestEntertainmentCollector extends SketchCollector {

    static CONFIG = {
        id: "conquest_entertainment",
        name: "Conquest Entertainment",
        description: "i18n.collectors.conquest_entertainment.description",
        version: "0",
        website: "https://com.cqe.cz/invoice/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/399176.jpg",
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
        entryUrl: "https://com.cqe.cz/invoice/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConquestEntertainmentCollector.CONFIG);
    }
}
