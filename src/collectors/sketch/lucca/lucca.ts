
import { SketchCollector } from '../../sketchCollector';

export class LuccaCollector extends SketchCollector {

    static CONFIG = {
        id: "lucca",
        name: "Lucca",
        description: "i18n.collectors.lucca.description",
        version: "0",
        website: "https://hypnovr.ilucca.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777999.jpg",
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
        entryUrl: "https://hypnovr.ilucca.net/",
    }

    constructor() {
        super(LuccaCollector.CONFIG);
    }
}
