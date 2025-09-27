
import { SketchCollector } from '../../sketchCollector';

export class TwoMinuteReportsC2022CreatedByGoxAiCollector extends SketchCollector {

    static CONFIG = {
        id: "two_minute_reports_c_2022_created_by_gox_ai",
        name: "Two Minute Reports (c) 2022 Created by GoX.ai",
        description: "i18n.collectors.two_minute_reports_c_2022_created_by_gox_ai.description",
        version: "0",
        website: "https://two-minute-reports.chargebee.com/portal/v2/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1255094.jpg",
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
        entryUrl: "https://two-minute-reports.chargebee.com/portal/v2/home",
    }

    constructor() {
        super(TwoMinuteReportsC2022CreatedByGoxAiCollector.CONFIG);
    }
}
