
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TimetrackEnterpriseCollector extends SketchCollector {

    static CONFIG = {
        id: "timetrack_enterprise",
        name: "TimeTrack Enterprise",
        description: "i18n.collectors.timetrack_enterprise.description",
        version: "0",
        website: "https://cloud.timetrackenterprise.com/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65125.jpg",
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
        entryUrl: "https://cloud.timetrackenterprise.com/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TimetrackEnterpriseCollector.CONFIG);
    }
}
