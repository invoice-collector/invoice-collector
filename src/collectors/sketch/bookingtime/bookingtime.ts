
import { SketchCollector } from '../../sketchCollector';

export class BookingtimeCollector extends SketchCollector {

    static CONFIG = {
        id: "bookingtime",
        name: "bookingtime",
        description: "i18n.collectors.bookingtime.description",
        version: "0",
        website: "http://www.booking-time.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25492.jpg",
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
        entryUrl: "http://www.booking-time.com",
    }

    constructor() {
        super(BookingtimeCollector.CONFIG);
    }
}
