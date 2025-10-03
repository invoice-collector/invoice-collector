
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MeeroCollector extends SketchCollector {

    static CONFIG = {
        id: "meero",
        name: "Meero",
        description: "i18n.collectors.meero.description",
        version: "0",
        website: "https://www.meero.com/customer/fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396399.jpg",
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
        entryUrl: "https://www.meero.com/customer/fr",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MeeroCollector.CONFIG);
    }
}
