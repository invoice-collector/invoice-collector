
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OogardenCollector extends SketchCollector {

    static CONFIG = {
        id: "oogarden",
        name: "Oogarden",
        description: "i18n.collectors.oogarden.description",
        version: "0",
        website: "https://www.oogarden.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122530.jpg",
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
        entryUrl: "https://www.oogarden.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OogardenCollector.CONFIG);
    }
}
