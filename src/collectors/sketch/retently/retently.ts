
import { SketchCollector } from '../../sketchCollector';

export class RetentlyCollector extends SketchCollector {

    static CONFIG = {
        id: "retently",
        name: "Retently",
        description: "i18n.collectors.retently.description",
        version: "0",
        website: "https://retently.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132305.jpg",
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
        entryUrl: "https://retently.com",
    }

    constructor() {
        super(RetentlyCollector.CONFIG);
    }
}
