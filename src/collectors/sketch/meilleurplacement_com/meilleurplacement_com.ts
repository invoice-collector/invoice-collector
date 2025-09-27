
import { SketchCollector } from '../../sketchCollector';

export class MeilleurplacementComCollector extends SketchCollector {

    static CONFIG = {
        id: "meilleurplacement_com",
        name: "MeilleurPlacement.com",
        description: "i18n.collectors.meilleurplacement_com.description",
        version: "0",
        website: "https://placement.meilleurtaux.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778934.jpg",
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
        entryUrl: "https://placement.meilleurtaux.com/",
    }

    constructor() {
        super(MeilleurplacementComCollector.CONFIG);
    }
}
