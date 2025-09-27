
import { SketchCollector } from '../../sketchCollector';

export class UlineCollector extends SketchCollector {

    static CONFIG = {
        id: "uline",
        name: "Uline",
        description: "i18n.collectors.uline.description",
        version: "0",
        website: "https://www.uline.com/SignIn/SignIn",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/385911.jpg",
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
        entryUrl: "https://www.uline.com/SignIn/SignIn",
    }

    constructor() {
        super(UlineCollector.CONFIG);
    }
}
