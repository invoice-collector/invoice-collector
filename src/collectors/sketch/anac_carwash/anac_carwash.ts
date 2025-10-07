
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AnacCarwashCollector extends SketchCollector {

    static CONFIG = {
        id: "anac_carwash",
        name: "ANAC Carwash",
        description: "i18n.collectors.anac_carwash.description",
        version: "0",
        website: "https://www.anaccarwash.com/unlimited-inloggen-nl/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4420672.jpg",
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
        entryUrl: "https://www.anaccarwash.com/unlimited-inloggen-nl/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AnacCarwashCollector.CONFIG);
    }
}
