
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NochGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "noch_gmbh",
        name: "Noch GmbH",
        description: "i18n.collectors.noch_gmbh.description",
        version: "0",
        website: "https://dealer.noch.de/admin/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132112.jpg",
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
        entryUrl: "https://dealer.noch.de/admin/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NochGmbhCollector.CONFIG);
    }
}
