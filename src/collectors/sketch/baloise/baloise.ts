
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BaloiseCollector extends SketchCollector {

    static CONFIG = {
        id: "baloise",
        name: "Baloise",
        description: "i18n.collectors.baloise.description",
        version: "0",
        website: "https://www.baloise.ch/en/private-customers.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/792039.jpg",
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
        entryUrl: "https://www.baloise.ch/en/private-customers.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BaloiseCollector.CONFIG);
    }
}
