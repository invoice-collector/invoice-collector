
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ToplinkXpressCollector extends SketchCollector {

    static CONFIG = {
        id: "toplink_xpress",
        name: "toplink Xpress",
        description: "i18n.collectors.toplink_xpress.description",
        version: "0",
        website: "https://kundenportal.toplink-xpress.de/#login:welcome",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15593.jpg",
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
        entryUrl: "https://kundenportal.toplink-xpress.de/#login:welcome",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ToplinkXpressCollector.CONFIG);
    }
}
