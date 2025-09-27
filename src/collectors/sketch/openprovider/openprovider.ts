
import { SketchCollector } from '../../sketchCollector';

export class OpenproviderCollector extends SketchCollector {

    static CONFIG = {
        id: "openprovider",
        name: "Openprovider",
        description: "i18n.collectors.openprovider.description",
        version: "0",
        website: "http://www.openprovider.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32714.jpg",
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
        entryUrl: "http://www.openprovider.com",
    }

    constructor() {
        super(OpenproviderCollector.CONFIG);
    }
}
