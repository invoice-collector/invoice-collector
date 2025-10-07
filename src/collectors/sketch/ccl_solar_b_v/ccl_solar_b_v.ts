
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CclSolarBVCollector extends SketchCollector {

    static CONFIG = {
        id: "ccl_solar_b_v",
        name: "CCL Solar B.V",
        description: "i18n.collectors.ccl_solar_b_v.description",
        version: "0",
        website: "https://www.cclsolar.eu/Home/AgedDebt",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1472721.jpg",
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
        entryUrl: "https://www.cclsolar.eu/Home/AgedDebt",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CclSolarBVCollector.CONFIG);
    }
}
