
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GertrudenhofCollector extends SketchCollector {

    static CONFIG = {
        id: "gertrudenhof",
        name: "Gertrudenhof",
        description: "i18n.collectors.gertrudenhof.description",
        version: "0",
        website: "https://gertrudenhof.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4418491.jpg",
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
        entryUrl: "https://gertrudenhof.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GertrudenhofCollector.CONFIG);
    }
}
