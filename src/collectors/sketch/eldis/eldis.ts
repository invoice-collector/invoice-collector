
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EldisCollector extends SketchCollector {

    static CONFIG = {
        id: "eldis",
        name: "Eldis",
        description: "i18n.collectors.eldis.description",
        version: "0",
        website: "https://eldis.de/open-invoice-items",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1423467.jpg",
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
        entryUrl: "https://eldis.de/open-invoice-items",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EldisCollector.CONFIG);
    }
}
