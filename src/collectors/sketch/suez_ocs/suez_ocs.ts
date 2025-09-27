
import { SketchCollector } from '../../sketchCollector';

export class SuezOcsCollector extends SketchCollector {

    static CONFIG = {
        id: "suez_ocs",
        name: "Suez OCS",
        description: "i18n.collectors.suez_ocs.description",
        version: "0",
        website: "https://suez.sps-ocs.co.uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/761287.jpg",
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
        entryUrl: "https://suez.sps-ocs.co.uk/",
    }

    constructor() {
        super(SuezOcsCollector.CONFIG);
    }
}
