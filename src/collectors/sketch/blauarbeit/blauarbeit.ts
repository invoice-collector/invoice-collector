
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BlauarbeitCollector extends SketchCollector {

    static CONFIG = {
        id: "blauarbeit",
        name: "Blauarbeit",
        description: "i18n.collectors.blauarbeit.description",
        version: "0",
        website: "https://www.blauarbeit.de/usr/login/show.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14243.jpg",
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
        entryUrl: "https://www.blauarbeit.de/usr/login/show.do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BlauarbeitCollector.CONFIG);
    }
}
