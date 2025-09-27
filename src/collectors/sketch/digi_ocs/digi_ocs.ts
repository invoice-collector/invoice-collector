
import { SketchCollector } from '../../sketchCollector';

export class DigiOcsCollector extends SketchCollector {

    static CONFIG = {
        id: "digi_ocs",
        name: "Digi OCS",
        description: "i18n.collectors.digi_ocs.description",
        version: "0",
        website: "https://new.digi.com.my/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135069.jpg",
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
        entryUrl: "https://new.digi.com.my/home",
    }

    constructor() {
        super(DigiOcsCollector.CONFIG);
    }
}
