
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AganttyCollector extends SketchCollector {

    static CONFIG = {
        id: "agantty",
        name: "Agantty",
        description: "i18n.collectors.agantty.description",
        version: "0",
        website: "https://app.agantty.com/?locale=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2553047.jpg",
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
        entryUrl: "https://app.agantty.com/?locale=de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AganttyCollector.CONFIG);
    }
}
