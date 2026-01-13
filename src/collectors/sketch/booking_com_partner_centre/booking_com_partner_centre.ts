
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BookingComPartnerCentreCollector extends SketchCollector {

    static CONFIG = {
        id: "booking_com_partner_centre",
        name: "booking.com Partner Centre",
        description: "i18n.collectors.booking_com_partner_centre.description",
        version: "0",
        website: "https://spadmin.booking.com/partner/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778149.jpg",
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
        loginUrl: "https://spadmin.booking.com/partner/login.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BookingComPartnerCentreCollector.CONFIG);
    }
}
