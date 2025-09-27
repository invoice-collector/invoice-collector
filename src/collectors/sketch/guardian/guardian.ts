
import { SketchCollector } from '../../sketchCollector';

export class GuardianCollector extends SketchCollector {

    static CONFIG = {
        id: "guardian",
        name: "Guardian",
        description: "i18n.collectors.guardian.description",
        version: "0",
        website: "https://www.guardiananytime.com/app3/wps/myportal/!ut/p/z1/pVHBTsMwDP0WDjlSO7QaKRdUUTSYQIgNtOILSllII7Vp1GaU_T0BThNbAe3dbL337GcDQQFk5ZvR0pvWyjrUTzR5vr3PBefi5GYaz3PM0tn08iHheCUSWG4TcCGyQJjk8yRP8W6BQIfoL_hB-oC_6XEPsv_u_5NA4_ZLoO0ROy4wRviK-NsQGkvB01OYAem6Lb8f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/157966.jpg",
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
        entryUrl: "https://www.guardiananytime.com/app3/wps/myportal/!ut/p/z1/pVHBTsMwDP0WDjlSO7QaKRdUUTSYQIgNtOILSllII7Vp1GaU_T0BThNbAe3dbL337GcDQQFk5ZvR0pvWyjrUTzR5vr3PBefi5GYaz3PM0tn08iHheCUSWG4TcCGyQJjk8yRP8W6BQIfoL_hB-oC_6XEPsv_u_5NA4_ZLoO0ROy4wRviK-NsQGkvB01OYAem6Lb8f",
    }

    constructor() {
        super(GuardianCollector.CONFIG);
    }
}
