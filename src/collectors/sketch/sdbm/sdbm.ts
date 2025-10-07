
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SdbmCollector extends SketchCollector {

    static CONFIG = {
        id: "sdbm",
        name: "sdbm",
        description: "i18n.collectors.sdbm.description",
        version: "0",
        website: "https://www.sdbm.mc/icd/zco/public-index.html#zco",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1040963.jpg",
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
        entryUrl: "https://www.sdbm.mc/icd/zco/public-index.html#zco",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SdbmCollector.CONFIG);
    }
}
