
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class XmindCollector extends SketchCollector {

    static CONFIG = {
        id: "xmind",
        name: "xMind",
        description: "i18n.collectors.xmind.description",
        version: "0",
        website: "https://xmind.app/account/payment/_xmind_wxnvEkkvTJ/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2180715.jpg",
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
        entryUrl: "https://xmind.app/account/payment/_xmind_wxnvEkkvTJ/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(XmindCollector.CONFIG);
    }
}
