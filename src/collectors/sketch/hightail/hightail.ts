
import { SketchCollector } from '../../sketchCollector';

export class HightailCollector extends SketchCollector {

    static CONFIG = {
        id: "hightail",
        name: "Hightail",
        description: "i18n.collectors.hightail.description",
        version: "0",
        website: "https://spaces.hightail.com/dashboard/news",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/213137.jpg",
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
        entryUrl: "https://spaces.hightail.com/dashboard/news",
    }

    constructor() {
        super(HightailCollector.CONFIG);
    }
}
