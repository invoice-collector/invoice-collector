
import { SketchCollector } from '../../sketchCollector';

export class TricomaSupportCollector extends SketchCollector {

    static CONFIG = {
        id: "tricoma_support",
        name: "Tricoma Support",
        description: "i18n.collectors.tricoma_support.description",
        version: "0",
        website: "https://support.tricoma.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132281.jpg",
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
        entryUrl: "https://support.tricoma.de/",
    }

    constructor() {
        super(TricomaSupportCollector.CONFIG);
    }
}
