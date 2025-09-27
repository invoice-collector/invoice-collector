
import { SketchCollector } from '../../sketchCollector';

export class BookingComExtranetCollector extends SketchCollector {

    static CONFIG = {
        id: "booking_com_extranet",
        name: "Booking.com - Extranet",
        description: "i18n.collectors.booking_com_extranet.description",
        version: "0",
        website: "https://admin.booking.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8206.jpg",
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
        entryUrl: "https://admin.booking.com",
    }

    constructor() {
        super(BookingComExtranetCollector.CONFIG);
    }
}
