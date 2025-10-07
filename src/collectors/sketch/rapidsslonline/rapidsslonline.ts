
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RapidsslonlineCollector extends SketchCollector {

    static CONFIG = {
        id: "rapidsslonline",
        name: "RAPIDSSLONLINE",
        description: "i18n.collectors.rapidsslonline.description",
        version: "0",
        website: "https://www.rapidsslonline.com/dashboard/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/556582.jpg",
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
        entryUrl: "https://www.rapidsslonline.com/dashboard/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RapidsslonlineCollector.CONFIG);
    }
}
