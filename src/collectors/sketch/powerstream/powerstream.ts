
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PowerstreamCollector extends SketchCollector {

    static CONFIG = {
        id: "powerstream",
        name: "PowerStream",
        description: "i18n.collectors.powerstream.description",
        version: "0",
        website: "https://www.powerstream.ca/app/login.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8993.jpg",
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
        entryUrl: "https://www.powerstream.ca/app/login.jsp",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PowerstreamCollector.CONFIG);
    }
}
