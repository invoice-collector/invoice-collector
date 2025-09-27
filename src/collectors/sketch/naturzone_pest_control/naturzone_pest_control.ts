
import { SketchCollector } from '../../sketchCollector';

export class NaturzonePestControlCollector extends SketchCollector {

    static CONFIG = {
        id: "naturzone_pest_control",
        name: "NaturZone Pest Control",
        description: "i18n.collectors.naturzone_pest_control.description",
        version: "0",
        website: "https://naturzone.pestconnect.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2526065.jpg",
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
        entryUrl: "https://naturzone.pestconnect.com/login",
    }

    constructor() {
        super(NaturzonePestControlCollector.CONFIG);
    }
}
