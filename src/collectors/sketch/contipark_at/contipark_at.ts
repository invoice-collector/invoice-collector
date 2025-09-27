
import { SketchCollector } from '../../sketchCollector';

export class ContiparkAtCollector extends SketchCollector {

    static CONFIG = {
        id: "contipark_at",
        name: "Contipark AT",
        description: "i18n.collectors.contipark_at.description",
        version: "0",
        website: "https://www.mein-contipark.at/p-card",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1716728.jpg",
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
        entryUrl: "https://www.mein-contipark.at/p-card",
    }

    constructor() {
        super(ContiparkAtCollector.CONFIG);
    }
}
