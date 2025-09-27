
import { SketchCollector } from '../../sketchCollector';

export class ReturnlessCollector extends SketchCollector {

    static CONFIG = {
        id: "returnless",
        name: "Returnless",
        description: "i18n.collectors.returnless.description",
        version: "0",
        website: "https://panel.returnless.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2550796.jpg",
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
        entryUrl: "https://panel.returnless.com/login",
    }

    constructor() {
        super(ReturnlessCollector.CONFIG);
    }
}
