
import { SketchCollector } from '../../sketchCollector';

export class PortfolioboxCollector extends SketchCollector {

    static CONFIG = {
        id: "portfoliobox",
        name: "Portfoliobox",
        description: "i18n.collectors.portfoliobox.description",
        version: "0",
        website: "https://www.portfoliobox.net/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14603.jpg",
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
        entryUrl: "https://www.portfoliobox.net/login",
    }

    constructor() {
        super(PortfolioboxCollector.CONFIG);
    }
}
