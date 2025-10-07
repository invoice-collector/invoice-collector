
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AppleItunesStoreCollector extends SketchCollector {

    static CONFIG = {
        id: "apple_itunes_store",
        name: "Apple iTunes Store",
        description: "i18n.collectors.apple_itunes_store.description",
        version: "0",
        website: "https://reportaproblem.apple.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/680.jpg",
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
        entryUrl: "https://reportaproblem.apple.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AppleItunesStoreCollector.CONFIG);
    }
}
