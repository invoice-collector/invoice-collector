
import { SketchCollector } from '../../sketchCollector';

export class MainmetallCollector extends SketchCollector {

    static CONFIG = {
        id: "mainmetall",
        name: "Mainmetall",
        description: "i18n.collectors.mainmetall.description",
        version: "0",
        website: "https://portal.mainmetall.de/hilfe/schnittstellen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/427329.jpg",
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
        entryUrl: "https://portal.mainmetall.de/hilfe/schnittstellen",
    }

    constructor() {
        super(MainmetallCollector.CONFIG);
    }
}
