
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BookingActivitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "booking_activities",
        name: "Booking Activities",
        description: "i18n.collectors.booking_activities.description",
        version: "0",
        website: "https://booking-activities.fr/en/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4178762.jpg",
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
        entryUrl: "https://booking-activities.fr/en/my-account/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BookingActivitiesCollector.CONFIG);
    }
}
