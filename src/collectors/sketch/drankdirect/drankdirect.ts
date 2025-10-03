
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DrankdirectCollector extends SketchCollector {

    static CONFIG = {
        id: "drankdirect",
        name: "DrankDirect",
        description: "i18n.collectors.drankdirect.description",
        version: "0",
        website: "https://drankdirect.nl/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32805.jpg",
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
        entryUrl: "https://drankdirect.nl/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DrankdirectCollector.CONFIG);
    }
}
