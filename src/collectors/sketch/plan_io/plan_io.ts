
import { SketchCollector } from '../../sketchCollector';

export class PlanIoCollector extends SketchCollector {

    static CONFIG = {
        id: "plan_io",
        name: "plan.io",
        description: "i18n.collectors.plan_io.description",
        version: "0",
        website: "https://accounts.plan.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/688.jpg",
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
        entryUrl: "https://accounts.plan.io/login",
    }

    constructor() {
        super(PlanIoCollector.CONFIG);
    }
}
