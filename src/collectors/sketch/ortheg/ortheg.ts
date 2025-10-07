
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OrthegCollector extends SketchCollector {

    static CONFIG = {
        id: "ortheg",
        name: "Ortheg",
        description: "i18n.collectors.ortheg.description",
        version: "0",
        website: "https://www.ortheg.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/418663.jpg",
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
        entryUrl: "https://www.ortheg.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OrthegCollector.CONFIG);
    }
}
