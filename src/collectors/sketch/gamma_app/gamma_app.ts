
import { SketchCollector } from '../../sketchCollector';

export class GammaAppCollector extends SketchCollector {

    static CONFIG = {
        id: "gamma_app",
        name: "Gamma.App",
        description: "i18n.collectors.gamma_app.description",
        version: "0",
        website: "https://gamma.app/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4219909.jpg",
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
        entryUrl: "https://gamma.app/settings",
    }

    constructor() {
        super(GammaAppCollector.CONFIG);
    }
}
