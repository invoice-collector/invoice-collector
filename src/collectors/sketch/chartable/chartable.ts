
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ChartableCollector extends SketchCollector {

    static CONFIG = {
        id: "chartable",
        name: "Chartable",
        description: "i18n.collectors.chartable.description",
        version: "0",
        website: "https://chartable.com/teams/bimanu-wertgeschaetzt/dashboard/plans",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2508607.jpg",
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
        entryUrl: "https://chartable.com/teams/bimanu-wertgeschaetzt/dashboard/plans",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChartableCollector.CONFIG);
    }
}
