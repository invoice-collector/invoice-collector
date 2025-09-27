
import { SketchCollector } from '../../sketchCollector';

export class GantticCollector extends SketchCollector {

    static CONFIG = {
        id: "ganttic",
        name: "GANTTIC",
        description: "i18n.collectors.ganttic.description",
        version: "0",
        website: "https://planner.ganttic.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/925204.jpg",
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
        entryUrl: "https://planner.ganttic.com/",
    }

    constructor() {
        super(GantticCollector.CONFIG);
    }
}
