
import { SketchCollector } from '../../sketchCollector';

export class TeuxdeuxCollector extends SketchCollector {

    static CONFIG = {
        id: "teuxdeux",
        name: "TeuxDeux",
        description: "i18n.collectors.teuxdeux.description",
        version: "0",
        website: "https://teuxdeux.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8619.jpg",
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
        entryUrl: "https://teuxdeux.com/login",
    }

    constructor() {
        super(TeuxdeuxCollector.CONFIG);
    }
}
