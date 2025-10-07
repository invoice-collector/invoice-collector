
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MedatixxCollector extends SketchCollector {

    static CONFIG = {
        id: "medatixx",
        name: "Medatixx",
        description: "i18n.collectors.medatixx.description",
        version: "0",
        website: "https://shop.medatixx.de/postbox/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1447417.jpg",
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
        entryUrl: "https://shop.medatixx.de/postbox/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MedatixxCollector.CONFIG);
    }
}
