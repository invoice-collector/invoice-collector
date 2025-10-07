
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GmPackagingCollector extends SketchCollector {

    static CONFIG = {
        id: "gm_packaging",
        name: "GM Packaging",
        description: "i18n.collectors.gm_packaging.description",
        version: "0",
        website: "http://www.gmpackaging.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23336.jpg",
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
        entryUrl: "http://www.gmpackaging.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GmPackagingCollector.CONFIG);
    }
}
