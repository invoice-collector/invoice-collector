
import { SketchCollector } from '../../sketchCollector';

export class SilverlabSolutionGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "silverlab_solution_gmbh",
        name: "Silverlab Solution GmbH",
        description: "i18n.collectors.silverlab_solution_gmbh.description",
        version: "0",
        website: "https://www.silverlab-solutions.de/order-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71177.jpg",
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
        entryUrl: "https://www.silverlab-solutions.de/order-history",
    }

    constructor() {
        super(SilverlabSolutionGmbhCollector.CONFIG);
    }
}
