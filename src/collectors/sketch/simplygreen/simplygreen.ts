
import { SketchCollector } from '../../sketchCollector';

export class SimplygreenCollector extends SketchCollector {

    static CONFIG = {
        id: "simplygreen",
        name: "SimplyGreen",
        description: "i18n.collectors.simplygreen.description",
        version: "0",
        website: "https://www.meineentega.de/start.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18460.jpg",
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
        entryUrl: "https://www.meineentega.de/start.html",
    }

    constructor() {
        super(SimplygreenCollector.CONFIG);
    }
}
