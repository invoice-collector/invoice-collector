
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TrendMicroCollector extends SketchCollector {

    static CONFIG = {
        id: "trend_micro",
        name: "trend micro",
        description: "i18n.collectors.trend_micro.description",
        version: "0",
        website: "https://wfbs-svc-nabu.trendmicro.com/wfbs-svc/portal/en/view/index#/reports",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185139.jpg",
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
        entryUrl: "https://wfbs-svc-nabu.trendmicro.com/wfbs-svc/portal/en/view/index#/reports",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrendMicroCollector.CONFIG);
    }
}
