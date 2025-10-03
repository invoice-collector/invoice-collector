
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ChartbeatCollector extends SketchCollector {

    static CONFIG = {
        id: "chartbeat",
        name: "Chartbeat",
        description: "i18n.collectors.chartbeat.description",
        version: "0",
        website: "https://chartbeat.com/signin/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137051.jpg",
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
        entryUrl: "https://chartbeat.com/signin/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChartbeatCollector.CONFIG);
    }
}
