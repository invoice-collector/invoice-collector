
import { SketchCollector } from '../../sketchCollector';

export class DrivupCollector extends SketchCollector {

    static CONFIG = {
        id: "drivup",
        name: "Drivup",
        description: "i18n.collectors.drivup.description",
        version: "0",
        website: "https://admin.drivup.fr/abonnement.php?zone=config#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2382498.jpg",
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
        entryUrl: "https://admin.drivup.fr/abonnement.php?zone=config#",
    }

    constructor() {
        super(DrivupCollector.CONFIG);
    }
}
