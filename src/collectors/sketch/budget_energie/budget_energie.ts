
import { SketchCollector } from '../../sketchCollector';

export class BudgetEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "budget_energie",
        name: "Budget Energie",
        description: "i18n.collectors.budget_energie.description",
        version: "0",
        website: "https://mijn.budgetenergie.nl/inloggen?_ga=2.170259616.1692855498.1524058873-1368279290.1524058873",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32331.jpg",
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
        entryUrl: "https://mijn.budgetenergie.nl/inloggen?_ga=2.170259616.1692855498.1524058873-1368279290.1524058873",
    }

    constructor() {
        super(BudgetEnergieCollector.CONFIG);
    }
}
