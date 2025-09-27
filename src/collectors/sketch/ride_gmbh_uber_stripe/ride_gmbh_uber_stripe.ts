
import { SketchCollector } from '../../sketchCollector';

export class RideGmbhUberStripeCollector extends SketchCollector {

    static CONFIG = {
        id: "ride_gmbh_uber_stripe",
        name: "Ride GmbH uber Stripe",
        description: "i18n.collectors.ride_gmbh_uber_stripe.description",
        version: "0",
        website: "https://app.ride.capital/login?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2985628.jpg",
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
        entryUrl: "https://app.ride.capital/login?",
    }

    constructor() {
        super(RideGmbhUberStripeCollector.CONFIG);
    }
}
