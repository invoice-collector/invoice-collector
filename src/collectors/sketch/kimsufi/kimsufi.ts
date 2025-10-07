
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KimsufiCollector extends SketchCollector {

    static CONFIG = {
        id: "kimsufi",
        name: "Kimsufi",
        description: "i18n.collectors.kimsufi.description",
        version: "0",
        website: "https://www.kimsufi.com/fr/manager/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7662.jpg",
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
        entryUrl: "https://www.kimsufi.com/fr/manager/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KimsufiCollector.CONFIG);
    }
}
