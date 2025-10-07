
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DoccleCollector extends SketchCollector {

    static CONFIG = {
        id: "doccle",
        name: "Doccle",
        description: "i18n.collectors.doccle.description",
        version: "0",
        website: "https://secure.doccle.be/doccle-euui/archive/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/618939.jpg",
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
        entryUrl: "https://secure.doccle.be/doccle-euui/archive/index",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DoccleCollector.CONFIG);
    }
}
