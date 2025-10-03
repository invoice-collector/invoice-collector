
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HosteuropeCollector extends SketchCollector {

    static CONFIG = {
        id: "hosteurope",
        name: "HostEurope",
        description: "i18n.collectors.hosteurope.description",
        version: "0",
        website: "https://kis.hosteurope.de/kundenkonto/rechnungen/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396.jpg",
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
        entryUrl: "https://kis.hosteurope.de/kundenkonto/rechnungen/index.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HosteuropeCollector.CONFIG);
    }
}
