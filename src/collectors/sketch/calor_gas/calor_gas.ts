
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CalorGasCollector extends SketchCollector {

    static CONFIG = {
        id: "calor_gas",
        name: "Calor Gas",
        description: "i18n.collectors.calor_gas.description",
        version: "0",
        website: "https://www.mycalorgas.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/408100.jpg",
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
        entryUrl: "https://www.mycalorgas.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CalorGasCollector.CONFIG);
    }
}
