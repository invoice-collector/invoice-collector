
import { SketchCollector } from '../../sketchCollector';

export class LearndahCollector extends SketchCollector {

    static CONFIG = {
        id: "learndah",
        name: "Learndah",
        description: "i18n.collectors.learndah.description",
        version: "0",
        website: "https://account.learndash.com/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2718557.jpg",
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
        entryUrl: "https://account.learndash.com/billing/",
    }

    constructor() {
        super(LearndahCollector.CONFIG);
    }
}
