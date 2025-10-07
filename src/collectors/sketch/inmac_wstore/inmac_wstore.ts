
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InmacWstoreCollector extends SketchCollector {

    static CONFIG = {
        id: "inmac_wstore",
        name: "INMAC WSTORE",
        description: "i18n.collectors.inmac_wstore.description",
        version: "0",
        website: "https://www.inmac-wstore.com/credit/cdtdocumentsearch.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1108448.jpg",
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
        entryUrl: "https://www.inmac-wstore.com/credit/cdtdocumentsearch.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InmacWstoreCollector.CONFIG);
    }
}
