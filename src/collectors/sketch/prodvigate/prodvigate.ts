
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ProdvigateCollector extends SketchCollector {

    static CONFIG = {
        id: "prodvigate",
        name: "Prodvigate",
        description: "i18n.collectors.prodvigate.description",
        version: "0",
        website: "https://id.prodvigate.com/de/auth",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3020536.jpg",
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
        entryUrl: "https://id.prodvigate.com/de/auth",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProdvigateCollector.CONFIG);
    }
}
