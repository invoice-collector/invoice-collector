
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BookingComCollector extends SketchCollector {

    static CONFIG = {
        id: "booking_com",
        name: "Booking.com",
        description: "i18n.collectors.booking_com.description",
        version: "0",
        website: "http://www.booking.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1172.jpg",
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
        entryUrl: "http://www.booking.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BookingComCollector.CONFIG);
    }
}
