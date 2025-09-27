
import { SketchCollector } from '../../sketchCollector';

export class MitsubishiElectricCollector extends SketchCollector {

    static CONFIG = {
        id: "mitsubishi_electric",
        name: "Mitsubishi Electric",
        description: "i18n.collectors.mitsubishi_electric.description",
        version: "0",
        website: "https://edocs.mitsubishielectric.co.uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4381749.jpg",
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
        entryUrl: "https://edocs.mitsubishielectric.co.uk/",
    }

    constructor() {
        super(MitsubishiElectricCollector.CONFIG);
    }
}
