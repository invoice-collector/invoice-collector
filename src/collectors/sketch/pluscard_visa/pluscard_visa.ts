
import { SketchCollector } from '../../sketchCollector';

export class PluscardVisaCollector extends SketchCollector {

    static CONFIG = {
        id: "pluscard_visa",
        name: "Pluscard/VISA",
        description: "i18n.collectors.pluscard_visa.description",
        version: "0",
        website: "https://karo.pluscard.de/abrechnung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1108425.jpg",
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
        entryUrl: "https://karo.pluscard.de/abrechnung",
    }

    constructor() {
        super(PluscardVisaCollector.CONFIG);
    }
}
