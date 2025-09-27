
import { SketchCollector } from '../../sketchCollector';

export class GithubCollector extends SketchCollector {

    static CONFIG = {
        id: "github",
        name: "GitHub",
        description: "i18n.collectors.github.description",
        version: "0",
        website: "https://github.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/419.jpg",
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
        entryUrl: "https://github.com/settings/billing",
    }

    constructor() {
        super(GithubCollector.CONFIG);
    }
}
