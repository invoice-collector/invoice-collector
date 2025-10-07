
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KsAuxiliaCollector extends SketchCollector {

    static CONFIG = {
        id: "ks_auxilia",
        name: "KS-Auxilia",
        description: "i18n.collectors.ks_auxilia.description",
        version: "0",
        website: "https://portal.ks-auxilia.de/ng/#/kunden/dokumente",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863199.jpg",
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
        entryUrl: "https://portal.ks-auxilia.de/ng/#/kunden/dokumente",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KsAuxiliaCollector.CONFIG);
    }
}
