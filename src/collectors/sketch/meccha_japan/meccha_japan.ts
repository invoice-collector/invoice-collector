
import { SketchCollector } from '../../sketchCollector';

export class MecchaJapanCollector extends SketchCollector {

    static CONFIG = {
        id: "meccha_japan",
        name: "Meccha JAPAN",
        description: "i18n.collectors.meccha_japan.description",
        version: "0",
        website: "https://meccha-japan.com/en/login?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/803042.jpg",
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
        entryUrl: "https://meccha-japan.com/en/login?back=my-account",
    }

    constructor() {
        super(MecchaJapanCollector.CONFIG);
    }
}
