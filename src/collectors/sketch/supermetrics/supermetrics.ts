
import { SketchCollector } from '../../sketchCollector';

export class SupermetricsCollector extends SketchCollector {

    static CONFIG = {
        id: "supermetrics",
        name: "Supermetrics",
        description: "i18n.collectors.supermetrics.description",
        version: "0",
        website: "http://team.supermetrics.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31244.jpg",
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
        entryUrl: "http://team.supermetrics.com/",
    }

    constructor() {
        super(SupermetricsCollector.CONFIG);
    }
}
