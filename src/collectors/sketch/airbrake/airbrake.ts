
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AirbrakeCollector extends SketchCollector {

    static CONFIG = {
        id: "airbrake",
        name: "Airbrake",
        description: "i18n.collectors.airbrake.description",
        version: "0",
        website: "https://airbrake.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8517.jpg",
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
        entryUrl: "https://airbrake.io/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AirbrakeCollector.CONFIG);
    }
}
