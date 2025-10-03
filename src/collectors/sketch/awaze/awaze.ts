
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AwazeCollector extends SketchCollector {

    static CONFIG = {
        id: "awaze",
        name: "Awaze",
        description: "i18n.collectors.awaze.description",
        version: "0",
        website: "https://login.novasol.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2691475.jpg",
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
        entryUrl: "https://login.novasol.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AwazeCollector.CONFIG);
    }
}
