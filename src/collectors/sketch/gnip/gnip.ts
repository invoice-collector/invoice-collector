
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GnipCollector extends SketchCollector {

    static CONFIG = {
        id: "gnip",
        name: "Gnip",
        description: "i18n.collectors.gnip.description",
        version: "0",
        website: "https://twitter.com/login?redirect_after_login=https:/developer.twitter.com/en/enterprise",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9345.jpg",
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
        entryUrl: "https://twitter.com/login?redirect_after_login=https:/developer.twitter.com/en/enterprise",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GnipCollector.CONFIG);
    }
}
