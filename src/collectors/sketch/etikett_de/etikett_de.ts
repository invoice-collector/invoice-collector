
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EtikettDeCollector extends SketchCollector {

    static CONFIG = {
        id: "etikett_de",
        name: "etikett.de",
        description: "i18n.collectors.etikett_de.description",
        version: "0",
        website: "https://etikett.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7506.jpg",
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
        entryUrl: "https://etikett.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EtikettDeCollector.CONFIG);
    }
}
