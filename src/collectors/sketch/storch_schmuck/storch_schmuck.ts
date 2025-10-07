
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StorchSchmuckCollector extends SketchCollector {

    static CONFIG = {
        id: "storch_schmuck",
        name: "Storch Schmuck",
        description: "i18n.collectors.storch_schmuck.description",
        version: "0",
        website: "https://www.storch-schmuck.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4418330.jpg",
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
        entryUrl: "https://www.storch-schmuck.de/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StorchSchmuckCollector.CONFIG);
    }
}
