
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LittleYogaStoreCollector extends SketchCollector {

    static CONFIG = {
        id: "little_yoga_store",
        name: "Little Yoga Store",
        description: "i18n.collectors.little_yoga_store.description",
        version: "0",
        website: "https://www.littleyogastore.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4487998.jpg",
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
        entryUrl: "https://www.littleyogastore.de/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LittleYogaStoreCollector.CONFIG);
    }
}
