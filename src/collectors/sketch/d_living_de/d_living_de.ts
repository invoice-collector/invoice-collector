
import { SketchCollector } from '../../sketchCollector';

export class DLivingDeCollector extends SketchCollector {

    static CONFIG = {
        id: "d_living_de",
        name: "d-living.de",
        description: "i18n.collectors.d_living_de.description",
        version: "0",
        website: "https://www.mytime.de/login.php?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3363.jpg",
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
        entryUrl: "https://www.mytime.de/login.php?",
    }

    constructor() {
        super(DLivingDeCollector.CONFIG);
    }
}
