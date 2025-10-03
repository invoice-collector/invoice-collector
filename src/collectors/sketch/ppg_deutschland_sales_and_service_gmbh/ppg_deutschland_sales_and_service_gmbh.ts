
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PpgDeutschlandSalesAndServiceGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "ppg_deutschland_sales_and_service_gmbh",
        name: "PPG Deutschland Sales & Service GmbH",
        description: "i18n.collectors.ppg_deutschland_sales_and_service_gmbh.description",
        version: "0",
        website: "https://refeuinvoices.ppg.com/ppg/#/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1304462.jpg",
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
        entryUrl: "https://refeuinvoices.ppg.com/ppg/#/documents",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PpgDeutschlandSalesAndServiceGmbhCollector.CONFIG);
    }
}
