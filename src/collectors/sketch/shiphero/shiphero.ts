
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShipheroCollector extends SketchCollector {

    static CONFIG = {
        id: "shiphero",
        name: "ShipHero",
        description: "i18n.collectors.shiphero.description",
        version: "0",
        website: "https://signin.shiphero.com/login?ref=https://endeavour.shiphero.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51029.jpg",
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
        entryUrl: "https://signin.shiphero.com/login?ref=https://endeavour.shiphero.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShipheroCollector.CONFIG);
    }
}
