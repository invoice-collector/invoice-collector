
import { SketchCollector } from '../../sketchCollector';

export class DhlParcelNlCollector extends SketchCollector {

    static CONFIG = {
        id: "dhl_parcel_nl",
        name: "DHL Parcel NL",
        description: "i18n.collectors.dhl_parcel_nl.description",
        version: "0",
        website: "https://billing.dhlparcel.nl/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/804366.jpg",
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
        entryUrl: "https://billing.dhlparcel.nl/#/",
    }

    constructor() {
        super(DhlParcelNlCollector.CONFIG);
    }
}
