
import { SketchCollector } from '../../sketchCollector';

export class RheinEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "rhein_energie",
        name: "Rhein Energie",
        description: "i18n.collectors.rhein_energie.description",
        version: "0",
        website: "https://www.rheinenergie.com/onlineservice/de/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15176.jpg",
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
        entryUrl: "https://www.rheinenergie.com/onlineservice/de/index.php",
    }

    constructor() {
        super(RheinEnergieCollector.CONFIG);
    }
}
