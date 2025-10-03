
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AweberCollector extends SketchCollector {

    static CONFIG = {
        id: "aweber",
        name: "Aweber",
        description: "i18n.collectors.aweber.description",
        version: "0",
        website: "https://www.aweber.com/login.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8545.jpg",
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
        entryUrl: "https://www.aweber.com/login.htm",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AweberCollector.CONFIG);
    }
}
