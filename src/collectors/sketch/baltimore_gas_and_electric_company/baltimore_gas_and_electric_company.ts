
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BaltimoreGasAndElectricCompanyCollector extends SketchCollector {

    static CONFIG = {
        id: "baltimore_gas_and_electric_company",
        name: "Baltimore Gas and Electric Company",
        description: "i18n.collectors.baltimore_gas_and_electric_company.description",
        version: "0",
        website: "http://www.bge.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8553.jpg",
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
        entryUrl: "http://www.bge.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BaltimoreGasAndElectricCompanyCollector.CONFIG);
    }
}
