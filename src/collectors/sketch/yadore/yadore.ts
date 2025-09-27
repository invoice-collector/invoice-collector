
import { SketchCollector } from '../../sketchCollector';

export class YadoreCollector extends SketchCollector {

    static CONFIG = {
        id: "yadore",
        name: "Yadore",
        description: "i18n.collectors.yadore.description",
        version: "0",
        website: "https://publisher.yadore.com/credit-notes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1303444.jpg",
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
        entryUrl: "https://publisher.yadore.com/credit-notes",
    }

    constructor() {
        super(YadoreCollector.CONFIG);
    }
}
