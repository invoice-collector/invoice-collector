
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RentmytrailerDeCollector extends SketchCollector {

    static CONFIG = {
        id: "rentmytrailer_de",
        name: "Rentmytrailer.de",
        description: "i18n.collectors.rentmytrailer_de.description",
        version: "0",
        website: "https://www.rentmytrailer.de/Account/Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2382497.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.rentmytrailer.de/Account/Invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RentmytrailerDeCollector.CONFIG);
    }
}
