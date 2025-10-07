
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ErenjaCollector extends SketchCollector {

    static CONFIG = {
        id: "erenja",
        name: "Erenja",
        description: "i18n.collectors.erenja.description",
        version: "0",
        website: "https://onlineservice.erenja.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4654936.jpg",
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
        entryUrl: "https://onlineservice.erenja.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ErenjaCollector.CONFIG);
    }
}
