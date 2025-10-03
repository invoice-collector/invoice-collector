
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WeeklyUpdateCollector extends SketchCollector {

    static CONFIG = {
        id: "weekly_update",
        name: "Weekly Update",
        description: "i18n.collectors.weekly_update.description",
        version: "0",
        website: "https://app.getweeklyupdate.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1307413.jpg",
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
        entryUrl: "https://app.getweeklyupdate.com/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WeeklyUpdateCollector.CONFIG);
    }
}
