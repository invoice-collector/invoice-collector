
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ParfumsclubCollector extends SketchCollector {

    static CONFIG = {
        id: "parfumsclub",
        name: "Parfumsclub",
        description: "i18n.collectors.parfumsclub.description",
        version: "0",
        website: "https://www.parfumsclub.de/de/konto/login/?returnUrl=/?returnUrl=/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200174.jpg",
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
        entryUrl: "https://www.parfumsclub.de/de/konto/login/?returnUrl=/?returnUrl=/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ParfumsclubCollector.CONFIG);
    }
}
