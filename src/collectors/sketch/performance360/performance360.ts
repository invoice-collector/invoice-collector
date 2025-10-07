
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Performance360Collector extends SketchCollector {

    static CONFIG = {
        id: "performance360",
        name: "Performance360",
        description: "i18n.collectors.performance360.description",
        version: "0",
        website: "https://www.performance360.de/registry-passwordreset.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1207900.jpg",
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
        entryUrl: "https://www.performance360.de/registry-passwordreset.do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Performance360Collector.CONFIG);
    }
}
