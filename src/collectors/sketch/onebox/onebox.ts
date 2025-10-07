
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OneboxCollector extends SketchCollector {

    static CONFIG = {
        id: "onebox",
        name: "Onebox",
        description: "i18n.collectors.onebox.description",
        version: "0",
        website: "https://www.onebox.com/signup/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9032.jpg",
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
        entryUrl: "https://www.onebox.com/signup/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OneboxCollector.CONFIG);
    }
}
