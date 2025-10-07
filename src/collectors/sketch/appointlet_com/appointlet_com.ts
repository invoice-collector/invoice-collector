
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AppointletComCollector extends SketchCollector {

    static CONFIG = {
        id: "appointlet_com",
        name: "appointlet.com",
        description: "i18n.collectors.appointlet_com.description",
        version: "0",
        website: "https://www.appointlet.com/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7379.jpg",
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
        entryUrl: "https://www.appointlet.com/account/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AppointletComCollector.CONFIG);
    }
}
