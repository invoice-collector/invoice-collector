
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MijndomeinresellerCollector extends SketchCollector {

    static CONFIG = {
        id: "mijndomeinreseller",
        name: "MijnDomeinReseller",
        description: "i18n.collectors.mijndomeinreseller.description",
        version: "0",
        website: "https://manager.mijndomeinreseller.nl/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32535.jpg",
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
        entryUrl: "https://manager.mijndomeinreseller.nl/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MijndomeinresellerCollector.CONFIG);
    }
}
