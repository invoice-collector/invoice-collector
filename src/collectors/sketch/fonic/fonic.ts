
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FonicCollector extends SketchCollector {

    static CONFIG = {
        id: "fonic",
        name: "Fonic",
        description: "i18n.collectors.fonic.description",
        version: "0",
        website: "https://www.fonic.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77911.jpg",
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
        entryUrl: "https://www.fonic.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FonicCollector.CONFIG);
    }
}
