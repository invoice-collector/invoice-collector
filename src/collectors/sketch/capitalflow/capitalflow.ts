
import { SketchCollector } from '../../sketchCollector';

export class CapitalflowCollector extends SketchCollector {

    static CONFIG = {
        id: "capitalflow",
        name: "CapitalFlow",
        description: "i18n.collectors.capitalflow.description",
        version: "0",
        website: "https://app.capital-flow.de/internal/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4420482.jpg",
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
        entryUrl: "https://app.capital-flow.de/internal/settings",
    }

    constructor() {
        super(CapitalflowCollector.CONFIG);
    }
}
