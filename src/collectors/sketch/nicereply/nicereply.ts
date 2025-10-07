
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NicereplyCollector extends SketchCollector {

    static CONFIG = {
        id: "nicereply",
        name: "NiceReply",
        description: "i18n.collectors.nicereply.description",
        version: "0",
        website: "https://admin.nicereply.com/admin/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8877.jpg",
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
        entryUrl: "https://admin.nicereply.com/admin/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NicereplyCollector.CONFIG);
    }
}
