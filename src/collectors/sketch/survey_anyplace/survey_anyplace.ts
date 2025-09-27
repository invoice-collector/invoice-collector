
import { SketchCollector } from '../../sketchCollector';

export class SurveyAnyplaceCollector extends SketchCollector {

    static CONFIG = {
        id: "survey_anyplace",
        name: "Survey Anyplace",
        description: "i18n.collectors.survey_anyplace.description",
        version: "0",
        website: "https://app.surveyanyplace.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1173713.jpg",
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
        entryUrl: "https://app.surveyanyplace.com/login",
    }

    constructor() {
        super(SurveyAnyplaceCollector.CONFIG);
    }
}
