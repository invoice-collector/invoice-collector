
import { SketchCollector } from '../../sketchCollector';

export class LoslebenCollector extends SketchCollector {

    static CONFIG = {
        id: "losleben",
        name: "Losleben",
        description: "i18n.collectors.losleben.description",
        version: "0",
        website: "https://losleben.wienerstaedtische.at/app/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4176025.jpg",
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
        entryUrl: "https://losleben.wienerstaedtische.at/app/login",
    }

    constructor() {
        super(LoslebenCollector.CONFIG);
    }
}
