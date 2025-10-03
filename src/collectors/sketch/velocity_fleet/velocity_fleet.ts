
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VelocityFleetCollector extends SketchCollector {

    static CONFIG = {
        id: "velocity_fleet",
        name: "Velocity Fleet",
        description: "i18n.collectors.velocity_fleet.description",
        version: "0",
        website: "https://www.velocityfleet.com/accounts/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/113592.jpg",
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
        entryUrl: "https://www.velocityfleet.com/accounts/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VelocityFleetCollector.CONFIG);
    }
}
