
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TakealotCollector extends SketchCollector {

    static CONFIG = {
        id: "takealot",
        name: "Takealot",
        description: "i18n.collectors.takealot.description",
        version: "0",
        website: "https://secure.takealot.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/241845.jpg",
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
        entryUrl: "https://secure.takealot.com/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TakealotCollector.CONFIG);
    }
}
