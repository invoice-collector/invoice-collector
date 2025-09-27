
import { SketchCollector } from '../../sketchCollector';

export class LiveuCollector extends SketchCollector {

    static CONFIG = {
        id: "liveu",
        name: "LiveU",
        description: "i18n.collectors.liveu.description",
        version: "0",
        website: "https://solo.liveu.tv/dashboard/invoice/in_1IgVMsAcRTuYLIIw5yfSOChu",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779617.jpg",
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
        entryUrl: "https://solo.liveu.tv/dashboard/invoice/in_1IgVMsAcRTuYLIIw5yfSOChu",
    }

    constructor() {
        super(LiveuCollector.CONFIG);
    }
}
