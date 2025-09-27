
import { SketchCollector } from '../../sketchCollector';

export class IntegromatCollector extends SketchCollector {

    static CONFIG = {
        id: "integromat",
        name: "integromat",
        description: "i18n.collectors.integromat.description",
        version: "0",
        website: "https://www.integromat.com/en/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/68473.jpg",
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
        entryUrl: "https://www.integromat.com/en/login",
    }

    constructor() {
        super(IntegromatCollector.CONFIG);
    }
}
