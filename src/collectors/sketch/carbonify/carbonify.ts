
import { SketchCollector } from '../../sketchCollector';

export class CarbonifyCollector extends SketchCollector {

    static CONFIG = {
        id: "carbonify",
        name: "Carbonify",
        description: "i18n.collectors.carbonify.description",
        version: "0",
        website: "https://carbonify.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2310347.jpg",
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
        entryUrl: "https://carbonify.de/login",
    }

    constructor() {
        super(CarbonifyCollector.CONFIG);
    }
}
