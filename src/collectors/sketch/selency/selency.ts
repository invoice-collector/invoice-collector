
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SelencyCollector extends SketchCollector {

    static CONFIG = {
        id: "selency",
        name: "Selency",
        description: "i18n.collectors.selency.description",
        version: "0",
        website: "https://www.selency.fr/mon-compte/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/745225.jpg",
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
        entryUrl: "https://www.selency.fr/mon-compte/factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SelencyCollector.CONFIG);
    }
}
