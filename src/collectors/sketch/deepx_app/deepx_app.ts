
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DeepxAppCollector extends SketchCollector {

    static CONFIG = {
        id: "deepx_app",
        name: "Deepx.app",
        description: "i18n.collectors.deepx_app.description",
        version: "0",
        website: "https://my.deepx.app/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3340621.jpg",
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
        entryUrl: "https://my.deepx.app/de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeepxAppCollector.CONFIG);
    }
}
