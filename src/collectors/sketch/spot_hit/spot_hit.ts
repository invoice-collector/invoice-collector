
import { SketchCollector } from '../../sketchCollector';

export class SpotHitCollector extends SketchCollector {

    static CONFIG = {
        id: "spot_hit",
        name: "Spot Hit",
        description: "i18n.collectors.spot_hit.description",
        version: "0",
        website: "https://www.spot-hit.fr/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777348.jpg",
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
        entryUrl: "https://www.spot-hit.fr/connexion",
    }

    constructor() {
        super(SpotHitCollector.CONFIG);
    }
}
