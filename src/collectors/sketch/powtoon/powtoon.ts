
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PowtoonCollector extends SketchCollector {

    static CONFIG = {
        id: "powtoon",
        name: "Powtoon",
        description: "i18n.collectors.powtoon.description",
        version: "0",
        website: "https://www.powtoon.com/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/148964.jpg",
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
        entryUrl: "https://www.powtoon.com/account/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PowtoonCollector.CONFIG);
    }
}
