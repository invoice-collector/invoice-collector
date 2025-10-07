
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class YategoCollector extends SketchCollector {

    static CONFIG = {
        id: "yatego",
        name: "Yatego",
        description: "i18n.collectors.yatego.description",
        version: "0",
        website: "http://www.yatego.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16642.jpg",
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
        entryUrl: "http://www.yatego.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(YategoCollector.CONFIG);
    }
}
