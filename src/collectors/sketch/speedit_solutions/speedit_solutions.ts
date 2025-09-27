
import { SketchCollector } from '../../sketchCollector';

export class SpeeditSolutionsCollector extends SketchCollector {

    static CONFIG = {
        id: "speedit_solutions",
        name: "SpeedIT Solutions",
        description: "i18n.collectors.speedit_solutions.description",
        version: "0",
        website: "https://cp.speedit.org",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2862889.jpg",
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
        entryUrl: "https://cp.speedit.org",
    }

    constructor() {
        super(SpeeditSolutionsCollector.CONFIG);
    }
}
