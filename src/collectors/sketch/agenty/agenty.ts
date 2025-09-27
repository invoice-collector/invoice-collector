
import { SketchCollector } from '../../sketchCollector';

export class AgentyCollector extends SketchCollector {

    static CONFIG = {
        id: "agenty",
        name: "Agenty",
        description: "i18n.collectors.agenty.description",
        version: "0",
        website: "https://cloud.agenty.com/signin.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060554.jpg",
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
        entryUrl: "https://cloud.agenty.com/signin.aspx",
    }

    constructor() {
        super(AgentyCollector.CONFIG);
    }
}
