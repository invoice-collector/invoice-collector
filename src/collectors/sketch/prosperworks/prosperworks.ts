
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ProsperworksCollector extends SketchCollector {

    static CONFIG = {
        id: "prosperworks",
        name: "ProsperWorks",
        description: "i18n.collectors.prosperworks.description",
        version: "0",
        website: "https://app.prosperworks.com/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8282.jpg",
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
        entryUrl: "https://app.prosperworks.com/users/sign_in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProsperworksCollector.CONFIG);
    }
}
