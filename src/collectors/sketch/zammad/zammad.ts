
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZammadCollector extends SketchCollector {

    static CONFIG = {
        id: "zammad",
        name: "Zammad",
        description: "i18n.collectors.zammad.description",
        version: "0",
        website: "https://zammad.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060549.jpg",
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
        entryUrl: "https://zammad.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZammadCollector.CONFIG);
    }
}
