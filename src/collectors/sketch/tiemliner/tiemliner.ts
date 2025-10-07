
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TiemlinerCollector extends SketchCollector {

    static CONFIG = {
        id: "tiemliner",
        name: "TiemLiner",
        description: "i18n.collectors.tiemliner.description",
        version: "0",
        website: "https://app.tiemliner.com/users/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32260.jpg",
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
        entryUrl: "https://app.tiemliner.com/users/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TiemlinerCollector.CONFIG);
    }
}
