
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LetsCastCollector extends SketchCollector {

    static CONFIG = {
        id: "lets_cast",
        name: "Lets Cast",
        description: "i18n.collectors.lets_cast.description",
        version: "0",
        website: "https://letscast.fm/user/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/549867.jpg",
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
        entryUrl: "https://letscast.fm/user/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LetsCastCollector.CONFIG);
    }
}
