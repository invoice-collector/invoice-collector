
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AflacCollector extends SketchCollector {

    static CONFIG = {
        id: "aflac",
        name: "Aflac",
        description: "i18n.collectors.aflac.description",
        version: "0",
        website: "https://login.aflac.com/?returnURL=https://my.aflac.com/portal/sso/ssologin.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777987.jpg",
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
        entryUrl: "https://login.aflac.com/?returnURL=https://my.aflac.com/portal/sso/ssologin.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AflacCollector.CONFIG);
    }
}
