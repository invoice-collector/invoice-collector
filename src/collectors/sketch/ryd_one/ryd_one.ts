
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RydOneCollector extends SketchCollector {

    static CONFIG = {
        id: "ryd_one",
        name: "ryd.one",
        description: "i18n.collectors.ryd_one.description",
        version: "0",
        website: "http://www.ryd.one",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120200.jpg",
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
        entryUrl: "http://www.ryd.one",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RydOneCollector.CONFIG);
    }
}
