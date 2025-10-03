
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IlleCollector extends SketchCollector {

    static CONFIG = {
        id: "ille",
        name: "Ille",
        description: "i18n.collectors.ille.description",
        version: "0",
        website: "https://portal.ille.eu/accounts/login/?next=/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10947.jpg",
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
        entryUrl: "https://portal.ille.eu/accounts/login/?next=/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IlleCollector.CONFIG);
    }
}
