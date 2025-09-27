
import { SketchCollector } from '../../sketchCollector';

export class AbfallwirtschaftSudholsteinAwshCollector extends SketchCollector {

    static CONFIG = {
        id: "abfallwirtschaft_sudholstein_awsh",
        name: "Abfallwirtschaft Sudholstein - AWSH",
        description: "i18n.collectors.abfallwirtschaft_sudholstein_awsh.description",
        version: "0",
        website: "https://www.awsh.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778194.jpg",
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
        entryUrl: "https://www.awsh.de/",
    }

    constructor() {
        super(AbfallwirtschaftSudholsteinAwshCollector.CONFIG);
    }
}
