
import { SketchCollector } from '../../sketchCollector';

export class JochenschweizerMydaysCollector extends SketchCollector {

    static CONFIG = {
        id: "jochenschweizer_mydays",
        name: "JochenSchweizer mydays",
        description: "i18n.collectors.jochenschweizer_mydays.description",
        version: "0",
        website: "https://login.jsmd-group.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/960114.jpg",
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
        entryUrl: "https://login.jsmd-group.com",
    }

    constructor() {
        super(JochenschweizerMydaysCollector.CONFIG);
    }
}
