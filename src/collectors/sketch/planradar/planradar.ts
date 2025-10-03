
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PlanradarCollector extends SketchCollector {

    static CONFIG = {
        id: "planradar",
        name: "PlanRadar",
        description: "i18n.collectors.planradar.description",
        version: "0",
        website: "https://www.planradar.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/823889.jpg",
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
        entryUrl: "https://www.planradar.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlanradarCollector.CONFIG);
    }
}
