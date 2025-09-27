
import { SketchCollector } from '../../sketchCollector';

export class CurrenciesDirectCollector extends SketchCollector {

    static CONFIG = {
        id: "currencies_direct",
        name: "Currencies Direct",
        description: "i18n.collectors.currencies_direct.description",
        version: "0",
        website: "https://business.currenciesdirect.com/businessportal/transactions.htm?search_criteria_name=default_activity_history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778128.jpg",
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
        entryUrl: "https://business.currenciesdirect.com/businessportal/transactions.htm?search_criteria_name=default_activity_history",
    }

    constructor() {
        super(CurrenciesDirectCollector.CONFIG);
    }
}
