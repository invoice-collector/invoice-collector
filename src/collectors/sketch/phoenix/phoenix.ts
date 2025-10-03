
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PhoenixCollector extends SketchCollector {

    static CONFIG = {
        id: "phoenix",
        name: "PHOENIX",
        description: "i18n.collectors.phoenix.description",
        version: "0",
        website: "https://phoenix-apothekenportal.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/787637.jpg",
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
        entryUrl: "https://phoenix-apothekenportal.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PhoenixCollector.CONFIG);
    }
}
