
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IlekCollector extends SketchCollector {

    static CONFIG = {
        id: "ilek",
        name: "Ilek",
        description: "i18n.collectors.ilek.description",
        version: "0",
        website: "https://www.ilek.fr/mon-compte/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2027047.jpg",
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
        entryUrl: "https://www.ilek.fr/mon-compte/factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IlekCollector.CONFIG);
    }
}
