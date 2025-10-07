
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KonvertaxCollector extends SketchCollector {

    static CONFIG = {
        id: "konvertax",
        name: "Konvertax",
        description: "i18n.collectors.konvertax.description",
        version: "0",
        website: "https://konvertax.de/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1759333.jpg",
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
        entryUrl: "https://konvertax.de/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KonvertaxCollector.CONFIG);
    }
}
