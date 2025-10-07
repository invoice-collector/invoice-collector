
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TixforgigsCollector extends SketchCollector {

    static CONFIG = {
        id: "tixforgigs",
        name: "TixforGigs",
        description: "i18n.collectors.tixforgigs.description",
        version: "0",
        website: "https://promoter.tixforgigs.com/de-DE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1439568.jpg",
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
        entryUrl: "https://promoter.tixforgigs.com/de-DE",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TixforgigsCollector.CONFIG);
    }
}
