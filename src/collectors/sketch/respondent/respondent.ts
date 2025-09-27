
import { SketchCollector } from '../../sketchCollector';

export class RespondentCollector extends SketchCollector {

    static CONFIG = {
        id: "respondent",
        name: "RESPONDENT",
        description: "i18n.collectors.respondent.description",
        version: "0",
        website: "https://app.respondent.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/819980.jpg",
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
        entryUrl: "https://app.respondent.io/",
    }

    constructor() {
        super(RespondentCollector.CONFIG);
    }
}
