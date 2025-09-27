
import { SketchCollector } from '../../sketchCollector';

export class SegmetricsCollector extends SketchCollector {

    static CONFIG = {
        id: "segmetrics",
        name: "SEGMETRICS",
        description: "i18n.collectors.segmetrics.description",
        version: "0",
        website: "https://app.segmetrics.io/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/846044.jpg",
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
        entryUrl: "https://app.segmetrics.io/login/",
    }

    constructor() {
        super(SegmetricsCollector.CONFIG);
    }
}
