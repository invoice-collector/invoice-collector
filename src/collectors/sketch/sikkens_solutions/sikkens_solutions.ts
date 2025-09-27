import { SketchCollector } from '../../sketchCollector';

export class SikkensSolutionsCollector extends SketchCollector {

    static CONFIG = {
        id: "sikkens_solutions",
        name: "Sikkens solutions",
        description: "i18n.collectors.sikkens_solutions.description",
        version: "0",
        website: "https://sikkens-solutions.fr",
        logo: "https://www.sikkens-solutions.fr/content/files/fr/LOGO/SikkensSolutionsVertical.png",
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
        entryUrl: "https://www.sikkens-solutions.fr/profile/login",
    }

    constructor() {
        super(SikkensSolutionsCollector.CONFIG);
    }
}
