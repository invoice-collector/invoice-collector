
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TelepacificCommunicationsCollector extends SketchCollector {

    static CONFIG = {
        id: "telepacific_communications",
        name: "TelePacific Communications",
        description: "i18n.collectors.telepacific_communications.description",
        version: "0",
        website: "https://www.tpx.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8625.jpg",
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
        entryUrl: "https://www.tpx.com/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TelepacificCommunicationsCollector.CONFIG);
    }
}
