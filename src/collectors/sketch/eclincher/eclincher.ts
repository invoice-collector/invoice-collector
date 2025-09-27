
import { SketchCollector } from '../../sketchCollector';

export class EclincherCollector extends SketchCollector {

    static CONFIG = {
        id: "eclincher",
        name: "eClincher",
        description: "i18n.collectors.eclincher.description",
        version: "0",
        website: "https://app.eclincher.com/ec/login?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1173156.jpg",
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
        entryUrl: "https://app.eclincher.com/ec/login?",
    }

    constructor() {
        super(EclincherCollector.CONFIG);
    }
}
