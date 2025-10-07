
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PjtserviceDkCollector extends SketchCollector {

    static CONFIG = {
        id: "pjtservice_dk",
        name: "Pjtservice.dk",
        description: "i18n.collectors.pjtservice_dk.description",
        version: "0",
        website: "http://www.pjtservice.dk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9607.jpg",
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
        entryUrl: "http://www.pjtservice.dk",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PjtserviceDkCollector.CONFIG);
    }
}
