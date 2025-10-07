
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MotelOneCollector extends SketchCollector {

    static CONFIG = {
        id: "motel_one",
        name: "Motel One",
        description: "i18n.collectors.motel_one.description",
        version: "0",
        website: "https://booking.motel-one.com/en/profile/booking.html/reservations/?page=1&searchText=&state=ALL&sorting=DATE_ASC",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26315.jpg",
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
        entryUrl: "https://booking.motel-one.com/en/profile/booking.html/reservations/?page=1&searchText=&state=ALL&sorting=DATE_ASC",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MotelOneCollector.CONFIG);
    }
}
