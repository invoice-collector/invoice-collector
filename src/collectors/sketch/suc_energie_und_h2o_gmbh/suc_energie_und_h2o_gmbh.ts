
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SucEnergieUndH2oGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "suc_energie_und_h2o_gmbh",
        name: "Suc Energie und H2O GmbH",
        description: "i18n.collectors.suc_energie_und_h2o_gmbh.description",
        version: "0",
        website: "https://kundenportal.suec.de/powercommerce/csit3/fo/portal/start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519911.jpg",
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
        entryUrl: "https://kundenportal.suec.de/powercommerce/csit3/fo/portal/start",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SucEnergieUndH2oGmbhCollector.CONFIG);
    }
}
