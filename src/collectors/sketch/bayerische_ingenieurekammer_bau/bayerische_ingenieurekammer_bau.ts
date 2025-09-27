
import { SketchCollector } from '../../sketchCollector';

export class BayerischeIngenieurekammerBauCollector extends SketchCollector {

    static CONFIG = {
        id: "bayerische_ingenieurekammer_bau",
        name: "Bayerische Ingenieurekammer Bau",
        description: "i18n.collectors.bayerische_ingenieurekammer_bau.description",
        version: "0",
        website: "https://bayika.de/de/portal/intern/rechnungen/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4334787.jpg",
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
        entryUrl: "https://bayika.de/de/portal/intern/rechnungen/index.php",
    }

    constructor() {
        super(BayerischeIngenieurekammerBauCollector.CONFIG);
    }
}
