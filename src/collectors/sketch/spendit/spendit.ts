
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SpenditCollector extends SketchCollector {

    static CONFIG = {
        id: "spendit",
        name: "Spendit",
        description: "i18n.collectors.spendit.description",
        version: "0",
        website: "https://www.spendit.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/38953.jpg",
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
        entryUrl: "https://www.spendit.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SpenditCollector.CONFIG);
    }
}
