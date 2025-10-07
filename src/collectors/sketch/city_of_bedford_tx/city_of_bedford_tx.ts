
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfBedfordTxCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_bedford_tx",
        name: "City of Bedford TX",
        description: "i18n.collectors.city_of_bedford_tx.description",
        version: "0",
        website: "https://bedford.dpnetbill.com/secure/customer/default.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/179856.jpg",
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
        entryUrl: "https://bedford.dpnetbill.com/secure/customer/default.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityOfBedfordTxCollector.CONFIG);
    }
}
