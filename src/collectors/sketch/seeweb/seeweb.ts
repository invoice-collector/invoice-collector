
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SeewebCollector extends SketchCollector {

    static CONFIG = {
        id: "seeweb",
        name: "seeweb",
        description: "i18n.collectors.seeweb.description",
        version: "0",
        website: "https://aop.seeweb.it/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8750.jpg",
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
        entryUrl: "https://aop.seeweb.it/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SeewebCollector.CONFIG);
    }
}
