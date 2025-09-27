
import { SketchCollector } from '../../sketchCollector';

export class SwydoCollector extends SketchCollector {

    static CONFIG = {
        id: "swydo",
        name: "Swydo",
        description: "i18n.collectors.swydo.description",
        version: "0",
        website: "https://app.swydo.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7300.jpg",
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
        entryUrl: "https://app.swydo.com/login",
    }

    constructor() {
        super(SwydoCollector.CONFIG);
    }
}
