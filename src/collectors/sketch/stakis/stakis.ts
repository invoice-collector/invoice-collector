
import { SketchCollector } from '../../sketchCollector';

export class StakisCollector extends SketchCollector {

    static CONFIG = {
        id: "stakis",
        name: "Stakis",
        description: "i18n.collectors.stakis.description",
        version: "0",
        website: "https://www.stakis.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1439560.jpg",
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
        entryUrl: "https://www.stakis.de/",
    }

    constructor() {
        super(StakisCollector.CONFIG);
    }
}
