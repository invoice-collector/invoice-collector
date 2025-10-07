
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ColumbiaGasOfVirginiaCollector extends SketchCollector {

    static CONFIG = {
        id: "columbia_gas_of_virginia",
        name: "Columbia Gas of Virginia",
        description: "i18n.collectors.columbia_gas_of_virginia.description",
        version: "0",
        website: "https://myaccount.columbiagasva.com/bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723644.jpg",
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
        entryUrl: "https://myaccount.columbiagasva.com/bills",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ColumbiaGasOfVirginiaCollector.CONFIG);
    }
}
