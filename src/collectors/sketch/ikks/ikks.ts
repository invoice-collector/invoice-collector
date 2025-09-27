
import { SketchCollector } from '../../sketchCollector';

export class IkksCollector extends SketchCollector {

    static CONFIG = {
        id: "ikks",
        name: "IKKS",
        description: "i18n.collectors.ikks.description",
        version: "0",
        website: "https://www.ikks.com/en/login/?original=%2Fen%2Faccount%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120450.jpg",
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
        entryUrl: "https://www.ikks.com/en/login/?original=%2Fen%2Faccount%2F",
    }

    constructor() {
        super(IkksCollector.CONFIG);
    }
}
