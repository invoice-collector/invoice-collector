
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PodioCollector extends SketchCollector {

    static CONFIG = {
        id: "podio",
        name: "Podio",
        description: "i18n.collectors.podio.description",
        version: "0",
        website: "https://podio.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6423.jpg",
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
        entryUrl: "https://podio.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PodioCollector.CONFIG);
    }
}
