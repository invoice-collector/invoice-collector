
import { SketchCollector } from '../../sketchCollector';

export class UpelaCollector extends SketchCollector {

    static CONFIG = {
        id: "upela",
        name: "Upela",
        description: "i18n.collectors.upela.description",
        version: "0",
        website: "https://www.upela.com/en/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211128.jpg",
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
        entryUrl: "https://www.upela.com/en/my-account/",
    }

    constructor() {
        super(UpelaCollector.CONFIG);
    }
}
