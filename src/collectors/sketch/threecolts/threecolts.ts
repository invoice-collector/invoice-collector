
import { SketchCollector } from '../../sketchCollector';

export class ThreecoltsCollector extends SketchCollector {

    static CONFIG = {
        id: "threecolts",
        name: "Threecolts",
        description: "i18n.collectors.threecolts.description",
        version: "0",
        website: "https://manager.threecolts.com/v2/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/222550.jpg",
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
        entryUrl: "https://manager.threecolts.com/v2/login",
    }

    constructor() {
        super(ThreecoltsCollector.CONFIG);
    }
}
