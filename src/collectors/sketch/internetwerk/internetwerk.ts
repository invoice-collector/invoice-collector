
import { SketchCollector } from '../../sketchCollector';

export class InternetwerkCollector extends SketchCollector {

    static CONFIG = {
        id: "internetwerk",
        name: "Internetwerk",
        description: "i18n.collectors.internetwerk.description",
        version: "0",
        website: "https://verwaltung.internetwerk.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4606.jpg",
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
        entryUrl: "https://verwaltung.internetwerk.de",
    }

    constructor() {
        super(InternetwerkCollector.CONFIG);
    }
}
