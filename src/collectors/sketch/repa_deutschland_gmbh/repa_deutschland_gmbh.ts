
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RepaDeutschlandGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "repa_deutschland_gmbh",
        name: "REPA Deutschland GmbH",
        description: "i18n.collectors.repa_deutschland_gmbh.description",
        version: "0",
        website: "https://www.gev-online.com/webshop/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2038748.jpg",
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
        entryUrl: "https://www.gev-online.com/webshop/account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RepaDeutschlandGmbhCollector.CONFIG);
    }
}
