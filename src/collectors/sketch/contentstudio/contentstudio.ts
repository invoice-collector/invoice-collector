
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ContentstudioCollector extends SketchCollector {

    static CONFIG = {
        id: "contentstudio",
        name: "Contentstudio",
        description: "i18n.collectors.contentstudio.description",
        version: "0",
        website: "https://app.contentstudio.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/762188.jpg",
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
        entryUrl: "https://app.contentstudio.io/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ContentstudioCollector.CONFIG);
    }
}
