
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GithubEnterpriseCollector extends SketchCollector {

    static CONFIG = {
        id: "github_enterprise",
        name: "GitHub Enterprise",
        description: "i18n.collectors.github_enterprise.description",
        version: "0",
        website: "https://enterprise.github.com/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77661.jpg",
        type: CollectorType.SKETCH,
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GithubEnterpriseCollector.CONFIG);
    }
}
