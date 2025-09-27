
import { SketchCollector } from '../../sketchCollector';

export class SumologicCollector extends SketchCollector {

    static CONFIG = {
        id: "sumologic",
        name: "sumologic",
        description: "i18n.collectors.sumologic.description",
        version: "0",
        website: "https://service.sumologic.com/ui/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51151.jpg",
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
        entryUrl: "https://service.sumologic.com/ui/",
    }

    constructor() {
        super(SumologicCollector.CONFIG);
    }
}
