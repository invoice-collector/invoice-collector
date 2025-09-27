
import { SketchCollector } from '../../sketchCollector';

export class VrTeilhaberbankCollector extends SketchCollector {

    static CONFIG = {
        id: "vr_teilhaberbank",
        name: "VR TeilhaberBank",
        description: "i18n.collectors.vr_teilhaberbank.description",
        version: "0",
        website: "https://www.vr-teilhaberbank.de/services_cloud/portal/webcomp/epostfach/postfach",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4368001.jpg",
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
        entryUrl: "https://www.vr-teilhaberbank.de/services_cloud/portal/webcomp/epostfach/postfach",
    }

    constructor() {
        super(VrTeilhaberbankCollector.CONFIG);
    }
}
