
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GasDeCollector extends SketchCollector {

    static CONFIG = {
        id: "gas_de",
        name: "gas.de",
        description: "i18n.collectors.gas_de.description",
        version: "0",
        website: "https://kundenportal.gas.de/qpo/portal/gasde/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22232.jpg",
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
        entryUrl: "https://kundenportal.gas.de/qpo/portal/gasde/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GasDeCollector.CONFIG);
    }
}
