
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SourceWayCollector extends SketchCollector {

    static CONFIG = {
        id: "source_way",
        name: "Source Way",
        description: "i18n.collectors.source_way.description",
        version: "0",
        website: "http://www.sourceway.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19004.jpg",
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
        entryUrl: "http://www.sourceway.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SourceWayCollector.CONFIG);
    }
}
