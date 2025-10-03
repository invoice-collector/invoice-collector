
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CarethyCollector extends SketchCollector {

    static CONFIG = {
        id: "carethy",
        name: "carethy",
        description: "i18n.collectors.carethy.description",
        version: "0",
        website: "https://www.carethy.de/user?tab=orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3197806.jpg",
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
        entryUrl: "https://www.carethy.de/user?tab=orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CarethyCollector.CONFIG);
    }
}
