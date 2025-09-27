
import { SketchCollector } from '../../sketchCollector';

export class EspressoSolutionsCollector extends SketchCollector {

    static CONFIG = {
        id: "espresso_solutions",
        name: "Espresso Solutions",
        description: "i18n.collectors.espresso_solutions.description",
        version: "0",
        website: "https://www.espresso-solutions.co.uk/login.asp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/41874.jpg",
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
        entryUrl: "https://www.espresso-solutions.co.uk/login.asp",
    }

    constructor() {
        super(EspressoSolutionsCollector.CONFIG);
    }
}
