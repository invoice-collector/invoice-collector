
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FreemiusCollector extends SketchCollector {

    static CONFIG = {
        id: "freemius",
        name: "Freemius",
        description: "i18n.collectors.freemius.description",
        version: "0",
        website: "https://users.freemius.com/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778098.jpg",
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
        entryUrl: "https://users.freemius.com/payments",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FreemiusCollector.CONFIG);
    }
}
