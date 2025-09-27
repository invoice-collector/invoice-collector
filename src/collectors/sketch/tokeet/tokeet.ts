
import { SketchCollector } from '../../sketchCollector';

export class TokeetCollector extends SketchCollector {

    static CONFIG = {
        id: "tokeet",
        name: "Tokeet",
        description: "i18n.collectors.tokeet.description",
        version: "0",
        website: "https://app.tokeet.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1224780.jpg",
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
        entryUrl: "https://app.tokeet.com/login",
    }

    constructor() {
        super(TokeetCollector.CONFIG);
    }
}
