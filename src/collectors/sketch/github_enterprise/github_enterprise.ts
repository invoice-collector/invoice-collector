
import { SketchCollector } from '../../sketchCollector';

export class GithubEnterpriseCollector extends SketchCollector {

    static CONFIG = {
        id: "github_enterprise",
        name: "GitHub Enterprise",
        description: "i18n.collectors.github_enterprise.description",
        version: "0",
        website: "https://enterprise.github.com/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77661.jpg",
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
        entryUrl: "https://enterprise.github.com/dashboard",
    }

    constructor() {
        super(GithubEnterpriseCollector.CONFIG);
    }
}
