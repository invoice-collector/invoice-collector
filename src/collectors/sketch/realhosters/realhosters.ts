
import { SketchCollector } from '../../sketchCollector';

export class RealhostersCollector extends SketchCollector {

    static CONFIG = {
        id: "realhosters",
        name: "RealHosters",
        description: "i18n.collectors.realhosters.description",
        version: "0",
        website: "https://www.realhosters.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10943.jpg",
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
        entryUrl: "https://www.realhosters.com",
    }

    constructor() {
        super(RealhostersCollector.CONFIG);
    }
}
