
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IndianaMichiganPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "indiana_michigan_power",
        name: "Indiana Michigan Power",
        description: "i18n.collectors.indiana_michigan_power.description",
        version: "0",
        website: "http://www.indianamichiganpower.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9388.jpg",
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
        entryUrl: "http://www.indianamichiganpower.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IndianaMichiganPowerCollector.CONFIG);
    }
}
