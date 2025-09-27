
import { SketchCollector } from '../../sketchCollector';

export class ScoreappCollector extends SketchCollector {

    static CONFIG = {
        id: "scoreapp",
        name: "ScoreApp",
        description: "i18n.collectors.scoreapp.description",
        version: "0",
        website: "https://billing.stripe.com/session/_IUb4yKuPztUkkt0NkewbjYY4DroKz0v",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/775830.jpg",
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
        entryUrl: "https://billing.stripe.com/session/_IUb4yKuPztUkkt0NkewbjYY4DroKz0v",
    }

    constructor() {
        super(ScoreappCollector.CONFIG);
    }
}
