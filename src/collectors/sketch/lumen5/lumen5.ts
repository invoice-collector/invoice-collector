
import { SketchCollector } from '../../sketchCollector';

export class Lumen5Collector extends SketchCollector {

    static CONFIG = {
        id: "lumen5",
        name: "Lumen5",
        description: "i18n.collectors.lumen5.description",
        version: "0",
        website: "https://lumen5.com/dashboard/account/#billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64899.jpg",
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
        entryUrl: "https://lumen5.com/dashboard/account/#billing",
    }

    constructor() {
        super(Lumen5Collector.CONFIG);
    }
}
