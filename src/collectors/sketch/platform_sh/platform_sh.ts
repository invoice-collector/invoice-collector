
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PlatformShCollector extends SketchCollector {

    static CONFIG = {
        id: "platform_sh",
        name: "platform.sh",
        description: "i18n.collectors.platform_sh.description",
        version: "0",
        website: "https://accounts.platform.sh/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39847.jpg",
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
        entryUrl: "https://accounts.platform.sh/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlatformShCollector.CONFIG);
    }
}
