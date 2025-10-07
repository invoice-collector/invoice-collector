
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CassCollector extends SketchCollector {

    static CONFIG = {
        id: "cass",
        name: "CASS",
        description: "i18n.collectors.cass.description",
        version: "0",
        website: "https://online.cass.ad/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4397029.jpg",
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
        entryUrl: "https://online.cass.ad/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CassCollector.CONFIG);
    }
}
