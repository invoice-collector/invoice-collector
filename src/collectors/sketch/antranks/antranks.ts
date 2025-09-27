
import { SketchCollector } from '../../sketchCollector';

export class AntranksCollector extends SketchCollector {

    static CONFIG = {
        id: "antranks",
        name: "AntRanks",
        description: "i18n.collectors.antranks.description",
        version: "0",
        website: "http://www.antranks.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37593.jpg",
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
        entryUrl: "http://www.antranks.com",
    }

    constructor() {
        super(AntranksCollector.CONFIG);
    }
}
