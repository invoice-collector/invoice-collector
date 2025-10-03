
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KrenobatCollector extends SketchCollector {

    static CONFIG = {
        id: "krenobat",
        name: "Krenobat",
        description: "i18n.collectors.krenobat.description",
        version: "0",
        website: "https://krenobat.fr/krenobat/user/factureliste",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417564.jpg",
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
        entryUrl: "https://krenobat.fr/krenobat/user/factureliste",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KrenobatCollector.CONFIG);
    }
}
