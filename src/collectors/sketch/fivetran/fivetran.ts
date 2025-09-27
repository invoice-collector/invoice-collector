
import { SketchCollector } from '../../sketchCollector';

export class FivetranCollector extends SketchCollector {

    static CONFIG = {
        id: "fivetran",
        name: "Fivetran",
        description: "i18n.collectors.fivetran.description",
        version: "0",
        website: "https://fivetran.com/dashboard/account/billing-usage/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131229.jpg",
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
        entryUrl: "https://fivetran.com/dashboard/account/billing-usage/billing",
    }

    constructor() {
        super(FivetranCollector.CONFIG);
    }
}
