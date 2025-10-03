
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShyftplanCollector extends SketchCollector {

    static CONFIG = {
        id: "shyftplan",
        name: "shyftplan",
        description: "i18n.collectors.shyftplan.description",
        version: "0",
        website: "https://shyftplan.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30766.jpg",
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
        entryUrl: "https://shyftplan.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShyftplanCollector.CONFIG);
    }
}
