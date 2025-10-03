
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PicmonkeyCollector extends SketchCollector {

    static CONFIG = {
        id: "picmonkey",
        name: "PicMonkey",
        description: "i18n.collectors.picmonkey.description",
        version: "0",
        website: "https://www.picmonkey.com/#login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14564.jpg",
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
        entryUrl: "https://www.picmonkey.com/#login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PicmonkeyCollector.CONFIG);
    }
}
