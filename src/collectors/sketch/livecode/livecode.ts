
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LivecodeCollector extends SketchCollector {

    static CONFIG = {
        id: "livecode",
        name: "LiveCode",
        description: "i18n.collectors.livecode.description",
        version: "0",
        website: "https://livecode.com/account/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131537.jpg",
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
        entryUrl: "https://livecode.com/account/history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LivecodeCollector.CONFIG);
    }
}
