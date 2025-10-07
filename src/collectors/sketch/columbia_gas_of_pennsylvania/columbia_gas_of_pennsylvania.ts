
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ColumbiaGasOfPennsylvaniaCollector extends SketchCollector {

    static CONFIG = {
        id: "columbia_gas_of_pennsylvania",
        name: "Columbia Gas of Pennsylvania",
        description: "i18n.collectors.columbia_gas_of_pennsylvania.description",
        version: "0",
        website: "https://myaccount.columbiagaspa.com/bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3131688.jpg",
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
        entryUrl: "https://myaccount.columbiagaspa.com/bills",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ColumbiaGasOfPennsylvaniaCollector.CONFIG);
    }
}
