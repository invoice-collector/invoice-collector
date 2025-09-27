
import { SketchCollector } from '../../sketchCollector';

export class Check24HotelCollector extends SketchCollector {

    static CONFIG = {
        id: "check24_hotel",
        name: "Check24 Hotel",
        description: "i18n.collectors.check24_hotel.description",
        version: "0",
        website: "https://extranet.hotel.check24.de/hotel/70627928/accounting/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4553648.jpg",
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
        entryUrl: "https://extranet.hotel.check24.de/hotel/70627928/accounting/invoice",
    }

    constructor() {
        super(Check24HotelCollector.CONFIG);
    }
}
