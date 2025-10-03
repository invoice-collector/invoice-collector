
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GanttifyCollector extends SketchCollector {

    static CONFIG = {
        id: "ganttify",
        name: "Ganttify",
        description: "i18n.collectors.ganttify.description",
        version: "0",
        website: "https://gantt-chart.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/409893.jpg",
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
        entryUrl: "https://gantt-chart.com/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GanttifyCollector.CONFIG);
    }
}
