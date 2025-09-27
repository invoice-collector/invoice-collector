
import { SketchCollector } from '../../sketchCollector';

export class SymfonyInsightsCollector extends SketchCollector {

    static CONFIG = {
        id: "symfony_insights",
        name: "Symfony Insights",
        description: "i18n.collectors.symfony_insights.description",
        version: "0",
        website: "https://insight.symfony.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2110716.jpg",
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
        entryUrl: "https://insight.symfony.com/account/billing",
    }

    constructor() {
        super(SymfonyInsightsCollector.CONFIG);
    }
}
