
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AvastCollector extends SketchCollector {

    static CONFIG = {
        id: "avast",
        name: "Avast",
        description: "i18n.collectors.avast.description",
        version: "0",
        website: "https://id.avast.com/?target=https%3A%2F%2Fmy.avast.com%2F#login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/40612.jpg",
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
        entryUrl: "https://id.avast.com/?target=https%3A%2F%2Fmy.avast.com%2F#login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AvastCollector.CONFIG);
    }
}
