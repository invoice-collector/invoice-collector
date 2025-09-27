
import { SketchCollector } from '../../sketchCollector';

export class CheapticketsSchweizCollector extends SketchCollector {

    static CONFIG = {
        id: "cheaptickets_schweiz",
        name: "Cheaptickets Schweiz",
        description: "i18n.collectors.cheaptickets_schweiz.description",
        version: "0",
        website: "https://www.cheaptickets.ch/account/bookings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2155168.jpg",
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
        entryUrl: "https://www.cheaptickets.ch/account/bookings",
    }

    constructor() {
        super(CheapticketsSchweizCollector.CONFIG);
    }
}
