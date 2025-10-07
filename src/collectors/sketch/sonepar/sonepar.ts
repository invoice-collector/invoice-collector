
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SoneparCollector extends SketchCollector {

    static CONFIG = {
        id: "sonepar",
        name: "Sonepar",
        description: "i18n.collectors.sonepar.description",
        version: "0",
        website: "https://www.sonepar.de/authentication/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33364.jpg",
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
        entryUrl: "https://www.sonepar.de/authentication/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SoneparCollector.CONFIG);
    }
}
