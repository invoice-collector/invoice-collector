
import { SketchCollector } from '../../sketchCollector';

export class ChartmogulCollector extends SketchCollector {

    static CONFIG = {
        id: "chartmogul",
        name: "Chartmogul",
        description: "i18n.collectors.chartmogul.description",
        version: "0",
        website: "https://app.chartmogul.com/#/admin/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1225219.jpg",
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
        entryUrl: "https://app.chartmogul.com/#/admin/billing",
    }

    constructor() {
        super(ChartmogulCollector.CONFIG);
    }
}
